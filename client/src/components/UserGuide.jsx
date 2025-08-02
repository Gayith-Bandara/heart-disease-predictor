"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const content = [
  {
    title: "Fill Out The Form",
    description:
      "Accurately enter your details, make sure you fill each field as accurately as you can and make sure you fill all entries.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  // {
  //   title: "Real time changes",
  //   description:
  //     "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  //   content: (
  //     <div className="flex h-full w-full items-center justify-center text-white">
  //       <img
  //         src="/linear.webp"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="linear board demo" />
  //     </div>
  //   ),
  // },
  {
    title: "Click the submit button",
    description:
      "Once all the entries are filled as accurately as possible, press on the check button and wait for the magic to happen",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Thats it",
    description:
      "Its that simple, find out whether you are in the green zone or red zone",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
const UserGuide = () => {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}


export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  // const backgroundColors = [
  //   "#f5f5f5", // slate-900
  //   "#d4d4d4", // black
  //   "#bdbdbd", // neutral-900
  // ];

  // const backgroundColors = [
  //   "#0f172a", // slate-900
  //   "#000000", // black
  //   "#171717", // neutral-900
  // ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      //h-[30rem] overflow-y-auto
      className="relative flex justify-center space-x-10 rounded-md p-20"
      ref={ref}>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-70">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                }}
                className="text-kg mt-10 max-w-sm text-gray-900 dark:text-slate-300">
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* <div className="h-10" /> */}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-20 hidden h-170 w-170 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

export default UserGuide;