import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { useMemo } from "react"
import { useSummary } from "@/heroes/hooks/useSummary"
import { usePaginatedHeroes } from "@/heroes/hooks/usePaginatedHeroes"

export default function HomePage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab])

    const { data: heroesResponse } = usePaginatedHeroes(page, limit)
    const { data: summary } = useSummary()

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
            <Tabs value={selectedTab} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger
                        value="all"
                        onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'all')
                            return prev;
                        })}
                    >
                        All Characters ({summary?.totalHeroes})
                    </TabsTrigger>

                    <TabsTrigger
                        onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'favorites')
                            return prev;
                        })}
                        value="favorites"
                        className="flex items-center gap-2"
                    >
                        Favorites (3)
                    </TabsTrigger>

                    <TabsTrigger
                        value="heroes"
                        onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'heroes')
                            return prev;
                        })}
                    >
                        Heroes ({summary?.heroCount})
                    </TabsTrigger>

                    <TabsTrigger
                        value="villains"
                        onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'villains')
                            return prev;
                        })}
                    >
                        Villains ({summary?.villainCount})
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
            <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        </>
    )
}