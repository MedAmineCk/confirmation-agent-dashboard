import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PackageIcon,
  PlusIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function OverviewPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-12">
        <div className="w-full bg-white rounded-3xl shadow-lg p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <PackageIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">1,234</h3>
              <p className="text-gray-500 dark:text-gray-400">Orders</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center rounded-3xl min-w-20 h-20 shadow-lg">
          <div className="bg-blue-500 p-3 rounded-full">
            <PlusIcon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8">
        <h2 className="text-2xl font-bold mb-4">Orders</h2>
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link
                    to={"/orders/123456"}
                    className="font-medium text-xs text-blue-500"
                  >
                    ORD-123456
                  </Link>
                </TableCell>
                <TableCell>
                  <div>0611223344</div>
                </TableCell>
                <TableCell>
                  <Badge variant="pending" className="bg-blue-50 text-blue-600">
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    to={"/orders/123456"}
                    className="font-medium text-xs text-blue-500"
                  >
                    ORD-123456
                  </Link>
                </TableCell>
                <TableCell>
                  <div>0611223344</div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="pending"
                    className="bg-green-50 text-green-600"
                  >
                    Confirmed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    to={"/orders/123456"}
                    className="font-medium text-xs text-blue-500"
                  >
                    ORD-123456
                  </Link>
                </TableCell>
                <TableCell>
                  <div>0611223344</div>
                </TableCell>
                <TableCell>
                  <Badge variant="pending" className="bg-red-50 text-red-600">
                    Cancelled
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    to={"/orders/123456"}
                    className="font-medium text-xs text-blue-500"
                  >
                    ORD-123456
                  </Link>
                </TableCell>
                <TableCell>
                  <div>0611223344</div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="pending"
                    className="bg-orange-50 text-orange-600"
                  >
                    unReachable
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1-10 of 50 orders
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
