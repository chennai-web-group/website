import React from 'react';
import Head from 'next/head';

export default function CommonHead(props) {
  let { title = 'Chennai Web Group' } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.png" />
      <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" />
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
  );
}
