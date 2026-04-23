import { ScaffoldNode } from '../model/ScaffoldNode';

export function dedupeSiblings(nodes: ScaffoldNode[]): ScaffoldNode[] {
  const map = new Map<string, ScaffoldNode>();
  const result: ScaffoldNode[] = [];
  
  for (const node of nodes) {
    node.children = dedupeSiblings(node.children);
    
    if (!node.selector) {
      result.push(node);
      continue;
    }
    
    if (map.has(node.selector)) {
      const existing = map.get(node.selector)!;
      existing.children.push(...node.children);
      // Re-dedupe their newly merged children
      existing.children = dedupeSiblings(existing.children);
    } else {
      map.set(node.selector, node);
      result.push(node);
    }
  }
  
  return result;
}
