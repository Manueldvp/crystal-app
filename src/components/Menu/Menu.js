import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import routes from "../routes";
import SubMenu from "./SubMenu";

function Menu({ isOpen, setIsOpen, isDesktop }) {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [clickedLabel, setClickedLabel] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    if (isDesktop) {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setHoveredLabel(label);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      // Add a small delay before hiding to allow mouse movement to dropdown
      timeoutRef.current = setTimeout(() => {
        setHoveredLabel(null);
      }, 150);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleIsOpen = () => {
    setIsOpen(false);
  };

  const handleIconClick = (e, label) => {
    if (!isDesktop && allowedLabels.includes(label)) {
      e.preventDefault();
      setClickedLabel(clickedLabel === label ? null : label);
    }
  };

  const allowedLabels = ["Servicios", "Eventos", "Programas"];

  const showSubRoutes = (label) => {
    return (
      allowedLabels.includes(label) &&
      ((isDesktop && hoveredLabel === label) ||
        (!isDesktop && clickedLabel === label))
    );
  };

  return (
    <div
      className={`${isOpen || isDesktop ? "" : "hidden"} ${isDesktop ? "" : "w-full"}`}
      id="navbar-cta"
    >
      <ul
        className={`flex ${isDesktop ? "flex-row items-center gap-1" : "flex-col mt-4 py-4 border-t border-gray-100"}`}
      >
        {routes.map(({ label, route, icon, subRoutes }) => (
          <li
            className="relative"
            key={route}
            onMouseEnter={() => handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
          >
              <Link
              className={`flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-purple-secondary-600 rounded-lg hover:bg-gray-50 transition-colors ${
                !isDesktop ? "justify-between" : ""
              }`}
              href={route}
            >
              <span onClick={handleIsOpen}>{label}</span>
              {icon && (
              <span
                  className="text-gray-400"
                onClick={(e) => handleIconClick(e, label)}
              >
                {icon}
              </span>
              )}
            </Link>
                
            {showSubRoutes(label) && (
              <div
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}
              >
                <SubMenu
                  handleIsOpen={handleIsOpen}
                  isDesktop={isDesktop}
                  subRoutes={subRoutes}
                  showSubRoutes={showSubRoutes}
                  label={label}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
