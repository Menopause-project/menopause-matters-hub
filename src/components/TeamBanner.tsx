
import React from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      image: "/lovable-uploads/b72cecc8-b1fd-4aa9-956f-8bff2c426e65.png",
      linkedIn: "https://linkedin.com/in/dana-shoushan-whol",
      bio: [
        "A global strategy leader with over 20 years of experience driving innovation around impact.",
        "She has proven ability to initiate and strategically leverage partnerships to build successful, scalable businesses."
      ]
    },
    {
      name: "Dr. Betty Shachar",
      title: "Chief Medical",
      image: "/lovable-uploads/b72cecc8-b1fd-4aa9-956f-8bff2c426e65.png",
      linkedIn: "https://linkedin.com/in/dr-betty-shachar",
      bio: [
        "An OB/Gyn for over 15 years. Certified by the Menopause American Association.",
        "A Stanford Fellowship graduate, and a contributor at Maccabi Healthcare and Top Ichilov, empowering women to take control of their health."
      ]
    },
    {
      name: "Nadav Binyamin Helfman",
      title: "CTO",
      image: "/lovable-uploads/b72cecc8-b1fd-4aa9-956f-8bff2c426e65.png",
      linkedIn: "https://linkedin.com/in/nadav-binyamin-helfman",
      bio: [
        "Holding a robust background in SW development and system architecture.",
        "An experienced data scientist for several leading startups including selling a startup to SAP and working for Microsoft R&D."
      ]
    }
  ];

  return (
    <section className="py-12 px-6 md:px-10 mb-16 bg-connectu-beige rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-connectu-purple">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-2">
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
          <a href="#join-form">
            <Button className="bg-connectu-purple text-white hover:bg-connectu-purple/90">
              Connect With Our Team
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
