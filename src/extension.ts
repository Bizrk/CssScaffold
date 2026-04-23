import * as vscode from 'vscode';
import { copyFromSelection } from './commands/copyFromSelection';
import { copyHtmlScaffold } from './commands/copyHtmlScaffold';

export function activate(context: vscode.ExtensionContext) {
    let disposable1 = vscode.commands.registerCommand('cssScaffold.copyFromSelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            copyFromSelection(editor);
        } else {
            vscode.window.showErrorMessage('No active editor.');
        }
    });

    let disposable2 = vscode.commands.registerCommand('cssScaffold.copyHtmlScaffold', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            copyHtmlScaffold(editor);
        } else {
            vscode.window.showErrorMessage('No active editor.');
        }
    });

    context.subscriptions.push(disposable1, disposable2);
}

export function deactivate() {}
