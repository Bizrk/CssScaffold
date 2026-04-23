import * as vscode from 'vscode';
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
  let text = getSelectionText();
  
  if (!text) {
     showError('Select some markup first.');
     return;
  }

  // Auto-heal common selection mistakes (missing first/last bracket)
  text = text.trim();
  if (!text.startsWith('<') && /^[a-zA-Z]/.test(text)) text = '<' + text;
  if (!text.endsWith('>')) text = text + '>';
  
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
