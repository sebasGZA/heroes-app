import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search a Superhero"
        description="Search your favorite superheroe or villain"
      />
      <CustomBreadcrumb currentPage="Search" />
      <HeroStats />

      <SearchControls />
    </>
  )
}

export default SearchPage;