import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: '年行业经验' },
  { icon: Users, value: '每年数百名', label: '学员成功上岸' },
  { icon: TrendingUp, value: '专业', label: 'HR视角评估' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
            <span className="text-white/90 text-sm">职芽（沈阳）教育咨询有限公司</span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            专注大学生
            <span className="text-[#4CAF50]">央国企</span>
            高质量就业服务
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            让每位大学生拥有更多优质选择与人生可能
            <br />
            <span className="text-[#4CAF50] font-medium">专业助力，职通未来</span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="tel:18640228442">
              <Button
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#4CAF50]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4CAF50]/40"
              >
                <Phone className="w-5 h-5 mr-2" />
                立即咨询
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#about')}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              了解更多
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9FBF9] to-transparent z-20" />
    </section>
  );
}
