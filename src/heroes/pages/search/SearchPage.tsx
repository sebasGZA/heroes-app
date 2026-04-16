import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search a Superhero"
        description="Search your favorite superheroe or villain"
      />

      <HeroStats />
    </>
  )
}

export default SearchPage;