import { useEffect } from 'react';

/** Sets the browser tab title, as each Blazor page did with its <title>. */
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
