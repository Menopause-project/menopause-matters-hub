
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  linkedIn: string;
  bio: string[];
}

const TeamBanner = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dana Shoushan-Whol",
      title: "CEO",
      image: "/lovable-uploads/6b9007d0-e3fd-4d47-b994-083e6adf699a.png",
      linkedIn: "https://www.linkedin.com/in/dana-shoushan-whol-459b95a/",
      bio: [
        "A global strategy leader with over 20 years of experience driving impactful innovation.",
        "Dana has a proven track record of initiating and strategically leveraging partnerships to build successful, scalable businesses."
      ]
    },
    {
      name: "Dr. Betty Shachar",
      title: "Chief Medical",
      image: "/lovable-uploads/d17e3a1e-2870-4063-b47e-d0e0f25da0a6.png",
      linkedIn: "https://www.linkedin.com/in/betty-shachar-4b714831/",
      bio: [
        "An OB/Gyn with over 15 years of experience, certified by the Menopause American Association.",
        "A Stanford Fellowship graduate and a valued contributor at Maccabi Healthcare and Top Ichilov, Dr. Shachar empowers women to take control of their health."
      ]
    },
    {
      name: "Nadav Binyamin Helfman",
      title: "CTO",
      image: "/lovable-uploads/54a6280c-64d5-4850-9eee-85a222c700fd.png",
      linkedIn: "https://www.linkedin.com/in/nadavhelfman",
      bio: [
        "With a robust background in software development and system architecture, Nadav is an experienced data scientist who has driven success at leading startups—including the sale of a startup to SAP—and has contributed to Microsoft R&D."
      ]
    }
  ];

  return (
    <section className="py-12 px-6 md:px-10 mb-16 bg-connectu-beige rounded-lg relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-connectu-purple opacity-5 rounded-full translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-connectu-purple opacity-5 rounded-full translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-connectu-purple">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-2 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a 
                  href={member.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="text-connectu-purple w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-connectu-purple mb-1">{member.name}</h3>
              <p className="text-lg text-connectu-purple mb-4">{member.title}</p>
              
              <div className="text-gray-600 space-y-2">
                {member.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="join-form" smooth={true} duration={500}>
            <Button className="bg-connectu-purple text-white hover:bg-connectu-purple/90 shadow-md">
              Connect With Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
