import Header from "./Header"
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>country searcher</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Header />
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout