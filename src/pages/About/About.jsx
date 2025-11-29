import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroImg from '@/assets/images/harrish12.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div ref={ref} className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white"
          >
            Developer , Designer.
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-6 sm:mb-0"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent "
              >
                <img 
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative space-y-4"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white"
              >
               Hello, I’m Harrish — a JavaScript developer committed to building high-quality, efficient, and user-centric web applications. I specialize in creating modern interfaces and streamlined workflows that enhance the developer experience and deliver meaningful impact.


              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white"
              >
               With a strong foundation in frontend engineering, I’m currently advancing my expertise in backend development to become a well-rounded full-stack professional. My work focuses on developing scalable, reliable, and maintainable solutions that align with both technical and business goals.


              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  I am a continuous learner and forward-thinking creator, driven by a deep interest in emerging technologies, performance optimization, and framework innovation. Through my projects and contributions, I aim to push the boundaries of JavaScript development and empower developers with practical, high-value tools.
                  </p>
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
