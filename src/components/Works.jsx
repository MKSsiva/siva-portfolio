import React from 'react'

const projects = [
  { title: 'Pandiselvi Crackers', url: 'http://pandiselvicrackers.com/' },
  { title: 'Nile Tours', url: 'http://niletours.in/' },
  { title: 'Royal Transcripts', url: 'http://royaltranscripts.com/' },
  { title: 'Sri Krishna Fancy Crackers', url: 'http://srikrishnafancycrackers.com/' },
  { title: 'Nayagi Crackers', url: 'http://nayagicrackers.co.in/' },
  { title: 'Ganapathy Crackers', url: 'http://ganapathycrackers.com/' },
  { title: 'Kannan Crackers', url: 'http://kannancrackers.in/' },
  { title: 'Hariharan Crackers', url: 'http://hariharancrackers.com/' },
  { title: 'Ariharan Crackers', url: 'https://ariharancrackers.in/' },
  { title: 'Gordon Tours', url: 'http://gordontours.com/' },
]

export default function Works() {
  return (
    <section id="works">
      <h2 className="text-2xl font-semibold text-blue-700">Works</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.map(p => (
          <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="block bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-2">Live project — click to view</p>
          </a>
        ))}
      </div>
    </section>
  )
}
