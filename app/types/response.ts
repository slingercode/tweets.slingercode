import type { TweetType } from "./tweet";

export type ServerResponseType = {
  errors: any[];
  message: string;
  status: number;
  tweets: TweetType[];
};
