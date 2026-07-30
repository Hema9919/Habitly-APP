const About = () => {
  return (
    <>
      {/* ============================ ABOUT PAGE ============================ */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-4 text-3xl font-black">About Habitly</h1>
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#2E3B31]/5">
          <p className="text-[#2E3B31]/70">
            Habitly is a tiny habit tracker built as a live coding recap. One
            page to mark habits done for the day, one page to see today's
            progress, and this page — fully static, a good place to practice
            plain JSX without any state at all.
          </p>
          <p className="text-[#2E3B31]/70">
            Built with React, React Router, and Tailwind CSS.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
