import React from 'react'
import Head from 'next/head'

import Home from '../components/templates/Home/Home'

const index = () => {

  return (
    <>
      <Head>
        <title>Cabo Blanco Fishing Lodge SA</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="Cabo Blanco Fishing Lodge SA"
        />
        <meta
          name="description"
          content="Cabo Blanco Fishing Lodge SA"
        />
      </Head>
      <Home />
    </>
  )
}

export default index
