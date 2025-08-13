import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold text-blue-700">Contact</h2>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <form action="mailto:sivahrithick043@gmail.com" method="post" encType="text/plain" className="space-y-3">
          <input name="name" placeholder="Your name" className="w-full p-2 border rounded" required />
          <input name="email" type="email" placeholder="Your email" className="w-full p-2 border rounded" required />
          <textarea name="message" rows="4" placeholder="Message" className="w-full p-2 border rounded" required />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
