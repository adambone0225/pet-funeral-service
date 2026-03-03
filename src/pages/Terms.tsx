import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>條款與細則 | 寵返家嫏</title>
        <meta name="description" content="寵返家嫏的服務條款與細則。" />
      </Helmet>

      <div className="bg-background py-20 min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/10"
          >
            <h1 className="text-3xl font-serif font-bold text-text mb-8 text-center">條款與細則</h1>
            
            <div className="space-y-8 text-text-light leading-relaxed">
              <section>
                <h2 className="text-xl font-serif font-semibold text-text mb-4">1. 服務範圍</h2>
                <p>寵返家嫏（以下簡稱「本公司」）提供寵物善終服務，包括但不限於遺體接送、清潔、火化、骨灰處理及紀念品製作。所有服務均受本條款與細則約束。</p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-text mb-4">2. 預約及收費</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>客戶須透過電話、WhatsApp 或網上表格進行預約。</li>
                  <li>所有服務收費以本公司最新公佈的價目表為準。</li>
                  <li>偏遠地區、特大犬隻及夜間急診接送需收取額外附加費，詳情請參閱價目表或向本公司查詢。</li>
                  <li>客戶須於服務完成前繳清所有費用。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-text mb-4">3. 遺體處理</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>本公司承諾以最尊重的態度處理所有寵物遺體。</li>
                  <li>客戶須確保所提供的寵物資料（如品種、體重）準確無誤，以免影響服務安排及收費。</li>
                  <li>本公司保留拒絕處理帶有傳染病或嚴重腐爛遺體的權利。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-text mb-4">4. 火化服務</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>本公司僅提供獨立火化服務，確保骨灰的純潔性。</li>
                  <li>火化過程可能受天氣、設備維護等不可抗力因素影響而延遲，本公司將盡快通知客戶並重新安排。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-text mb-4">5. 免責聲明</h2>
                <p>在法律允許的最大範圍內，本公司對因使用本服務而產生的任何間接、附帶、特殊或衍生性損失概不負責。本公司的總責任僅限於客戶就相關服務所支付的費用。</p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-text mb-4">6. 條款修改</h2>
                <p>本公司保留隨時修改本條款與細則的權利，修改後的條款將於本網站公佈後即時生效。客戶繼續使用本服務即表示同意接受修改後的條款。</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
