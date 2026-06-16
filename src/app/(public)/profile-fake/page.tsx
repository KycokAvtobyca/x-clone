import type { Metadata } from "next";
import ProfileFake from "./ProfileFake";

export const metadata: Metadata = {
  title: "ProfileFake"
}

export default function ProfileFakePage() {
    return (
        <ProfileFake />
    )
}