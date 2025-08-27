'use client';
import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [showDesktopView, setShowDesktopView] = useState(false);
  const [showMobileView, setShowMobileView] = useState(false);
  const [showLogFilters, setShowLogFilters] = useState(false);
  const [showBackupConfirm, setShowBackupConfirm] = useState(false);
  const [roleSubTab, setRoleSubTab] = useState('roles');
  const [showEditRole, setShowEditRole] = useState(null);
  const [showPreviewRole, setShowPreviewRole] = useState(null);
  const [showCreateRole, setShowCreateRole] = useState(false);
  const [showAuditTrail, setShowAuditTrail] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [apiKeySearch, setApiKeySearch] = useState('');
  const [apiKeyFilter, setApiKeyFilter] = useState('all');
  const [newApiKey, setNewApiKey] = useState({ name: '', permissions: [], expiry: '' });
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Mobile App API',
      key: 'ak_live_1234567890abcdef',
      createdDate: '2024-01-10',
      lastUsed: '2024-01-15 10:30',
      lastIP: '192.168.1.100',
      permissions: ['rides:read', 'users:read', 'payments:read'],
      usage: [12, 25, 18, 30, 22, 35, 28],
      status: 'active'
    },
    {
      id: 2,
      name: 'Analytics Dashboard',
      key: 'ak_live_abcdef1234567890',
      createdDate: '2024-01-05',
      lastUsed: '2024-01-14 16:45',
      lastIP: '10.0.0.45',
      permissions: ['reports:read', 'analytics:read'],
      usage: [8, 15, 12, 20, 18, 25, 22],
      status: 'active'
    },
    {
      id: 3,
      name: 'Payment Gateway',
      key: 'ak_live_fedcba0987654321',
      createdDate: '2023-12-20',
      lastUsed: '2024-01-12 09:15',
      lastIP: '172.16.0.23',
      permissions: ['payments:read', 'payments:write'],
      usage: [5, 8, 6, 12, 10, 15, 13],
      status: 'active'
    },
    {
      id: 4,
      name: 'Legacy Integration',
      key: 'ak_live_0123456789abcdef',
      createdDate: '2023-11-15',
      lastUsed: '2023-12-28 14:20',
      lastIP: '203.0.113.1',
      permissions: ['users:read'],
      usage: [2, 1, 0, 1, 0, 2, 1],
      status: 'inactive'
    }
  ]);
  const [roles, setRoles] = useState([
    { name: 'Super Admin', icon: '👑', description: 'Full system access and control', users: 2, lastUpdated: '2024-01-15' },
    { name: 'Admin', icon: '🛡️', description: 'Administrative access with limitations', users: 5, lastUpdated: '2024-01-10' },
    { name: 'Manager', icon: '📊', description: 'Operational management and reporting', users: 12, lastUpdated: '2024-01-08' },
    { name: 'Support', icon: '🎧', description: 'Customer support and basic operations', users: 8, lastUpdated: '2024-01-05' },
    { name: 'Viewer', icon: '👁️', description: 'Read-only access to dashboards', users: 15, lastUpdated: '2024-01-03' }
  ]);
  const [newRole, setNewRole] = useState({ name: '', icon: '', description: '' });

  const tabs = [
    { id: 'general', name: 'General', icon: '⚙️' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'roles', name: 'Roles & Permissions', icon: '👥' },
    { id: 'api', name: 'API Keys', icon: '🔑' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="flex">
        {/* Sidebar Tabs */}
        <div className="w-64 bg-white rounded-lg shadow mr-6">
          <nav className="p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg mb-2 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {activeTab === 'general' && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-medium text-gray-900 mb-8">General Settings</h2>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
                {/* Platform Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Platform Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="HerRides" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <span className="absolute right-3 top-3.5 text-green-500 opacity-0 transition-opacity">✓</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">This name appears throughout the platform</p>
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Logo Upload</label>
                  <div className="relative group border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:border-blue-400 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="mx-auto h-16 w-16" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">📸 Upload your logo</p>
                      <p className="text-sm text-gray-500 mb-4">Drag and drop or click to browse</p>
                      <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs text-gray-600 border border-white/50">
                        PNG, JPG, SVG • Max 2MB
                      </div>
                    </div>
                  </div>
                  
                  {/* Logo Preview */}
                  <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-100">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Live Preview</h4>
                        <p className="text-sm text-gray-600">See how your logo appears across platforms</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Live</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Desktop Preview */}
                      <div className="group">
                        <div className="relative">
                          <div 
                            className="bg-white rounded-2xl p-4 shadow-xl border border-white/50 cursor-pointer transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2"
                            onClick={() => setShowDesktopView(true)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Browser Window */}
                            <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-xl p-3">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                                <div className="ml-4 bg-white rounded-full px-3 py-1 text-xs text-gray-600 shadow-inner">herrides.com</div>
                              </div>
                              
                              {/* Website Content */}
                              <div className="bg-white rounded-lg p-4 shadow-inner">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center">
                                      <div className="w-6 h-6 bg-white rounded opacity-90"></div>
                                    </div>
                                    <div className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">HerRides</div>
                                  </div>
                                  <div className="flex space-x-4">
                                    <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                                    <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  <div className="h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                                  <div className="h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                                  <div className="h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg"></div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <span className="text-white text-xs">🔍</span>
                            </div>
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-sm font-medium text-gray-700">💻 Desktop Experience</p>
                            <p className="text-xs text-gray-500">Click to explore</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Preview */}
                      <div className="group">
                        <div className="relative flex justify-center">
                          <div 
                            className="relative cursor-pointer transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                            onClick={() => setShowMobileView(true)}
                          >
                            {/* Phone Frame */}
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl" style={{width: '140px', height: '280px'}}>
                              <div className="bg-black rounded-2xl h-full p-1">
                                <div className="bg-white rounded-2xl h-full flex flex-col overflow-hidden">
                                  {/* Status Bar */}
                                  <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50">
                                    <div className="flex items-center space-x-1">
                                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                    </div>
                                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                                    <div className="flex items-center space-x-1">
                                      <div className="w-3 h-2 border border-gray-600 rounded-sm"></div>
                                    </div>
                                  </div>
                                  
                                  {/* App Header */}
                                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                      <div className="w-3 h-3 bg-white rounded"></div>
                                    </div>
                                    <div className="text-sm font-bold">HerRides</div>
                                    <div className="w-5 h-5 bg-white/20 rounded"></div>
                                  </div>
                                  
                                  {/* App Content */}
                                  <div className="flex-1 p-3 space-y-2">
                                    <div className="h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                                    <div className="h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg"></div>
                                    <div className="h-8 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg"></div>
                                  </div>
                                  
                                  {/* Bottom Navigation */}
                                  <div className="flex justify-around p-2 bg-gray-50 border-t">
                                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg"></div>
                                    <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                                    <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                                    <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <span className="text-white text-xs">📱</span>
                            </div>
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-sm font-medium text-gray-700">📱 Mobile Experience</p>
                            <p className="text-xs text-gray-500">Tap to preview</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Interactive Hint */}
                    <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <span className="animate-pulse">✨</span>
                        <span>Hover and click to explore your logo in action</span>
                        <span className="animate-pulse">✨</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Support Contact</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      defaultValue="support@herrides.com" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <span className="absolute right-3 top-3.5 text-green-500">✓</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Users will see this contact for support inquiries</p>
                </div>

                {/* Save Changes */}
                <div className="pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setShowSaveConfirm(true);
                      setTimeout(() => setShowSaveConfirm(false), 10000);
                    }}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Save Changes
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-3">Changes will be applied immediately</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Security Settings</h2>
                  <p className="text-gray-600 mt-1">Manage authentication, sessions, and security policies</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Secure</span>
                </div>
              </div>



              {/* Active Sessions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-green-600">👥</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Active Sessions</h3>
                      <p className="text-sm text-gray-600">Monitor and manage current login sessions</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">3 Active</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { device: 'Chrome on Windows', location: 'Mumbai, India', ip: '192.168.1.100', time: '2 minutes ago', current: true },
                    { device: 'Safari on iPhone', location: 'Delhi, India', ip: '10.0.0.45', time: '1 hour ago', current: false },
                    { device: 'Firefox on Mac', location: 'Bangalore, India', ip: '172.16.0.23', time: '3 hours ago', current: false }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${session.current ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                        <div>
                          <div className="font-medium text-gray-900 flex items-center">
                            {session.device}
                            {session.current && <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Current</span>}
                          </div>
                          <div className="text-sm text-gray-600">{session.location} • {session.ip} • {session.time}</div>
                        </div>
                      </div>
                      {!session.current && (
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 hover:bg-red-50 rounded transition-colors">
                          Terminate
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Action Log */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-yellow-600">📋</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Admin Action Log</h3>
                      <p className="text-sm text-gray-600">Track all administrative activities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setShowLogFilters(!showLogFilters)}
                      className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      🔍 Filter
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      📥 Export
                    </button>
                  </div>
                </div>
                
                {showLogFilters && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input 
                        type="text" 
                        placeholder="Search actions..." 
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                      <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                        <option>All Actions</option>
                        <option>Login</option>
                        <option>User Management</option>
                        <option>Settings</option>
                      </select>
                      <input 
                        type="date" 
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                )}
                
                <div className="max-h-64 overflow-y-auto">
                  <div className="space-y-2">
                    {[
                      { action: 'Admin login successful', user: 'admin@herrides.com', ip: '192.168.1.100', time: '2024-01-15 14:30:25', type: 'success' },
                      { action: 'User role updated: john@email.com', user: 'admin@herrides.com', ip: '192.168.1.100', time: '2024-01-15 14:25:10', type: 'warning' },
                      { action: 'Failed login attempt', user: 'unknown@email.com', ip: '203.0.113.1', time: '2024-01-15 14:20:45', type: 'error' },
                      { action: 'Payment approved: ₹2,450', user: 'admin@herrides.com', ip: '192.168.1.100', time: '2024-01-15 14:15:30', type: 'info' },
                      { action: 'Data export initiated', user: 'admin@herrides.com', ip: '192.168.1.100', time: '2024-01-15 14:10:15', type: 'warning' }
                    ].map((log, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            log.type === 'success' ? 'bg-green-400' :
                            log.type === 'warning' ? 'bg-yellow-400' :
                            log.type === 'error' ? 'bg-red-400' : 'bg-blue-400'
                          }`}></div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{log.action}</div>
                            <div className="text-xs text-gray-500">{log.user} • {log.ip}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">{log.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Account Recovery */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mr-3">
                      <span className="text-indigo-600">🔄</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Account Recovery</h3>
                      <p className="text-sm text-gray-600">Configure backup authentication methods</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setShowBackupConfirm(true);
                      setTimeout(() => setShowBackupConfirm(false), 10000);
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    Setup Recovery
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roles' && (
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Roles & Permissions</h2>
                  <p className="text-gray-600 mt-1">Manage user roles and access permissions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    📥 Import
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    📤 Export
                  </button>
                  <button 
                    onClick={() => setShowAuditTrail(true)}
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
                  >
                    📋 Audit Trail
                  </button>
                </div>
              </div>

              {/* Role/User Tabs */}
              <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setRoleSubTab('roles')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    roleSubTab === 'roles' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  👥 Roles
                </button>
                <button
                  onClick={() => setRoleSubTab('users')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    roleSubTab === 'users' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  👤 User Assignment
                </button>
              </div>

              {roleSubTab === 'roles' && (
                <div className="space-y-6">
                  {/* Create New Role Button */}
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setShowCreateRole(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      ➕ Create New Role
                    </button>
                  </div>

                  {/* Roles List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roles.map((role, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                              {role.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{role.name}</h3>
                              <p className="text-xs text-gray-500">Updated: {role.lastUpdated}</p>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{role.users} users assigned</span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => setShowEditRole(role)}
                            className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                          >
                            ✏️ Edit
                          </button>
                          <button 
                            onClick={() => setShowPreviewRole(role)}
                            className="flex-1 bg-green-50 text-green-600 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                          >
                            👁️ Preview
                          </button>
                          <button className="bg-gray-50 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                            📋 Duplicate
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {roleSubTab === 'users' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">User Role Assignment</h3>
                    <div className="flex items-center space-x-3">
                      <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
                      />
                      <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                        <option>All Roles</option>
                        <option>Super Admin</option>
                        <option>Admin</option>
                        <option>Manager</option>
                        <option>Support</option>
                        <option>Viewer</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'John Doe', email: 'john@herrides.com', role: 'Super Admin', avatar: 'JD', status: 'Active' },
                      { name: 'Jane Smith', email: 'jane@herrides.com', role: 'Admin', avatar: 'JS', status: 'Active' },
                      { name: 'Mike Johnson', email: 'mike@herrides.com', role: 'Manager', avatar: 'MJ', status: 'Inactive' },
                      { name: 'Sarah Wilson', email: 'sarah@herrides.com', role: 'Support', avatar: 'SW', status: 'Active' },
                      { name: 'Tom Brown', email: 'tom@herrides.com', role: 'Viewer', avatar: 'TB', status: 'Active' }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {user.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-600">{user.email}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                            <option selected={user.role === 'Super Admin'}>Super Admin</option>
                            <option selected={user.role === 'Admin'}>Admin</option>
                            <option selected={user.role === 'Manager'}>Manager</option>
                            <option selected={user.role === 'Support'}>Support</option>
                            <option selected={user.role === 'Viewer'}>Viewer</option>
                          </select>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                          <button className="text-red-600 hover:text-red-800 text-sm">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'api' && (
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">API Keys Management</h2>
                  <p className="text-gray-600 mt-1">Manage API keys for secure access to HerRides services</p>
                </div>
                <button 
                  onClick={() => setShowApiKeyModal(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <span>🔑</span>
                  <span>Generate New API Key</span>
                </button>
              </div>

              {/* Search and Filter Bar */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search API keys by name..."
                        value={apiKeySearch}
                        onChange={(e) => setApiKeySearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">🔍</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select
                      value={apiKeyFilter}
                      onChange={(e) => setApiKeyFilter(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="all">All Keys</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="recent">Recently Used</option>
                    </select>
                    <button className="bg-gray-100 text-gray-600 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                      📊 Export
                    </button>
                  </div>
                </div>
              </div>

              {/* API Keys Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Key Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Creation Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Last Used</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Last IP</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Permissions</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Usage</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {apiKeys
                        .filter(key => {
                          const matchesSearch = key.name.toLowerCase().includes(apiKeySearch.toLowerCase());
                          const matchesFilter = apiKeyFilter === 'all' || 
                            (apiKeyFilter === 'active' && key.status === 'active') ||
                            (apiKeyFilter === 'inactive' && key.status === 'inactive') ||
                            (apiKeyFilter === 'recent' && new Date(key.lastUsed) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
                          return matchesSearch && matchesFilter;
                        })
                        .map((apiKey) => (
                        <tr key={apiKey.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${
                                apiKey.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
                              }`}></div>
                              <div>
                                <div className="font-medium text-gray-900">{apiKey.name}</div>
                                <div className="text-sm text-gray-500 font-mono">{apiKey.key.substring(0, 20)}...</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {new Date(apiKey.createdDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {apiKey.lastUsed ? new Date(apiKey.lastUsed).toLocaleString() : 'Never'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                            {apiKey.lastIP || 'N/A'}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {apiKey.permissions.slice(0, 2).map((permission, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                  {permission}
                                </span>
                              ))}
                              {apiKey.permissions.length > 2 && (
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                                  +{apiKey.permissions.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {apiKey.usage.map((value, idx) => (
                                  <div
                                    key={idx}
                                    className="w-1 bg-blue-500 rounded-full"
                                    style={{ height: `${Math.max(4, (value / Math.max(...apiKey.usage)) * 20)}px` }}
                                  ></div>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">
                                {apiKey.usage[apiKey.usage.length - 1]} calls
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <button 
                                title="Copy API Key"
                                onClick={() => {
                                  navigator.clipboard.writeText(apiKey.key);
                                  setShowSuccessMessage('API Key copied to clipboard!');
                                  setTimeout(() => setShowSuccessMessage(false), 3000);
                                }}
                                className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                              >
                                📋
                              </button>
                              <button 
                                title="Regenerate Key"
                                onClick={() => {
                                  if (confirm('Are you sure you want to regenerate this API key? The old key will stop working immediately.')) {
                                    const newKey = 'ak_live_' + Math.random().toString(36).substring(2, 18);
                                    setApiKeys(keys => keys.map(k => k.id === apiKey.id ? {...k, key: newKey} : k));
                                    setShowSuccessMessage('API Key regenerated successfully!');
                                    setTimeout(() => setShowSuccessMessage(false), 3000);
                                  }
                                }}
                                className="text-yellow-600 hover:text-yellow-800 p-2 hover:bg-yellow-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                              >
                                🔄
                              </button>
                              <button 
                                title="Revoke Key"
                                onClick={() => {
                                  if (confirm('Are you sure you want to revoke this API key? This action cannot be undone.')) {
                                    setApiKeys(keys => keys.filter(k => k.id !== apiKey.id));
                                    setShowSuccessMessage('API Key revoked successfully!');
                                    setTimeout(() => setShowSuccessMessage(false), 3000);
                                  }
                                }}
                                className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                              >
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Tips Banner */}
              <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Security Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        <span>Store API keys securely and never expose them in client-side code</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        <span>Regularly rotate your API keys and revoke unused ones</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        <span>Use the principle of least privilege when assigning permissions</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        <span>Monitor API key usage and set up alerts for suspicious activity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
              <div className="space-y-4">
                {[
                  'New User Registration',
                  'Emergency/SOS Alerts',
                  'Payment Failures',
                  'Driver Verification',
                  'System Maintenance'
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{notification}</h3>
                      <p className="text-sm text-gray-600">Email and SMS notifications</p>
                    </div>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        SMS
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Success Popup */}
      {showSaveConfirm && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-medium">Success!</p>
                <p className="text-sm text-green-100">All changes are saved successfully</p>
              </div>
              <button 
                onClick={() => setShowSaveConfirm(false)}
                className="text-white hover:text-green-200 transition-colors ml-auto"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop View Modal */}
      {showDesktopView && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in duration-500">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">💻 Desktop Experience</h3>
                <p className="text-sm text-gray-600">Full-scale desktop preview</p>
              </div>
              <button 
                onClick={() => setShowDesktopView(false)}
                className="w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                ×
              </button>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50">
              <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                  <div className="ml-6 bg-white rounded-full px-6 py-2 text-sm text-gray-700 shadow-inner font-medium">🌐 herrides.com</div>
                </div>
                <div className="bg-white rounded-xl p-8 min-h-96 shadow-inner">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded-lg opacity-90"></div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">HerRides</div>
                        <div className="text-sm text-gray-500">Your ride, your way</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">Dashboard</div>
                      <div className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Rides</div>
                      <div className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Profile</div>
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg">Book Now</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 h-40 shadow-lg border border-blue-200">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-4"></div>
                      <div className="h-4 bg-blue-200 rounded mb-2"></div>
                      <div className="h-3 bg-blue-100 rounded"></div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 h-40 shadow-lg border border-purple-200">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg mb-4"></div>
                      <div className="h-4 bg-purple-200 rounded mb-2"></div>
                      <div className="h-3 bg-purple-100 rounded"></div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 h-40 shadow-lg border border-indigo-200">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg mb-4"></div>
                      <div className="h-4 bg-indigo-200 rounded mb-2"></div>
                      <div className="h-3 bg-indigo-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile View Modal */}
      {showMobileView && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in duration-500">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">📱 Mobile Experience</h3>
                <p className="text-sm text-gray-600">Native app preview</p>
              </div>
              <button 
                onClick={() => setShowMobileView(false)}
                className="w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                ×
              </button>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-purple-50 flex justify-center">
              <div className="relative">
                {/* Phone Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transform translate-y-4 scale-105"></div>
                
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-3xl p-2 shadow-2xl" style={{width: '320px', height: '640px'}}>
                  <div className="bg-black rounded-2xl h-full p-1">
                    <div className="bg-white rounded-2xl h-full flex flex-col overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium ml-2">Verizon</span>
                        </div>
                        <div className="w-16 h-1.5 bg-gray-900 rounded-full"></div>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-medium">100%</span>
                          <div className="w-6 h-3 border border-gray-800 rounded-sm">
                            <div className="w-full h-full bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded-lg"></div>
                        </div>
                        <div>
                          <div className="text-lg font-bold">HerRides</div>
                          <div className="text-xs opacity-80">Book your ride</div>
                        </div>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-white to-gray-50">
                        <div className="h-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-sm border border-blue-200"></div>
                        <div className="h-12 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-2xl shadow-sm border border-purple-200"></div>
                        <div className="h-12 bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-2xl shadow-sm border border-indigo-200"></div>
                        <div className="h-12 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-2xl shadow-sm border border-green-200"></div>
                        <div className="h-12 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-2xl shadow-sm border border-yellow-200"></div>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="flex justify-around p-4 bg-white border-t border-gray-100 shadow-lg">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded opacity-90"></div>
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center">
                          <div className="w-5 h-5 bg-gray-400 rounded"></div>
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center">
                          <div className="w-5 h-5 bg-gray-400 rounded"></div>
                        </div>
                        <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center">
                          <div className="w-5 h-5 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backup Completion Popup */}
      {showBackupConfirm && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-medium">Success!</p>
                <p className="text-sm text-green-100">Backup completed</p>
              </div>
              <button 
                onClick={() => setShowBackupConfirm(false)}
                className="text-white hover:text-green-200 transition-colors ml-auto"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Role Modal */}
      {showEditRole && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Edit Role: {showEditRole.name}</h3>
                <p className="text-sm text-gray-600">Configure permissions for this role</p>
              </div>
              <button 
                onClick={() => setShowEditRole(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role Description</label>
                  <textarea 
                    defaultValue={showEditRole.description}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    rows="2"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Module Permissions</h4>
                  <div className="space-y-4">
                    {[
                      { module: 'Dashboard', icon: '📊' },
                      { module: 'Users', icon: '👥' },
                      { module: 'Rides', icon: '🚗' },
                      { module: 'Payments', icon: '💳' },
                      { module: 'Reports', icon: '📈' },
                      { module: 'Settings', icon: '⚙️' }
                    ].map((module, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{module.icon}</span>
                            <span className="font-medium text-gray-900">{module.module}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {['Read', 'Write', 'Delete'].map((permission) => (
                            <label key={permission} className="flex items-center space-x-2">
                              <input type="checkbox" defaultChecked={permission !== 'Delete' || index < 2} className="rounded" />
                              <span className="text-sm text-gray-700">{permission}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button 
                onClick={() => setShowEditRole(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowEditRole(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Role Modal */}
      {showPreviewRole && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Preview: {showPreviewRole.name} Role</h3>
                <p className="text-sm text-gray-600">Experience the platform as this role</p>
              </div>
              <button 
                onClick={() => setShowPreviewRole(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 bg-white rounded px-3 py-1 text-sm text-gray-600">HerRides Dashboard - {showPreviewRole.name} View</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 min-h-64">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Dashboard</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Logged in as:</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">{showPreviewRole.name}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { title: 'Total Users', value: showPreviewRole.name === 'Viewer' ? 'Hidden' : '1,234', accessible: showPreviewRole.name !== 'Viewer' },
                      { title: 'Active Rides', value: '56', accessible: true },
                      { title: 'Revenue', value: showPreviewRole.name === 'Support' ? 'Hidden' : '₹1.2M', accessible: showPreviewRole.name !== 'Support' }
                    ].map((stat, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 border-dashed ${
                        stat.accessible ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                      }`}>
                        <div className="text-sm text-gray-600">{stat.title}</div>
                        <div className={`text-2xl font-bold ${
                          stat.accessible ? 'text-green-600' : 'text-red-600'
                        }`}>{stat.value}</div>
                        <div className="text-xs mt-1">
                          {stat.accessible ? '✓ Accessible' : '✗ Restricted'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Role Modal */}
      {showCreateRole && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Create New Role</h3>
                <p className="text-sm text-gray-600">Define a new role with custom permissions</p>
              </div>
              <button 
                onClick={() => setShowCreateRole(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter role name" 
                    value={newRole.name}
                    onChange={(e) => setNewRole({...newRole, name: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role Icon</label>
                  <input 
                    type="text" 
                    placeholder="👤" 
                    value={newRole.icon}
                    onChange={(e) => setNewRole({...newRole, icon: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  placeholder="Describe this role's purpose and responsibilities" 
                  value={newRole.description}
                  onChange={(e) => setNewRole({...newRole, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                  rows="3" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Copy Permissions From</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Start with no permissions</option>
                  <option>Super Admin</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Support</option>
                  <option>Viewer</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button 
                onClick={() => setShowCreateRole(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  if (newRole.name && newRole.icon && newRole.description) {
                    const today = new Date().toISOString().split('T')[0];
                    setRoles([...roles, {
                      name: newRole.name,
                      icon: newRole.icon,
                      description: newRole.description,
                      users: 0,
                      lastUpdated: today
                    }]);
                    setNewRole({ name: '', icon: '', description: '' });
                    setShowCreateRole(false);
                  }
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generate API Key Modal */}
      {showApiKeyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in duration-500">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Generate New API Key</h3>
                <p className="text-sm text-gray-600">Create a new API key with custom permissions and settings</p>
              </div>
              <button 
                onClick={() => setShowApiKeyModal(false)}
                className="w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g., Mobile App Integration" 
                  value={newApiKey.name}
                  onChange={(e) => setNewApiKey({...newApiKey, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">Choose a descriptive name to identify this key</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Permissions/Scopes *</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'rides:read', label: 'Read Rides', desc: 'View ride information' },
                    { id: 'rides:write', label: 'Manage Rides', desc: 'Create and update rides' },
                    { id: 'users:read', label: 'Read Users', desc: 'View user profiles' },
                    { id: 'users:write', label: 'Manage Users', desc: 'Create and update users' },
                    { id: 'payments:read', label: 'Read Payments', desc: 'View payment data' },
                    { id: 'payments:write', label: 'Process Payments', desc: 'Handle transactions' },
                    { id: 'reports:read', label: 'Read Reports', desc: 'Access analytics' },
                    { id: 'analytics:read', label: 'Read Analytics', desc: 'View usage statistics' }
                  ].map((permission) => (
                    <label key={permission.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        checked={newApiKey.permissions.includes(permission.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewApiKey({...newApiKey, permissions: [...newApiKey.permissions, permission.id]});
                          } else {
                            setNewApiKey({...newApiKey, permissions: newApiKey.permissions.filter(p => p !== permission.id)});
                          }
                        }}
                        className="mt-0.5 rounded" 
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{permission.label}</div>
                        <div className="text-xs text-gray-500">{permission.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date (Optional)</label>
                <input 
                  type="date" 
                  value={newApiKey.expiry}
                  onChange={(e) => setNewApiKey({...newApiKey, expiry: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <p className="text-xs text-gray-500 mt-1">Leave empty for no expiration</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
              <button 
                onClick={() => setShowApiKeyModal(false)}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  if (newApiKey.name && newApiKey.permissions.length > 0) {
                    const newKey = {
                      id: Date.now(),
                      name: newApiKey.name,
                      key: 'ak_live_' + Math.random().toString(36).substring(2, 18),
                      createdDate: new Date().toISOString().split('T')[0],
                      lastUsed: null,
                      lastIP: null,
                      permissions: newApiKey.permissions,
                      usage: [0, 0, 0, 0, 0, 0, 0],
                      status: 'active'
                    };
                    setApiKeys([...apiKeys, newKey]);
                    setNewApiKey({ name: '', permissions: [], expiry: '' });
                    setShowApiKeyModal(false);
                    setShowSuccessMessage('API Key generated successfully!');
                    setTimeout(() => setShowSuccessMessage(false), 3000);
                  }
                }}
                disabled={!newApiKey.name || newApiKey.permissions.length === 0}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Generate API Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <div>
                <p className="font-medium">Success!</p>
                <p className="text-sm text-green-100">{showSuccessMessage}</p>
              </div>
              <button 
                onClick={() => setShowSuccessMessage(false)}
                className="text-white hover:text-green-200 transition-colors ml-auto"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Audit Trail Modal */}
      {showAuditTrail && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Role & Permission Audit Trail</h3>
                <p className="text-sm text-gray-600">Track all changes to roles and permissions</p>
              </div>
              <button 
                onClick={() => setShowAuditTrail(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {[
                    { action: 'Role created: Manager', user: 'admin@herrides.com', timestamp: '2024-01-15 14:30:25', type: 'create' },
                    { action: 'Permission updated: Admin - Reports access granted', user: 'admin@herrides.com', timestamp: '2024-01-15 14:25:10', type: 'update' },
                    { action: 'User assigned: john@email.com to Super Admin', user: 'admin@herrides.com', timestamp: '2024-01-15 14:20:45', type: 'assign' },
                    { action: 'Role description updated: Support', user: 'admin@herrides.com', timestamp: '2024-01-15 14:15:30', type: 'update' },
                    { action: 'Permission revoked: Viewer - Settings access', user: 'admin@herrides.com', timestamp: '2024-01-15 14:10:15', type: 'revoke' }
                  ].map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          log.type === 'create' ? 'bg-green-400' :
                          log.type === 'update' ? 'bg-blue-400' :
                          log.type === 'assign' ? 'bg-purple-400' : 'bg-red-400'
                        }`}></div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{log.action}</div>
                          <div className="text-xs text-gray-500">{log.user}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">{log.timestamp}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;