import React from "react";
import { useGame, rarityData } from "../context/GameContext";

const ShopPanel: React.FC = () => {
  const { state } = useGame();

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg space-y-3">
      <h2 className="text-xl font-bold">🛒 Meme Shop</h2>

      {state.shop.length === 0 && <p className="text-gray-400">No items yet. Admin can spawn OP items!</p>}

      {state.shop.map(item => (
        <div
          key={item.id}
          className={`p-2 rounded-lg border-l-4 bg-gray-800 border-${rarityData[item.rarity].color}-500`}
        >
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-400">{item.rarity.toUpperCase()} – 💰 {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopPanel;
