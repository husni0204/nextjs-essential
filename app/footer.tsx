import { getSetting } from "@/app/queries/getSetting";

const Footer = async () => {
  const setting = await getSetting();
  return (
    <footer className="mt-2 py-2 border-t border-blue-500">
      Copyright &copy; {setting.siteName}
    </footer>
  );
};

export default Footer;
