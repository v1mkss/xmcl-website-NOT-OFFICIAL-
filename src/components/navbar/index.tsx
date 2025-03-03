
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavItems } from './NavItems';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SocialLinks } from './SocialLinks';
import { DownloadButton } from './DownloadButton';
import { MobileMenu } from './MobileMenu';
import { LanguageProvider, useLanguage } from './LanguageContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <LanguageProvider>
      <NavbarContent 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
    </LanguageProvider>
  );
}

interface NavbarContentProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavbarContent = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }: NavbarContentProps) => {
  const { setCurrentLanguage } = useLanguage();
  
  return (
    <TooltipProvider>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-minecraft-darker-blue/90 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-all duration-300 hover:opacity-90">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/XMCL/a39086fb-5549-43c0-a69e-217c717d938e.png" alt="X Minecraft Launcher" className="h-10 w-10" />
            </motion.div>
            <span className="font-bold text-lg tracking-tight">X Minecraft Launcher</span>
          </Link>
          
          <NavItems />
          
          <div className="hidden lg:flex items-center gap-2 ml-3">
            <LanguageSwitcher />
            <SocialLinks />
            <DownloadButton />
          </div>
          
          <motion.button 
            className="lg:hidden block text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onLanguageChange={setCurrentLanguage}
        />
      </motion.header>
    </TooltipProvider>
  );
};
