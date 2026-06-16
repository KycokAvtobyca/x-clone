import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Profile',
}

type Params = {
    username: string
}

export default async function Page({ params } : {
    params: Promise<Params>
}) {
    const { username } = await params

    return <div>Profile @{username}</div>
}
