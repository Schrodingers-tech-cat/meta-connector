import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Publish from "./pages/components/PublishPost"
import History from "./pages/components/PostHistory"
import Configuration from "./pages/components/Configuration"

const router = createBrowserRouter([
  {
    path: "/company/:company_id/",
    element: <App />,
  },
  {
    path: "/company/:company_id/application/:application_id",
    element: <App />,
  },
  {
    path: "/publish", // Fallback route for all unmatched paths
    element: <Publish />, // Component to render for unmatched paths
  },
  {
    path: "/history", // Fallback route for all unmatched paths
    element: <History />, // Component to render for unmatched paths
  },
  {
    path: "/config", // Fallback route for all unmatched paths
    element: <Configuration />, // Component to render for unmatched paths
  },
  {
    path: "/*", // Fallback route for all unmatched paths
    element: <NotFound />, // Component to render for unmatched paths
  },
]);

export default router;
