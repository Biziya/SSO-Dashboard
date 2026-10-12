import { Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './ErrorPage.module.css';

export function ErrorPage() {
  usePageTitle('Error');

  return (
    <div className={styles.notFoundPage}>
      <h1>Something went wrong</h1>
      <p>Please refresh the page and try again.</p>
      <Link to="/">Return to dashboard</Link>
    </div>
  );
}
