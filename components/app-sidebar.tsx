import {
  Calendar,
  Drum,
  Film,
  Home,
  Inbox,
  Popcorn,
  Search,
  Settings,
  Volleyball,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';

// Menu items.
const items = [
  {
    title: 'Фильмы',
    url: '/films',
    icon: Popcorn,
  },
  {
    title: 'Сериалы',
    url: '#',
    icon: Film,
  },
  {
    title: 'Мультфилтьмы',
    url: '#',
    icon: Drum,
  },
  {
    title: 'Спорт',
    url: '#',
    icon: Volleyball,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <a href="/">
          <div className="px-2 py-2">
            <h1 className="text-lg font-semibold">Zetflix</h1>
            <p className="text-xs font-light">Фильмы баз пендосов</p>
          </div>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Виды</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-2 py-2">
          <a href="/login">
            <Button className="mb-2 w-full" variant="outline">
              Войти
            </Button>
          </a>
          <a href="/register">
            <Button className="w-full" variant="outline">
              Зарегистрироваться
            </Button>
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
