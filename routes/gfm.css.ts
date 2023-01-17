import { gfm } from "../utils/markdown.ts";
import { Handlers } from "$fresh/server.ts";

const css = `${gfm.CSS}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(css, {
      headers: {
        "content-type": "text/css",
      },
    });
  },
};
