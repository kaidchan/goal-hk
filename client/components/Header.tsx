import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 這裡應該從全局狀態獲取

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Goal HK Logo" width={120} height={40} />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/services">服務分類</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/ai-quote">AI報價</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/ai-floorplan">AI平面圖設計</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/materials">建材購買</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/designers">尋找設計師</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className={styles.dashboardLink}>
                我的帳戶
              </Link>
              <button className={styles.logoutBtn} onClick={() => setIsLoggedIn(false)}>
                登出
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={styles.loginBtn}>
                登入
              </Link>
              <Link href="/register" className={styles.registerBtn}>
                註冊
              </Link>
            </>
          )}
          <Link href="/become-provider" className={styles.becomeProviderBtn}>
            成為服務商
          </Link>
        </div>

        <button 
          className={styles.menuToggle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
