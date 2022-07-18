export type TweetType = {
  id: string;
  url: string;
  author: Author;
  text: string;
  created_at: string;
  public_metrics: PublicMetrics;
  referenced_tweets: TweetType[];
  media: MediaKey[];
};

type Author = {
  verified: boolean;
  id: string;
  username: string;
  profile_image_url: string;
  name: string;
  url: string;
};

type PublicMetrics = {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
};

type MediaKey = {
  media_key: string;
  preview_image_url: string;
  width: number;
  height: number;
  url: string;
  public_metrics: {
    view_count: number;
  };
  type: "video" | "photo";
  duration_ms: number;
};
