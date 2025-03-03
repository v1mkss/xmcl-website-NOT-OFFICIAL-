
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from './LanguageContext';

export const DownloadButton = () => {
  const { translations } = useLanguage();
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.a 
          href="#download" 
          className="ml-1 bg-accent text-white rounded-lg relative overflow-hidden group flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-400 to-accent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
          <span className="relative flex items-center py-2 px-3">
            <Download size={20} className="mr-1 group-hover:animate-bounce" />
            <span className="relative overflow-hidden">
              <span className="block transition-transform group-hover:-translate-y-full duration-300">v0.49.1</span>
              <span className="absolute top-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {translations.download.split(' ')[0]}
              </span>
            </span>
          </span>
        </motion.a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{translations.download}</p>
      </TooltipContent>
    </Tooltip>
  );
};
