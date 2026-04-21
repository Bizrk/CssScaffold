import * as vscode from 'vscode';

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
