import { Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  usePageTitle('Not found');

  return (
    <div className={styles.notFoundPage}>
      <h1>Page not found</h1>
      <Link to="/">Return to dashboard</Link>
    </div>
  );
}
