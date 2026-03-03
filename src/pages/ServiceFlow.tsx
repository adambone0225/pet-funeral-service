import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { PhoneCall, Truck, HeartHandshake, Flame, Box, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <PhoneCall className="w-8 h-8 text-primary" />,
    title: '1. 聯絡我們',
    desc: '當毛孩離世，請隨時致電或 WhatsApp 我們，專員會即時為您提供初步指引及安排接送。',
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: '2. 專車接送',
    desc: '我們的專業團隊會於約定時間到達，以最溫柔的方式將毛孩接送到我們的設施。',
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: '3. 遺體護理及告別',
    desc: '進行基本清潔及整理，讓毛孩以最安詳的姿態與家人作最後道別。家人可於專屬告別室陪伴。',
  },
  {
    icon: <Flame className="w-8 h-8 text-primary" />,
    title: '4. 獨立火化',
    desc: '確保每位毛孩均獨立火化，過程莊嚴尊重。家人可選擇親自按鈕啟動火化儀式。',
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: '5. 骨灰處理',
    desc: '火化後，我們會將骨灰小心收集並放入您選擇的骨灰盅內。',
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: '6. 後續關懷',
    desc: '提供骨灰盅送遞服務，並提供情感支援及紀念品製作建議，讓愛延續。',
  },
];

export default function ServiceFlow() {
  return (
    <>
      <Helmet>
        <title>服務流程 | 寵返家嫏</title>
        <meta name="description" content="了解寵返家嫏清晰透明的寵物善終服務流程。從接送、告別到火化，每一步都有專人溫暖陪伴。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              服務流程
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light max-w-2xl mx-auto"
            >
              我們明白失去摯愛的痛楚，因此每個步驟都力求清晰透明，讓您在最脆弱的時刻感到安心。
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-background items-center justify-center shadow-sm z-10">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>

                  <div className="flex-1 w-full">
                    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors ${
                      idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className={`flex items-center gap-4 mb-4 ${
                        idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-text">{step.title}</h3>
                      </div>
                      <p className="text-text-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              聯絡我們了解詳情
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
