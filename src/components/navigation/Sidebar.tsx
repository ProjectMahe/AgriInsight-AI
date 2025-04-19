import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, LayoutDashboard, Plane as Plant, Cloud, FlaskRound as Flask, Droplets, Users, Settings, Globe } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navigation = [
    { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
    { name: 'Crop Monitoring', href: '/app/crop-monitoring', icon: Plant },
    { name: 'Weather Analysis', href: '/app/weather', icon: Cloud },
    { name: 'Soil Analysis', href: '/app/soil', icon: Flask },
    { name: 'Resource Management', href: '/app/resources', icon: Droplets },
    { name: 'Community Hub', href: '/app/community', icon: Users },
    { name: 'Settings', href: '/app/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-semibold text-primary-500">AgriInsight</span>
          </div>
          <button
            className="md:hidden rounded-md p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              end={item.href === '/app'}
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="bg-primary-50 rounded-lg p-3">
            <h4 className="font-medium text-primary-700 text-sm">AI Assistant</h4>
            <p className="text-xs text-primary-600 mt-1">
              Get personalized farming advice from our AI assistant.
            </p>
            <button className="btn btn-primary w-full mt-2 py-1 text-xs">
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;