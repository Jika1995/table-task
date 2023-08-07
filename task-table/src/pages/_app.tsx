import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { queryClient } from '@/utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme: 'light',
                    }}
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </QueryClientProvider>
        </>

    )
}
