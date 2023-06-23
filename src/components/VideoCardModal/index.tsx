import Image, { StaticImageData } from "next/image";

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
  return (
    <div className="flex w-full max-w-[360px] flex-col rounded-2xl bg-white shadow-lg shadow-zinc-200">
      <Image
        src={data.thumbnail}
        alt={`${data.title}-thumbnail`}
        width={360}
        height={202}
        className="rounded-t-2xl"
      />
      <div className="px-8 py-6">
        <span className="text-lg font-bold leading-tight">{data.title}</span>
      </div>
    </div>
  );
}

export default VideoCardModal;
