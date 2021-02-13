import React from 'react';
import variables from '../styles/variables';

const { primaryColor, fontColor } = variables;

export default function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 w-full p-2 text-white text-center text-sm">
        &copy; 2020 Chennai Web Group
        &bull; Created and Maintained by <a className="text-white underline" href="https://bit.ly/crosaapps" target="_blank">Crosa Apps Ltd.</a>
      </footer>

      <style jsx>{`
        footer {
          background: ${primaryColor};
          color: white;
        }
      `}</style>
    </div>
  );
}
