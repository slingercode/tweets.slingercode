import { Stack } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";

import Tweet from "~/components/tweet.component";
import type { LoaderData } from "./home.server";

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <Stack spacing={4} paddingX={[4, 56]} paddingY={[4, 14]}>
      {data.tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  );
}
