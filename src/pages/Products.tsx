import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

const categories = [
  {
    id: 'urns',
    name: '精選骨灰盅',
    desc: '提供多種材質及設計的骨灰盅，讓毛孩有一個安穩的家。',
    items: [
      { name: '簡約陶瓷骨灰盅', price: '$380 起', image: 'https://picsum.photos/seed/urn1/400/400' },
      { name: '實木雕刻骨灰盅', price: '$680 起', image: 'https://picsum.photos/seed/urn2/400/400' },
      { name: '水晶玻璃骨灰盅', price: '$880 起', image: 'https://picsum.photos/seed/urn3/400/400' },
    ]
  },
  {
    id: 'jewelry',
    name: '紀念飾物',
    desc: '將毛孩的骨灰或毛髮製作成飾物，讓愛時刻相伴。',
    items: [
      { name: '純銀骨灰頸鏈', price: '$980', image: 'https://picsum.photos/seed/jewel1/400/400' },
      { name: '毛髮琉璃珠手鏈', price: '$1,280', image: 'https://picsum.photos/seed/jewel2/400/400' },
      { name: '專屬指紋戒指', price: '$1,580', image: 'https://picsum.photos/seed/jewel3/400/400' },
    ]
  },
  {
    id: 'keepsakes',
    name: '專屬紀念品',
    desc: '客製化紀念品，為您與毛孩留下最美好的回憶。',
    items: [
      { name: '3D 掌印泥板', price: '$480', image: 'https://picsum.photos/seed/keep1/400/400' },
      { name: '客製化相框', price: '$280', image: 'https://picsum.photos/seed/keep2/400/400' },
      { name: '毛孩羊毛氈', price: '$880 起', image: 'https://picsum.photos/seed/keep3/400/400' },
    ]
  }
];

export default function Products() {
  return (
    <>
      <Helmet>
        <title>商品分類 | 寵返家嫏</title>
        <meta name="description" content="瀏覽寵返家嫏的精選骨灰盅、紀念飾物及專屬紀念品，為毛孩留下最美好的回憶。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              商品分類
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light max-w-2xl mx-auto"
            >
              我們精選了多款高品質的紀念商品，讓您能以最適合的方式，將毛孩的愛延續下去。
            </motion.p>
          </div>

          <div className="space-y-24">
            {categories.map((category, idx) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-serif font-bold text-text mb-2">{category.name}</h2>
                  <p className="text-text-light">{category.desc}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 group hover:shadow-md transition-all"
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-semibold text-text mb-2">{item.name}</h3>
                        <p className="text-primary font-medium">{item.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
