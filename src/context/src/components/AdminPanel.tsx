import React from "react";
import { useGame } from "../context/GameContext";

const AdminPanel: React.FC = () => {
  const { state, dispatch } = useGame();

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg space-y-3">
      <h2 className="text-xl font-bold">⚙️ Admin Panel</h2>

      <button
        onClick={() => dispatch({ type: "TOGGLE_ADMIN" })}
        className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
      >
        {state.playerStats.adminMode ? "Disable Admin Mode" : "Enable Admin Mode"}
      </button>

      <button
        onClick={() => dispatch({ type: "TOGGLE_ADMIN_ABUSE" })}
        className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
      >
        {state.adminAbuse ? "☢️ Stop Abuse" : "☢️ Start Abuse"}
      </button>

      <button
        onClick={() => dispatch({ type: "GIFT_PANEL", payload: "mini" })}
        className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700"
      >
        🎁 Gift Mini Panel
      </button>

      <button
        onClick={() => dispatch({ type: "GIFT_PANEL", payload: "full" })}
        className="w-full px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600"
      >
        👑 Gift Full Panel
      </button>

      <button
        onClick={() => dispatch({ type: "SPAWN_OP_ITEM" })}
        className="w-full px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700"
      >
        💎 Spawn OP Item
      </button>

      <button
        onClick={() => dispatch({ type: "TRIGGER_OP_EVENT" })}
        className="w-full px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700"
      >
        🌌 Trigger OP Event
      </button>

      <button
        onClick={() => dispatch({ type: "RAISE_ALERT", payload: "🚨 Unauthorized Access Attempt!" })}
        className="w-full px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800"
      >
        🚨 Raise Alert
      </button>

      <div className="mt-3 p-2 bg-gray-800 rounded-lg">
        <p><strong>Admin Mode:</strong> {state.playerStats.adminMode ? "✅" : "❌"}</p>
        <p><strong>Admin Abuse:</strong> {state.adminAbuse ? "🔥 Active" : "🧊 Off"}</p>
        <p><strong>Gifted Panels:</strong> {state.playerStats.giftedPanels.join(", ") || "None"}</p>
      </div>
    </div>
  );
};

export default AdminPanel;
