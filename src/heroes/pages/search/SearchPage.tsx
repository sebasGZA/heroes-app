import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search a Superhero"
        description="Search your favorite superheroe or villain"
      />

      <HeroStats />

      <SearchControls />
    </>
  )
}

export default SearchPage;