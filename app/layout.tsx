import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aunnop Jusungnoen - Resume',
  description: 'Civil Engineer and Solution Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
