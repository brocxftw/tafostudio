import Image from 'next/image';
import { Award, Users, Calendar, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-[#4A80E0] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Crafting Spaces That
                <span className="block text-[#4A80E0]">Inspire & Function</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With years of experience in architecture and interior design, we specialize in 
              creating innovative spaces that perfectly balance aesthetics, functionality, and sustainability. 
              Our team of passionate designers and architects work closely with clients to bring their 
              vision to life.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From residential homes to commercial spaces, we approach each project with fresh eyes and 
              innovative solutions, ensuring every space we design tells a unique story and serves its 
              purpose beautifully.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-[#4A80E0]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80"
                alt="Architecture Team Working"
                fill
                className="object-cover"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
