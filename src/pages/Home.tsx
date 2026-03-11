import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaPython,
  FaJava,
  FaAws
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiCplusplus,
  SiSwift
} from "react-icons/si";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      {/* HERO TILE */}
      <div className="max-w-6xl w-full bg-slate-900 border border-slate-700 rounded-xl p-10 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* PROFILE SECTION */}
          <div className="flex justify-center">

            <div className="relative flex items-center justify-center">

              {/* Glow Ring */}
              <div className="absolute w-72 h-72 rounded-full bg-green-500 blur-3xl opacity-20 animate-pulse"></div>

              {/* Profile Tile */}
              <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:scale-[1.03] transition">

                <img
                  src="/profilepic.png"
                  alt="Danny Miguel"
                  className="w-64 h-64 object-cover rounded-lg"
                />

              </div>

            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hi, I’m Danny Miguel
            </h1>

            <p className="text-gray-300 mb-6 max-w-xl">
              Full Stack Developer focused on building scalable web
              applications using modern technologies. I specialize
              in React, TypeScript, Tailwind CSS, and Python/Django.
              I look forward to working with you.
            </p>


            {/* TECH STACK */}
            <h2 className="text-xl font-semibold text-gray-200 mb-3">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-4 mb-8">

              <Tech icon={<FaReact />} name="React" />
              <Tech icon={<SiTypescript />} name="TypeScript" />
              <Tech icon={<SiTailwindcss />} name="Tailwind" />
              <Tech icon={<SiJavascript />} name="JavaScript" />

              <Tech icon={<FaPython />} name="Python" />
              <Tech icon={<SiDjango />} name="Django" />

              <Tech icon={<FaJava />} name="Java" />
              <Tech icon={<SiCplusplus />} name="C++" />
              <Tech icon={<SiSwift />} name="Swift" />

              <Tech icon={<SiFlutter />} name="Flutter / Dart" />

              <Tech icon={<SiMysql />} name="MySQL" />
              <Tech icon={<SiMongodb />} name="MongoDB" />

              <Tech icon={<FaAws />} name="AWS" />

            </div>


            {/* SOCIAL LINKS */}
            <div className="flex gap-6 items-center mb-6">

              <a
                href="https://github.com/DCM-Star"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition transform hover:scale-110 text-4xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/danny-miguel-659411344/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition transform hover:scale-110 text-4xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:dannymiguel3@gmail.com"
                className="text-gray-300 hover:text-green-400 transition transform hover:scale-110 text-4xl"
              >
                <FaEnvelope />
              </a>

            </div>


            {/* RESUME BUTTON */}
            <a
              href="/Danny_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              View Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}


/* TECH TILE COMPONENT */

function Tech({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-gray-300 hover:bg-green-500 hover:text-white transition shadow-lg hover:scale-[1.05]">

      <span className="text-xl">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {name}
      </span>

    </div>
  );
}