import React from 'react'

export default function ResourceLink(props) {

  let { text, link } = props;

  if (link) {
    return <a href={link} target="_blank" className="hover:underline cursor-pointer" > {text} </a>
  }

  return text;
}