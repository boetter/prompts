import { useState, useCallback } from "react";

const FAVORITES_KEY = "prompt-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = useCallback((promptId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(promptId)
        ? prev.filter(id => id !== promptId)
        : [...prev, promptId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((promptId: string) => {
    return favorites.includes(promptId);
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
}