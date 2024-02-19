import { useState } from "react";
import Link from "next/link";
import routes from "../routes";
import SubMenu from "./SubMenu";

function Menu({ isOpen, setIsOpen, isDesktop, handleOnClick }) {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [clickedLabel, setClickedLabel] = useState(null);

  const handleMouseEnter = (label) => {
    if (isDesktop) {
      setHoveredLabel(label);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setHoveredLabel(null);
    }
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleIconClick = (e, label) => {
    if (!isDesktop && allowedLabels.includes(label)) {
      e.preventDefault();
      setClickedLabel(clickedLabel === label ? null : label);
      
    }
  };

  const allowedLabels = ["Servicios", "Eventos", "Galería"];

  const showSubRoutes = (label) => {
    return (
      allowedLabels.includes(label) &&
      ((isDesktop && hoveredLabel === label) ||
        (!isDesktop && clickedLabel === label))
    );
  };

  return (
    <div
      className={`items-center border-r ${
        isOpen || isDesktop ? "" : "hidden"
      } w-full mr-0 md:w-auto md:order-1`}
      id="navbar-cta"
    >
      <ul
        className={`flex flex-col font-medium p-4 mt-4 rounded-lg rtl:space-x-reverse md:flex-row md:mt-0 ${
          isDesktop === false ? "shadow-lg" : ""
        } md:bg-white bg-transparent`}
      >
        {routes.map(({ label, route, icon, subRoutes, miniRoutes }) => (
          <li
            className="p-2  text-grey-cristal-400"
            key={route}
            onMouseEnter={() => handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
            
          >
            <Link
            
              className={`flex items-center ${
                isDesktop ? "" : "justify-between border-b mt-2 p-2"
              } hover:text-purple-secondary-500`}
              href={route}
            >
              <div onClick={handleIsOpen}>
              {label}
              </div>
              <span
                className={`${isDesktop ? "ml-2" : "ml-4"} `}
                onClick={(e) => handleIconClick(e, label) }
              >
                {icon}
              </span>
            </Link>
            {showSubRoutes(label) && (
              <SubMenu
                handleIsOpen={handleIsOpen}
                isDesktop={isDesktop}
                subRoutes={subRoutes}
                icon={icon}
                handleOnClick={handleOnClick}
                showSubRoutes={showSubRoutes}
                label={label}
                handleIconClick={handleIconClick}
                miniRoutes={miniRoutes}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
