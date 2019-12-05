import React from 'react'
import Head from 'next/head';

export default function CommonHead() {
  return (
    <Head>
      <title>Home | Chennai Web Group</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>
  )
}