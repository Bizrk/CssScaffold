import { ScaffoldNode } from '../model/ScaffoldNode';
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
