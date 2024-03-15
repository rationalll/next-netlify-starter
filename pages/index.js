import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>nihilia</title>
        <link rel="icon" href="/watchcatbg.ico" />
      </Head>

      <main>
        <Header title="welcome, to nihilia" />
        <p className="description">
          what the fuck <code>is this??</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
