import * as vscode from 'vscode';
import { parseScssToScaffoldTree } from '../parsing/parseScssToScaffoldTree';
import { emitHtmlScaffold } from '../output/emitHtmlScaffold';
import { getSelectionText } from '../utils/getSelectionText';
import { copyToClipboard } from '../utils/clipboard';
import { showSuccess, showError } from '../utils/notifications';

export async function copyHtmlScaffold(editor: vscode.TextEditor): Promise<void> {
  let text = getSelectionText();
  
  if (!text) {
     showError('Select some SCSS/CSS structure first.');
     return;
  }

  try {
     const nodes = parseScssToScaffoldTree(text);
     
     if (nodes.length === 0) {
        showError('Could not find any selectors to scaffold.');
        return;
     }

     const htmlBlock = emitHtmlScaffold(nodes);
     
     if (!htmlBlock.trim()) {
        showError('Could not generate an HTML scaffold from this selection.');
        return;
     }
     
     await copyToClipboard(htmlBlock);
     showSuccess('HTML scaffold copied to clipboard.');
     
  } catch (err) {
     console.error(err);
     showError('Could not generate an HTML scaffold from this selection.');
  }
}
