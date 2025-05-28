import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Button variant={"default"} asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
export default page;
