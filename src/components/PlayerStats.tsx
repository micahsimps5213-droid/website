import React from "react";
import { useGame } from "../context/GameContext";

const PlayerStats: React.FC = () => {
  const { state } = useGame();

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg space-y-2">
      <h2 className="text-xl font-bold">🎮 Player Stats</h2>
      <p><strong>Level:</strong> {state.playerStats.level}</p>
      <p><strong>XP:</strong> {state.playerStats.xp}</p>
      <p><strong>Money:</strong> 💰 {state.money}</p>
      <p><strong>Panels:</strong> {state.playerStats.giftedPanels.join(", ") || "None"}</p>
    </div>
  );
};

export default PlayerStats;
