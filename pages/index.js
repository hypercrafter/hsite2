import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my coding website!." />
        <p className="description">
          I made text coding projects here. Visit my main website at hypercraftermc.wixsite.com/home
        </p>
      </main>
    <iframe src="https://hypercraftermc.wixsite.com/home" title="My main website"></iframe>
      <Footer />
    </div>
  )
}
