import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Award, Zap } from 'lucide-react';

const companies = [
  { name: '国家电网', desc: '电力行业龙头' },
  { name: '中石化', desc: '能源央企巨头' },
  { name: '中国移动', desc: '通信行业领军' },
  { name: '铁路局', desc: '交通运输骨干' },
  { name: '地方城投', desc: '城市建设主力' },
];

const stats = [
  { value: '数百名', label: '学员成功上岸', icon: TrendingUp },
  { value: '领先', label: '细分领域上岸率', icon: Award },
  { value: '真实', label: '真结果交付', icon: Zap },
];

export default function SuccessCases() {
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
      id="cases"
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-[#E8F5E9] to-[#F9FBF9] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3A5F40 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-[#4CAF50] tracking-wider uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            SUCCESS STORIES
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A5F40] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            成功案例
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            真实案例，真实成果——每一位成功上岸的学员都是我们专业服务的最好证明
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-[#3A5F40]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#3A5F40] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Companies Marquee */}
        <div
          className={`relative overflow-hidden py-8 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E8F5E9] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9FBF9] to-transparent z-10" />

          {/* Scrolling Content */}
          <div className="flex animate-marquee">
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="bg-white rounded-2xl px-8 py-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[#3A5F40] transition-colors">
                    {company.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{company.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#3A5F40] text-white">
            <Award className="w-5 h-5 text-[#4CAF50]" />
            <span className="font-medium">央国企就业服务 · 细分领域领先</span>
          </div>
        </div>
      </div>

      {/* Marquee Animation Style */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
