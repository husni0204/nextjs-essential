import Link from "next/link";

const Nav = () => {
  return (
    <nav className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Post</Link>
    </nav>
  );
};

export default Nav;
