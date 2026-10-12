
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex min-h-[65vh] items-center bg-[#111111] px-5 py-24 text-white md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">
          Let's talk <span className="text-[#FF6A00]">for a chai.</span>
        </h1>
        <p className="mt-6 max-w-xl leading-8 text-gray-400">
          Have a question, project idea, or suggestion for the channel?
          We'd love to hear from you.
        </p>

        <a
          href="mailto:hello@chaiaurcode.com"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#FF6A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          <Mail size={18} />
          Get in touch
        </a>
      </div>
    </main>
  );
}
