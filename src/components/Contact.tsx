import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_g5j4afc",
        "template_dyhawq6",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "yegotisaithanushkumar143@gmail.com",
        },
        "FxBxvAcsY4fwv5pKp"
      );

      console.log("Email sent successfully:", result);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      id="contact"
      key={animationKey}
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setAnimationKey((k) => k + 1)}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Reach Me</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always excited to collaborate or discuss innovative ideas.
              Whether it's tech, AI, or just a good conversation—reach out!
              <br />
              <br />
              You can also connect with me through these platforms:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  href: "https://github.com/Saithanushkumar143",
                  label: "GitHub",
                  icon: "💻",
                  bg: "bg-black",
                },
                {
                  href: "https://www.linkedin.com/in/sai-thanush-kumar-yegoti-58220b299/",
                  label: "LinkedIn",
                  icon: "🔗",
                  bg: "bg-[#0072b1]",
                },
                {
                  href: "https://www.instagram.com/saithanushkumar_143",
                  label: "Instagram",
                  icon: "📸",
                  bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
                },
                {
                  href: "mailto:yegotisaithanushkumar143@gmail.com",
                  label: "Email",
                  icon: "📧",
                  bg: "bg-red-500/70",
                },
              ].map((item, index) => (
                <motion.a
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 bg-slate-800 hover:bg-white/10 hover:text-white shadow-md"
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center text-white text-xl`}>
                    {item.icon}
                  </div>
                  <p className="text-white font-medium">{item.label}</p>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400">📍</span>
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400">Visakhapatnam, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(56,189,248,0.4)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none disabled:opacity-50"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Yegoti Sai Thanush Kumar. Built with passion and code.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            "The future belongs to those who prepare for it today."
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
