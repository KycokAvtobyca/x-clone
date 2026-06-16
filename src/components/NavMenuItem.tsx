import clsx from "clsx";
import Link from "next/link";

interface Props {
    href: string
    text: string
    isActive: boolean
}

export function NavMenuItem({href, text, isActive}: Props) {
    return (
        <li>
            <Link href={href} className={clsx(isActive ? "underline" : "")}>
                {text}
            </Link>
        </li>
    )
}
