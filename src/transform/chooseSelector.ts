import { ScaffoldNode } from '../model/ScaffoldNode';
import * as vscode from 'vscode';

export function chooseSelector(node: ScaffoldNode): void {
  const config = vscode.workspace.getConfiguration('cssScaffold');
  const skipReact = config.get<boolean>('skipUppercaseReactComponents', true);
  
  if (node.tagName && /^[A-Z]/.test(node.tagName) && skipReact) {
    node.selector = null; // Do not emit a selector for it.
  } else if (node.id) {
    node.selector = `#${node.id}`;
  } else if (node.classes.length > 0) {
    node.selector = `.${node.classes[0]}`;
  } else if (node.tagName) {
    node.selector = node.tagName.toLowerCase();
  }
  
  for (const child of node.children) {
    chooseSelector(child);
  }
}
