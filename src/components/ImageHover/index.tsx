import { motion } from "framer-motion";
import { Play } from "phosphor-react";
import { useInView } from "react-intersection-observer";

function ImageHover() {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será executada apenas uma vez quando o elemento se tornar visível
    threshold: 0.1, // Define o quão visível o elemento precisa estar para disparar a animação (0.1 significa 10% visível)
  });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="absolute left-0 top-0 flex h-[202px] w-full cursor-pointer items-center justify-center rounded-t-2xl bg-image-hover transition-all"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <Play size={64} color="#ffffff" weight="fill" />
    </motion.div>
  );
}

export default ImageHover;
