import { ScaffoldNode } from '../model/ScaffoldNode';

function getSignature(node: ScaffoldNode): string {
  let sig = node.selector || '';
  for (const child of node.children) {
    sig += '\n' + getSignature(child);
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
