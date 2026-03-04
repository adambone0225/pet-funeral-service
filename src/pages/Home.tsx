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
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#fdf7f0]">
        {/* Animated Cosmic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b303b] via-[#8c6b6b] to-[#fdf7f0]" />
          
          {/* Sweeping Nebula Effect */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[80%] opacity-60 mix-blend-screen"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage: 'radial-gradient(ellipse at 70% 30%, #e8a87c 0%, transparent 50%), radial-gradient(ellipse at 30% 20%, #c38d9e 0%, transparent 40%)',
              filter: 'blur(30px)'
            }}
          />

          {/* Twinkling Stars & Meteor Animations */}
          <style>
            {`
              @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(4); } /* Increased scale for eye-catching effect */
              }
              @keyframes meteor {
              0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
      5% { opacity: 1; } /* Quicker fade-in */
      15% { transform: translateX(-600px) translateY(600px) rotate(-45deg); opacity: 0; } /* Faster streak */
      100% { opacity: 0; }}
              //  0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
              //   1% { opacity: 1; }
              //   10% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
              //   100% { opacity: 0; } 
              
        
              .star {
                position: absolute;
                background-color: white;
                border-radius: 50%;
                animation: twinkle infinite ease-in-out;
              }
              .meteor {
                position: absolute;
                width: 100px;
                height: 2px;
                background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
                animation: meteor 10s infinite linear;
                opacity: 0;
              }
            `}
          </style>

          <div className="absolute inset-0">
            {/* Twinkling Stars */}
            {[...Array(60)].map((_, i) => {
              const size = Math.random() * 4 + 2; // Increased base size
              return (
                <div
                  key={`star-${i}`}
                  className="star"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    boxShadow: '0 0 8px rgba(255,255,255,0.9)'
                  }}
                />
              );
            })}

            {/* Meteors */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`meteor-${i}`}
                className="meteor"
                style={{
                  top: `${Math.random() * 40}%`,
                  left: `${Math.random() * 100 + 20}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${Math.random() * 2 + 5}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Panel (Text Content) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-[#D98C5A] rounded-[2.5rem] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6" />
              <div className="relative bg-[#F3D0B4] p-10 sm:p-14 rounded-[2.5rem] z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#3A4A5A] mb-4 leading-tight tracking-wide">
                  像在星光下輕輕道別
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif font-bold text-[#D98C5A] mb-8 leading-tight">
                  溫柔、安心、有光
                </h2>
                <p className="text-lg text-[#3A4A5A] mb-12 leading-loose font-sans max-w-xl">
                  寵返家嫏是一個以溫柔陪伴為核心的香港寵物善終服務品牌。我們以清晰流程與溫暖陪伴為使命，讓毛孩的最後一程充滿愛與尊嚴。
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-[#D98C5A] text-white rounded-full font-medium hover:bg-[#c47a4d] transition-all flex items-center justify-center gap-2 group text-lg shadow-md">
                    聯絡我們
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/pricing" className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#3A4A5A] rounded-full font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-lg shadow-md">
                    查看套餐
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Side (Majestic Cat Illustration) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-6 relative flex justify-center items-center h-[500px] lg:h-[700px] mt-12 lg:mt-0"
            >
              {/* Refined Cloud Plinth */}
              <div className="absolute bottom-20 w-[300px] h-20 bg-white/40 blur-2xl rounded-[100%] mix-blend-overlay" />
              <div className="absolute bottom-24 w-[200px] h-16 bg-white/60 blur-xl rounded-[100%]" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Wing Glow Layer */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none"
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute top-[15%] left-[5%] w-[45%] h-[60%] bg-gradient-to-tr from-transparent via-[#FFF6E8]/40 to-transparent blur-3xl transform -rotate-[25deg]" />
                  <div className="absolute top-[15%] right-[5%] w-[45%] h-[60%] bg-gradient-to-tl from-transparent via-[#FFF6E8]/40 to-transparent blur-3xl transform rotate-[25deg]" />
                </motion.div>

                {/* The Hero Cat - Larger & Sharper */}
                <img 
                  src="/public/img/cat.png" 
                  alt="Peaceful Angel Cat" 
                  className="w-[640px] lg:w-[900px] h-auto object-contain relative z-10"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)', 
                    WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
                    filter: 'drop-shadow(0 0 20px rgba(255, 246, 232, 0.3))'
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Feature Sections continue below... */}
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
    </>
  );
}