'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      enableSystem
      disableTransitionOnChange
      storageKey="eventum-theme"
    >
      {children}
    </NextThemesProvider>
  )
} 