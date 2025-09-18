import { useState } from "react"
import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  FileOutput, 
  Settings, 
  Zap,
  BarChart3,
  Users,
  Bot
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
]

const toolsItems = [
  { title: "AI Assistant", url: "/ai", icon: Bot },
  { title: "Integrations", url: "/integrations", icon: Zap },
  { title: "Export Center", url: "/export", icon: FileOutput },
  { title: "Team", url: "/team", icon: Users },
]

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "text-sidebar-foreground hover:bg-sidebar-accent/50"

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent>
        {/* Brand */}
        <div className="px-6 py-4 border-b border-sidebar-border">
          <h2 className="text-lg font-bold text-sidebar-foreground">
            {state === "collapsed" ? "DX" : "DevOps X"}
          </h2>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tools */}
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}