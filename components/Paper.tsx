import Markdoc from "markdoc";
import React from "preact/compat";

export function Paper() {
  const doc = `
  # Hello world.
  > My first Markdoc page
  `;
  
  const ast = Markdoc.parse(doc);
  
  const content = Markdoc.transform(ast);
  
  const html = Markdoc.renderers.react(content, React);  
  return html;
}
