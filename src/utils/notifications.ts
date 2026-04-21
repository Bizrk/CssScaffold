import * as vscode from 'vscode';

export function showSuccess(message: string): void {
  vscode.window.showInformationMessage(message);
}

export function showError(message: string): void {
  vscode.window.showErrorMessage(message);
}
