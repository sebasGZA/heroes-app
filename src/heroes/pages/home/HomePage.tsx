import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page"

type ActiveTabs = 'all' | 'favorites' | 'heroes' | 'villains';

export default function HomePage() {

    const [activeTab, setActiveTab] = useState<ActiveTabs>('all');
    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5,
    });

    return (
        <>
            {/* Header */}
            <CustomJumbotron
                title="Superhero Universe"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <CustomBreadcrumb currentPage="Heroes" />

            {/* Stats Dashboard */}
            <HeroStats
            />

            {/* Tabs */}
            <Tabs value={activeTab} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger
                        value="all"
                        onClick={() => setActiveTab('all')}
                    >
                        All Characters ({heroesResponse?.heroes.length})
                    </TabsTrigger>

                    <TabsTrigger
                        onClick={() => setActiveTab('favorites')}
                        value="favorites"
                        className="flex items-center gap-2"
                    >
                        Favorites (3)
                    </TabsTrigger>

                    <TabsTrigger
                        value="heroes"
                        onClick={() => setActiveTab('heroes')}
                    >
                        Heroes (10)
                    </TabsTrigger>

                    <TabsTrigger
                        value="villains"
                        onClick={() => setActiveTab('villains')}
                    >
                        Villains (10)
                    </TabsTrigger>
                </TabsList>

                <TabsContent value='all'>
                    <HeroGrid list={heroesResponse?.heroes ?? []} />
                </TabsContent>

                <TabsContent value='favorites'>
                    <HeroGrid list={[]} />
                </TabsContent>

                <TabsContent value='heroes'>
                    <HeroGrid list={[]} />
                </TabsContent>

                <TabsContent value='villians'>
                    <HeroGrid list={[]} />
                </TabsContent>
            </Tabs>

            {/* Pagination */}
            <CustomPagination totalPages={10} />
        </>
    )
}