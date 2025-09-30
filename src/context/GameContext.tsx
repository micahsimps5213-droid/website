import React, { createContext, useReducer, useContext, ReactNode } from "react";

export type Rarity =
  | "common" | "rare" | "epic" | "legendary" | "mythic" | "admin-op";

export interface PlayerStats {
  level: number;
  xp: number;
  adminMode: boolean;
  giftedPanels: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  rarity: Rarity;
}

export interface ActiveEvent {
  id: string;
  name: string;
  expiresAt: number;
}

export interface GameState {
  money: number;
  adminAbuse: boolean;
  playerStats: PlayerStats;
  shop: ShopItem[];
  events: ActiveEvent[];
  alerts: string[];
}

export type GameAction =
  | { type: "TOGGLE_ADMIN" }
  | { type: "TOGGLE_ADMIN_ABUSE" }
  | { type: "GIFT_PANEL"; payload: "mini" | "full" }
  | { type: "SPAWN_OP_ITEM" }
  | { type: "TRIGGER_OP_EVENT" }
  | { type: "RAISE_ALERT"; payload: string };

export const rarityData: Record<Rarity, { color: string; multiplier: number }> = {
  common: { color: "gray", multiplier: 1 },
  rare: { color: "blue", multiplier: 3 },
  epic: { color: "purple", multiplier: 10 },
  legendary: { color: "orange", multiplier: 30 },
  mythic: { color: "red", multiplier: 100 },
  "admin-op": { color: "yellow", multiplier: 10000 },
};

const initialState: GameState = {
  money: 1000,
  adminAbuse: false,
  playerStats: {
    level: 1,
    xp: 0,
    adminMode: false,
    giftedPanels: [],
  },
  shop: [],
  events: [],
  alerts: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "TOGGLE_ADMIN":
      return { ...state, playerStats: { ...state.playerStats, adminMode: !state.playerStats.adminMode } };
    case "TOGGLE_ADMIN_ABUSE":
      return { ...state, adminAbuse: !state.adminAbuse };
    case "GIFT_PANEL":
      return {
        ...state,
        playerStats: {
          ...state.playerStats,
          giftedPanels: [...state.playerStats.giftedPanels, action.payload],
        },
      };
    case "SPAWN_OP_ITEM":
      return {
        ...state,
        shop: [
          ...state.shop,
          {
            id: `op-${Date.now()}`,
            name: "💎 Infinity Banana (OP)",
            price: 999999,
            rarity: "admin-op",
          },
        ],
      };
    case "TRIGGER_OP_EVENT":
      return {
        ...state,
        events: [
          ...state.events,
          {
            id: `event-${Date.now()}`,
            name: "🌌 Reality Glitch Event",
            expiresAt: Date.now() + 60 * 1000,
          },
        ],
      };
    case "RAISE_ALERT":
      return { ...state, alerts: [...state.alerts, action.payload] };
    default:
      return state;
  }
}

const GameContext = createContext<{ state: GameState; dispatch: React.Dispatch<GameAction> } | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
};
