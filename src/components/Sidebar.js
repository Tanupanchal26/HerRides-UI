'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { name: 'User Management', icon: '👥', path: '/users' },
    { name: 'Rides', icon: '🚗', path: '/rides' },
    { name: 'Payments & Earnings', icon: '💳', path: '/payments' },
    { name: 'Report', icon: '📈', path: '/reports' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full bg-white shadow-xl w-64 z-50">
      {/* App Logo */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            H
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">HerRides</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2">
        <ul className="space-y-0.5 px-3">
          {menuItems.map((item, index) => (
            <div key={item.name}>
              <li>
                <Link
                  href={item.path}
                  className={`flex items-center px-3 py-3 text-sm rounded-xl transition-all duration-200 ${
                    pathname === item.path
                      ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
              {index < menuItems.length - 1 && (
                <div className="mx-3 my-2 border-b border-gray-100"></div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;