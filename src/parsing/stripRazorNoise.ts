export function stripRazorNoise(text: string): string {
  let cleaned = text;
  cleaned = cleaned.replace(/@if\s*\([^)]*\)\s*{/g, '');
  cleaned = cleaned.replace(/} else if\s*\([^)]*\)\s*{/g, '');
  cleaned = cleaned.replace(/} else\s*{/g, '');
  cleaned = cleaned.replace(/@foreach\s*\([^)]*\)\s*{/g, '');
  cleaned = cleaned.replace(/}/g, '');
  
  // Clean trailing spaces and return
  return cleaned;
}
