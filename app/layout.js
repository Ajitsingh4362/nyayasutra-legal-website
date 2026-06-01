import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleTranslate from '@/components/GoogleTranslate'
export const metadata = { title:'NyayaSutra — Legal Intelligence', description:'Premium legal intelligence, litigation support, legal education and research platform.' }
export default function RootLayout({children}){ return <html lang="en"><body><GoogleTranslate/><Header/>{children}<Footer/></body></html> }
