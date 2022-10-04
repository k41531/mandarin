import { CSS } from "$gfm";
import { Handlers } from "$fresh/server.ts";

const css = `${CSS}
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
