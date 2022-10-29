import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta property="og:type" content="article"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:description" content=" ..."/>
      <meta property="og:site_name" content=""/>
      <meta property="article:section" content="Animal"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="fb:admins" content="Admin" />
      <meta property="article:section" content="Animal" />
      <meta property="fb:admins" content="admin" />
      <meta property="og:type" content="video.other" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:publisher" content="https://www.facebook.com/animmalslove/" />
      <meta name="keywords" content="cats, cat, kitty, kitten , puppy, dog, dogs, animals, funny cats, funny kitten, amazing cats, amazing animals, home cats, home kitten, Animated GIF" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> 
    </Head>
  )
}
