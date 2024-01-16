import Link from 'next/link';
import MiniMenu from './MiniMenu';
import { useState } from 'react';

function SubMenu({ subRoutes, isDesktop, showSubRoutes, label, handleIconClick, handleOnClick }) {
  const [hoveredMiniLabel, setHoveredMiniLabel] = useState(null);
  const [clickedMiniLabel, setClickedMiniLabel] = useState(null);

  const handleMiniMouseEnter = (label) => {
    if (isDesktop) {
      setHoveredMiniLabel(label);
    }
  };

  const handleMiniMouseLeave = () => {
    if (isDesktop) {
      setHoveredMiniLabel(null);
    }
  };

  const handleMiniIconClick = (e, label) => {
    if (!isDesktop && miniAllowedLabels.includes(label)) {
      e.preventDefault();
      setClickedMiniLabel(clickedMiniLabel === label ? null : label);
    }
  };

  const miniAllowedLabels = ['Hipopresivos'];

  const showMiniRoutes = (label) => {
    return miniAllowedLabels.includes(label) && ((isDesktop && hoveredMiniLabel === label) || (!isDesktop && clickedMiniLabel === label));
  };

  return (
    <div>
      {showSubRoutes(label) && subRoutes && (
        <ul className={`bg-white mt-2 rounded shadow p-5 ${isDesktop ? 'absolute' : ''}`}>
          {subRoutes.map(({ label, route, miniRoutes, icon }) => (
            <li className='mb-3 p-2 border-b hover:text-purple-secondary-600 hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out' key={route}
              onMouseEnter={() => handleMiniMouseEnter(label)}
              onMouseLeave={handleMiniMouseLeave}>
              <Link className={`flex items-center justify-between  hover:text-purple-secondary-500`} href={route} onClick={(e) => handleMiniIconClick(e, label)}>
                {label}
                <span className={`${isDesktop ? 'ml-2' : 'ml-4'} `} onClick={handleOnClick} >{icon}</span>
              </Link>
              {showMiniRoutes(label) && <MiniMenu 
                miniRoutes={miniRoutes} 
                isDesktop={isDesktop} 
                showMiniRoutes={showMiniRoutes} 
                label={label} 
                handleIconClick={handleMiniIconClick} 
                hoveredMiniLabel={hoveredMiniLabel} 
                clickedMiniLabel={clickedMiniLabel} 
                handleMouseEnter={handleMiniMouseEnter} 
                handleMouseLeave={handleMiniMouseLeave} 
              />}
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubMenu;



