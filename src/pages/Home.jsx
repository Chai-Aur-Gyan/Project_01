
export default function Home() {
  return (
    <main className="flex min-h-[65vh] items-center bg-[#111111] px-5 py-20 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6A00]">
          Welcome to Chai Aur Gyan
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
          Let's learn, build
          <br />
          <span className="text-[#FF6A00]">and grow together.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
          A little chai, a little Gyan, and a lot of learning.
          Your journey into the world of development starts here.
        </p>
      </div>
    </main>
  );
}
