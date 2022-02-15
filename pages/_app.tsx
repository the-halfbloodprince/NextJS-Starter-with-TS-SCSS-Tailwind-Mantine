import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '../styles/globals.scss'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const mantineThemedApp = false

  const appWithMantine = (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
        black: '#111'
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      {
        mantineThemedApp ? appWithMantine: <Component {...pageProps} />
      }
      
    </>
  );
}
