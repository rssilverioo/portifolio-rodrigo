import { QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
  )
}
