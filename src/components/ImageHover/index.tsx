import { motion } from "framer-motion";
import { Play } from "phosphor-react";

function ImageHover() {
  return (
    <motion.div
      className="absolute left-0 top-0 flex h-[202px] w-full cursor-pointer items-center justify-center rounded-t-2xl bg-image-hover transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Play size={64} color="#ffffff" weight="fill" />
    </motion.div>
  );
}

export default ImageHover;
