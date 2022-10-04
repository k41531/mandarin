import { Handlers, PageProps } from "$fresh/server.ts";
import { Page } from "../components/Page.tsx";

interface Data {
  markdown: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    const url = new URL(`../static/docs/${slug}.md`, import.meta.url);
    const fileContent = await Deno.readTextFile(url).catch( _ => {
      return "Page Not Found"
    });

    const page = {markdown : fileContent}
    const resp = ctx.render(page);
    return resp;
  },
};

export default function Markdown(props: PageProps<Data> ) {
  return (
    <div>
      <Page doc={props.data.markdown} />
    </div>
  );
}
