import Link from "next/link";

function MiniMenu({ miniRoutes, isDesktop, showMiniRoutes, label, handleIconClick }) {
  return (
    <div>
      {showMiniRoutes(label) && miniRoutes && (
        <ul className={`bg-white mt-2 rounded shadow p-2 ${isDesktop ? 'absolute flex-row right-0' : ''}   `}>
          {miniRoutes.map(({ label, route }) => (
            <li className='mb-3 p-2 border-b hover:text-purple-secondary-600 hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out'>
              <Link key={route} href={route} onClick={(e) => handleIconClick(e, label)}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MiniMenu;
