
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  // Initialize language based on localStorage and add listener for changes
  useEffect(() => {
    const updateLanguage = () => {
      const savedLang = localStorage.getItem('language') || 'en';
      setCurrentLanguage(savedLang);
    };
    
    // Initial language set
    updateLanguage();
    
    // Listen for storage changes (from other components)
    window.addEventListener('storage', updateLanguage);
    
    // Custom event listener for immediate language updates
    window.addEventListener('languageChange', updateLanguage);
    
    return () => {
      window.removeEventListener('storage', updateLanguage);
      window.removeEventListener('languageChange', updateLanguage);
    };
  }, []);

  // Translations
  const translations = {
    en: {
      title: "X Minecraft Launcher",
      subtitle: "An Open Source launcher with Modern UX",
      download: "Download v0.49.1",
      github: "GitHub Repository",
      description: "X Minecraft Launcher (XMCL) is a modern Minecraft launcher that efficiently manages your modpacks, resource packs, mods, and shader packs. It integrates with Minecraft Forge, Fabric, Quilt, CurseForge and Modrinth."
    },
    ru: {
      title: "X Minecraft Launcher",
      subtitle: "Лаунчер с открытым исходным кодом и современным интерфейсом",
      download: "Скачать v0.49.1",
      github: "GitHub Репозиторий",
      description: "X Minecraft Launcher (XMCL) - это современный лаунчер Minecraft, который эффективно управляет вашими модпаками, ресурспаками, модами и шейдерами. Он интегрируется с Minecraft Forge, Fabric, Quilt, CurseForge и Modrinth."
    },
    uk: {
      title: "X Minecraft Launcher",
      subtitle: "Лаунчер з відкритим вихідним кодом та сучасним інтерфейсом",
      download: "Завантажити v0.49.1",
      github: "GitHub Репозиторій",
      description: "X Minecraft Launcher (XMCL) - це сучасний лаунчер Minecraft, який ефективно керує вашими модпаками, ресурспаками, модами та шейдерами. Він інтегрується з Minecraft Forge, Fabric, Quilt, CurseForge та Modrinth."
    }
  };

  // Current translation
  const text = translations[currentLanguage as keyof typeof translations] || translations.en;

  // Function to generate random number particles
  const generateRandomNumbers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    
    // Create 10 number particles
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      
      // Random number content
      particle.innerText = Math.floor(Math.random() * 10).toString();
      
      // Position relative to the button
      const x = buttonRect.left + Math.random() * buttonRect.width;
      const y = buttonRect.top + Math.random() * 10;
      
      // Styling
      particle.style.position = 'fixed';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.color = 'rgba(255, 255, 255, 0.8)';
      particle.style.fontSize = `${Math.random() * 10 + 10}px`;
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '100';
      particle.style.fontFamily = 'monospace';
      
      // Add to body
      document.body.appendChild(particle);
      
      // Animation
      const duration = Math.random() * 1000 + 1000;
      const xOffset = (Math.random() - 0.5) * 50;
      
      particle.animate([
        { transform: `translate(${xOffset}px, 0px)`, opacity: 1 },
        { transform: `translate(${xOffset}px, 100px)`, opacity: 0 }
      ], {
        duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      // Remove after animation
      setTimeout(() => {
        document.body.removeChild(particle);
      }, duration);
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Blurred background light effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-minecraft-darker-blue via-minecraft-dark-blue to-minecraft-dark-blue">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-[80px] opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[70px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main text content */}
          <motion.div 
            className="max-w-3xl space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="relative">
                {/* Toned down rainbow gradient background for text */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-400/40 to-blue-500/40 bg-[length:200%_100%] animate-shimmer opacity-40 blur-lg rounded-lg"></span>
                
                {/* Text with color shift animation but not too bright */}
                <span className="relative animate-color-shift">
                  {text.title}
                </span>
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-gradient-green">{text.subtitle}</span>
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap gap-6 justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="#download" 
                className="py-4 px-8 bg-accent text-white rounded-md font-medium flex items-center text-lg relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-400 to-accent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"></span>
                <span className="relative flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  {text.download}
                </span>
              </motion.a>
              
              <motion.a 
                href="https://github.com/Voxelum/x-minecraft-launcher" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-4 px-8 bg-white/10 text-white rounded-md font-medium text-lg relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onMouseEnter={generateRandomNumbers}
              >
                <span className="absolute inset-0 bg-white/20 bg-[length:200%_100%] animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  {text.github}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            className="mt-20 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="text-lg text-white/80">
              {text.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
