
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home"
import Plans from "../pages/Plans"
import Summary from "../pages/Summary"
import NotFound from "../components/NotFound"
import RegisterPlan from "../pages/RegisterPlan"
import PrivateRoute from './PrivateRoute';
export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/register-plan',
            element: (
                <PrivateRoute>
                    <RegisterPlan />
                </PrivateRoute>
            ),
            children: [
                {
                    path: '',
                    element: <Plans />,
                },
                {
                    path: 'summary',
                    element: <Summary />,
                },
                { path: '*', element: <NotFound /> },
            ],
        },
    ]);
    return routes;

}