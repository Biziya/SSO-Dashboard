import type { IconName } from '../Icon/Icon';

export interface NavItem {
  path: string;
  label: string;
  icon: IconName;
  /** Match the path exactly (Blazor NavLinkMatch.All). */
  end?: boolean;
}

/**
 * Sidebar entries, in the Blazor MainLayout order.
 *
 * The Blazor app hid entries according to the signed-in user's role.
 * Authorization is not part of this static frontend, so every entry is
 * listed. Two roles saw an entry with the same label; the limited one is
 * marked here so both can be told apart while reviewing.
 */
export const navItems: NavItem[] = [
  { path: '/', label: 'Plant Control Dashboard', icon: 'dashboard', end: true },
  { path: '/qrm', label: 'QRM', icon: 'groups' },
  { path: '/operator', label: 'Chief & Senior operators section (limited)', icon: 'editNote' },
  { path: '/edit-plant-control-dashboard', label: 'Chief & Senior operators section', icon: 'editNote' },
  {
    path: '/view-chief-operators-instructions',
    label: 'Eluent, brine & acid solution preparation (Seniors)',
    icon: 'visibility',
  },
  {
    path: '/chief-operator-instructions',
    label: 'Eluent, brine & acid solution preparation (Chiefs)',
    icon: 'assignment',
  },
];

/** Shown at the foot of the sidebar; the Blazor app showed the Windows account. */
export const mockUserName = 'DEMO\\operator.user';
