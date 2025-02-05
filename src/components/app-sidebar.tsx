"use client";

import * as React from "react";
import {
  Award,
  Bell,
  BookOpen,
  Bot,
  House,
  MessageSquareText,
  Play,
  SquareTerminal,
  TvMinimalPlay,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Kuenda👀",
    logo: BookOpen,
  },

  navMain: [
    {
      title: "Plataforma",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Home",
          url: "/",
          icon: House,
        },
        {
          title: "Cursos",
          url: "#",
          icon: TvMinimalPlay,
        },
        {
          title: "Subscrições",
          url: "#",
          icon: UsersRound,
        },
      ],
    },
    {
      title: "Eu",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Minhas subscrições",
          url: "#",
          icon: UsersRound,
        },
        {
          title: "Minhas notificações",
          url: "#",
          icon: Bell,
        },
        {
          title: "Meus comentários",
          url: "#",
          icon: MessageSquareText,
        },
        {
          title: "Meus certificados",
          url: "#",
          icon: Award,
        },
      ],
    },
    {
      title: "Subscrições",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
          icon: Play,
        },
        {
          title: "Get Started",
          url: "#",
          icon: Play,
        },
        {
          title: "Tutorials",
          url: "#",
          icon: Play,
        },
        {
          title: "Changelog",
          url: "#",
          icon: Play,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
