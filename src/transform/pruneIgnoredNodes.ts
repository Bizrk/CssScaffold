import { ScaffoldNode } from '../model/ScaffoldNode';
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
