import { ScaffoldNode } from '../model/ScaffoldNode';

export function emitNestedScss(nodes: ScaffoldNode[], indentLevel: number = 0): string {
  if (nodes.length === 0) return '';
  
  const indentStr = '  '.repeat(indentLevel);
  let lines: string[] = [];
  
  for (const node of nodes) {
     if (!node.selector) continue; // safety check
     
     if (node.children.length === 0) {
        lines.push(`${indentStr}${node.selector} {}`);
     } else {
        const childrenScss = emitNestedScss(node.children, indentLevel + 1);
        if (childrenScss) {
           lines.push(`${indentStr}${node.selector} {`);
           lines.push(childrenScss);
           lines.push(`${indentStr}}`);
        } else {
           lines.push(`${indentStr}${node.selector} {}`);
        }
     }
  }
  
  return lines.join('\n');
}
