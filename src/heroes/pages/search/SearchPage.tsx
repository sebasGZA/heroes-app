import { useSearchParams } from 'react-router';

import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes";

const SearchPage = () => {

  const [searchParams] = useSearchParams()

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;


  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      <CustomJumbotron
        title="Search a Superhero"
        description="Search your favorite superheroe or villain"
      />
      <CustomBreadcrumb currentPage="Search" />
      <HeroStats />

      <SearchControls />

      <HeroGrid list={heroes} />
    </>
  )
}

export default SearchPage;