
import { Link } from "react-router-dom";
import {
  Coffee,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ChaiAurGyan",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/Chai-Aur-Gyan",
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-xl font-bold text-white"
            >
              <Coffee className="h-6 w-6 text-[#FF6A00]" />
              Chai <span className="text-[#FF6A00]">Aur</span> Gyan.
            </Link>

            <p className="max-w-sm text-sm leading-7">
              A little chai, a little code, and a lot of learning.
              Building skills and growing together, one line at a time.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="rounded-lg border border-white/10 p-3 transition-all hover:border-[#FF6A00] hover:bg-[#FF6A00]/10 hover:text-[#FF6A00]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-4 text-sm">
              <Link className="transition hover:text-[#FF6A00]" to="/">
                Home
              </Link>
              <Link className="transition hover:text-[#FF6A00]" to="/about">
                About Us
              </Link>
              <Link className="transition hover:text-[#FF6A00]" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Message */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Keep Learning
            </h3>

            <p className="mb-5 text-sm leading-7">
              Explore coding tutorials, build real projects, and
              keep improving your developer skills.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-medium text-[#FF6A00] transition hover:text-orange-400"
            >
              Let's connect <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Chai Aur Code. All rights reserved.
          </p>

          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 transition hover:text-[#FF6A00]"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
