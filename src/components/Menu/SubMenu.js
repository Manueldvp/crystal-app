import Link from 'next/link';

function SubMenu({ subRoutes, handleIsOpen, isDesktop, showSubRoutes, label }) {
  return (
    <>
      {showSubRoutes(label) && subRoutes && (
        <ul 
          className={`bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px] ${
            isDesktop ? 'absolute top-full left-0 mt-0 pt-1 z-50' : 'mt-2 ml-4'
          }`}
        >
          {subRoutes.map(({ label, route }) => (
            <li key={route}>
              <Link 
                href={route}
                onClick={handleIsOpen}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-secondary-600 hover:bg-purple-secondary-50 transition-colors"
              >
                {label}
              </Link>
               </li>
              ))}
        </ul>
      )}
    </>
  );
}

export default SubMenu;
