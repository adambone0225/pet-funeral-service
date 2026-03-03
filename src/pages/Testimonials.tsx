import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '陳小姐',
    pet: '金毛尋回犬 豆豆',
    content: '在豆豆離開的那天，我完全不知所措。幸好聯絡了寵返家嫏，他們的團隊非常專業且溫柔，每一個步驟都解釋得很清楚，讓我能安心地送豆豆最後一程。',
    date: '2023年10月'
  },
  {
    name: '李先生',
    pet: '英國短毛貓 珍珠',
    content: '價目表非常透明，沒有任何隱藏收費。最讓我感動的是他們的專屬告別室，環境很安靜，讓我們一家人有充足的時間與珍珠好好道別。',
    date: '2023年11月'
  },
  {
    name: '張太太',
    pet: '貴婦狗 拖肥',
    content: '他們製作的毛髮琉璃珠手鏈非常精美，現在我每天都戴著，感覺拖肥一直陪伴在我身邊。感謝寵返家嫏的用心。',
    date: '2023年12月'
  },
  {
    name: '王先生',
    pet: '唐狗 旺財',
    content: '深夜時分旺財突然離開，我打電話給他們，很快就安排了專車來接送。工作人員的態度非常尊重，讓我們感到很欣慰。',
    date: '2024年1月'
  },
  {
    name: '林小姐',
    pet: '布偶貓 雪球',
    content: '從接送到火化，每一個細節都處理得很好。他們還提供了很多情感上的支持，讓我慢慢走出失去雪球的傷痛。',
    date: '2024年2月'
  },
  {
    name: '何先生',
    pet: '柴犬 太郎',
    content: '服務流程很清晰，我們選擇了親自按下火化爐的按鈕，這對我們來說是一個很重要的告別儀式。謝謝你們的安排。',
    date: '2024年3月'
  }
];

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>見證 | 寵返家嫏</title>
        <meta name="description" content="閱讀其他家庭在寵返家嫏的真實體驗與見證，了解我們如何以溫暖陪伴他們度過艱難時刻。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              真實見證
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light max-w-2xl mx-auto"
            >
              感謝每一個家庭對我們的信任。您的分享是我們繼續提供溫暖服務的最大動力。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-serif font-semibold text-text">{testimonial.name}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-primary">{testimonial.pet}</p>
                    <p className="text-xs text-text-light">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
