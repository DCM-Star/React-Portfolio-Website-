export default function Contact() {
  return (
    <div className="min-h-screen text-white p-8 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">Contact & Credentials</h1>

      <p className="text-gray-400 text-center max-w-xl mb-12">
        Feel free to reach out to me at
        <span className="text-green-400"> dannymiguel3@gmail.com</span>.
        You can also view my professional credentials below.
      </p>


      {/* Credentials Grid */}
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">


        {/* ================= RESUME CARD ================= */}

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 flex flex-col items-center">

          <h2 className="text-2xl font-semibold mb-4">Resume</h2>

          {/* Resume Preview */}
          <img
            src="/Danny_Resume1.png"
            alt="Danny Miguel Resume"
            className="w-full rounded-lg border border-slate-700 shadow-lg hover:scale-[1.01] transition mb-6"
          />

          {/* Buttons */}
          <div className="flex gap-4">

            <a
              href="/Danny_Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition"
            >
              View Resume
            </a>

            <a
              href="/Danny_Resume.pdf"
              download
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-5 py-2 rounded-lg transition"
            >
              Download PDF
            </a>

          </div>
        </div>



        {/* ================= AWS CERT CARD ================= */}

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 flex flex-col items-center">

          <h2 className="text-2xl font-semibold mb-2">
            AWS Cloud Practitioner
          </h2>

          <p className="text-gray-400 text-sm mb-4 text-center">
            Foundational knowledge of AWS cloud services,
            architecture, security, and pricing.
          </p>

          {/* Certificate Preview */}
          <img
            src="/AWS_CCP_Certificate.png"
            alt="AWS Cloud Practitioner Certificate"
            className="w-full rounded-lg border border-slate-700 shadow-lg hover:scale-[1.01] transition mb-6"
          />

          {/* Buttons */}
          <div className="flex gap-4">

            <a
              href="/AWS_CCP_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition"
            >
              View Certificate
            </a>

            <a
              href="/AWS_CCP_Certificate.pdf"
              download
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-5 py-2 rounded-lg transition"
            >
              Download PDF
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}