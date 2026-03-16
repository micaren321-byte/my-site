import { useEffect, useRef, useState } from 'react';
import { BookOpen, FileEdit, PenTool, Users, ClipboardCheck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    number: '01',
    title: '政策解读',
    description: '深入解析央企国企招聘政策、报考条件、时间节点，帮助学员准确把握机会窗口。',
  },
  {
    icon: FileEdit,
    number: '02',
    title: '简历优化',
    description: '基于HR视角，帮助学员挖掘亮点、优化表述，打造高通过率的优质简历。',
  },
  {
    icon: PenTool,
    number: '03',
    title: '笔试特训',
    description: '针对行测、申论、专业知识等考试内容，提供系统化培训与真题演练。',
  },
  {
    icon: Users,
    number: '04',
    title: '面试模拟',
    description: '还原真实面试场景，进行结构化、半结构化、无领导小组讨论等多形式模拟训练。',
  },
  {
    icon: ClipboardCheck,
    number: '05',
    title: 'offer背调',
    description: '协助学员进行offer选择分析、背景调查准备，确保入职无忧。',
  },
  {
    icon: HeadphonesIcon,
    number: '06',
    title: '全程陪跑',
    description: '一对一专属顾问全程跟踪，随时答疑解惑，陪伴学员走过求职每一步。',
  },
];

const features = [
  { label: '系统化培训', desc: '科学课程体系' },
  { label: '个性化辅导', desc: '量身定制方案' },
  { label: '数据化追踪', desc: '实时进度监控' },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="services"
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
            SERVICE SYSTEM
          </span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A5F40] transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              全周期服务体系
            </h2>
            <span
              className={`px-4 py-2 rounded-full bg-[#4CAF50] text-white text-sm font-semibold transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              1V1 定制
            </span>
          </div>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            从政策解读到offer背调，提供一站式精准辅导
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#3A5F40]/10 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Number */}
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 group-hover:text-[#E8F5E9] transition-colors duration-500">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-[#3A5F40]" />
                </div>

                {/* Number Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#4CAF50]/10 text-[#4CAF50] text-sm font-semibold mb-4">
                  Step {service.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Line */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#3A5F40] to-[#4CAF50] transition-all duration-500 ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Features Bar */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
              <span className="font-semibold text-gray-800">{feature.label}</span>
              <span className="text-gray-500 text-sm">· {feature.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
