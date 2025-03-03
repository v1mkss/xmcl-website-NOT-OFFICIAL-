
import { Link } from 'react-router-dom';
import { BookOpen, FileText, ExternalLink, Newspaper, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, languages } from './LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLanguageChange: (code: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, onLanguageChange }: MobileMenuProps) => {
  const { currentLanguage, translations } = useLanguage();
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="lg:hidden bg-minecraft-darker-blue/95 backdrop-blur-lg overflow-hidden"
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {[
            { icon: <BookOpen size={18} className="mr-2 text-cyan-400" />, text: translations.guide, href: "https://xmcl.app/en/guide/install", external: true },
            { icon: <FileText size={18} className="mr-2 text-green-400" />, text: translations.privacy, href: "/privacy", external: false },
            { icon: <ExternalLink size={18} className="mr-2 text-orange-400" />, text: translations.changelogs, href: "https://xmcl.app/en/changelogs/0.49.1", external: true },
            { icon: <Newspaper size={18} className="mr-2 text-yellow-400" />, text: translations.blogs, href: "https://xmcl.app/en/blog/", external: true },
            { 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-purple-400">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M20 15h2" />
                </svg>
              ), 
              text: translations.coreDocument, 
              href: "https://xmcl.app/en/core/", 
              external: true 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white py-2 px-4 hover:bg-white/10 rounded-md flex items-center" onClick={onClose}>
                  {item.icon}
                  {item.text}
                </a>
              ) : (
                <Link to={item.href} className="text-white py-2 px-4 hover:bg-white/10 rounded-md flex items-center" onClick={onClose}>
                  {item.icon}
                  {item.text}
                </Link>
              )}
            </motion.div>
          ))}
          
          <motion.div 
            className="py-2 px-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <p className="text-white/60 text-sm mb-2">{translations.changeLanguage}</p>
            <div className="flex gap-2">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    onClose();
                  }}
                  className={`px-3 py-1 text-sm rounded-md ${currentLanguage === lang.code ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {lang.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4 py-2 px-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://discord.gg/W5XVwYY7GQ" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </a>
          </motion.div>
          
          <motion.a 
            href="#download" 
            className="text-center py-2 px-4 bg-accent hover:bg-accent/90 text-white rounded-md transition-all duration-300 shadow-lg flex items-center justify-center"
            onClick={onClose}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} className="mr-2" />
            {translations.download}
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
