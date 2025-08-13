import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <Home />
        <About />
        <Resume />
        <Works />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Sivaprakash M — Built with React + Vite + Tailwind
      </footer>
    </div>
  )
}
