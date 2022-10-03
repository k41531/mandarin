import Markdoc from "markdoc";
import React from "preact/compat";

export function Page(props: { doc:string }) {
  console.log(props.doc.markdown);
  const ast = Markdoc.parse(props.doc);
  
  const content = Markdoc.transform(ast);
  
  const html = Markdoc.renderers.react(content, React);  
  return html;
}
