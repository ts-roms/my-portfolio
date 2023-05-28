import { ReactNode } from "react";
import Header from "./headers/header";


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
    </>
  )
}

export default Layout;