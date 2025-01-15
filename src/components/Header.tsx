function Header() {
  return (
    <header className="flex justify-end  items-center mb-16 px-6">
      <nav>
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#about" className="hover:text-black hover:font-semibold">About</a></li>
          <li><a href="#projects" className="hover:text-black hover:font-semibold">Projects</a></li>
          <li><a href="#contact" className="hover:text-black hover:font-semibold">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
