import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/5 fixed w-full z-50 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/mnt/data/PUSHKAR.MP4 LOGO (OFFICIAL).png" className="w-8 h-8" />
          <h1 className="text-lg tracking-wide">pushkar.mp4</h1>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#work" className="hover:text-green-400">Work</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* HERO WITH VIDEO BG */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Not just visuals
            <br />
            <span className="text-green-400">Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-400 max-w-xl mx-auto"
          >
            Creative Direction • Video Editing • Visual Storytelling
          </motion.p>
        </div>
      </section>

      {/* WORK - INTERACTIVE */}
      <section id="work" className="px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12">Selected Work</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
              className="relative aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 group"
            >
              {/* VIDEO PREVIEW */}
              {hovered === item ? (
                <video
                  src={`/videos/work${item}.mp4`}
                  autoPlay
                  muted
                  loop
                  className="absolute w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Project {item}
                </div>
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-sm">View Project</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m Pushkar, a creative director and video editor focused on building visuals that feel effortless yet impactful. My goal is simple — make people feel the product, not the process.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Work</h2>
        <p className="text-gray-400 mb-6">Available for projects & collaborations</p>
        <a
          href="https://instagram.com/pushkar.mp4"
          target="_blank"
          className="px-6 py-3 bg-green-400 text-black rounded-xl hover:bg-green-300 transition"
        >
          Contact Me
        </a>
      </section>

      {/* SCROLL EFFECT GLOW */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[120px] rounded-full top-1/3 left-1/3" />
      </div>
    </div>
  );
}
