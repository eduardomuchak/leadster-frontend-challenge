import { StaticImageData } from "next/image";

interface Asset {
  name: string;
  url: string;
}

interface Card {
  id: number;
  thumbnail: StaticImageData | string;
  video: string;
  title: string;
  description: string;
  assets: Asset[];
}

export interface VideoCardModalProps {
  data: Card;
}
