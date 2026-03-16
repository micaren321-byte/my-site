import { Sprout } from 'lucide-react';

const footerLinks = [
  {
    title: '关于我们',
    links: [
      { label: '公司介绍', href: '#about' },
      { label: '使命愿景', href: '#about' },
      { label: '核心价值观', href: '#values' },
    ],
  },
  {
    title: '服务体系',
    links: [
      { label: '政策解读', href: '#services' },
      { label: '简历优化', href: '#services' },
      { label: '面试辅导', href: '#services' },
    ],
  },
  {
    title: '产品服务',
    links: [
      { label: '咨询规划', href: '#products' },
      { label: '阳光计划', href: '#products' },
      { label: '航行计划', href: '#products' },
    ],
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1a2e1f] text-white/80">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3A5F40] to-[#4CAF50] flex items-center justify-center">
                <Sprout className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">职芽教育</div>
                <div className="text-xs text-white/60">专注大学生央国企就业服务</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              让每位大学生拥有更多优质选择与人生可能。专业助力，职通未来。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:18640228442"
                className="px-4 py-2 rounded-lg bg-[#4CAF50]/20 text-[#4CAF50] hover:bg-[#4CAF50]/30 transition-colors"
              >
                18640228442
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-[#4CAF50] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/50 text-sm">
              © 2024 职芽（沈阳）教育咨询有限公司. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>辽ICP备XXXXXXXX号</span>
              <span>隐私政策</span>
              <span>服务条款</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
