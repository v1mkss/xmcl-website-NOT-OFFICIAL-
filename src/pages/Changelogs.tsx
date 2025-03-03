
import { motion } from "framer-motion";

const Changelogs = () => {
  const changelogs = [
    {
      version: "v0.49.1",
      date: "June 15, 2023",
      changes: [
        "Fixed an issue with Forge installer",
        "Improved performance when loading large modpacks",
        "Updated translations for multiple languages",
        "Fixed UI glitches in dark mode"
      ]
    },
    {
      version: "v0.49.0",
      date: "June 1, 2023",
      changes: [
        "Added support for Minecraft 1.20",
        "Integrated with Modrinth API v2",
        "Added new instance creation wizard",
        "Improved resource management system",
        "Fixed multiple bugs related to mod installation"
      ]
    },
    {
      version: "v0.48.2",
      date: "May 10, 2023",
      changes: [
        "Fixed compatibility issues with certain mod loaders",
        "Improved memory usage during game launch",
        "Updated CurseForge integration",
        "Fixed issues with Java detection on some systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyan">Changelogs</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Stay up to date with the latest improvements and fixes to X Minecraft Launcher
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {changelogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-accent">{log.version}</h2>
                <span className="text-white/60 text-sm">{log.date}</span>
              </div>
              
              <ul className="space-y-2">
                {log.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelogs;
