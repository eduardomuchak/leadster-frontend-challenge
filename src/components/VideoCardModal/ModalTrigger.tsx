import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ImageHover from "../ImageHover";
import { VideoCardModalProps } from "./interface";

function ModalTrigger({ data }: VideoCardModalProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="group flex w-full max-w-[360px] cursor-pointer flex-col rounded-2xl bg-white shadow-lg shadow-zinc-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalTrigger;
