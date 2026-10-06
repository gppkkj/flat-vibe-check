export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#f8f7ff]"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Have questions? We'd love to hear from you.
        </p>

        <form className="space-y-6 mt-12">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-8
            py-4
            rounded-xl
            transition
            "
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}