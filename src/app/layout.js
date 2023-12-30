import './globals.css'
// import { ThemeProvider } from 'next-themes'
import { Providers } from './providers'

export const metadata = {
  title: '김경목 포트폴리오',
  description: '김경목의 포트폴리오 입니다.',
}

export default function RootLayout({ children }) {
  return (

    <html suppressHydrationWarning>
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>

  )
}
