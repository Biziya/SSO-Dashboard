import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { mockUserName, navItems } from './navItems';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const sidebarClass = isOpen ? styles.sidebar : `${styles.sidebar} ${styles.sidebarHidden}`;

  return (
    <aside className={sidebarClass}>
      <Link className={styles.brand} to="/">
        <span className={styles.brandMark}>SSO</span>
        <span className={styles.brandText}>
          <strong>Plant Operations</strong>
          <small>Control dashboard</small>
        </span>
      </Link>

      <nav className={styles.sidebarNav} aria-label="Dashboard navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => (isActive ? `${styles.navItem} ${styles.active}` : styles.navItem)}
          >
            <Icon name={item.icon} className={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.sidebarUser}>{mockUserName}</div>
    </aside>
  );
}
