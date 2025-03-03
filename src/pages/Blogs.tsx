
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Create the Perfect Modpack",
      excerpt: "Learn how to build a balanced and performance-friendly modpack that will provide the best Minecraft experience.",
      date: "June 12, 2023",
      imageUrl: "",
      category: "Tutorials"
    },
    {
      id: 2,
      title: "Understanding Minecraft Performance Optimization",
      excerpt: "Dive deep into the technical aspects of improving Minecraft performance with the right settings and mods.",
      date: "May 28, 2023",
      imageUrl: "",
      category: "Guides"
    },
    {
      id: 3,
      title: "The Future of X Minecraft Launcher",
      excerpt: "Our roadmap for upcoming features and improvements that will make XMCL the ultimate Minecraft launcher.",
      date: "May 15, 2023",
      imageUrl: "",
      category: "Announcements"
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
            <span className="text-gradient-cyan">Blog</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Insights, tutorials, and updates from the X Minecraft Launcher team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs py-1 px-3 rounded-full bg-accent/20 text-accent">
                    {post.category}
                  </span>
                  <span className="text-white/60 text-sm">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-accent transition-colors duration-300">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
