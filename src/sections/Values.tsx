import { useEffect, useRef, useState } from 'react';
import { Shield, Heart, Eye, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: '诚信为本',
    subtitle: '言出必行，行则有果',
    description:
      '我们坚持真实透明的服务承诺，不夸大效果，不做虚假宣传。每一份承诺都全力以赴，每一个行动都追求实效。',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Heart,
    title: '真诚共情',
    subtitle: '以心换心，陪伴成长',
    description:
      '我们理解每位学员的焦虑与期待，用真诚的态度倾听需求，用专业的能力提供支持，做学员职业路上的同行者。',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Eye,
    title: '客户视角',
    subtitle: '站在学生立场思考，从需求出发行动',
    description:
      '我们始终以学员利益为核心，从学生实际需求出发设计服务方案，确保每一项服务都能真正帮助学员实现目标。',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: CheckCircle,
    title: '责任担当',
    subtitle: '对结果负责，对成长负责，对未来负责',
    description:
      '我们深知每一份录用通知都关乎一个年轻人的未来。因此我们对服务结果负责到底，用专业与责任守护学员的职业梦想。',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
];

export default function Values() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-[#F9FBF9]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-[#4CAF50] tracking-wider uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            CORE VALUES
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A5F40] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            核心价值观
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            我们始终坚持诚信、真诚、客户视角、责任担当的核心价值观，在竞争激烈的市场中保持初心
          </p>
        </div>

        {/* Values Grid - Accordion Style */}
        <div className="flex flex-col lg:flex-row gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ${
                activeIndex === index ? 'lg:flex-[2]' : 'lg:flex-1'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${value.bgColor} transition-opacity duration-300`}
              />

              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : ''
                }`}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full min-h-[320px] flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeIndex === index
                      ? 'bg-white/20'
                      : `bg-gradient-to-br ${value.color}`
                  }`}
                >
                  <value.icon
                    className={`w-7 h-7 transition-colors duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-white'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                    activeIndex === index ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {value.title}
                </h3>

                {/* Subtitle */}
                <p
                  className={`text-sm font-medium mb-4 transition-colors duration-500 ${
                    activeIndex === index ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {value.subtitle}
                </p>

                {/* Description - Only visible when active */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? 'max-h-48 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/90 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Bottom Line Indicator */}
                <div className="mt-auto pt-6">
                  <div
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? 'w-full bg-white/50'
                        : 'w-12 bg-gradient-to-r ' + value.color
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <blockquote className="text-xl sm:text-2xl text-gray-700 font-medium italic">
            "选择职芽，就是选择专业与信赖"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
