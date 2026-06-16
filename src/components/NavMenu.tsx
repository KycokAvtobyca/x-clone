"use client"

import { usePathname } from "next/navigation";
import { NavMenuItem } from "./NavMenuItem";
import { MENU } from "@/shared/data/menu.data";
import { match } from "path-to-regexp";

export function NavMenuHeader() {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="flex gap-6 text-sm text-white/80">
                {MENU.map((menuItem, index) => (
                    <NavMenuItem
                        key={index}
                        isActive={!!match(menuItem.href)(pathname)}
                        {...menuItem}
                    />
                ))}
            </ul>
        </nav>
    )
}