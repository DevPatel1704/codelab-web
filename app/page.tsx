// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";
import Image from "next/image";

/**
 * Renders the home page containing a centered call-to-action and user control.
 *
 * @returns A JSX element with a full-screen, centered layout that includes a "Get Started" Button and a UserButton.
 */
export default async function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Button>
        Get Started
      </Button>
      <UserButton>
      </UserButton>
    </div>
  );
}