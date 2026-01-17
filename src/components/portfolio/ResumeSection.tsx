// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Download, FileText, Eye, CheckCircle } from "lucide-react";

// const resumeHighlights = [
//   "3+ years of professional experience",
//   "Worked with 30+ clients globally",
//   "Expertise in full-stack development",
//   "Strong background in UI/UX design",
//   "Open source contributor",
//   "Agile/Scrum methodology",
// ];

// const ResumeSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section className="py-24 bg-secondary/30" ref={ref}>
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="font-body text-primary text-sm font-semibold uppercase tracking-widest">
//               My Resume
//             </span>
//             <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
//               Download My <span className="text-gradient">Resume</span>
//             </h2>
//             <div className="section-divider mt-6" />

//             <p className="font-body text-muted-foreground mt-6 leading-relaxed">
//               Get a comprehensive overview of my experience, skills, and achievements. 
//               My resume includes detailed information about my professional journey 
//               and the impact I've made in various projects.
//             </p>

//             {/* Highlights */}
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {resumeHighlights.map((highlight, index) => (
//                 <motion.div
//                   key={highlight}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <CheckCircle size={16} className="text-accent flex-shrink-0" />
//                   <span className="font-body text-sm text-muted-foreground">{highlight}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="flex flex-wrap gap-4 mt-10"
//             >
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full"
//               >
//                 <Download size={18} />
//                 Download Resume
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-body font-semibold rounded-full hover:bg-secondary transition-colors"
//               >
//                 <Eye size={18} />
//                 View Online
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* Right - Resume Preview */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex justify-center"
//           >
//             <div className="relative">
//               {/* Decorative elements */}
//               <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              
//               {/* Resume Card */}
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="relative card-gradient rounded-2xl p-8 border border-border shadow-2xl max-w-sm"
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
//                     <FileText size={28} className="text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-display font-bold">Resume_YourName.pdf</h4>
//                     <p className="font-body text-sm text-muted-foreground">Last updated: Jan 2024</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="h-3 bg-muted rounded-full w-full" />
//                   <div className="h-3 bg-muted rounded-full w-4/5" />
//                   <div className="h-3 bg-muted rounded-full w-3/4" />
//                   <div className="h-3 bg-muted rounded-full w-5/6" />
//                   <div className="h-8 bg-muted rounded w-full mt-6" />
//                   <div className="h-3 bg-muted rounded-full w-2/3" />
//                   <div className="h-3 bg-muted rounded-full w-3/4" />
//                   <div className="h-3 bg-muted rounded-full w-1/2" />
//                 </div>

//                 <div className="absolute bottom-4 right-4">
//                   <span className="text-xs font-body text-muted-foreground">PDF • 1 page</span>
//                 </div>
//               </motion.div>

//               {/* Floating badge */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={isInView ? { scale: 1 } : {}}
//                 transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
//                 className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground font-body text-sm font-semibold rounded-full shadow-lg"
//               >
//                 Updated!
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResumeSection;