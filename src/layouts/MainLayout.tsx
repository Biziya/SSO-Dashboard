import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { SidebarToggle } from '../components/Sidebar/SidebarToggle';
import styles from './MainLayout.module.css';

/** Application shell: collapsible sidebar on the left, page on the right. */
export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  // As in the Blazor layout, the sidebar closes whenever the page changes.
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className={styles.appShell}>
      <SidebarToggle isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((open) => !open)} />
      <Sidebar isOpen={isSidebarOpen} />

      <div className={styles.pageArea}>
        <main className={styles.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
