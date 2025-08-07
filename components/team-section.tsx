import TeamMember from "./team-member";

const teamMembers = [
  {
    name: "M. Talal Shoaib",
    role: "Co-Founder & CEO",
    image: "/myprofilepic.webp",
    bio: "Visionary leader with 15+ years in software development and business strategy.",
    quote:
      "I believe success lies in merging vision with action — and inspiring others to do the same.",
    social: {
      linkedin: "https://www.linkedin.com/in/m-talal-shoaib/",
      twitter: "https://x.com/MTalalSid",
      github: "https://github.com/M-TalalSid",
      instagram: "https://www.instagram.com/talal_xhoaib/",
    },
  },
  {
    name: "Minhaj Azeem",
    role: "Co-Founder & Managing Director",
    image: "/minhajprofilepic.webp",
    bio: "Technical expert specializing in scalable architecture and emerging technologies.",
    quote:
      "Great teams build great tech. I’m here to lead, learn, and level up together.",
    social: {
      linkedin: "https://www.linkedin.com/in/minhaj-azeem-35a82a213/",
      twitter: "https://x.com/minhaj_azeem",
      instagram: "https://www.instagram.com/minhajspeaks",
    },
  },
  {
    name: "Abdul Ahad Afridi",
    role: "Lead Developer",
    image: "/ahadprofilepic.webp",
    bio: "Full-stack developer passionate about clean code and innovative solutions.",
    quote: "Code isn’t just logic — it’s poetry written in precision.",
    social: {
      linkedin: "https://www.linkedin.com/in/abdul-ahad-afridi-ab74b2303/",
      twitter: "https://x.com/AAhadAfridi",
      github: "https://github.com/AbdulAhadAfridi",
      instagram: "http://www.instagram.com/a.ahad_afridi",
    },
  },
  {
    name: "Abdul Wahid",
    role: "UX/UI Designer",
    image: "/wahidprofilepic.webp",
    bio: "Creative designer focused on user-centered design and exceptional experiences.",
    quote:
      "Every pixel should have a purpose. Design is where empathy meets innovation.",
    social: {
      linkedin: "https://www.linkedin.com/in/abdul-wahid-chohan/",
      twitter: "https://x.com/AbdulWahidChoh4",
      github: "https://github.com/abdulwahidchohan",
      instagram: "http://www.instagram.com/abdulwahidchohan138",
    },
  },
  {
    name: "Hammad Abbasi",
    role: "DevOps Engineer",
    image: "/hammadprofilepic.webp",
    bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
    quote:
      "Behind every smooth deployment is a thousand lines of invisible preparation.",
    social: {
      linkedin: "https://www.linkedin.com/in/hammad-abbasi-95388628b/",
      twitter: "https://x.com/HammadAbbasii01",
      github: "https://github.com/Muhammad-Hammad-Abbasi",
      instagram: "http://www.instagram.com/mr_hammad.abbasi",
    },
  },
  {
    name: "Saad Darbari",
    role: "Project Manager",
    image: "/saadprofilepic.webp",
    bio: "Experienced PM ensuring projects are delivered on time and exceed expectations.",
    quote:
      "A good plan today is better than a perfect plan tomorrow. Let’s execute with clarity.",
    social: {
      linkedin: "https://www.linkedin.com/in/saaddarbari/",
      twitter: "https://x.com/Saad_Darbari",
      github: "https://github.com/Saaddarbari",
      instagram: "https://www.instagram.com/saaddarbari",
    },
  },
  {
    name: "Zain Ul Abdeen",
    role: "Marketing Specialist",
    image: "/zainprofilepic.webp",
    bio: "Marketing expert driving brand awareness and customer engagement.",
    quote:
      "If you speak to everyone, you speak to no one. Precision builds powerful brands.",
    social: {
      linkedin: "https://www.linkedin.com/in/zain-ul-abideen00/",
      twitter: "https://x.com/djzain33",
      github: "https://github.com/Zain-Ul-Abideen00",
      instagram: "https://instagram.com/zzainu._",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 mt-[-100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Team
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            The Talented Individuals Behind Our Success
          </p>
        </div>

        {/* First Row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {teamMembers.slice(0, 4).map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.slice(4).map((member, index) => (
            <TeamMember key={member.name} member={member} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
