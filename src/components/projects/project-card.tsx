import Image from "next/image";

import { motion } from "framer-motion";

import Corosel from "@/components/utility/corosel";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="relative h-8 w-5">
            <Image src={props.favicon} alt="logo" fill />
          </span>
          <span className="text-sm font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
