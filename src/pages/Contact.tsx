import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>聯絡我們 | 寵返家嫏</title>
        <meta name="description" content="聯絡寵返家嫏，我們提供24小時緊急支援熱線，隨時為您提供專業的寵物善終服務與報價查詢。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-text mb-4"
            >
              聯絡我們
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-light max-w-2xl mx-auto"
            >
              無論您有任何疑問，或需要即時協助，我們都隨時準備為您服務。
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
                <h3 className="text-2xl font-serif font-semibold text-text mb-6">聯絡資訊</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text mb-1">24小時支援熱線 / WhatsApp</p>
                      <p className="text-text-light text-lg">+852 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text mb-1">電郵地址</p>
                      <p className="text-text-light">hello@petreturnhome.hk</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text mb-1">辦公室及告別室地址</p>
                      <p className="text-text-light">香港九龍觀塘偉業街123號<br />星光工業大廈1樓A室</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text mb-1">營業時間</p>
                      <p className="text-text-light">星期一至日：09:00 - 22:00<br />(緊急接送服務 24 小時運作)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-2 rounded-2xl shadow-sm border border-primary/10 h-64 overflow-hidden">
                {/* Placeholder for Google Maps iframe */}
                <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-text-light">
                  地圖載入中...
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
