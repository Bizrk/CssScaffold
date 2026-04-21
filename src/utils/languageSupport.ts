export function getParsingStrategy(languageId: string): 'jsx' | 'html' | 'razor' | 'none' {
  switch (languageId) {
    case 'html':
    case 'htm':
      return 'html';
    case 'javascript':
    case 'javascriptreact':
    case 'typescript':
    case 'typescriptreact':
      return 'jsx';
    case 'razor':
    case 'aspnetcorerazor':
      return 'razor';
    default:
      return 'html'; // default fallback for now
  }
}
