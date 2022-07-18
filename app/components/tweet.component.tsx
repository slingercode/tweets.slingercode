import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import type { TweetType } from "~/types/tweet";

const getURL = (type: "photo" | "video" | "animated_gif") => {
  if (type === "photo") {
    return "url";
  } else {
    return "preview_image_url";
  }
};

const Tweet: React.FC<{ tweet: TweetType }> = ({ tweet }) => {
  return (
    <Stack
      spacing={3}
      padding={2.5}
      borderRadius="md"
      borderWidth="medium"
      borderStyle="solid"
      borderColor="blue.300"
    >
      <Stack direction="row">
        <img
          alt=""
          src={tweet.author.profile_image_url}
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />

        <Stack spacing={0.5} justifyContent="center">
          <Heading as="h1" size="md">
            {tweet.author.name}
          </Heading>

          <Text color="blue.400">{`@${tweet.author.username}`}</Text>
        </Stack>
      </Stack>

      <Text>{tweet.text}</Text>

      {!!tweet.media.length && (
        <Flex justifyContent="center">
          <img
            alt=""
            src={tweet.media[0][getURL(tweet.media[0].type)]}
            width={tweet.media[0].width}
            height={tweet.media[0].height}
          />
        </Flex>
      )}
    </Stack>
  );
};

export default Tweet;
