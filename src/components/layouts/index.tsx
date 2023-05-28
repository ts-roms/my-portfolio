import { ReactNode } from "react";
import Header from "./headers/header";
import Footer from "./footer";


interface PageProps {
  children: ReactNode
}

const Layout = (
  { children }: PageProps
) => {

  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    </>
  )
}

export default Layout;