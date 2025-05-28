import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft, UserCircle } from "lucide-react";
import { Button } from "../ui/button";
import links from "@/utils/links";
import Link from "next/link";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <AlignLeft />
          <UserCircle />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={link.href} className="capitalize hover:bg-red-500 w-full rounded "><p className="px-2 py-1">{link.label}</p></Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem ><Link href={'/'} className="capitalize hover:bg-red-500 w-full rounded py-1 ">log out</Link  ></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Dropdown;
