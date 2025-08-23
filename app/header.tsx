import { getSetting } from "@/app/queries/getSetting";
import Nav from "@/app/nav";

const Header = async () => {
  const setting = await getSetting();

  return (
    <header className="border-b border-blue-500 py- mb-2">
      <div className="text-2xl">{setting.siteName}</div>
      {/* <Suspense fallback="Loading...">
      </Suspense> */}
      <Nav />
    </header>
  );
};
export default Header;
