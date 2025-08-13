import React from 'react'

export default function Resume() {
  return (
    <section id="resume">
      <h2 className="text-2xl font-semibold text-blue-700">Work Experience</h2>
      <div className="mt-4 space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Software Engineer — Renga Technologies</h3>
          <p className="italic text-sm">Jan 2023 – Dec 2024</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Built dashboards & forms using Vue.js and React.</li>
            <li>Developed REST APIs with Node.js, PHP, & Laravel.</li>
            <li>Optimized MySQL queries and implemented responsive UIs.</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Education</h3>
          <p className="mt-1">B.E. Mechanical Engineering — IJCET College (Jun 2012 – Jun 2016) | CGPA: 7.2/10</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Certifications</h3>
          <p className="mt-1">Web Developer Course — Renga Technologies (Jan 2023 – Jun 2023)</p>
          <p className="mt-1">Trained in Vue.js, React.js, Node.js, Laravel, PHP, MySQL, Tailwind CSS, Bootstrap, Filament</p>
        </div>
      </div>
    </section>
  )
}
