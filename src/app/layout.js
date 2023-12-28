import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Arathi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
