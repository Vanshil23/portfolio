import { useMemo, useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.image);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        fgfhghgh
        <div className="relative right-0 top-0 hidden lg:block">
          <AnimatePresence>
            <motion.div
              key={props.projects[currentImage].title}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "55%",
                y: "50%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-0 top-0 -z-50"
            >
              <Image
                src={images[currentImage].LIGHT}
                unoptimized
                width={100}
                height={100}
                className="h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:hidden dark:border-accent/50"
                alt={`project ${currentImage}`}
              />
              {images[currentImage].DARK !== undefined && (
                <Image
                  src={images[currentImage].DARK!}
                  unoptimized
                  width={100}
                  height={100}
                  className="hidden h-auto w-1/2 rounded-lg border border-zinc-300 shadow-lg dark:inline-block dark:border-accent/20 dark:shadow-lg dark:shadow-emerald-400/5"
                  alt={`project ${currentImage}`}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
