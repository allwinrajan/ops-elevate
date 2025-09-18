import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, Search, User } from "lucide-react"
import { Badge } from "./ui/badge"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center justify-between px-6">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="md:hidden" />
                <div className="hidden md:flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search projects, tasks..."
                      className="h-9 w-64 rounded-md border border-input bg-background pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
                    3
                  </Badge>
                </Button>
                
                <ThemeToggle />
                
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}