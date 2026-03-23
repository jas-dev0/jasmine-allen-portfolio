import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jasmine Allen — Software Engineer',
  description: 'Software engineer and technical consultant bridging backend development and enterprise support. Based in Southfield, MI.',
  openGraph: {
    title: 'Jasmine Allen — Software Engineer',
    description: 'Software engineer and technical consultant. C# / .NET, Python, Azure, AWS.',
    type: 'website',
  },
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
