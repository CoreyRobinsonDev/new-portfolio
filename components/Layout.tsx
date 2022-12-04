import { ReactNode } from "react";
import Head from "next/head";

import Navbar from "./Navbar";

const Layout = ({ children }: {children: ReactNode}) => {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Online web portfolio for Corey Robinson." />
    </Head>
    <Navbar/>
    <main>
      {children}
    </main>
  </>
}

export default Layout;