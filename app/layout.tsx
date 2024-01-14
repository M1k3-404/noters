import { inter } from '@/app/ui/fonts';
import './ui/globals.css'
import Sidebar from './ui/homepage/sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-customGreyBlue flex-col md:flex-row md:overflow-hidden`}>
        <div  className="w-{120px} flex-none md:w-{300px}">
          <Sidebar />
        </div>
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </body>
    </html>
  )
}
