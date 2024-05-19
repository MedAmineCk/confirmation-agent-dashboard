import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbList,
  Breadcrumb,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import {
  CheckIcon,
  ChevronDownIcon,
  DollarSignIcon,
  Mail,
  MapPin,
  PackageIcon,
  PencilIcon,
  PhoneIcon,
  RefreshCwIcon,
  TruckIcon,
  User,
  XIcon,
} from "lucide-react";

export default function OrderPage() {
  return (
    <div className="pb-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/orders">Orders</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Order #123456</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mt-6">
        <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <DollarSignIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">1,234dh </h3>
              <p className="text-gray-500 dark:text-gray-400">Total Cost</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-bold">TR-123456</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tracking Number
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 mt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div>
                <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-bold">Sophia Anderson</h3>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div>
                <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                1234 Main St, Anytown USA
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 ">
          <Link
            className="border border-blue rounded-full flex gap-2 items-center pr-4"
            to="/"
          >
            <div className="bg-blue-500 p-2 rounded-full">
              <PhoneIcon className="w-4 h-4 text-white" />
            </div>
            <span>0611223344</span>
          </Link>
          <Link className="bg-green-500 p-2 rounded-full" to="/">
            <img src="/whatsapp.svg" className="w-4 h-4 text-white" />
          </Link>
          <Link className="bg-white p-2 rounded-full border" to="/">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 mt-6 ">
        <h2 className="text-2xl font-bold mb-4">Order Items</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Glimmer Lamps</div>
              </TableCell>
              <TableCell>
                <div>2</div>
              </TableCell>
              <TableCell>
                <div>$60.00</div>
              </TableCell>
              <TableCell>
                <div>$120.00</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Aqua Filters</div>
              </TableCell>
              <TableCell>
                <div>3</div>
              </TableCell>
              <TableCell>
                <div>$16.33</div>
              </TableCell>
              <TableCell>
                <div>$49.00</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg px-4 py-3 flex items-center justify-between border-t border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2" variant="outline">
              <PackageIcon className="w-5 h-5" />
              <span>Pending</span>
              <ChevronDownIcon className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-white dark:bg-gray-900 shadow-lg">
            <DropdownMenuItem>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <CheckIcon className="w-5 h-5" />
                <span>Confirmed</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <XIcon className="w-5 h-5" />
                <span>Cancelled</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <TruckIcon className="w-5 h-5" />
                <span>Shipped</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <RefreshCwIcon className="w-5 h-5" />
                <span>Processing</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline">
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </Button>
      </div>
    </div>
  );
}
