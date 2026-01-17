// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Renders the Home page layout with a centered "Get Started" button.
 *
 * @returns The page JSX containing a full-height, centered container with a `Button` labeled "Get Started".
 */
export default async function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Button>
        Get Started
      </Button>
    </div>
  );
}