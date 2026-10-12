import { Icon } from '../Icon/Icon';
import styles from './Sidebar.module.css';

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

/** The dark edge tab that slides the sidebar in and out. */
export function SidebarToggle({ isOpen, onToggle }: SidebarToggleProps) {
  const stateClass = isOpen ? styles.edgeToggleOpen : styles.edgeToggleClosed;

  return (
    <button
      type="button"
      className={`${styles.edgeToggle} ${stateClass}`}
      onClick={onToggle}
      title="Toggle sidebar"
      aria-expanded={isOpen}
    >
      <Icon name={isOpen ? 'keyboardArrowLeft' : 'keyboardArrowRight'} />
    </button>
  );
}
