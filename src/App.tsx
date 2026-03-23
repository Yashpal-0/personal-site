/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Database, 
  Layers, 
  GraduationCap, 
  Trophy,
  Briefcase,
  Terminal,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-2">
    <Icon className="w-5 h-5 text-zinc-400" />
    <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 font-bold">{title}</h2>
  </div>
);

const ExperienceItem = ({ role, company, period, location, points }: any) => (
  <div className="mb-8 group">
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
      <h3 className="text-sm font-bold text-zinc-100 italic font-serif">{role}</h3>
      <span className="text-[10px] font-mono text-zinc-500">{period}</span>
    </div>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs text-zinc-400 font-medium">{company}</span>
      <span className="text-[10px] text-zinc-600 font-mono">[{location}]</span>
    </div>
    <ul className="space-y-2">
      {points.map((point: string, idx: number) => (
        <li key={idx} className="flex gap-3 text-xs text-zinc-400 leading-relaxed">
          <span className="text-zinc-700 mt-1.5">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, stack, github, demo, points }: any) => (
  <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all group">
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-sm font-bold text-zinc-200">{title}</h3>
      <div className="flex gap-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors">
            <Github className="w-4 h-4" />
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
    <div className="text-[10px] font-mono text-zinc-500 mb-3 uppercase tracking-tight">{stack}</div>
    <ul className="space-y-1">
      {points.map((point: string, idx: number) => (
        <li key={idx} className="text-[11px] text-zinc-400 flex gap-2">
          <span className="text-zinc-700">›</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const skills = {
    languages: ["C/C++", "Python", "HTML/CSS", "JavaScript", "TypeScript", "Dart", "Kotlin", "Swift", "SQL"],
    mlAi: ["PyTorch", "HuggingFace", "LLMs", "Prompt Engineering", "scikit-learn"],
    dataTools: ["Pandas", "NumPy", "Jupyter", "Git", "Postman", "Android Studio"],
    frameworks: ["Flutter", "React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Firebase", "Redis", "WebSockets", "Linux"]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-100 selection:text-zinc-900">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="relative max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Header Section */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100 mb-2">
                  YASHPAL YADAV
                </h1>
                <p className="text-lg md:text-xl font-serif italic text-zinc-400">
                  Researcher & Full-Stack Engineer
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                <a href="tel:+919792744442" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
                  <Phone className="w-3 h-3" /> +91 9792744442
                </a>
                <a href="mailto:yashpalyadav050@gmail.com" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
                  <Mail className="w-3 h-3" /> yashpalyadav050@gmail.com
                </a>
                <a href="https://linkedin.com/in/yashpal-yadav-990278221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <a href="https://github.com/Yashpal-0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors">
                  <Github className="w-3 h-3" /> GitHub
                </a>
              </div>
            </div>
            
            <div className="max-w-2xl">
              <p className="text-sm leading-relaxed text-zinc-400 border-l-2 border-zinc-800 pl-6 py-2 italic font-serif">
                B.Tech and MS by Research student at IIIT Hyderabad specializing in NLP, LLM reasoning, and table understanding. 
                Experienced in full-stack and mobile development with published apps on App Store and Play Store. 
                Proven research background in improving LLM numerical reasoning accuracy by 32% through tool-augmented systems.
              </p>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Experience & Projects */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Experience */}
            <section>
              <SectionHeader icon={Briefcase} title="Professional Experience" />
              
              <ExperienceItem 
                role="Undergraduate Researcher"
                company="Language Technologies Research Center"
                period="July 2024 - Present"
                location="IIIT Hyderabad"
                points={[
                  "Developed a hybrid methodology to improve LLM (GPT-3.5, FlanT5) performance on numerical reasoning and structured table-based QA tasks.",
                  "Engineered a tool-augmented system that allows an LLM to delegate arithmetic operations to an external Python 'calculator' module, improving calculation accuracy from 60% to 92%.",
                  "Designed and validated robust prompt-engineering strategies, demonstrating that a Pandas DataFrame-style (DFLoader) table representation achieved 88% accuracy on structure-understanding tasks.",
                  "Fine-tuned and evaluated models on the FeTaQA benchmark for free-form generative table QA, achieving a 28.5 BLEU score."
                ]}
              />

              <ExperienceItem 
                role="Frontend Developer Intern"
                company="SKDIV Industries Private Limited"
                period="May 2024 - Nov 2025"
                location="Remote"
                points={[
                  "Architected and implemented the 'CREW Calling' feature, leveraging Flutter and Livekit SDK for high-quality audio communication.",
                  "Engineered the core real-time messaging frontend using Flutter, implementing secure WebSocket connections.",
                  "Implemented robust offline capabilities by integrating IndexedDB with a Redis cache backend.",
                  "Enhanced user engagement by integrating Firebase Cloud Messaging (FCM) for reliable push notifications."
                ]}
              />

              <ExperienceItem 
                role="Undergraduate Researcher"
                company="Software Engineering Research Center"
                period="May 2023 - July 2024"
                location="IIIT Hyderabad"
                points={[
                  "Developed an interactive web-based platform funded by MHRD for students across India to learn Operating System concepts.",
                  "Led the development of 'Process Life Cycle', 'Context Switching', and 'Scheduling' experiments using HTML, CSS, and JavaScript.",
                  "Integrated Express.js for backend operations, reducing data processing time by 15%."
                ]}
              />
            </section>

            {/* Projects */}
            <section>
              <SectionHeader icon={Terminal} title="Selected Projects" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard 
                  title="Greddit"
                  stack="MongoDB, Express.js, React.js, Node.js"
                  github="https://github.com/Yashpal-0/Greddit"
                  points={[
                    "Full-stack Reddit-like social platform.",
                    "Real-time chat powered by MongoDB Atlas."
                  ]}
                />
                <ProjectCard 
                  title="ML Algorithms from Scratch"
                  stack="scikit-learn, Pandas, NumPy, Python"
                  points={[
                    "Implemented 6 ML algorithms from scratch including PCA, K-means, and Decision Trees.",
                    "Evaluated performance against standard libraries."
                  ]}
                />
                <ProjectCard 
                  title="CShell"
                  stack="C, Linux, System Calls"
                  github="https://github.com/Yashpal-0/CShell"
                  points={[
                    "Custom Linux terminal leveraging kernel system calls.",
                    "Supports process management and I/O redirection."
                  ]}
                />
                <ProjectCard 
                  title="xv6 Process Scheduler"
                  stack="C, Kernel Programming, Linux"
                  github="https://github.com/Yashpal-0/xv6-scheduling"
                  points={[
                    "Developed FCFS, PBS, and MLFQ schedulers.",
                    "Modified core xv6 kernel modules for system call tracing."
                  ]}
                />
              </div>
            </section>
          </div>

          {/* Right Column: Skills, Education, Achievements */}
          <div className="lg:col-span-4 space-y-16">
            
            {/* Skills */}
            <section>
              <SectionHeader icon={Code2} title="Technical Stack" />
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3 font-bold">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono rounded uppercase tracking-tighter hover:border-zinc-600 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3 font-bold">ML / AI</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.mlAi.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono rounded uppercase tracking-tighter hover:border-zinc-600 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3 font-bold">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono rounded uppercase tracking-tighter hover:border-zinc-600 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3 font-bold">Data & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.dataTools.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono rounded uppercase tracking-tighter hover:border-zinc-600 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeader icon={GraduationCap} title="Education" />
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xs font-bold text-zinc-200">IIIT Hyderabad</h4>
                    <span className="text-[10px] font-mono text-zinc-500">2022-2026</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">B.Tech + MS (Research) in CSE</p>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xs font-bold text-zinc-200">Banaras Hindu University</h4>
                    <span className="text-[10px] font-mono text-zinc-500">2018-2021</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">B.Sc. (Hons.) in Physics</p>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <SectionHeader icon={Trophy} title="Achievements" />
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1"><ChevronRight className="w-3 h-3 text-zinc-600" /></div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Achieved a <span className="text-zinc-200 font-medium">top 2% rank</span> in JEE Mains 2018, out of 1.2 million candidates.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1"><ChevronRight className="w-3 h-3 text-zinc-600" /></div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Letter of Appreciation from <span className="text-zinc-200 font-medium">Smriti Zubin Irani</span>, MHRD minister, for academic excellence.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            © 2026 Yashpal Yadav — Built with React & Tailwind
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Yashpal-0" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/yashpal-yadav-990278221" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
