import type { ReactNode } from "react";
import { createContext, useCallback, useMemo } from "react";

import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

interface LikeItem {
  id: number;
}

interface LikeContextProviderProps {
  children: ReactNode;
}

interface LikeState {
  likedItems: LikeItem[];
  toggleLike: (id: number) => void;
}

export const Likectx = createContext<LikeState | null>(null);

export const LikeContext = ({ children }: LikeContextProviderProps) => {
  const [likedItems, setLikedItems] = useLocalStorage<LikeItem[]>(
    "likedItems",
    [],
  );

  const toggleLike = useCallback(
    (id: number) => {
      const isLiked = likedItems.find((item) => item.id === id);
      setLikedItems((prev) => {
        if (isLiked) {
          return prev.filter((item) => item.id !== id);
        } else {
          return [...prev, { id }];
        }
      });
    },
    [likedItems, setLikedItems],
  );

  const value = useMemo(
    () => ({
      likedItems,
      toggleLike,
    }),
    [likedItems, toggleLike],
  );

  return <Likectx.Provider value={value}>{children}</Likectx.Provider>;
};
