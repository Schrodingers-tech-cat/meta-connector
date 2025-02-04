import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../style/breadcrumbs.css";  // Ensure this file exists for styling

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Define custom labels for paths
  const generateLabel = (segment, index, pathnames) => {
    if (segment === "company") return "Company";
    if (segment === "application") return "Application";
    if (index > 0 && pathnames[index - 1] === "company") return `Company ${segment}`;
    if (index > 0 && pathnames[index - 1] === "application") return `Application ${segment}`;
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((segment, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <Link to={pathTo}>{generateLabel(segment, index, pathnames)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
