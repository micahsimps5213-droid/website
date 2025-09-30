import React from "react";
import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";

const AlertOverlay: React.FC = () => {
  const { state } = useGame();

  if (state.alerts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="fixed inset-0 bg-red-700 bg-opacity-80 flex items-center justify-center z-50"
    >
      <div className="text-center text-white text-3xl font-extrabold animate-pulse">
        🚨 {state.alerts[state.alerts.length - 1]} 🚨
      </div>
    </motion.div>
  );
};

export default AlertOverlay;
