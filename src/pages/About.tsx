export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-white">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12 text-center">
        About Me
      </h1>


      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

        {/* LEFT – EDUCATION CARD */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 flex flex-col items-center shadow-lg hover:scale-[1.02] transition">

          <img
            src="/rowanlogo.png"
            alt="Rowan University Logo"
            className="w-32 mb-6 object-contain"
          />

          <h2 className="text-2xl font-semibold mb-2 text-center">
            Bachelor of Arts
          </h2>

          <p className="text-gray-300 text-center">
            Computing & Informatics
          </p>

          <p className="text-gray-400 text-sm mt-2 text-center">
            Rowan University
          </p>

        </div>


        {/* RIGHT – ABOUT TEXT */}
        <div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I’m a full-stack developer focused on building modern,
            scalable web applications using React, TypeScript,
            Tailwind CSS, and Python/Django.
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I enjoy collaborating with designers and product
            managers, writing clean and maintainable code, and
            building products that deliver real value to users.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Currently expanding my cloud knowledge while gaining
            deeper experience with AWS after graduating from Rowan University by building full-stack
            applications and workflow automation tools.
          </p>

        </div>

      </div>


      {/* QUICK STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 text-center shadow hover:scale-[1.02] transition">
          <p className="text-green-400 text-lg font-semibold">
            AWS Certified
          </p>
          <p className="text-gray-400 text-sm">
            Cloud Practitioner
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 text-center shadow hover:scale-[1.02] transition">
          <p className="text-green-400 text-lg font-semibold">
            Full-Stack Developer
          </p>
          <p className="text-gray-400 text-sm">
            React • Python • APIs
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 text-center shadow hover:scale-[1.02] transition">
          <p className="text-green-400 text-lg font-semibold">
            Based In
          </p>
          <p className="text-gray-400 text-sm">
            New Jersey, USA
          </p>
        </div>

      </div>


      {/* TECH STACK */}
      <div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "React",
            "TypeScript",
            "JavaScript",
            "Python",
            "Django",
            "Flask",
            "Tailwind CSS",
            "Node.js",
            "Java",
            "C++",
            "PHP",
            "Flutter",
            "Swift",
            "MySQL",
            "MongoDB",
            "AWS",
            "Git",
            "REST APIs"
          ].map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-slate-700 transition"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}