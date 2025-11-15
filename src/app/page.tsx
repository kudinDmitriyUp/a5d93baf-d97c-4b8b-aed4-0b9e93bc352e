"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Code, Github, Linkedin, Mail, Quote, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Work", id: "feature" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Idan Zeidman"
          button={{ text: "Get in Touch", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Creative Developer & Designer"
          description="I craft digital experiences that blend beautiful design with powerful functionality. Specializing in web development, UI/UX design, and creative solutions that make an impact."
          tag="Portfolio"
          tagIcon={Sparkles}
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218421970-fh5xisej.jpg"
          imageAlt="Idan Zeidman professional portrait"
          buttons={[
            { text: "View My Work", href: "feature" },
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="I'm passionate about creating digital experiences that not only look great but solve real problems. With expertise in both design and development, I bridge the gap between creative vision and technical execution."
          buttons={[
            { text: "Download Resume", href: "https://example.com/resume" },
            { text: "View Projects", href: "feature" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="What I Do"
          description="Leveraging cutting-edge technologies like React, Next.js, TypeScript, and modern design tools to deliver measurable results for clients"
          tag="Skills"
          tagIcon={Code}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Full-Stack Web Development",
              description: "Building responsive, performant websites using React, Next.js, Node.js, and TypeScript. Delivered 15+ production applications with 99.9% uptime and improved load times by 40% on average.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218423433-1es08rzd.jpg",
              imageAlt: "Web development code"
            },
            {
              title: "UI/UX Design & Strategy",
              description: "Creating intuitive user interfaces and experiences with Figma, Adobe Creative Suite, and user research methodologies. Increased user engagement by 60% and conversion rates by 35% across client projects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218424158-78lsxuap.jpg",
              imageAlt: "UI design mockup"
            },
            {
              title: "Mobile App Development",
              description: "Developing cross-platform mobile applications using React Native and Flutter. Successfully launched 8 apps with 4.8+ star ratings, serving over 50,000 combined active users.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218424910-fk03nv58.jpg",
              imageAlt: "Mobile app development"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Clients Say"
          description="Feedback from projects and collaborations"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Product Manager",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218425686-udu9zz30.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Startup Founder",
              company: "InnovateHub",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218426922-zhl874q9.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              company: "DesignCo",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218427920-31zao59u.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Tech Lead",
              company: "DevStudio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763218428646-lh9odjte.jpg",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "company", type: "text", placeholder: "Company (Optional)", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tell me about your project...", rows: 5, required: true }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Idan Zeidman"
          copyrightText="© 2025 Idan Zeidman. All rights reserved."
          columns={[
            {
              title: "Work",
              items: [
                { label: "Projects", href: "feature" },
                { label: "Case Studies", href: "feature" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Skills", href: "about" },
                { label: "Experience", href: "about" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get in Touch", href: "contact" },
                { label: "Collaboration", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Github, href: "https://github.com/idanzeidman", ariaLabel: "GitHub Profile" },
            { icon: Linkedin, href: "https://linkedin.com/in/idanzeidman", ariaLabel: "LinkedIn Profile" },
            { icon: Mail, href: "mailto:hello@idanzeidman.com", ariaLabel: "Email Contact" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}