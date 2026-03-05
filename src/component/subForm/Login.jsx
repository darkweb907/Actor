import React, { useState } from "react";

const ActorContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-10 max-w-lg w-full text-white"
      >
        <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">
          Get In Touch
        </h2>

        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Role, Collaboration, or Inquiry"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-white"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-xl transition duration-300 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ActorContactForm;