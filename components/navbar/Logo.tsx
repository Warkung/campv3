import Link from "next/link";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button variant={"default"} asChild>
      <Link href="/">Logo</Link>
    </Button>
  );
}
export default Logo;
