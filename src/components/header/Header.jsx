import {
  BarChartIcon,
  BellIcon,
  CheckIcon,
  HomeIcon,
  LayoutGridIcon,
  LogOutIcon,
  MenuIcon,
  Package2Icon,
  PackageIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-4 py-3 sticky top-0 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <MenuIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </SheetTrigger>
        <SheetContent
          className="w-64 bg-white dark:bg-gray-900 shadow-lg"
          side="left"
        >
          <div className="p-4 space-y-4">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              to="/"
            >
              <Package2Icon className="w-6 h-6" />
              <span>Acme Inc</span>
            </Link>
            <nav className="space-y-2">
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/"
              >
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/"
              >
                <PackageIcon className="w-5 h-5" />
                <span>Orders</span>
              </Link>
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/"
              >
                <LayoutGridIcon className="w-5 h-5" />
                <span>Products</span>
              </Link>
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/"
              >
                <BarChartIcon className="w-5 h-5" />
                <span>Analytics</span>
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <div className="relative flex-1 max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="bg-gray-100 dark:bg-gray-800 pl-10 pr-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          placeholder="Search orders..."
          type="search"
        />
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
              <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 bg-white dark:bg-gray-900 shadow-lg">
            <div className="p-4 space-y-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <PackageIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">New Order</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      You have a new order to process.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 p-2 rounded-full">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Order Confirmed</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Order #123456 has been confirmed.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      1 day ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-500 p-2 rounded-full">
                    <XIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Order Cancelled</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Order #123457 has been cancelled.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      3 days ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <img
                alt="Profile"
                className="rounded-full"
                height="40"
                src="/confirmation.jpg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-white dark:bg-gray-900 shadow-lg">
            <DropdownMenuItem>
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/profile"
              >
                <UserIcon className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/"
              >
                <SettingsIcon className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                to="/"
              >
                <LogOutIcon className="w-5 h-5" />
                <span>Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
