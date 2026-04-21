import * as vscode from 'vscode';
import { copyFromSelection } from './commands/copyFromSelection';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('cssScaffold.copyFromSelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            copyFromSelection(editor);
        } else {
            vscode.window.showErrorMessage('No active editor.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
