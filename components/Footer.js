import React from 'react';
import variables from '../styles/variables';

const { primaryColor, fontColor } = variables;

export default function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 w-full p-1 text-white text-center">
        &copy; 2020 Chennai Web Group
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
