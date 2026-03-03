import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
              <Heart className="h-6 w-6 fill-current" />
              <span className="font-serif text-xl font-semibold tracking-wide">寵返家嫏</span>
            </Link>
            <p className="text-sm text-background/80 leading-relaxed">
              像在星光下輕輕道別——溫柔、安心、有光。我們提供最專業、最有溫度的寵物善終服務。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-primary-light">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">關於我們</Link></li>
              <li><Link to="/service-flow" className="hover:text-primary transition-colors">服務流程</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">價目表</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">商品分類</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">常見問題</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">條款與細則</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-primary-light">聯絡我們</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+852 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@petreturnhome.hk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>香港九龍觀塘偉業街123號<br />星光工業大廈1樓A室</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-primary-light">關注我們</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-text transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-text transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} 寵返家嫏 Pet Return Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
