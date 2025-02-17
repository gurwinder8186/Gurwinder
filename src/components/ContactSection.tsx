import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Send } from 'lucide-react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target as HTMLFormElement,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setIsSuccess(true)
          setIsError(false)
          setFormData({
            name: '',
            email: '',
            message: '',
          })
        },
        () => {
          setIsSuccess(false)
          setIsError(true)
        }
      )
  }

  return (
    <>
      <section className="py-12 md:py-20 bg-gray-100 text-center scroll-smooth relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">
          Contact Me
        </h2>
        <div className="mt-6 flex flex-col items-center mb-8 md:mb-12">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              autoComplete="on"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              autoComplete="on"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
              >
                Send Message
                <Send size={16} />
              </button>
            </div>
          </form>

          {isSuccess && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {isError && (
            <p className="text-red-500 mt-4">Oops! Something went wrong.</p>
          )}
        </div>

        <a
          href="#header"
          className="flex items-center space-x-3 absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center justify-center h-10 w-5 border-2 border-gray-500 rounded-full group hover:bg-black transition">
            <span className="text-gray-500 text-2xl animate-bounce-reverse group-hover:text-white transition">
              ↑
            </span>
          </div>
        </a>
      </section>

      <footer className="py-4 text-center bg-gray-200">
        <p>&copy; 2024 Portfolio | Gurwinder Singh</p>
      </footer>
    </>
  )
}

export default ContactSection
