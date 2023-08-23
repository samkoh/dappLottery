import Head from 'next/head'
import Header from '@/components/Header'
import Jackpots from '@/components/Jackpots'
import { generateLotteries } from '@/services/fakeData'
import { getLotteries } from '@/services/blockchain'

// const data = [
//   {
//     id: 1,
//     title: 'Lorem',
//     description: 'Ipsum',
//     image: 'https://th.bing.com/th/id/OIP.OgJV4ijA74c2vrGdfshhbgHaGb?pid=ImgDet&rs=1',
//     prize: 10.32,
//     ticketPrice: 0.02
//   },
//   {
//     id: 2,
//     title: 'Poodle',
//     description: 'Poodle Lottery Challenge',
//     image: 'https://th.bing.com/th/id/OIP.OgJV4ijA74c2vrGdfshhbgHaGb?pid=ImgDet&rs=1',
//     prize: 20.18,
//     ticketPrice: 0.01
//   }
// ]

export default function Home({ jackpots }) {
  console.log(jackpots);
  // const jackpots = data
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <Jackpots jackpots={jackpots} />
      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
  // const data = generateLotteries(5)
  const data = await getLotteries()
  return {
    props: {
      jackpots: JSON.parse(JSON.stringify(data)),
    },
  }
}