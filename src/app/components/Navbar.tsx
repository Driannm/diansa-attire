import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="container mx-auto px-7 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-xl font-bold text-yellow-500">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Diansa Attire
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-pink-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all hover:after:w-full font-medium" 
              >
                {item.label}
                
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;
