import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Rodrigo Silverio</title>
          <meta
            name="description"
            content="Rodrigo Silverio Software Engineer"
          />
        </Head>
        <Component {...pageProps} />
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.rodrigosilverio.com.br',
            siteName: 'Rodrigo Silverio',
          }}
        />
      </QueryClientProvider>
    </SessionProvider>
  )
}
