import { parseExpression } from '@babel/parser';
import { ScaffoldNode } from '../model/ScaffoldNode';

export function parseJsxLike(text: string): ScaffoldNode[] {
   const code = `<>${text}</>`;
   let ast: any;
   try {
     ast = parseExpression(code, {
       plugins: ['jsx', 'typescript']
     });
   } catch (e) {
     return [];
   }
   
   return convertJsxNode(ast);
}

function convertJsxNode(node: any): ScaffoldNode[] {
   if (!node) return [];
   
   if (node.type === 'JSXFragment') {
      const children: ScaffoldNode[] = [];
      for (const child of node.children) {
         children.push(...convertJsxNode(child));
      }
      return children;
   }
   
   if (node.type === 'JSXElement') {
      const openingElement = node.openingElement;
      let tagName = '';
      if (openingElement.name.type === 'JSXIdentifier') {
         tagName = openingElement.name.name;
      } else if (openingElement.name.type === 'JSXMemberExpression') {
         tagName = openingElement.name.property.name;
      }
      
      let id = null;
      let classes: string[] = [];
      
      for (const attr of openingElement.attributes) {
         if (attr.type === 'JSXAttribute' && attr.name.type === 'JSXIdentifier') {
            if (attr.name.name === 'id' && attr.value && attr.value.type === 'StringLiteral') {
               id = attr.value.value;
            }
            if ((attr.name.name === 'class' || attr.name.name === 'className') && attr.value && attr.value.type === 'StringLiteral') {
               classes = attr.value.value.trim().split(/\s+/).filter(Boolean);
            }
         }
      }
      
      const children: ScaffoldNode[] = [];
      for (const child of node.children) {
         children.push(...convertJsxNode(child));
      }
      
      return [{
         tagName,
         id,
         classes,
         selector: null,
         children
      }];
   }
   
   if (node.type === 'JSXExpressionContainer') {
      return convertJsxNode(node.expression);
   }
   
   if (node.type === 'LogicalExpression') {
      const left = convertJsxNode(node.left);
      const right = convertJsxNode(node.right);
      return [...left, ...right];
   }
   
   if (node.type === 'ConditionalExpression') {
      const cons = convertJsxNode(node.consequent);
      const alt = convertJsxNode(node.alternate);
      return [...cons, ...alt];
   }
   
   if (node.type === 'CallExpression') {
      const callee = node.callee;
      if (callee.type === 'MemberExpression' && callee.property.type === 'Identifier' && callee.property.name === 'map') {
         const args = node.arguments;
         if (args.length > 0) {
            const callback = args[0];
            if (callback.type === 'ArrowFunctionExpression' || callback.type === 'FunctionExpression') {
               return convertJsxNode(callback.body);
            }
         }
      }
   }
   
   return [];
}
