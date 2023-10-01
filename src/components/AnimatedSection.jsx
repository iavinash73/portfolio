import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // Adjust the threshold value as per your requirement
  });

  return (
    <m.div
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={{
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
          },
        },
      }}
    >
      {children}
    </m.div>
  );
};

export default AnimatedSection;
