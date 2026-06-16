import { PAGES } from "@/config/pages.config"

interface IMenuItem {
    href: string
    text: string
}


export const MENU: IMenuItem[] = [
    {
        href: PAGES.HOME,
        text: "Home"
    },
    {
        href: PAGES.EXPLORE,
        text: "Explore"
    },
    {
        href: PAGES.PROFILE_FAKE,
        text: "Profile"  
    }
]