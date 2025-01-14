import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ROUTE } from "./routes";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";
import { CreateOfferPage } from "./pages/CreateOfferPage";
import { OffersPage } from "./pages/OffersPage";

export function App() {
  const [user, setUser] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: ROUTE.REGISTRATION,
          element: <RegistrationPage />,
        },
        {
          path: ROUTE.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTE.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTE.CONTACT,
          element: <ContactPage />,
        },
        {
          path: ROUTE.EMPLOYEES,
          element: <ProtectedRoute user={user} element={<EmployeesPage />} />,
        },
        {
          path: ROUTE.OFFERS,
          element: <OffersPage />,
        },
        {
          path: ROUTE.OFFERS_CREATE,
          element: <CreateOfferPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
