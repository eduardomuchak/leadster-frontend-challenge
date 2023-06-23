"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ImageHover from "../ImageHover";

interface Asset {
  type: string;
  url: string;
}

interface Card {
  id: number;
  thumbnail: StaticImageData;
  video: string;
  title: string;
  description: string;
  assets: Asset[];
}

interface VideoCardModalProps {
  data: Card;
}

function VideoCardModal({ data }: VideoCardModalProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="group flex w-full max-w-[360px] flex-col rounded-2xl bg-white shadow-lg shadow-zinc-200"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative max-h-[202px] w-full max-w-[360px] rounded-t-2xl">
        {isHovering ? <ImageHover /> : null}
        <Image
          src={data.thumbnail}
          alt={`${data.title}-thumbnail`}
          width={360}
          height={202}
          className="max-h-[202px] w-full max-w-[360px] rounded-t-2xl object-cover"
        />
      </div>
      <div className="px-8 py-6">
        <span className="text-lg font-bold leading-tight transition-all group-hover:text-primary-blue-300">
          {data.title}
        </span>
      </div>
    </div>
  );
}

export default VideoCardModal;
