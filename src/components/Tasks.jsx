import React, { useState } from 'react'

const Tasks = () => {
    const [task, setTask] = useState(['lean html', 'learn react', 'learn nodejs'])
    const [usertask, setUserTask] = useState('')

    function addTask() {
        if (usertask.trim() === '') return
        const newtask = [...task, usertask]
        setTask(newtask)
        setUserTask('')
    }

    function deleteTask(indexToDelete) {
        const filteredTasks = task.filter((_, index) => index !== indexToDelete)
        setTask(filteredTasks)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 px-4">
            {/* Animated Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-2xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-4 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        My Tasks
                    </h1>
                    <p className="text-gray-600">Organize your daily tasks with style</p>
                </div>

                {/* Add Task Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-6 border border-white/20">
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Write your task..."
                                value={usertask}
                                onChange={e => setUserTask(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                                className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white/50"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <button
                            onClick={addTask}
                            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                {/* Tasks List */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                            Your Tasks
                        </h2>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
                            {task.length} {task.length === 1 ? 'Task' : 'Tasks'}
                        </span>
                    </div>

                    <div className="space-y-3">
                        {task.map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-indigo-50 hover:to-white border border-gray-100 hover:border-indigo-200 transition-all duration-200 shadow-sm hover:shadow"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-bold shadow-md">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="opacity-0 group-hover:opacity-100 px-4 py-2 text-sm text-red-600 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-200 font-medium flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {task.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-lg">No tasks yet</p>
                            <p className="text-gray-400">Add your first task to get started!</p>
                        </div>
                    )}
                </div>

                {/* Task Stats */}
                {task.length > 0 && (
                    <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                            <span className="text-gray-600">Progress:</span>
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                                    style={{ width: `${(task.filter(t => t).length / 5) * 100}%` }}
                                ></div>
                            </div>
                            <span className="font-semibold text-indigo-600">
                                {task.filter(t => t).length}/5
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tasks