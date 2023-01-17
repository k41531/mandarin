import { gfm } from '../utils/markdown.ts';

export function Page(props: { doc:string }) {
  const html = gfm.render(props.doc);  
  // rome-ignore lint: gfm.render sanitized it.
  return <div dangerouslySetInnerHTML={{__html: html}}/>;
}
