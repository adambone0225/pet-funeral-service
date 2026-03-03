import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Heart, Star, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>關於我們 | 寵返家嫏</title>
        <meta name="description" content="寵返家嫏是一個以溫柔陪伴為核心的香港寵物善終服務品牌，讓告別成為有光、有溫度的最後旅程。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              關於我們
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light max-w-2xl mx-auto"
            >
              寵返家嫏是一個以溫柔陪伴為核心的香港寵物善終服務品牌，讓告別成為有光、有溫度的最後旅程。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-text">我們的使命</h2>
              <p className="text-text-light leading-relaxed text-lg">
                在市場資訊分散、家人容易慌亂的時刻，我們致力提供透明的流程與情感支持。我們深信，每一段與毛孩的緣分都值得被溫柔對待。
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                我們以清晰流程與溫暖陪伴為使命，讓您在最脆弱的時刻，能安心地將摯愛交託給我們，專注於最後的道別。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://picsum.photos/seed/aboutus/800/600"
                alt="我們的使命"
                className="rounded-3xl shadow-xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10"
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-text mb-3">溫柔陪伴</h3>
              <p className="text-text-light">我們不僅提供服務，更提供情感上的支持與陪伴，與您共度難關。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10"
            >
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-text mb-3">專業可靠</h3>
              <p className="text-text-light">擁有豐富經驗的專業團隊，確保每一個細節都處理得莊嚴妥當。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10"
            >
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-text mb-3">透明安心</h3>
              <p className="text-text-light">絕無隱藏收費，所有流程與價格公開透明，讓您安心無憂。</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
