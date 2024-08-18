"use client";

import styles from "./nav.module.css";

const navItems = [
  {
    name: "홈",
    icon: <>홈</>,
  },
  {
    name: "공유홈?",
    icon: <>공유홈?</>,
  },
  {
    name: "통계",
    icon: <>통계</>,
  },
  {
    name: "세팅",
    icon: <>세팅</>,
  },
];

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        {navItems.map((navItem, idx) => (
          <div key={`${navItem.name}${idx}`} className={styles.navItem}>
            {navItem.icon}
          </div>
        ))}
      </div>
    </nav>
  );
};
