import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div className="navbar py-7 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">My Portfolio</h1>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 
       -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none duration-700 ease-in-out z-40
       ${isScrolled ? 'top-0 opacity-100' : 'top-10 opacity-0'}`}>
        <li>
            <a href="#home" className="sm:text-lg text-base text-white hover:text-gray-600">Home</a>
        </li>
        <li>
            <a href="#about" className="sm:text-lg text-base text-white hover:text-gray-600">About</a>
        </li>
        <li>
            <a href="#projects" className="sm:text-lg text-base text-white hover:text-gray-600">Projects</a>
        </li>
        <li>
            <a href="#contact" className="sm:text-lg text-base text-white hover:text-gray-600">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;