import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <Image src="/logo.png" alt="Goal HK Logo" width={150} height={50} />
            <p>香港領先的室內設計及裝修平台</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>服務</h3>
              <ul>
                <li><Link href="/services/interior-design">室內設計</Link></li>
                <li><Link href="/services/renovation">裝修工程</Link></li>
                <li><Link href="/services/ai-quote">AI報價</Link></li>
                <li><Link href="/services/ai-floorplan">AI平面圖設計</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>關於我們</h3>
              <ul>
                <li><Link href="/about">公司簡介</Link></li>
                <li><Link href="/contact">聯絡我們</Link></li>
                <li><Link href="/careers">加入我們</Link></li>
                <li><Link href="/blog">部落格</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>服務商</h3>
              <ul>
                <li><Link href="/become-provider">成為服務商</Link></li>
                <li><Link href="/provider-login">服務商登入</Link></li>
                <li><Link href="/provider-resources">資源中心</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>支援</h3>
              <ul>
                <li><Link href="/help">幫助中心</Link></li>
                <li><Link href="/faq">常見問題</Link></li>
                <li><Link href="/terms">服務條款</Link></li>
                <li><Link href="/privacy">私隱政策</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Goal HK. 版權所有。</p>
          <div className={styles.paymentMethods}>
            <Image src="/icons/visa.svg" alt="Visa" width={40} height={25} />
            <Image src="/icons/mastercard.svg" alt="Mastercard" width={40} height={25} />
            <Image src="/icons/paypal.svg" alt="PayPal" width={40} height={25} />
            <Image src="/icons/alipay.svg" alt="Alipay" width={40} height={25} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
