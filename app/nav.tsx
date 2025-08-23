import Link from "next/link";

const Nav = () => {
  return (
    <nav className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/team">Team</Link>
    </nav>
  );
};

export default Nav;
