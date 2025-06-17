import { IconType } from "react-icons";

export type AxiosBody =
  | Record<string, unknown>
  | FormData
  | URLSearchParams
  | string
  | ArrayBuffer
  | Blob
  | Buffer;

type Link = {
  name: string;
  link?: string;
  sublinks?: { name: string; link: string }[];
  Icon?: IconType;
};
