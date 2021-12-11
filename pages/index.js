import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hypercrafters official website!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my coding website!." />
        <p className="description">
          I made text coding projects here.
        </p>
        <p className="description">
          Visit my website <a href="https://hypercraftermc.wixsite.com/home">here</a>
        </p>     
    </main>
    
      <Footer />
    </div>
  )
}
