import React from 'react'

export default function About() {
  return (
    <section id="about">
      <h2 className="text-2xl font-semibold text-blue-700">About</h2>
      <p className="mt-3 text-gray-700">I am a Full Stack Developer with 2 years of experience building efficient and user-friendly web applications. I specialize in JavaScript, Vue.js, React, Laravel, and RESTful APIs. Passionate about clean UI, responsive design, and scalable backend systems. I'm seeking full-time opportunities to build impactful digital products.</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold"> Skills</h4>
          <ul className="mt-2 text-sm space-y-1 text-gray-700">
            <li>HTML,CSS,JavaScript,</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>React, Vue.js, Angular</li>
            <li>Node.js, Laravel, PHP</li>
            <li>MYSQL,GIT</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Interests</h4>
          <p className="text-sm text-gray-700 mt-2">Building UIs, API design, performance optimization, and mentoring junior developers.</p>
        </div>
      </div>
    </section>
  )
}
