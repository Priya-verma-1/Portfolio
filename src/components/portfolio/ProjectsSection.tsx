import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ChatZone",
    description:
      "Built a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) enabling real time communication via Socket IO allowing users to join specific chat rooms and exchange messages dynamically.",
    // tags: ["React", "Node.js", "MongoDB", "Express.js", "WebSocket"],
    image: "/proj_1.jpg",
    github: "https://github.com/Priya-verma-1/TalkZone",
    live: "https://chatzone-lob6.onrender.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Travel and stay",
    description:
      "Developed a full-stack travel booking web application using Node.js, Express.js and MongoDB enabling users to search and manage travel accommodations.",
    // tags: ["Node.js", "Express.js", "MongoDB"],
    image: "/proj_3.jpg",
    github: "https://github.com/Priya-verma-1/Travel-and-Stay",
    live: " https://travel-and-stay.onrender.com/listings",
    featured: true,
  },
  {
    id: 3,
    title: "Pro-Linker",
    description:
      "Developed a full-stack professional networking application using Next.js, Node.js and MongoDB enabling secure authentication, profile creation, work experience, logging and interactive features like commenting and liking.",
    // tags: ["Node.js", "Next.js", "MongoDB"],
    image: "/proj_2.jpg",
    github: "https://github.com/Priya-verma-1/Pro-Linker",
    live: "https://pro-linker-lemon.vercel.app/",
    featured: true,
  }
  // {
  //   id: 4,
  //   title: "Portfolio Template",
  //   description:
  //     "Beautiful, customizable portfolio template for developers and designers.",
  //   tags: ["React", "Tailwind", "Framer Motion"],
  //   image: "/placeholder.svg",
  //   github: "#",
  //   live: "#",
  //   featured: false,
  // }
  
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-2xl font-semibold uppercase tracking-widest">
            My Work
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2> */}
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-background rounded-full text-foreground"
                      aria-label="View GitHub"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-background rounded-full text-foreground"
                      aria-label="View Live"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-bold group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <p className="font-body text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {/* <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-xs font-body text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 border border-border text-foreground font-body font-semibold rounded-full hover:bg-secondary transition-colors"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </motion.button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card-gradient rounded-2xl p-8 border border-border inline-block">
            <Github size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="font-display text-xl font-bold mb-2">More on GitHub</h3>
            <p className="font-body text-muted-foreground mb-6">
              Check out my open-source contributions and other projects
            </p>
            <motion.a
              href="https://github.com/Priya-verma-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full"
            >
              <Github size={18} />
              Visit GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
