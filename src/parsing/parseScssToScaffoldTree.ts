import { ScaffoldNode } from '../model/ScaffoldNode';

export function parseScssToScaffoldTree(scss: string): ScaffoldNode[] {
    // 1. Remove comments
    let cleaned = scss.replace(/\/\*[\s\S]*?\*\//g, '');
    cleaned = cleaned.replace(/\/\/.*$/gm, '');

    // 2. Remove string contents to avoid confusing { } inside strings
    cleaned = cleaned.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''");

    // 3. Tokenize by {, }, and ;
    const tokens: string[] = [];
    let current = '';
    for (let i = 0; i < cleaned.length; i++) {
        const char = cleaned[i];
        if (char === '{' || char === '}' || char === ';') {
            const t = current.trim();
            if (t) tokens.push(t);
            tokens.push(char);
            current = '';
        } else {
            current += char;
        }
    }
    const t = current.trim();
    if (t) tokens.push(t);

    // 4. Build tree
    const rootNodes: ScaffoldNode[] = [];
    const stack: (ScaffoldNode | null)[] = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token === '{') {
            const prev = tokens[i - 1];
            // If prev is a valid selector (not empty, not a delimiter)
            if (prev && prev !== '{' && prev !== '}' && prev !== ';') {
                if (prev.startsWith('@')) {
                    // Ignore at-rules but keep stack balanced
                    stack.push(null);
                } else {
                    const node = parseSelectorToNode(prev);
                    
                    // Find nearest non-null parent
                    let parent: ScaffoldNode | null = null;
                    for (let j = stack.length - 1; j >= 0; j--) {
                        if (stack[j] !== null) {
                            parent = stack[j];
                            break;
                        }
                    }

                    if (parent) {
                        parent.children.push(node);
                    } else {
                        rootNodes.push(node);
                    }
                    stack.push(node);
                }
            } else {
                // Malformed or something we can't parse, just push null to keep balance
                stack.push(null);
            }
        } else if (token === '}') {
            stack.pop();
        }
    }

    return rootNodes;
}

function parseSelectorToNode(sel: string): ScaffoldNode {
    // Take the first part if comma-separated
    const firstPart = sel.split(',')[0].trim();
    
    // Take the last segment of descendant combinators
    const parts = firstPart.split(/[\s>+~]+/).filter(p => p);
    let target = parts[parts.length - 1] || '';

    // Ignore pseudo-classes/elements
    target = target.split(':')[0];

    let tagName = 'div'; // default HTML tag
    let id: string | null = null;
    const classes: string[] = [];

    const tagMatch = target.match(/^([a-zA-Z0-9\-]+)/);
    if (tagMatch) {
        tagName = tagMatch[1];
    } else if (target === '') {
       // if we couldn't parse anything
    }

    const idMatch = target.match(/#([a-zA-Z0-9\-_]+)/);
    if (idMatch) {
        id = idMatch[1];
    }

    const classRegex = /\.([a-zA-Z0-9\-_]+)/g;
    let match;
    while ((match = classRegex.exec(target)) !== null) {
        classes.push(match[1]);
    }

    return {
        tagName,
        id,
        classes,
        selector: sel,
        children: []
    };
}
