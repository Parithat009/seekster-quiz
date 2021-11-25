import React from 'react'
import Head from 'next/head'
import UserViewPage from '../route/user'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>{'Seekster Test'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserViewPage />
    </React.Fragment>
  )
}

export default Home
