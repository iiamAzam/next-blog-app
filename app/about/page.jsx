import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className=" shadow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/photos/profile.jpg"
                width={200}
                height={200}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold  mb-4">Azam</h1>
              <p className="text-xl  mb-6">Full Stack Developer</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <a
               href='mailto:azambari2001@gmail.com'
               >
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail size={20} />
                  Contact Me
                </button>
                </a>
                <a
                href='https://github.com/iiamAzam/'
                target="_blank" 
                rel="noopener noreferrer"
                >
                <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-secondary/50 transition-colors">
                  <ExternalLink size={20} />
                  GitHub
                </button>
                </a>
                <a
                href='https://www.linkedin.com/in/md-azam-544505190/'
                target="_blank" 
                rel="noopener noreferrer"
                
                >
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-secondary/50 transition-colors">
                  <ExternalLink size={20} />
                  LinkedIn
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Section */}
          <div className="md:col-span-2 space-y-6">
            <section className=" p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold  mb-4">About Me</h2>
              <p className=" leading-relaxed">
                I'm a passionate full-stack developer with over 1 years of experience building web applications.
                I specialize in React, Node.js, and modern web technologies. My goal is to create efficient,
                scalable, and user-friendly applications that solve real-world problems.
              </p>
            </section>

            {/* Experience Section */}
            <section className=" p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold  mb-4">Projects</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold">Senior Developer - Tech Corp</h3>
                  <p className="">2020 - Present</p>
                  <p className=" mt-2">
                    Led development of multiple full-stack applications using React and Node.js.
                    Mentored junior developers and implemented best practices.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold">Web Developer - Digital Solutions</h3>
                  <p className="">2018 - 2020</p>
                  <p className=" mt-2">
                    Developed and maintained client websites. Implemented responsive designs
                    and improved site performance.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" />
                  <span className="text-gray-600">azambari2001@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" />
                  <span className="text-gray-600">+91 9535204695</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" />
                  <span className="text-gray-600">Bidar Karnataka, India</span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB', 'AWS', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;