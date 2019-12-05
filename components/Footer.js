import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 w-full p-1 text-white text-center">
        &copy; 2019 Chennai Web Group
      </footer>  
      
      <style jsx>{`
        footer {
          background: #5ba150;
          color: white;
        }
      `}</style>
    </div>
  )
}