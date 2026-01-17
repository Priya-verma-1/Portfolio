import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const frontendTech = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
];

const backendTech = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  // { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
];

const toolsPlatforms = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderTechGrid = (techArray) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12"
    >
      {techArray.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group cursor-pointer"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain group-hover:drop-shadow-lg transition-all"
          />
          <span className="font-body text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-2xl font-semibold uppercase tracking-widest">
            Skills & Technologies
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2> */}
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        {/* Frontend */}
        <h3 className="text-2xl font-display font-bold mb-6">Frontend</h3>
        {renderTechGrid(frontendTech)}

        {/* Backend */}
        <h3 className="text-2xl font-display font-bold mb-6">Backend & Database</h3>
        {renderTechGrid(backendTech)}

        {/* Tools & Platforms */}
        <h3 className="text-2xl font-display font-bold mb-6">Tools & Platforms</h3>
        {renderTechGrid(toolsPlatforms)}



        {/* GitHub Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-gradient rounded-2xl p-8 border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <h3 className="font-display text-2xl font-bold">GitHub Activity</h3>
          </div>

          {/* GitHub Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* <div className="bg-secondary/50 rounded-xl p-4 overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Priya-verma-1&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=FF6B6B&icon_color=FF6B6B&text_color=c9d1d9"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
             
            </div> */}
            {/* <div className="bg-secondary/50 rounded-xl p-4 overflow-hidden">

              <img src="https://streak-stats.demolab.com/?user=Priya-verma-1&theme=dark&hide_border=true&background=0d1117&stroke=00C853&ring=00C853&fire=00C853&currStreakLabel=00C853" alt="GitHub Streak" className="w-full h-auto"
              />
            </div> */}
          </div>


          {/* Contribution Graph */}
          <div className="mt-6 bg-secondary/50 rounded-xl p-4 overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/00C853/Priya-verma-1"
              alt="GitHub Contribution Graph"
              className="w-full h-auto min-w-[600px]"
            />
          </div>

          <div className="pt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.a
                  href="https://github.com/Priya-verma-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full flex items-center gap-2"
                >
                  View GitHub
                  {/* <ArrowDown size={18} /> */}
                </motion.a>
              </motion.div>
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;






