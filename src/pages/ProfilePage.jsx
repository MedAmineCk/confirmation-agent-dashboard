import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="w-full ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="bg-white p-4 rounded-3xl mt-4">
        <Tabs className="w-full" defaultValue="profile">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="flex flex-col items-center justify-center sm:p-10">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage alt="Profile Image" src="/confirmation.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <Button
                  className="absolute bottom-0 right-0 rounded-full bg-gray-100 p-2 text-gray-900 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                  size="icon"
                  variant="ghost"
                >
                  <CameraIcon className="h-5 w-5" />
                  <span className="sr-only">Change profile image</span>
                </Button>
              </div>
              <div className="mt-6 w-full max-w-md space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input defaultValue="Jared Palmer" id="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input defaultValue="+1 (555) 555-5555" id="phone" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    className="min-h-[80px]"
                    defaultValue="123 Main St, Anytown USA"
                    id="address"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="authentication">
            <div className="flex flex-col items-center justify-center  sm:p-10">
              <div className="mt-6 w-full max-w-md space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input defaultValue="@jaredpalmer" id="username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input defaultValue="m@example.com" id="email" type="email" />
                </div>
                <div className="relative space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    defaultValue="password123"
                    id="password"
                    type="password"
                  />
                  <Button
                    className="absolute bottom-1 right-1 h-7 w-7"
                    size="icon"
                    variant="ghost"
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
