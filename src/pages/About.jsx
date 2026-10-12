
export default function About() {
  return (
    <main className="min-h-[65vh] bg-[#111111] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
          Who We Are
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">
          About <span className="text-[#FF6A00]">Us.</span>
        </h1>
        <p className="mt-6 max-w-2xl leading-8 text-gray-400">
          Chai Aur Gyan is a place to learn programming, explore
          development, build practical projects, and grow together
          as developers.
        </p>
      </div>
    </main>
  );
}
