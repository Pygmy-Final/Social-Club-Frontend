import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#516F91] to-[#326094] h-screen ...">

      <div className="h-screen scale-95 rounded-md ">

        <Head>
          <title>Social Club</title>
        </Head>
        <div >

          <Header />
        </div>
        {/* <nav class='bg-white shadow-sm p-6 space-y-6 w-64'> Navbar </nav> */}
        <div className='fixed top-5 left-0 right-0 rounded-md bg-[#E7ECEF] -z-50  h-[47.5rem] '>

          <main className='h-96'>
            <div className='h-14'>

            </div>

            <h1 className>sdfsdfs</h1>


          </main>
        </div>
      </div>

    </div>
  )
}
