import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceDate: '',
    address: '',
    items: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('感謝您的查詢，我們會盡快與您聯絡。');
    setFormData({ name: '', phone: '', serviceDate: '', address: '', items: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-serif font-semibold text-text mb-6 text-center">
        預約及報價查詢
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-light mb-1">
              姓名 Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50"
              placeholder="陳大文 Chan Tai Man"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-light mb-1">
              聯絡電話 Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50"
              placeholder="9876 5432"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceDate" className="block text-sm font-medium text-text-light mb-1">
            預計服務日期 Service Date
          </label>
          <input
            type="date"
            id="serviceDate"
            name="serviceDate"
            value={formData.serviceDate}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-text-light mb-1">
            接送地址 Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50"
            placeholder="請輸入詳細地址"
          />
        </div>

        <div>
          <label htmlFor="items" className="block text-sm font-medium text-text-light mb-1">
            所需服務/商品 Item List
          </label>
          <textarea
            id="items"
            name="items"
            rows={4}
            value={formData.items}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50 resize-none"
            placeholder="例如：基本火化套餐、骨灰盅、紀念飾物..."
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm"
        >
          <Send className="w-5 h-5" />
          提交查詢 Submit
        </button>
      </form>
    </motion.div>
  );
}
