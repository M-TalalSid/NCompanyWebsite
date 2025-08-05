"use client";

import Image from "next/image";
import { Linkedin, Twitter, Github, Instagram, Quote } from "lucide-react";
import { motion } from "framer-motion";

type SocialLinkProps = {
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  if (!href || href === "#") return null;
  return (
    <a
      href={href}
              className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:shadow-[0_0_16px_#9333ea] hover:scale-110"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

type TeamMemberProps = {
  member: {
    name: string;
    role: string;
    bio: string;
    quote?: string;
    image?: string;
    social: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      instagram?: string;
    };
  };
  index: number;
};

export default function TeamMember({ member, index }: TeamMemberProps) {
  const placeholderImage = "/placeholder.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Glowing Animated Border */}
      <div
        className="absolute inset-0 rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:animate-border-glow"
        style={{
          background: "linear-gradient(135deg, #7e22ce, #9333ea)",
          padding: "2px",
          maskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
        }}
      ></div>

      {/* Card Content */}
      <div className="relative z-10 bg-purple-800/40 backdrop-blur-[10px] rounded-2xl p-8 border border-purple-700/40 transition-all duration-200 group-hover:scale-[1.03] shadow-xl">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 p-1 group-hover:scale-110 transition-transform duration-200">
          <Image
            src={member.image || placeholderImage}
            alt={`${member.name}'s profile`}
            width={128}
            height={128}
            className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-200 shadow-lg group-hover:shadow-purple-500/60"
            priority={index < 5}
            placeholder="blur"
            blurDataURL="/placeholder.svg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = placeholderImage;
            }}
          />
        </div>

        <h3
          id={`member-name-${index}`}
          className="text-xl font-bold text-white mb-1"
        >
          {member.name}
        </h3>
        <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
        <p className="text-purple-200 text-sm mb-4 leading-relaxed">
          {member.bio}
        </p>

        <div className="flex justify-center space-x-4 mb-4">
          <SocialLink
            href={member.social.linkedin}
            icon={Linkedin}
            label={`Visit ${member.name}'s LinkedIn`}
          />
          <SocialLink
            href={member.social.twitter}
            icon={Twitter}
            label={`Visit ${member.name}'s Twitter`}
          />
          <SocialLink
            href={member.social.github}
            icon={Github}
            label={`Visit ${member.name}'s GitHub`}
          />
          <SocialLink
            href={member.social.instagram}
            icon={Instagram}
            label={`Visit ${member.name}'s Instagram`}
          />
        </div>

        {member.quote && (
          <motion.blockquote
            whileHover={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0.6, y: 10 }}
            transition={{ duration: 0.2 }}
            className="text-purple-300 italic text-sm border-t border-purple-700 pt-4 mt-4 relative"
          >
            <Quote className="absolute -top-2 left-1 text-purple-500 w-4 h-4 opacity-60" />
            “{member.quote}”
          </motion.blockquote>
        )}
      </div>
    </motion.div>
  );
}
