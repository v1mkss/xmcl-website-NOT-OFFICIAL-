
import { useState } from "react";

const Guide = () => {
  const [activeTab, setActiveTab] = useState("getting-started");
  
  const guides = [
    {
      id: "getting-started",
      title: "Getting Started",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Getting Started with X Minecraft Launcher</h3>
          <p>Welcome to X Minecraft Launcher! This guide will help you get set up and running with our modern Minecraft launcher.</p>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Step 1: Download and Install</h4>
            <p>Download the launcher from our website and run the installer. Follow the on-screen instructions to complete the installation.</p>
            
            <h4 className="text-xl font-semibold">Step 2: First Launch</h4>
            <p>When you first open the launcher, you'll be prompted to log in with your Minecraft account. Enter your credentials to continue.</p>
            
            <h4 className="text-xl font-semibold">Step 3: Creating Your First Instance</h4>
            <p>Click on the "Add Instance" button to create your first Minecraft instance. You can choose from various versions and mod loaders.</p>
            
            <h4 className="text-xl font-semibold">Step 4: Installing Mods</h4>
            <p>To install mods, select your instance and click on the "Mods" tab. From here, you can browse and install mods from CurseForge or Modrinth, or add your own mod files.</p>
          </div>
        </div>
      )
    },
    {
      id: "mod-management",
      title: "Mod Management",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Managing Your Mods</h3>
          <p>X Minecraft Launcher makes managing your mods easier than ever. Here's how to get the most out of the mod management features.</p>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Installing Mods</h4>
            <p>You can install mods directly from CurseForge or Modrinth by browsing the catalogs in the launcher. Simply find the mod you want and click "Install".</p>
            
            <h4 className="text-xl font-semibold">Managing Updates</h4>
            <p>The launcher will automatically check for updates to your installed mods. When updates are available, you'll see a notification and can update with a single click.</p>
            
            <h4 className="text-xl font-semibold">Creating Mod Profiles</h4>
            <p>You can create different mod profiles for the same Minecraft instance. This lets you easily switch between different mod configurations without reinstalling.</p>
            
            <h4 className="text-xl font-semibold">Resolving Conflicts</h4>
            <p>If there are conflicts between mods, the launcher will alert you and provide options to resolve them.</p>
          </div>
        </div>
      )
    },
    {
      id: "resource-packs",
      title: "Resource Packs",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Working with Resource Packs</h3>
          <p>Resource packs can transform how your Minecraft world looks. Here's how to manage them in X Minecraft Launcher.</p>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Installing Resource Packs</h4>
            <p>Navigate to the "Resource Packs" tab in your instance settings. You can browse available packs or add your own by clicking "Add Resource Pack".</p>
            
            <h4 className="text-xl font-semibold">Ordering Resource Packs</h4>
            <p>The order of resource packs matters! Drag and drop packs in the list to change their priority. Packs at the top will override packs below them.</p>
            
            <h4 className="text-xl font-semibold">Previewing Changes</h4>
            <p>Some resource packs can be previewed directly in the launcher before launching Minecraft.</p>
            
            <h4 className="text-xl font-semibold">Managing Different Versions</h4>
            <p>The launcher will help you find resource packs that are compatible with your Minecraft version.</p>
          </div>
        </div>
      )
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Troubleshooting Common Issues</h3>
          <p>Encountering problems? Here are solutions to common issues with X Minecraft Launcher.</p>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Launcher Won't Start</h4>
            <p>Make sure your system meets the minimum requirements. Try running the launcher as administrator. Check if your antivirus is blocking the launcher.</p>
            
            <h4 className="text-xl font-semibold">Game Crashes on Launch</h4>
            <p>This is often caused by incompatible mods or not enough allocated memory. Try removing recently added mods or increasing the memory allocation in the launcher settings.</p>
            
            <h4 className="text-xl font-semibold">Slow Performance</h4>
            <p>Reduce the number of mods or allocate more memory to Minecraft. Optifine or similar performance mods can also help.</p>
            
            <h4 className="text-xl font-semibold">Login Issues</h4>
            <p>Make sure your Minecraft account is valid and your internet connection is stable. Try logging out and back in.</p>
          </div>
        </div>
      )
    }
  ];
  
  const activeGuide = guides.find(guide => guide.id === activeTab);
  
  return (
    <div className="min-h-screen pt-20 bg-minecraft-dark-blue">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          <span className="text-gradient-cyan">X Minecraft Launcher</span> Guide
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="glass-card rounded-xl p-4 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Guide Sections</h2>
              <nav className="flex flex-col space-y-1">
                {guides.map(guide => (
                  <button
                    key={guide.id}
                    onClick={() => setActiveTab(guide.id)}
                    className={`py-2 px-4 rounded-lg text-left transition-all ${
                      activeTab === guide.id
                        ? "bg-accent text-white"
                        : "hover:bg-white/10 text-white/80"
                    }`}
                  >
                    {guide.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-3/4">
            <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in">
              {activeGuide?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
