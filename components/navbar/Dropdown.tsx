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
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

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

        {/* Not Login */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton>
              <button className="min-w-[100px] w-full rounded text-start capitaliz hover:cursor-pointer">
                Login
              </button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton>
              <button className="min-w-[100px] w-full rounded text-start capitaliz hover:cursor-pointer">
                Register
              </button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* Login Already */}
        <SignedIn>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((link, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={link.href}>
                  <button className="min-w-[100px] w-full rounded text-start capitaliz hover:cursor-pointer capitalize">
                    {link.label}
                  </button>
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutButton>
              <button className="min-w-[100px] w-full rounded text-start capitaliz hover:cursor-pointer hover:bg-red-500 pt-1 pb-1.5 ">
                Logout
              </button>
            </SignOutButton>
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Dropdown;
