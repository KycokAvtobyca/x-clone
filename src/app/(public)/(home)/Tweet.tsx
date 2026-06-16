import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/types/tweet.interface"
import Image from "next/image"
import Link from "next/link"

interface Props {
    tweet: ITweet
}

export function Tweet({tweet}: Props) {
    return (
        <article className="tweet border-2 p-2 border-white/10 rounded-xl w-full">
            <div className="flex gap-2">
                <Image src="/xlogo.svg" alt="X Logo" width={25} height={25} priority />
                <Link href={PAGES.PROFILE(tweet.author)}>
                    <p className="font-bold">@{tweet.author}</p>
                </Link>
            </div>
            <span>{tweet.text}</span>
        </article>
    )
}
