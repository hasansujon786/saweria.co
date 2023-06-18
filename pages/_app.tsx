import { TwMediaQuery } from '@/components/ui/TwMediaQuery'
import DefaultLayout from '@/layouts/default'
import { cn } from '@/lib/utils'
import '@/styles/app-theme.css'
import '@/styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || DefaultLayout

  return (
    <main className={cn(inter.variable, 'font-mono')}>
      {getLayout(<Component {...pageProps} />)}
      <TwMediaQuery />
    </main>
  )
}
