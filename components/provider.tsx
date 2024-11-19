'use client';

import { SessionProvider } from 'next-auth/react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/modeToggle';
import { Toaster } from '@/components/ui/toaster';

export const Provider = ({ children }: any) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            <ModeToggle />
            {children}
            <Toaster />
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};
