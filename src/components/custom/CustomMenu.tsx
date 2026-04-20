import { useLocation } from "react-router"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/"
                        className={cn(isActive('/') && ` bg-slate-200`, 'rounded-md p-2')}
                    >
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/search"
                        className={cn(isActive('/search') && ` bg-slate-200`, 'rounded-md p-2')}
                    >
                        Search
                    </ NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}