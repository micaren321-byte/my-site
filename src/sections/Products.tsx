import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, Star, Crown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'ZY001',
    name: '咨询规划',
    price: '498',
    unit: '起',
    period: '即时',
    description: '就业咨询规划咨询1小时',
    features: ['一对一专业咨询', '职业方向规划', '就业政策解读'],
    popular: false,
    icon: Sparkles,
  },
  {
    id: 'ZY010',
    name: '职芽阳光计划',
    price: '1998',
    unit: '',
    period: '3个月',
    description: '全流程服务，送1次面试辅导',
    features: ['全流程服务', '简历优化', '岗位匹配', '1次面试辅导'],
    popular: true,
    icon: Star,
  },
  {
    id: 'ZY011',
    name: '职芽航行计划',
    price: '4980',
    unit: '',
    period: '6个月',
    description: '全流程服务，送3次面试辅导，送面试体系梳理',
    features: ['全流程服务', '简历优化', '岗位匹配', '3次面试辅导', '面试体系梳理'],
    popular: false,
    icon: Crown,
  },
  {
    id: 'ZY012',
    name: '职芽星空计划',
    price: '8980',
    unit: '',
    period: '12个月',
    description: '全流程服务，面试辅导不限次',
    features: ['全流程服务', '简历优化', '岗位匹配', '面试辅导不限次', 'VIP专属顾问'],
    popular: false,
    icon: Crown,
  },
];

const otherProducts = [
  { id: 'ZY002', name: '咨询规划3次', price: '1398', period: '6个月内' },
  { id: 'ZY003', name: '简历诊断非修改', price: '98', period: '即时' },
  { id: 'ZY004', name: '简历修改', price: '298', period: '1个月' },
  { id: 'ZY005', name: '岗位精准匹配', price: '999', period: '3个月' },
  { id: 'ZY006', name: '岗位精准匹配', price: '1998', period: '6个月' },
  { id: 'ZY007', name: '面试辅导单次', price: '298', period: '单次' },
  { id: 'ZY008', name: '面试体系梳理', price: '998', period: '体系产品' },
  { id: 'ZY009', name: '网申答疑', price: '498', period: '6个月' },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(index);
  };

  return (
    <section
      id="products"
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
            PRODUCTS
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A5F40] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            产品介绍
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            定制化校招产品，满足不同学员的需求
          </p>
        </div>

        {/* Main Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#3A5F40]/10 hover:-translate-y-2 ${
                product.popular ? 'ring-2 ring-[#4CAF50]' : ''
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Spotlight Effect */}
              {hoveredCard === index && (
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 175, 80, 0.4), transparent 40%)`,
                  }}
                />
              )}

              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 bg-[#4CAF50] text-white text-xs font-semibold rounded-b-xl">
                  最受欢迎
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-6 h-6 text-[#3A5F40]" />
                </div>

                {/* Product ID */}
                <div className="text-xs text-gray-400 mb-2">{product.id}</div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-sm text-gray-500">¥</span>
                  <span className="text-3xl font-bold text-[#3A5F40]">
                    {product.price}
                  </span>
                  <span className="text-gray-500">{product.unit}</span>
                </div>

                {/* Period */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#E8F5E9] text-[#3A5F40] text-sm mb-4">
                  {product.period}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href="tel:18640228442">
                  <Button
                    className={`w-full gap-2 ${
                      product.popular
                        ? 'bg-[#4CAF50] hover:bg-[#45a049] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    立即咨询
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Products Table */}
        <div
          className={`bg-white rounded-3xl shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="px-6 py-4 bg-gradient-to-r from-[#3A5F40] to-[#2E4A33]">
            <h3 className="text-white font-semibold">更多服务产品</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    产品ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    产品名称
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    售价
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    周期
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {otherProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-[#E8F5E9]/50 transition-colors"
                  >
                    <td className="px-6 py-3 text-sm text-gray-500">
                      {product.id}
                    </td>
                    <td className="px-6 py-3 text-sm font-medium text-gray-800">
                      {product.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-[#3A5F40] font-semibold">
                      ¥{product.price}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600">
                      {product.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
