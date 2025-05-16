import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Menu, Plus, Settings, Sun, Moon, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { Dropdown, DropdownItem } from '../ui/Dropdown';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Main Navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <LayoutDashboard className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">TaskFlow</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Boards
              </button>
            </div>
          </div>
          
          {/* Right Side Navigation */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/board/new')}
              className="inline-flex items-center mr-4 px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-4 w-4 mr-1" />
              New Board
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* User Menu */}
            {user && (
              <div className="ml-3 relative">
                <Dropdown
                  trigger={
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full border-2 border-transparent hover:border-blue-500"
                        src={user.avatarUrl}
                        alt={user.name}
                      />
                    </div>
                  }
                  align="right"
                >
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                  </div>
                  
                  <DropdownItem onClick={() => navigate('/profile')}>
                    <div className="flex items-center">
                      <Settings size={16} className="mr-2" />
                      Profile Settings
                    </div>
                  </DropdownItem>
                  
                  <DropdownItem onClick={logout}>
                    <div className="flex items-center text-red-600">
                      <LogOut size={16} className="mr-2" />
                      Sign out
                    </div>
                  </DropdownItem>
                </Dropdown>
              </div>
            )}
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden ml-3">
              <Dropdown
                trigger={
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                    <Menu size={24} />
                  </button>
                }
                align="right"
              >
                <DropdownItem onClick={() => navigate('/')}>Boards</DropdownItem>
                <DropdownItem onClick={() => navigate('/profile')}>Profile</DropdownItem>
                <DropdownItem onClick={logout}>Sign out</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};