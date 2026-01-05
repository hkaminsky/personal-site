import { visit } from 'unist-util-visit';

export function rehypeBaseUrl(options = {}) {
  const base = options.base || '/';

  return (tree) => {
    if (base === '/') return;

    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties?.src) {
        const src = node.properties.src;
        if (typeof src === 'string' && src.startsWith('/') && !src.startsWith(base)) {
          node.properties.src = base.replace(/\/$/, '') + src;
        }
      }
    });
  };
}
