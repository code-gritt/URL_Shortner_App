import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LinkIcon, LogOut, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <>
      <nav className="text-white bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />

            <Link to="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                URLShortner™
              </span>
            </Link>
          </div>

          {!user ? (
            <div className="flex items-center lg:order-2">
              <Button onClick={() => navigate("/auth")}>Login</Button>
            </div>
          ) : (
            <DropdownMenu>
              <div className="flex items-center lg:order-2">
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      className="w-12 h-10"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>G</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Link to="/" className="flex">
                    <UserRound className="mr-2 h-4 w-4" />
                    Gokul
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    My Links
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-400">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <div
            className="hidden pl-48 justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 hover:scale-105 transition duration-300 ease-out pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:scale-105 transition duration-300 ease-out pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:scale-105 transition duration-300 ease-out pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:scale-105 transition duration-300 ease-out pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:scale-105 transition duration-300 ease-out pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:scale-105 transition duration-300 ease-out pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <div className="dropdown inline-block relative">
                    <button className="text-white font-semibold rounded inline-flex items-center">
                      <span className="mr-1">Settings</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-white pt-5">
                      <li className="w-60">
                        <a
                          className="transition duration-300 ease-out rounded-t bg-gray-900 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          One
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="transition duration-300 ease-out bg-gray-900 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Two
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="transition duration-300 ease-out rounded-b bg-gray-900 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Three is the magic number
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
