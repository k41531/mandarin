import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Page } from "../components/Page.tsx";
import Header  from "../components/Header.tsx";
import Sidebar  from "../components/Sidebar.tsx";
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
    <>
    <Head>
      <link rel="stylesheet" href={`/gfm.css?build=${__FRSH_BUILD_ID}`} />
    </Head>
      <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-1">
          <div class="mx-auto max-w-screen-lg px-4 flex gap-6">
            <Sidebar />
            <div class="mt-6 markdown-body">
              <Page doc={props.data.markdown} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

