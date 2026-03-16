import { useEffect, useRef, useState } from 'react';
import { BookOpen, Link2, MapPin, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const missionItems = [
  { icon: BookOpen, title: '教育赋能', desc: '提供系统化职业培训与技能提升' },
  { icon: Link2, title: '资源连接', desc: '搭建校企桥梁，对接优质就业资源' },
  { icon: MapPin, title: '路径规划', desc: '定制个性化职业发展路径方案' },
];

const visionItems = [
  { icon: TrendingUp, title: '行业领先', desc: '持续引领就业服务标准' },
  { icon: Heart, title: '口碑至上', desc: '赢得学员与家长信赖' },
  { icon: Lightbulb, title: '持续创新', desc: '不断优化服务模式' },
];

export default function MissionVision() {
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
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-br from-[#3A5F40] to-[#2E4A33]" />
        <div className="w-1/2 bg-[#E8F5E9]" />
      </div>

      {/* Organic Wave Divider */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-32"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M50,0 Q30,25 50,50 Q70,75 50,100 L0,100 L0,0 Z"
          fill="#3A5F40"
          className="opacity-0"
        />
      </svg>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission Section */}
          <div
            className={`text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-sm font-semibold text-[#4CAF50] tracking-wider uppercase mb-3">
              OUR MISSION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              我们的使命
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              让每位大学生拥有更多优质选择与人生可能
            </p>
            <p className="text-white/70 mb-10 leading-relaxed">
              我们致力于为青年学子打开职业发展的新窗口，通过专业的就业指导服务，帮助他们突破信息壁垒，把握优质就业机会，实现人生价值的最大化。
            </p>

            {/* Mission Items */}
            <div className="space-y-4">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div
            className={`text-[#3A5F40] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block text-sm font-semibold text-[#4CAF50] tracking-wider uppercase mb-3">
              OUR VISION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              我们的愿景
            </h2>
            <p className="text-xl text-[#3A5F40]/90 mb-8 leading-relaxed">
              成为中国大学生职业发展领域最值得信赖的专业服务品牌
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              我们以专业、诚信、责任为核心，持续优化服务模式，不断提升服务质量，努力成为行业标杆，为更多大学生实现职业梦想。
            </p>

            {/* Vision Items */}
            <div className="space-y-4">
              {visionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[#3A5F40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
