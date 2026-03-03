import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: '基本火化套餐',
    price: '$1,800',
    desc: '適合希望簡單、莊嚴地送別毛孩的家庭。',
    features: [
      '專車接送遺體（九龍及新界區）',
      '基本遺體清潔及整理',
      '獨立火化服務',
      '基本骨灰盅',
      '電子紀念證書',
    ],
    popular: false,
  },
  {
    name: '尊貴告別套餐',
    price: '$3,200',
    desc: '提供更全面的告別儀式，讓家人有充足時間陪伴。',
    features: [
      '專車接送遺體（全港適用）',
      '深層遺體清潔及美容',
      '獨立火化服務',
      '專屬告別室使用（1小時）',
      '高級陶瓷骨灰盅',
      '實體紀念證書及相框',
      '毛髮紀念瓶',
    ],
    popular: true,
  },
  {
    name: '永恆紀念套餐',
    price: '$5,800',
    desc: '最完善的善終服務，包含專屬紀念飾物製作。',
    features: [
      '專車接送遺體（全港適用）',
      '深層遺體清潔及美容',
      '獨立火化服務',
      '專屬告別室使用（2小時）',
      '頂級骨灰盅選擇',
      '實體紀念證書及相框',
      '專屬骨灰紀念飾物（1件）',
      '專業攝影紀錄',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>價目表 | 寵返家嫏</title>
        <meta name="description" content="寵返家嫏提供透明、無隱藏收費的寵物善終套餐。了解我們的基本火化、尊貴告別及永恆紀念套餐價格。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              透明價目表
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light max-w-2xl mx-auto"
            >
              我們承諾絕無隱藏收費，所有服務價格清晰列明，讓您在艱難時刻無需為繁瑣的費用擔憂。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`relative bg-white rounded-3xl p-8 shadow-sm border ${
                  pkg.popular ? 'border-primary shadow-primary/10 shadow-xl scale-105 z-10' : 'border-primary/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    最多人選擇
                  </div>
                )}
                <h3 className="text-2xl font-serif font-semibold text-text mb-2">{pkg.name}</h3>
                <p className="text-text-light text-sm mb-6 h-10">{pkg.desc}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-text">{pkg.price}</span>
                  <span className="text-text-light"> 起</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-background text-text hover:bg-primary/10'
                  }`}
                >
                  預約此套餐
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-white p-8 rounded-2xl border border-primary/10 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-serif font-semibold text-text mb-2">附加收費說明</h4>
                <ul className="space-y-2 text-sm text-text-light list-disc list-inside">
                  <li>偏遠地區（如離島、禁區）接送需另加 $300 - $500 附加費。</li>
                  <li>特大犬隻（超過 30kg）火化需另加 $500 附加費。</li>
                  <li>夜間急診接送（晚上 10 時至早上 8 時）需另加 $500 附加費。</li>
                  <li>所有價格僅供參考，實際收費會因應個別情況而有所調整，詳情請向我們查詢。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
