import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// 1. Create a free form at https://formspree.io (use techazamansari@gmail.com)
// 2. Copy the form ID it gives you (looks like "xyzabcde")
// 3. Paste it below — submissions will then land in your inbox.
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fallback: if the form ID hasn't been set yet, open the user's mail client.
    if (FORMSPREE_FORM_ID === "YOUR_FORM_ID") {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:techazamansari@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-black focus:border-transparent focus:ring-2 focus:ring-purple-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white";

  return (
    <div id="contact" className=" border-b border-neutral-300 pb-20 dark:border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center my-10"
      >
        Get In Touch
      </motion.h2>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:techazamansari@gmail.com"
                className="flex items-center transition hover:text-purple-500"
              >
                <Mail className="text-purple-600 mr-4" size={24} />
                <span>techazamansari@gmail.com</span>
              </a>
              <a
                href="tel:+917906079480"
                className="flex items-center transition hover:text-purple-500"
              >
                <Phone className="text-purple-600 mr-4" size={24} />
                <span>+91 7906079480</span>
              </a>
              <div className="flex items-center">
                <MapPin className="text-purple-600 mr-4" size={24} />
                <span>Noida, India</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-purple-700 mb-1 dark:text-purple-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-purple-700 mb-1 dark:text-purple-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-purple-700 mb-1 dark:text-purple-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClasses}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-green-500">
                Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-500">
                Something went wrong. Please email me directly at
                techazamansari@gmail.com.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
