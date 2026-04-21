const fs = require('fs');
const path = require('path');

const files = {
"package.json": `{
  "name": "css-scaffold",
  "displayName": "CSS Scaffold",
  "description": "Generates a nested SCSS-style scaffold from HTML-like markup selection.",
  "version": "1.0.0",
  "engines": {
    "vscode": "^1.80.0"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [],
  "main": "./dist/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "cssScaffold.copyFromSelection",
        "title": "CSS Scaffold: Copy Scaffold from Selection"
      }
    ],
    "menus": {
      "editor/context": [
        {
          "when": "editorHasSelection",
          "command": "cssScaffold.copyFromSelection",
          "group": "1_modification"
        }
      ]
    },
    "configuration": {
      "title": "CSS Scaffold",
      "properties": {
        "cssScaffold.includeSourceTags": {
          "type": "boolean",
          "default": true,
          "description": "Include 'source' in the tags to emit"
        },
        "cssScaffold.maxDepth": {
          "type": "number",
          "default": 20,
          "description": "Maximum depth for parsing nested tags"
        },
        "cssScaffold.skipUppercaseReactComponents": {
          "type": "boolean",
          "default": true,
          "description": "Do not emit selectors for React components with uppercase names"
        }
      }
    }
  },
  "scripts": {
    "vscode:prepublish": "npm run build",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./",
    "build": "esbuild src/extension.ts --bundle --outfile=dist/extension.js --external:vscode --format=cjs --platform=node",
    "test": "jest"
  },
  "dependencies": {
    "@babel/parser": "^7.23.0",
    "node-html-parser": "^6.1.11"
  },
  "devDependencies": {
    "@types/vscode": "^1.80.0",
    "@types/node": "18.x",
    "typescript": "^5.2.2",
    "esbuild": "^0.19.0",
    "jest": "^29.6.4",
    "@types/jest": "^29.5.4",
    "ts-jest": "^29.1.1"
  }
}
`,

"tsconfig.json": `{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2022",
    "lib": ["ES2022"],
    "outDir": "out",
    "rootDir": "src",
    "strict": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  },
  "exclude": ["node_modules", ".vscode-test", "dist"]
}
`,

"src/model/ScaffoldNode.ts": `export interface ScaffoldNode {
  tagName: string | null;
  id: string | null;
  classes: string[];
  selector: string | null;
  children: ScaffoldNode[];
}
`,

"src/parsing/detectMarkupSelection.ts": `export function isMarkupSelection(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith('<') && trimmed.endsWith('>');
}
`,

"src/utils/getSelectionText.ts": `import * as vscode from 'vscode';

export function getSelectionText(): string | null {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return null;
  }
  const selection = editor.selection;
  if (selection.isEmpty) {
    return null;
  }
  return editor.document.getText(selection);
}
`,

"src/utils/clipboard.ts": `import * as vscode from 'vscode';

export async function copyToClipboard(text: string): Promise<void> {
  await vscode.env.clipboard.writeText(text);
}
`,

"src/utils/notifications.ts": `import * as vscode from 'vscode';

export function showSuccess(message: string): void {
  vscode.window.showInformationMessage(message);
}

export function showError(message: string): void {
  vscode.window.showErrorMessage(message);
}
`,

"src/utils/languageSupport.ts": `export function getParsingStrategy(languageId: string): 'jsx' | 'html' | 'razor' | 'none' {
  switch (languageId) {
    case 'html':
    case 'htm':
      return 'html';
    case 'javascript':
    case 'javascriptreact':
    case 'typescript':
    case 'typescriptreact':
      return 'jsx';
    case 'razor':
    case 'aspnetcorerazor':
      return 'razor';
    default:
      return 'html'; // default fallback for now
  }
}
`,

"src/parsing/stripRazorNoise.ts": `export function stripRazorNoise(text: string): string {
  let cleaned = text;
  cleaned = cleaned.replace(/@if\\s*\\([^)]*\\)\\s*{/g, '');
  cleaned = cleaned.replace(/} else if\\s*\\([^)]*\\)\\s*{/g, '');
  cleaned = cleaned.replace(/} else\\s*{/g, '');
  cleaned = cleaned.replace(/@foreach\\s*\\([^)]*\\)\\s*{/g, '');
  cleaned = cleaned.replace(/}/g, '');
  
  // Clean trailing spaces and return
  return cleaned;
}
`,

"src/parsing/parseHtmlLike.ts": `import { parse } from 'node-html-parser';
import { ScaffoldNode } from '../model/ScaffoldNode';

export function parseHtmlLike(text: string): ScaffoldNode[] {
  let root;
  try {
     root = parse(text);
  } catch (e) {
     return [];
  }
  
  function convert(node: any): ScaffoldNode | null {
    if (node.nodeType === 3 || node.nodeType === 8) {
      return null;
    }
    
    if (node.nodeType === 1 || node.nodeType === void 0) {
      if (!node.tagName) {
         const children: ScaffoldNode[] = [];
         for (const child of node.childNodes) {
           const c = convert(child);
           if (c) children.push(c);
         }
         return { tagName: null, id: null, classes: [], selector: null, children };
      }
      
      const tagName = node.rawTagName || node.tagName;
      const id = node.getAttribute('id') || null;
      let classes: string[] = [];
      const classAttr = node.getAttribute('class') || node.getAttribute('className');
      if (classAttr) {
        classes = classAttr.trim().split(/\\s+/).filter(Boolean);
      }
      
      const children: ScaffoldNode[] = [];
      for (const child of node.childNodes) {
        const c = convert(child);
        if (c) {
          if (c.tagName === null) {
            children.push(...c.children);
          } else {
            children.push(c);
          }
        }
      }
      
      return {
        tagName: tagName,
        id,
        classes,
        selector: null,
        children
      };
    }
    return null;
  }
  
  const nodes = root.childNodes.map(convert).filter(Boolean) as ScaffoldNode[];
  const result: ScaffoldNode[] = [];
  for (const n of nodes) {
    if (n.tagName === null) {
      result.push(...n.children);
    } else {
      result.push(n);
    }
  }
  return result;
}
`,

"src/parsing/parseJsxLike.ts": `import { parseExpression } from '@babel/parser';
import { ScaffoldNode } from '../model/ScaffoldNode';

export function parseJsxLike(text: string): ScaffoldNode[] {
   const code = \`<>\${text}</>\`;
   let ast: any;
   try {
     ast = parseExpression(code, {
       plugins: ['jsx', 'typescript']
     });
   } catch (e) {
     return [];
   }
   
   return convertJsxNode(ast);
}

function convertJsxNode(node: any): ScaffoldNode[] {
   if (!node) return [];
   
   if (node.type === 'JSXFragment') {
      const children: ScaffoldNode[] = [];
      for (const child of node.children) {
         children.push(...convertJsxNode(child));
      }
      return children;
   }
   
   if (node.type === 'JSXElement') {
      const openingElement = node.openingElement;
      let tagName = '';
      if (openingElement.name.type === 'JSXIdentifier') {
         tagName = openingElement.name.name;
      } else if (openingElement.name.type === 'JSXMemberExpression') {
         tagName = openingElement.name.property.name;
      }
      
      let id = null;
      let classes: string[] = [];
      
      for (const attr of openingElement.attributes) {
         if (attr.type === 'JSXAttribute' && attr.name.type === 'JSXIdentifier') {
            if (attr.name.name === 'id' && attr.value && attr.value.type === 'StringLiteral') {
               id = attr.value.value;
            }
            if ((attr.name.name === 'class' || attr.name.name === 'className') && attr.value && attr.value.type === 'StringLiteral') {
               classes = attr.value.value.trim().split(/\\s+/).filter(Boolean);
            }
         }
      }
      
      const children: ScaffoldNode[] = [];
      for (const child of node.children) {
         children.push(...convertJsxNode(child));
      }
      
      return [{
         tagName,
         id,
         classes,
         selector: null,
         children
      }];
   }
   
   if (node.type === 'JSXExpressionContainer') {
      return convertJsxNode(node.expression);
   }
   
   if (node.type === 'LogicalExpression') {
      const left = convertJsxNode(node.left);
      const right = convertJsxNode(node.right);
      return [...left, ...right];
   }
   
   if (node.type === 'ConditionalExpression') {
      const cons = convertJsxNode(node.consequent);
      const alt = convertJsxNode(node.alternate);
      return [...cons, ...alt];
   }
   
   if (node.type === 'CallExpression') {
      const callee = node.callee;
      if (callee.type === 'MemberExpression' && callee.property.type === 'Identifier' && callee.property.name === 'map') {
         const args = node.arguments;
         if (args.length > 0) {
            const callback = args[0];
            if (callback.type === 'ArrowFunctionExpression' || callback.type === 'FunctionExpression') {
               return convertJsxNode(callback.body);
            }
         }
      }
   }
   
   return [];
}
`,

"src/parsing/normalizeToScaffoldTree.ts": `import { ScaffoldNode } from '../model/ScaffoldNode';
import { parseHtmlLike } from './parseHtmlLike';
import { parseJsxLike } from './parseJsxLike';
import { stripRazorNoise } from './stripRazorNoise';

export function normalizeToScaffoldTree(text: string, strategy: 'jsx'|'html'|'razor'|'none'): ScaffoldNode[] {
   let rawNodes: ScaffoldNode[] = [];
   
   if (strategy === 'jsx') {
      rawNodes = parseJsxLike(text);
   } else if (strategy === 'razor') {
      rawNodes = parseHtmlLike(stripRazorNoise(text));
   } else {
      rawNodes = parseHtmlLike(text);
   }
   
   return rawNodes;
}
`,

"src/transform/chooseSelector.ts": `import { ScaffoldNode } from '../model/ScaffoldNode';
import * as vscode from 'vscode';

export function chooseSelector(node: ScaffoldNode): void {
  const config = vscode.workspace.getConfiguration('cssScaffold');
  const skipReact = config.get<boolean>('skipUppercaseReactComponents', true);
  
  if (node.tagName && /^[A-Z]/.test(node.tagName) && skipReact) {
    node.selector = null; // Do not emit a selector for it.
  } else if (node.id) {
    node.selector = \`#\${node.id}\`;
  } else if (node.classes.length > 0) {
    node.selector = \`.\${node.classes[0]}\`;
  } else if (node.tagName) {
    node.selector = node.tagName.toLowerCase();
  }
  
  for (const child of node.children) {
    chooseSelector(child);
  }
}
`,

"src/transform/pruneIgnoredNodes.ts": `import { ScaffoldNode } from '../model/ScaffoldNode';
import * as vscode from 'vscode';

export function pruneIgnoredNodes(nodes: ScaffoldNode[]): ScaffoldNode[] {
   const config = vscode.workspace.getConfiguration('cssScaffold');
   const includeSource = config.get<boolean>('includeSourceTags', true);
   
   const ignoredTags = new Set(['script', 'style', 'meta', 'link', 'noscript']);
   if (!includeSource) ignoredTags.add('source');

   function prune(nodeList: ScaffoldNode[]): ScaffoldNode[] {
     const result: ScaffoldNode[] = [];
     for (const node of nodeList) {
       if (node.tagName && ignoredTags.has(node.tagName.toLowerCase())) {
         continue; // skip
       }
       
       node.children = prune(node.children);
       
       if (node.selector === null) {
          // Flatten: incorporate children into parent's list if it has no selector (e.g. React wrapper components)
          result.push(...node.children);
       } else {
          result.push(node);
       }
     }
     return result;
   }
   
   return prune(nodes);
}
`,

"src/transform/dedupeSiblings.ts": `import { ScaffoldNode } from '../model/ScaffoldNode';

function getSignature(node: ScaffoldNode): string {
  let sig = node.selector || '';
  for (const child of node.children) {
    sig += '\\n' + getSignature(child);
  }
  return sig;
}

export function dedupeSiblings(nodes: ScaffoldNode[]): ScaffoldNode[] {
  const seenSignatures = new Set<string>();
  const result: ScaffoldNode[] = [];
  
  for (const node of nodes) {
    node.children = dedupeSiblings(node.children);
    
    const sig = getSignature(node);
    if (!seenSignatures.has(sig)) {
      seenSignatures.add(sig);
      result.push(node);
    }
  }
  
  return result;
}
`,

"src/output/emitNestedScss.ts": `import { ScaffoldNode } from '../model/ScaffoldNode';

export function emitNestedScss(nodes: ScaffoldNode[], indentLevel: number = 0): string {
  if (nodes.length === 0) return '';
  
  const indentStr = '  '.repeat(indentLevel);
  let lines: string[] = [];
  
  for (const node of nodes) {
     if (!node.selector) continue; // safety check
     
     if (node.children.length === 0) {
        lines.push(\`\${indentStr}\${node.selector} {}\`);
     } else {
        const childrenScss = emitNestedScss(node.children, indentLevel + 1);
        if (childrenScss) {
           lines.push(\`\${indentStr}\${node.selector} {\`);
           lines.push(childrenScss);
           lines.push(\`\${indentStr}}\`);
        } else {
           lines.push(\`\${indentStr}\${node.selector} {}\`);
        }
     }
  }
  
  return lines.join('\\n');
}
`,

"src/commands/copyFromSelection.ts": `import * as vscode from 'vscode';
import { isMarkupSelection } from '../parsing/detectMarkupSelection';
import { normalizeToScaffoldTree } from '../parsing/normalizeToScaffoldTree';
import { chooseSelector } from '../transform/chooseSelector';
import { pruneIgnoredNodes } from '../transform/pruneIgnoredNodes';
import { dedupeSiblings } from '../transform/dedupeSiblings';
import { emitNestedScss } from '../output/emitNestedScss';
import { getSelectionText } from '../utils/getSelectionText';
import { copyToClipboard } from '../utils/clipboard';
import { showSuccess, showError } from '../utils/notifications';
import { getParsingStrategy } from '../utils/languageSupport';

export async function copyFromSelection(editor: vscode.TextEditor): Promise<void> {
  const text = getSelectionText();
  
  if (!text) {
     showError('Select some markup first.');
     return;
  }
  
  if (!isMarkupSelection(text)) {
     showError('Selection must start with < and end with > to generate a CSS scaffold.');
     return;
  }
  
  try {
     const languageId = editor.document.languageId;
     const strategy = getParsingStrategy(languageId);
     
     let nodes = normalizeToScaffoldTree(text, strategy);
     
     for (const node of nodes) {
        chooseSelector(node);
     }
     
     nodes = pruneIgnoredNodes(nodes);
     nodes = dedupeSiblings(nodes);
     
     const scssBlock = emitNestedScss(nodes);
     
     if (!scssBlock.trim()) {
        showError('Could not generate a CSS scaffold from this selection.');
        return;
     }
     
     await copyToClipboard(scssBlock);
     showSuccess('CSS scaffold copied to clipboard.');
     
  } catch (err) {
     console.error(err);
     showError('Could not generate a CSS scaffold from this selection.');
  }
}
`,

"src/extension.ts": `import * as vscode from 'vscode';
import { copyFromSelection } from './commands/copyFromSelection';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('cssScaffold.copyFromSelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            copyFromSelection(editor);
        } else {
            vscode.window.showErrorMessage('No active editor.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
`,

"jest.config.js": `module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/test/**/*.test.ts']
};
`,
"src/test/suite/extension.test.ts": `
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
    const input = \`<section id="hero">
  <div class="container">
    <h1>Hello</h1>
  </div>
</section>\`;
    const output = processOutput(input, 'html');
    expect(output).toContain('#hero {');
    expect(output).toContain('.container {');
    expect(output).toContain('h1 {}');
  });

  test('2. First class wins', () => {
    const input = \`<nav class="hero-actions justify-center">
  <button class="btn-primary large">Go</button>
</nav>\`;
    const output = processOutput(input, 'html');
    expect(output).toContain('.hero-actions {');
    expect(output).toContain('.btn-primary {}');
  });

  test('3. Repeated cards collapse', () => {
    const input = \`<div class="cards">
  <div class="card"><h3>A</h3></div>
  <div class="card"><h3>B</h3></div>
</div>\`;
    const output = processOutput(input, 'html');
    const occurences = (output.match(/\\.card {/g) || []).length;
    expect(occurences).toBe(1);
    expect(output).toContain('h3 {}');
  });

  test('4. JSX conditional', () => {
    const input = \`<section id="hero">
  {showVideo && <video />}
</section>\`;
    const output = processOutput(input, 'jsx');
    expect(output).toContain('#hero {');
    expect(output).toContain('video {}');
  });

  test('5. JSX map', () => {
    const input = \`<div className="cards">
  {items.map(item => (
    <article className="card">
      <h3>{item.title}</h3>
    </article>
  ))}
</div>\`;
    const output = processOutput(input, 'jsx');
    expect(output).toContain('.cards {');
    expect(output).toContain('.card {');
    expect(output).toContain('h3 {}');
  });

  test('6. Razor branch', () => {
    const input = \`@if (Model.ShowHero) {
  <section id="hero"></section>
} else {
  <section class="fallback"></section>
}\`;
    const output = processOutput(input, 'razor');
    expect(output).toContain('#hero {}');
    expect(output).toContain('.fallback {}');
  });

  test('7. React wrapper component', () => {
    const input = \`<Card>
  <div className="card-body">
    <h3>Title</h3>
  </div>
</Card>\`;
    const output = processOutput(input, 'jsx');
    expect(output).not.toContain('Card');
    expect(output).toContain('.card-body {');
    expect(output).toContain('h3 {}');
  });
});
`,
"README.md": `# CSS Scaffold\n\nA simple personal productivity extension for visual studio code.\nGenerates nested SCSS blocks based on an HTML/JSX markup selection.\n\n## Usage\n\n1. Select an HTML element block\n2. Open Command Palette and run: \`CSS Scaffold: Copy Scaffold from Selection\`\n3. Paste the text in your SCSS or CSS stylesheet.\n`,
"CHANGELOG.md": `# Change Log\n\n## 1.0.0\n\n- Initial release.\n`
};

for (const [file, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

console.log("All files written successfully.");
