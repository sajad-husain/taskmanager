import React from 'react'
import Tasks from './Tasks'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">Important Tasks</h2>
                            <p className="text-blue-100 text-lg">Welcome back, <span className="font-medium">UserName</span> 👋</p>
                        </div>

                        {/* User Avatar */}
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">U</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tasks Section */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <Tasks />
            </div>
        </div>
    )
}

export default Dashboard
