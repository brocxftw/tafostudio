import { Home, Building2, Palette, Wrench, Lightbulb, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Custom home designs that reflect your lifestyle and personality, from concept to completion.',
      features: ['Custom Home Design', 'Renovation Planning', 'Space Optimization', '3D Visualization']
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transform your interior spaces with our innovative design solutions and attention to detail.',
      features: ['Space Planning', 'Color Schemes', 'Furniture Selection', 'Lighting Design']
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into existing spaces with our expert renovation and remodeling services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Basement Finishing', 'Outdoor Living']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#4A80E0] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Design
            <span className="block text-[#4A80E0]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final construction, we provide end-to-end design services 
            that bring your vision to life with precision and creativity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="w-8 h-8 text-[#4A80E0]" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4A80E0] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#4A80E0] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and create something extraordinary together. 
              Our team is ready to bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#4A80E0] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3A6BC7] transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
