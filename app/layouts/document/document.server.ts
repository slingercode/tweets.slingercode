import type { LoaderFunction } from "@remix-run/node";
import { json, Response } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  const { API_URL, API_TOKEN } = process.env;

  if (!API_URL || !API_TOKEN) {
    throw new Response("Bad initialization", {
      status: 500,
      statusText: "No env vars",
    });
  }

  return json({});
};
