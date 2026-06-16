import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Explore"
}

type Params = {
  tag?: string
}

export default async function ExplorePage(
  { searchParams }: {
    searchParams: Promise<Params>
  }
) {
    const { tag } = await searchParams

    return (
      <h1 className="text-3xl font-bold mb-6">Explore {!!tag && `by #${tag}`}</h1>
    )
}