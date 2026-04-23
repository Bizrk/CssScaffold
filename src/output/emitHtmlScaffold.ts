import { ScaffoldNode } from '../model/ScaffoldNode';

export function emitHtmlScaffold(nodes: ScaffoldNode[], indent: string = ''): string {
    let html = '';
    for (const node of nodes) {
        let tag = node.tagName || 'div';
        let idAttr = node.id ? ` id="${node.id}"` : '';
        let classAttr = node.classes.length > 0 ? ` class="${node.classes.join(' ')}"` : '';
        
        let openTag = `<${tag}${idAttr}${classAttr}>`;
        let closeTag = `</${tag}>`;
        
        const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
        
        if (voidElements.has(tag.toLowerCase())) {
            html += `${indent}${openTag}\n`;
        } else {
            if (node.children.length > 0) {
                html += `${indent}${openTag}\n`;
                html += emitHtmlScaffold(node.children, indent + '  ');
                html += `${indent}${closeTag}\n`;
            } else {
                html += `${indent}${openTag}${closeTag}\n`;
            }
        }
    }
    return html;
}
