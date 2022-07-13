import { useLoaderData } from "@remix-run/react";

import type { LoaderData } from "./home.server";

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {data.tweets.map((tweet) => (
        <p key={tweet.id}>{tweet.text}</p>
      ))}
    </div>
  );
}
