
import { isMarkupSelection } from '../../parsing/detectMarkupSelection';
import { normalizeToScaffoldTree } from '../../parsing/normalizeToScaffoldTree';
import { chooseSelector } from '../../transform/chooseSelector';
import { pruneIgnoredNodes } from '../../transform/pruneIgnoredNodes';
import { dedupeSiblings } from '../../transform/dedupeSiblings';
import { emitNestedScss } from '../../output/emitNestedScss';

// Mock vscode configuration for testing
jest.mock('vscode', () => {
  return {
    workspace: {
      getConfiguration: () => ({
        get: (key: string, _default: any) => _default
      })
    }
  };
}, { virtual: true });

function processOutput(input: string, strategy: 'html' | 'jsx' | 'razor'): string {
  let nodes = normalizeToScaffoldTree(input, strategy);
  for (const node of nodes) chooseSelector(node);
  nodes = pruneIgnoredNodes(nodes);
  nodes = dedupeSiblings(nodes);
  return emitNestedScss(nodes);
}

describe('CSS Scaffold functionality', () => {
  test('1. Plain HTML', () => {
    const input = `<section id="hero">
  <div class="container">
    <h1>Hello</h1>
  </div>
</section>`;
    const output = processOutput(input, 'html');
    expect(output).toContain('#hero {');
    expect(output).toContain('.container {');
    expect(output).toContain('h1 {}');
  });

  test('2. First class wins', () => {
    const input = `<nav class="hero-actions justify-center">
  <button class="btn-primary large">Go</button>
</nav>`;
    const output = processOutput(input, 'html');
    expect(output).toContain('.hero-actions {');
    expect(output).toContain('.btn-primary {}');
  });

  test('3. Repeated cards collapse', () => {
    const input = `<div class="cards">
  <div class="card"><h3>A</h3></div>
  <div class="card"><h3>B</h3></div>
</div>`;
    const output = processOutput(input, 'html');
    const occurences = (output.match(/\.card {/g) || []).length;
    expect(occurences).toBe(1);
    expect(output).toContain('h3 {}');
  });

  test('4. JSX conditional', () => {
    const input = `<section id="hero">
  {showVideo && <video />}
</section>`;
    const output = processOutput(input, 'jsx');
    expect(output).toContain('#hero {');
    expect(output).toContain('video {}');
  });

  test('5. JSX map', () => {
    const input = `<div className="cards">
  {items.map(item => (
    <article className="card">
      <h3>{item.title}</h3>
    </article>
  ))}
</div>`;
    const output = processOutput(input, 'jsx');
    expect(output).toContain('.cards {');
    expect(output).toContain('.card {');
    expect(output).toContain('h3 {}');
  });

  test('6. Razor branch', () => {
    const input = `@if (Model.ShowHero) {
  <section id="hero"></section>
} else {
  <section class="fallback"></section>
}`;
    const output = processOutput(input, 'razor');
    expect(output).toContain('#hero {}');
    expect(output).toContain('.fallback {}');
  });

  test('7. React wrapper component', () => {
    const input = `<Card>
  <div className="card-body">
    <h3>Title</h3>
  </div>
</Card>`;
    const output = processOutput(input, 'jsx');
    expect(output).not.toContain('Card');
    expect(output).toContain('.card-body {');
    expect(output).toContain('h3 {}');
  });
});
