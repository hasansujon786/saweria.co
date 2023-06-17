import { TwMediaQuery } from '@/components/ui/TwMediaQuery'
import { cn } from '@/lib/utils'
import '@/styles/app-theme.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(inter.variable, 'font-mono')}>
      <Component {...pageProps} />
      <TwMediaQuery />
    </main>
  )
}
