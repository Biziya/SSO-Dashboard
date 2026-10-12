import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ChiefInstructionsEditPage } from '../pages/ChiefInstructionsEdit/ChiefInstructionsEditPage';
import { ChiefInstructionsViewPage } from '../pages/ChiefInstructionsView/ChiefInstructionsViewPage';
import { EditPlantDashboardPage } from '../pages/EditPlantDashboard/EditPlantDashboardPage';
import { ErrorPage } from '../pages/Error/ErrorPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { OperatorDashboardPage } from '../pages/OperatorDashboard/OperatorDashboardPage';
import { PlantDashboardPage } from '../pages/PlantDashboard/PlantDashboardPage';
import { QrmPage } from '../pages/Qrm/QrmPage';

/** Routes keep the URLs of the Blazor app. */
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <PlantDashboardPage /> },
      { path: '/qrm', element: <QrmPage /> },
      { path: '/operator', element: <OperatorDashboardPage /> },
      { path: '/edit-plant-control-dashboard', element: <EditPlantDashboardPage /> },
      { path: '/view-chief-operators-instructions', element: <ChiefInstructionsViewPage /> },
      { path: '/chief-operator-instructions', element: <ChiefInstructionsEditPage /> },
      { path: '/Error', element: <ErrorPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
