import { Play } from "phosphor-react";

function ImageHover() {
  return (
    <div className="absolute left-0 top-0 flex h-[202px] w-full cursor-pointer items-center justify-center rounded-t-2xl bg-image-hover transition-all">
      <Play size={64} color="#ffffff" weight="fill" />
    </div>
  );
}

export default ImageHover;
