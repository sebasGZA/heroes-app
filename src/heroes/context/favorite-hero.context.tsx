import { createContext, useEffect, useState, type PropsWithChildren } from 'react';
import type { Hero } from "../interfaces/hero.interface";

interface FavoriteHero {
    favorites: Hero[];
    favoriteCount: number;
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHero)


const getFavoritesFromStorage = (): Hero[] => {
    const favoritesData = localStorage.getItem('favorites');
    return favoritesData ? JSON.parse(favoritesData) : []
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState(getFavoritesFromStorage());

    const toggleFavorite = (hero: Hero) => {
        const heroExists = favorites.find(h => h.id === hero.id);
        if (heroExists) {
            const newFavorites = favorites.filter(h => h.id !== hero.id);
            setFavorites(newFavorites);
            return;
        }
        setFavorites([...favorites, hero])
    }

    const isFavorite = (hero: Hero) => {
        return favorites.some(h => h.id === hero.id)
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoriteHeroContext
            value={{
                favorites,
                favoriteCount: favorites.length,
                isFavorite,
                toggleFavorite,
            }}
        >
            {children}
        </FavoriteHeroContext >
    )
}