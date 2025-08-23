"use client";

import Link from "next/link";
import { Setting } from "@/app/types/Setting";
import { use } from "react";

const Nav = ({ settingPromise }: { settingPromise: Promise<Setting> }) => {
  const setting = use(settingPromise);

  console.log(setting);

  return (
    <nav className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/team">Team</Link>
    </nav>
  );
};

export default Nav;
