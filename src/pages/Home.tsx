import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, ShieldCheck, Clock } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>寵返家嫏 | 香港專業寵物善終服務</title>
        <meta name="description" content="寵返家嫏提供專業、有溫度的香港寵物善終服務。透明價目、清晰流程，讓告別成為有光、有溫度的最後旅程。" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/stars/1920/1080?blur=2')] bg-cover bg-center opacity-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-text mb-6 leading-tight">
              像在星光下輕輕道別<br />
              <span className="text-primary">溫柔、安心、有光</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mb-10 leading-relaxed">
              寵返家嫏是一個以溫柔陪伴為核心的香港寵物善終服務品牌。<br className="hidden md:block" />
              我們以清晰流程與溫暖陪伴為使命，讓毛孩的最後一程充滿愛與尊嚴。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                聯絡我們
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-white text-text border border-primary/20 rounded-full font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                查看套餐
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-text mb-4">為什麼選擇我們？</h2>
            <p className="text-text-light max-w-2xl mx-auto">我們明白失去摯愛的痛楚，因此致力提供最透明、最貼心的服務。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: '透明價目表',
                desc: '絕無隱藏收費，所有服務及商品價格清晰列明，讓您安心選擇。',
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: '清晰流程說明',
                desc: '從接送到火化，每個步驟都有專人跟進及詳細解說，不再慌亂。',
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: '溫暖陪伴',
                desc: '我們提供情感支持與社群即時聯絡，在最艱難的時刻與您同行。',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-background/50 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-text mb-3">{feature.title}</h3>
                <p className="text-text-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://picsum.photos/seed/pet/800/600"
                alt="溫暖的陪伴"
                className="rounded-3xl shadow-xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-text mb-4">了解更多服務細節</h2>
                <p className="text-text-light leading-relaxed">
                  我們提供一站式的寵物善終服務，從基本火化到專屬紀念品，讓您能以最適合的方式紀念毛孩。
                </p>
              </div>
              
              <div className="space-y-4">
                <Link to="/service-flow" className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                      <span className="font-bold">1</span>
                    </div>
                    <span className="font-medium text-text group-hover:text-primary transition-colors">了解服務流程</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-light group-hover:text-primary transition-colors" />
                </Link>
                <Link to="/pricing" className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                      <span className="font-bold">2</span>
                    </div>
                    <span className="font-medium text-text group-hover:text-primary transition-colors">查看透明價目表</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-light group-hover:text-primary transition-colors" />
                </Link>
                <Link to="/products" className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                      <span className="font-bold">3</span>
                    </div>
                    <span className="font-medium text-text group-hover:text-primary transition-colors">瀏覽紀念商品</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-light group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-4">需要協助？</h2>
            <p className="text-text-light max-w-2xl mx-auto">填寫以下表格，我們的專業團隊會盡快為您提供報價及安排。</p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
