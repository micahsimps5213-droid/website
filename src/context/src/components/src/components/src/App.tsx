import React from "react";
import { GameProvider } from "./context/GameContext";
import AdminPanel from "./components/AdminPanel";
import ShopPanel from "./components/ShopPanel";
import AlertOverlay from "./components/AlertOverlay";

const App: React.FC = () => {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row gap-4 p-6">
        <AdminPanel />
        <ShopPanel />
        <AlertOverlay />
      </div>
    </GameProvider>
  );
};

export default App;
