import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "priyaverma3079@gmail.com", href: "mailto:priyaverma3079@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9691871253", href: "tel:+919691871253" },
    { icon: MapPin, label: "Location", value: "Indore, India" },
  ];

  return (
    <section id="contact" className="py-24 w-full bg-background" ref={ref}>
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-2xl font-semibold uppercase tracking-widest">Let's Connect</span>
          {/* <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2> */}
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 max-w-xl w-full"
          >
            <div className="text-center">
              {/* <h3 className="font-display text-2xl font-bold mb-4">Let's work together</h3> */}
              <p className="font-body text-muted-foreground leading-relaxed">
                Always open to discussing new projects, creative ideas or opportunities
                to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 card-gradient rounded-xl border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <info.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-body font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
