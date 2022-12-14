import { ReactNode } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: {children: ReactNode}) => {
  return <>
    <Head>
      <meta name="description" content="Online web portfolio for Corey Robinson." />
    </Head>
    <Navbar/>
    <main>
      {children}
    </main>
    <Footer />
  </>
}

export default Layout;