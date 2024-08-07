import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/Store/Provider'
import Wrapper from './components/wrapper/Wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NaukriAdda',
  description: 'Find your jobs & Hire Experts for Any Job and Internship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
        {/* <Providers>
        <div>
        {children} 
        </div>
        </Providers> */}
        <Wrapper>{children}</Wrapper>

        </body>
    </html>
  )
}
