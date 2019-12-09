import React from 'react';

export default function ResourceLink(props) {
  let { text, link, className } = props;

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:underline cursor-pointer ${className}`}
      >
        {text}
      </a>
    );
  }

  return text;
}
