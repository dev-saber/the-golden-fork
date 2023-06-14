import React from "react";
import { motion } from "framer-motion";

export default function LoadingSpin({ menu }) {
  return (
    <div
      className={`${
        !menu && "absolute"
      } inset-0 flex items-center justify-center`}
    >
      <motion.div
        className="w-16 h-16 border-8 border-slate-800 rounded-full animate-spin"
        style={{ borderTopColor: "#ED9100" }}
      />
    </div>
  );
}
