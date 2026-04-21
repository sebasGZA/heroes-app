import type { Hero } from "../interfaces/hero.interface"
import { HeroGridCard } from "./HeroGridCard"

interface Props {
    list: Hero[]
}

export const HeroGrid = ({ list }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {
                list.map((item) => (
                    <HeroGridCard key={item.id} hero={item} />
                ))
            }
        </div>
    )
}