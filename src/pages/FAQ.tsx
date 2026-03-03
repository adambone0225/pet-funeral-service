import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '當毛孩離世時，我應該怎麼做？',
    answer: '請保持冷靜，將毛孩放置在陰涼通風的地方，並在遺體下方墊上毛巾或尿墊。然後，您可以隨時致電或 WhatsApp 我們，專員會即時為您提供初步指引，並安排專車接送。'
  },
  {
    question: '火化過程需要多長時間？',
    answer: '獨立火化過程通常需要 1.5 至 2.5 小時，具體時間取決於毛孩的體型。在等待期間，家人可以在我們的專屬休息室休息。'
  },
  {
    question: '我可以親自按下火化爐的按鈕嗎？',
    answer: '可以的。我們非常尊重家人的意願，如果您希望親自為毛孩按下火化爐的啟動按鈕，作為最後的道別儀式，我們絕對會配合安排。'
  },
  {
    question: '你們提供集體火化服務嗎？',
    answer: '為了確保每位毛孩都能得到最大的尊重，並讓家人能完整取回愛寵的骨灰，我們目前只提供「獨立火化」服務，不設集體火化。'
  },
  {
    question: '如果我在深夜需要服務，你們會接聽電話嗎？',
    answer: '我們會的。我們提供 24 小時緊急支援熱線，無論何時，只要您需要，我們的團隊都會為您提供協助。請注意，夜間急診接送（晚上 10 時至早上 8 時）需另加 $500 附加費。'
  },
  {
    question: '骨灰盅可以存放多久？',
    answer: '只要存放在乾燥、陰涼的地方，避免陽光直射和潮濕，骨灰盅是可以永久保存的。我們亦提供多款密封性良好的骨灰盅供您選擇。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>常見問題 Q&A | 寵返家嫏</title>
        <meta name="description" content="解答關於寵物善終、火化流程、接送安排等常見問題，讓您在慌亂中找到清晰的指引。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              常見問題 Q&A
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light"
            >
              我們整理了家人最常問的問題，希望能為您解答心中的疑惑。
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-serif font-semibold text-text pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-text-light leading-relaxed border-t border-primary/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
