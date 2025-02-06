import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { AppSidebar } from "@/components/app-sidebar";
import { NavUser } from "@/components/nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/images/3.jpg",
  },
};

function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 pt-4 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            <SidebarTrigger className="-ml-1" />
            <Input
              className="w-full lg:mx-52 rounded-2xl"
              placeholder="Oque desejas aprender?"
            />
            <div>
              <NavUser user={data.user} />
            </div>
          </div>
        </header>
        <div className="p-4 h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default LayoutHome;
