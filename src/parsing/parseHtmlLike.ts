import { parse } from 'node-html-parser';
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
        classes = classAttr.trim().split(/\s+/).filter(Boolean);
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
