import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [success, setSuccess] = useState(false); // <-- FIXED

  // ---------------- VALIDATION ----------------
  const validateForm = () => {
    let temp = {};
    let valid = true;

    if (!formData.name.trim()) {
      temp.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      temp.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      temp.email = "Invalid email";
      valid = false;
    }

    if (!formData.subject.trim()) {
      temp.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      temp.message = "Message is required";
      valid = false;
    }

    setErrors(temp);
    return valid;
  };

  // ---------------- SUBMIT HANDLER ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSuccess(false);
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_t4706qd",
        "template_kcx8zbk",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "65Q3yvEQrgQTxTo92"
      );

      console.log("EmailJS Result:", result);

      setSuccess(true);
      setStatus("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});

    } catch (error) {
      console.error("EmailJS Error:", error);
      setSuccess(false);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen">
      <section ref={ref} className="hero min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE INFO */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question ? Drop a Message !
                </p>
              </div>

              <div className="space-y-6">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">harrishguru2005@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Erode , Tamilnadu 638312</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl"
            >
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">

                {/* INPUTS */}
                <div className="grid grid-cols-1 gap-6">

                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      }`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      }`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      }`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex justify-center items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>

              </form>

              {/* STATUS MESSAGE */}
              {status && (
                <p
                  className={`mt-4 text-center ${
                    success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
