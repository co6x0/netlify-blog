import React from 'react'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Helmet>
      <html lang="ja" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://fonts.googleapis.com/css?family=Courier+Prime:400,400i,700,700i&display=swap" rel="stylesheet" />
    </Helmet>
  )
}
