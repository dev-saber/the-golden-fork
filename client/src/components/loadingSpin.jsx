import React from "react";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-8 border-slate-800 rounded-full animate-spin"
        style={{ borderTopColor: "#ED9100" }}
      />
    </div>
  );
}
