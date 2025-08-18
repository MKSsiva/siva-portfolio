import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="pt-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm Sivaprakash — Full Stack Developer
          </motion.h1>
          <p className="mt-4 text-gray-600">I build responsive web apps with React, Vue, and Laravel. I love crafting clean user interfaces and scalable backends.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/siva-portfolio/Siva_Resume.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded shadow">Download Resume</a>
            <a href="#works" className="border border-blue-600 text-blue-600 px-4 py-2 rounded">View Works</a>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Email:</strong> <a href="mailto:sivahrithick043@gmail.com" className="text-blue-600">sivahrithick043@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:9789478940" className="text-blue-600">9789478940</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sivaprakash-mk" target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/sivaprakash-mk</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/MKSsiva" target="_blank" rel="noreferrer" className="text-blue-600">github.com/MKSsiva</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
