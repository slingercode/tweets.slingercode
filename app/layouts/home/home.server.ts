import type { LoaderFunction } from "@remix-run/node";
import { Response } from "@remix-run/node";

import type { ServerResponseType } from "~/types/response";

export type LoaderData = ServerResponseType;

export const loader: LoaderFunction = async (): Promise<ServerResponseType> => {
  const response = await fetch(process.env.API_URL!, {
    method: "POST",
    body: JSON.stringify(["254"]),
    headers: {
      authorization: `Bearer ${process.env.API_TOKEN!}`,
    },
  });

  const data: ServerResponseType = await response.json();

  if (data.status !== 200) {
    throw new Response("Error", {
      status: data.status,
      statusText: data.message,
    });
  }

  return data;
};
