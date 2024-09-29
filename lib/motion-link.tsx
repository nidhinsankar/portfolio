"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { cn } from "./utils";

export const MotionLink = motion(Link);

export const MotionDiv = ({
  children,
  classnames,
}: {
  children: React.ReactNode;
  classnames: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className={cn(classnames)}
    >
      {children}
    </motion.div>
  );
};
