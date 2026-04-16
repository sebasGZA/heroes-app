import { createBrowserRouter } from "react-router";

import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HomePage from "@/heroes/pages/home/HomePage";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { lazy } from "react";

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'heroes/1',
                element: <HeroPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },

        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />
            },
        ],
    },
])