import { UserButton } from "@clerk/nextjs";
import MainNav from "@/components/main-nav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>Store switch</div>
        <div>
          <MainNav className="mx-8" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
