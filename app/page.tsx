"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTerminal, FiDownload } from "react-icons/fi";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-blue-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeUp}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-blue-400 mb-2">
            <FiTerminal size={24} />
            <span className="font-mono tracking-wider text-sm">DEVELOPER PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {portfolioData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-neutral-400">
            {portfolioData.role}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400 max-w-2xl mt-4">
            {portfolioData.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors">
              <FiMail size={18} /> Email
            </a>
            <a href={`https://${portfolioData.contact.github}`} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors">
              <FiGithub size={18} /> GitHub
            </a>
            <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors">
              <FiLinkedin size={18} /> LinkedIn
            </a>
            <a 
              href={portfolioData.contact.cv} 
              download="Taha_Eren_Afacan_CV.pdf" 
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors">
              <FiDownload size={18} /> CV
            </a>
          </div>
        </motion.section>

        <div className="h-px w-full bg-neutral-900 my-16"></div>

        {/* SKILLS SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Yetenekler & Teknolojiler</h3>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <div className="h-px w-full bg-neutral-900 my-16"></div>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Deneyim</h3>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l border-neutral-800">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5"></div>
                <h4 className="text-xl font-medium text-white">{exp.title}</h4>
                <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1 mb-4">
                  <span className="font-semibold text-neutral-300">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.date}</span>
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-neutral-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▹</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px w-full bg-neutral-900 my-16"></div>

        {/* EDUCATION & CERTS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Eğitim & Sertifikalar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors">
                <h4 className="text-lg font-medium text-white">{edu.degree}</h4>
                <p className="text-neutral-400 mt-1">{edu.institution}</p>
                <p className="text-sm text-neutral-500 mt-3">{edu.date}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Taha Eren Afacan. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><FiMapPin size={14}/> {portfolioData.contact.location}</span>
            <span className="flex items-center gap-1"><FiPhone size={14}/> {portfolioData.contact.phone}</span>
          </div>
        </footer>

      </div>
    </main>
  );
}