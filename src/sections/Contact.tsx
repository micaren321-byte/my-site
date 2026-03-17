import { useEffect, useRef, useState } from 'react';
import { Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: '咨询热线',
    value: '18640228442',
    href: 'tel:18640228442',
  },
  {
    icon: Mail,
    label: '电子邮箱',
    value: 'renyani@careerbud.cn',
    href: 'mailto:contact@zhiyaedu.com',
  },
  {
    icon: MapPin,
    label: '公司地址',
    value: '辽宁省沈阳市',
    href: '#',
  },
  {
    icon: Clock,
    label: '服务时间',
    value: '周一至周日 9:00-21:00',
    href: '#',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-bg.jpg"
          alt="背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E4A33]/90 via-[#3A5F40]/85 to-[#2E4A33]/90" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              让进入央国企
              <br />
              <span className="text-[#4CAF50]">不止是梦想，更是可实现的路径</span>
            </h2>
            <p
              className={`text-white/80 text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              专业助力，职通未来。赋能青年成长，拓宽职业边界，成就美好未来
            </p>
            <a href="tel:18640228442">
              <Button
                size="lg"
                className={`bg-[#4CAF50] hover:bg-[#45a049] text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-[#4CAF50]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#4CAF50]/40 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                立即咨询
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className={`group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div className="text-white/60 text-sm mb-1">{info.label}</div>
                <div className="text-white font-semibold">{info.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
