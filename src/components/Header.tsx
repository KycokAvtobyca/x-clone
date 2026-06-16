import Link from "next/link";
import Image from "next/image";
import { NavMenuHeader } from "./NavMenu";

export function Header() {
  return (
    <header className="border-b border-white/10 px-2 py-4 flex items-center justify-between bg-black">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/xlogo.svg"
          alt="X Logo"
          width={32}
          height={32}
          priority
        />
      </Link>

      <NavMenuHeader />
    </header>
  );
}