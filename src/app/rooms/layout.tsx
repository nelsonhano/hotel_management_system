import { Poppins } from "next/font/google";


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


import '../(web)/globals.css'
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Toast from "@/components/Toast/Toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins'
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
