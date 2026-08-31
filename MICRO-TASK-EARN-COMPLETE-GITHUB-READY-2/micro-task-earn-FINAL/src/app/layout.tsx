import './globals.css'
export const metadata = { title: 'Micro Task Earn', description: 'Earn by completing micro tasks' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className="bg-[#0f0f0f] text-white min-h-screen">{children}</body></html>
  )
}