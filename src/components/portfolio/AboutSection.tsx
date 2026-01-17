import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2022-2026",
    title: "Bachelor of Technology",
    company: "Sage University, Indore",
    // description: "Specializing in Software Engineering with hand-on experience in MERN Stack and emerging new technologies.",
    icon: GraduationCap,
  },
  {
    year: "2021-2022",
    title: "Higher Secondary School",
    company: "Vishwajyoti Convent School, Ichhawar",
    // description: "Specialized in PCM",
    icon: GraduationCap,
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-2xl font-semibold uppercase tracking-widest">About Me</span>
          {/* <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            My <span className="text-gradient">Journey</span>
          </h2> */}
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">PV</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Priya Verma</h3>
                  {/* <p className="font-body text-muted-foreground">Full Stack Developer</p> */}
                </div>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                B.Tech Computer Engineering (Software Engineering) student with hands-on experience in web development, Node.js and GitHub. Quick learner, problem-solver and passionate about building and debugging real-world applications.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed">
                Strong collaborative mindset with the ability to adapt new technologies and built a career in developing web applications with emerging technologies.
              </p>

              {/* <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span className="font-body text-sm">Your Location</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-body text-sm">3+ Years Experience</span>
                </div>
              </div> */}
            </div>

            {/* Stats */}
    
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>

                  <div className="card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-body text-xm font-semibold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h4 className="font-display text-2xl font-bold">{item.title}</h4>
                    <p className="font-body text-muted-foreground text-base mt-2">{item.company}</p>
                    {/* <p className="font-body text-muted-foreground text-base mt-2">{item.description}</p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
