import { useState, useEffect } from 'react';
import { Menu, X,Terminal } from 'lucide-react'
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Navbar() { 

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { name: 'Inicio', href: '#inicio'},
        { name: 'Sobre mi', href: '#sobre-mi'},
        { name: 'Stack', href: '#stack'},
        { name: 'Proyectos', href: '#proyectos'},
        { name: 'Experiencia', href: '#experiencia'},
        { name: 'GitHub', href: '#github'},
        { name: 'Contacto', href: '#contacto'},
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-navbar py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600/20 border border-indigo-500/30 p-2 rounded-lg text-indigo-400">
                            <Terminal size={20}/>
                        </div>
                        <a href="#inicio" className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
                            <span>Sarminick</span><span className="text-indigo-500">.Dev</span>
                        </a>
                    </div>
                    {/* Desktop Nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">

                            {navLinks.map((link) => (
                                <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 after:transition-all hover:after:w-full"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 border-l border-slate-800 pl-6">
                            <a href="https://github.com/sarminick" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FiGithub size={18}/>
                            </a>
                            <a href="https://www.linkedin.com/in/diego-sarmiento-07b0b53b7/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FiLinkedin size={18}/>
                            </a>
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
                
            </div>
            {/* Mobile Drawer menu */}
            <div className={`md:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-lg border-b border-slate-950/20 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -Ntranslate-y-4 pointer-events-none'}`}>
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-all text-left"

                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-4 pt-4 border-t border-slate-900 px-3">
                        <a href="https://github.com/sarminick" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"
                        >
                            <FiGithub size={18}/>
                        </a>
                        <a href="https://www.linkedin.com/in/diego-sarmiento-07b0b53b7/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                            <FiLinkedin size={18}/>
                        </a>

                    </div>
                </div>
            </div>

        </nav>

    )
}