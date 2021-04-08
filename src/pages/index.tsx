import Head from 'next/head'
export default function Home({ title = 'Project' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
