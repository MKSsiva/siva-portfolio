import React from 'react'

export default function Navbar() { 
  const links = ['home','about','works','contact']
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg">Sivaprakash M | Full Stack Developer</div>
        <ul className="hidden md:flex space-x-6 text-sm">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} className="capitalize hover:text-blue-600">{l}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <a href="#contact" className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Contact</a>
        </div>
      </div>
    </nav>
  )
}
