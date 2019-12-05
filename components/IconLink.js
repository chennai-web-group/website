import React from 'react';

export default function ResourceLink(props) {
  let { icon: Icon, link } = props;

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="mx-6 cursor-pointer" />
      </a>
    );
  }

  return '';
}
