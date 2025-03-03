
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  const sections = [
    {
      id: "intro",
      title: "Introduction",
      content: [
        "Thank you for using the X Minecraft Launcher (\"the Launcher\"), developed by XMCL developer team (\"the Organization\"). This document outlines the privacy terms and practices governing the collection, use, and protection of certain information when you use the Launcher. By using the Launcher, you agree to the terms outlined in this document."
      ]
    },
    {
      id: "usage-info",
      title: "Usage Information",
      content: [
        "The Launcher collects the following usage information:",
        [
          "Minecraft game start event",
          "Minecraft game exit event",
          "User login event"
        ]
      ]
    },
    {
      id: "additional-info",
      title: "Additional Information",
      content: [
        "In addition to the usage information mentioned above, the Launcher also collects the following data:",
        [
          "Minecraft startup arguments",
          "Game exit code",
          "User login service name"
        ]
      ]
    },
    {
      id: "device-id",
      title: "Device Identification",
      content: [
        "The Launcher generates a unique ID for your device. This ID will be used to identify your device as a single user. No personally identifiable information is associated with this device ID."
      ]
    },
    {
      id: "error-reporting",
      title: "Error Reporting",
      content: [
        "The Launcher collects unexpected errors and their associated error stacks for the purpose of identifying and resolving issues. This information is used to improve the stability and performance of the Launcher and is not used for any other purpose."
      ]
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      content: [
        "The Organization may share the collected information in the following circumstances:",
        [
          "With contributors and maintainers of the Launcher for the purpose of improving the software and providing support",
          "When required by applicable law or in response to a legal request",
          "To protect the rights, property, or safety of the Organization, its users, or others",
          "As part of an aggregated and anonymized dataset that does not identify individual users"
        ]
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "The Organization takes reasonable measures to protect the collected information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure."
      ]
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: [
        "The Launcher may integrate with or provide links to third-party services or websites. The Organization is not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policies of those third parties before providing any personal information."
      ]
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: [
        "The Launcher is not intended for use by individuals under the age of 13. The Organization does not knowingly collect personal information from children under 13. If you believe we have collected personal information from a child under 13, please contact us immediately."
      ]
    },
    {
      id: "changes",
      title: "Changes to this Privacy Terms",
      content: [
        "The Organization reserves the right to update or modify this privacy terms document at any time. We will notify you of any material changes by posting the updated version on our website or through other communication channels."
      ]
    },
    {
      id: "contact",
      title: "Contact Us",
      content: [
        "If you have any questions or concerns about this privacy terms document or our privacy practices, please contact us at cijhn@hotmail.com."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-minecraft-dark-blue">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyan">Privacy Terms</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Last updated: 22.02.2025, 17:01
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-accent">
                  {index + 1}. {section.title}
                </h2>
                
                {section.content.map((item, i) => (
                  typeof item === "string" ? (
                    <p key={i} className="text-white/80 mb-4">
                      {item}
                    </p>
                  ) : (
                    <ul key={i} className="list-disc pl-8 mb-4 space-y-2">
                      {item.map((listItem, j) => (
                        <li key={j} className="text-white/80">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )
                ))}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-white/60 text-sm">
            <p>This privacy policy applies to the X Minecraft Launcher software only.</p>
            <p>This website is unofficial and was created by moderator Baneronetwo.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
