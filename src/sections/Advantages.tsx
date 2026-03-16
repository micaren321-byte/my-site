import { useEffect, useRef, useState } from 'react';
import { FileText, MessageSquare, Search, Target, Building, Users, ClipboardCheck, Award } from 'lucide-react';

const centerAdvantage = {
  icon: Target,
  title: 'HR视角评估逻辑',
  description: '央国企招聘不仅看能力，更重匹配——政治素养、稳定性、合规意识、岗位理解力缺一不可。',
};

const satelliteAdvantages = [
  {
    icon: FileText,
    title: '简历优化',
    subtitle: '突出核心竞争力',
    description: '基于HR视角，帮助学员挖掘亮点、优化表述，打造高通过率的优质简历。',
  },
  {
    icon: MessageSquare,
    title: '面试辅导',
    subtitle: '精准应对评估',
    description: '还原真实面试场景，进行结构化、半结构化、无领导小组讨论等多形式模拟训练。',
  },
  {
    icon: Search,
    title: '真实岗位信息',
    subtitle: '深度掌握招聘体系',
    description: '提供经过严格筛选的真实有效岗位信息，精准对接符合个人条件的优质岗位。',
  },
];

const details = [
  { icon: Building, text: '国资委体系：熟悉央企组织架构与人才需求特点' },
  { icon: Users, text: '国聘平台：精通平台运作机制与岗位发布规律' },
  { icon: ClipboardCheck, text: '校招流程：了解从网申到录用的完整环节' },
  { icon: Award, text: '笔面试标准：掌握评估要点与评分标准' },
];

export default function Advantages() {
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
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-[#F9FBF9] to-[#E8F5E9]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-[#4CAF50] tracking-wider uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            PROFESSIONAL ADVANTAGES
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A5F40] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            专业优势
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            基于十年人力资源实战经验，我们深谙HR的选人标准与评估逻辑
          </p>
        </div>

        {/* Orbital Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Circle */}
          <div
            className={`relative z-10 mx-auto w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#3A5F40] to-[#2E4A33] flex flex-col items-center justify-center text-white p-8 shadow-2xl shadow-[#3A5F40]/30 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 animate-pulse-slow">
              <centerAdvantage.icon className="w-8 h-8 text-[#4CAF50]" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">
              {centerAdvantage.title}
            </h3>
            <p className="text-white/80 text-center text-sm leading-relaxed">
              {centerAdvantage.description}
            </p>
          </div>

          {/* Satellite Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {satelliteAdvantages.map((advantage, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-[#3A5F40]/10 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-7 h-7 text-[#3A5F40]" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {advantage.title}
                </h4>

                {/* Subtitle */}
                <p className="text-[#4CAF50] font-medium text-sm mb-4">
                  {advantage.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Details List */}
          <div
            className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-5 h-5 text-[#3A5F40]" />
                </div>
                <p className="text-sm text-gray-700">{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
