import { useEffect, useRef, useState } from 'react';
import { Building2, Users2, Award, Target } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: '公司定位',
    description:
      '深度掌握国资委体系与国聘平台运作机制，熟悉央企国企校招全流程与评估标准，具备HR视角的专业评估逻辑，提供真实有效的岗位信息网络。',
    highlight: '央国企高质量就业服务',
  },
  {
    icon: Users2,
    title: '创始团队',
    description:
      '公司由拥有十年人力资源行业实战经验的资深专家创立。创始人曾担任国内知名人力资源公司合伙人，长期深度参与中央企业、地方国企及事业单位的人才招聘与选拔项目。',
    highlight: '10+年行业经验',
  },
  {
    icon: Award,
    title: '专业资质',
    description:
      '作为高校荣誉讲师，持续推动校企人才供需对接。深耕人力资源与就业服务领域，对央企国企招聘体系有深度理解。',
    highlight: '高校荣誉讲师',
  },
];

export default function About() {
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
      id="about"
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
            ABOUT ZHIYA
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A5F40] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            关于职芽
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            职芽（沈阳）教育咨询有限公司是一家专注大学生央国企高质量就业服务的专业机构
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-[#3A5F40]/10 transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#3A5F40]" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#4CAF50]/10 text-[#4CAF50] text-sm font-medium mb-4">
                {feature.highlight}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#4CAF50]/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div
          className={`mt-12 bg-gradient-to-r from-[#3A5F40] to-[#2E4A33] rounded-3xl p-8 lg:p-12 text-white transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">专业资质认证</h4>
                <p className="text-white/70">
                  我们深知央国企招聘不仅看能力，更重匹配——政治素养、稳定性、合规意识、岗位理解力缺一不可
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#4CAF50]">100%</div>
                <div className="text-white/70 text-sm">真实岗位</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#4CAF50]">1V1</div>
                <div className="text-white/70 text-sm">定制服务</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#4CAF50]">全程</div>
                <div className="text-white/70 text-sm">跟踪辅导</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
