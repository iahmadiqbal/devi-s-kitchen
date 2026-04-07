import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const variants = {
  up: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
};

const AnimatedSection = ({ children, className = "", direction = "up", delay = 0 }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px", amount: 0.2 }}
    transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
    variants={variants[direction]}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
