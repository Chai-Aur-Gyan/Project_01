
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-[#FF6A00]"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#111111]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <Coffee className="h-6 w-6 text-[#FF6A00]" />
          Chai<span className="text-[#FF6A00]">Aur</span>Gyan
          <span className="text-[#FF6A00]"></span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-md bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 md:inline-flex"
        >
          Let's Connect <span className="ml-2">↗</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="rounded-md border border-white/10 p-2 text-white hover:border-[#FF6A00] md:hidden"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#151515] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-[#FF6A00] px-5 py-3 text-center font-semibold text-white"
            >
              Let's Connect ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
