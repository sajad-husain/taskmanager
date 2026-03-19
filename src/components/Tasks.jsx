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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Tasks</h1>
                    <p className="text-gray-600">Manage your daily tasks efficiently</p>
                </div>

                {/* Add Task Card */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Write your task..."
                            value={usertask}
                            onChange={e => setUserTask(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addTask()}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            onClick={addTask}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                {/* Tasks List */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Your Tasks ({task.length})
                    </h2>

                    <div className="space-y-3">
                        {task.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="opacity-0 group-hover:opacity-100 px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-all"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {task.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No tasks yet. Add your first task!</p>
                        </div>
                    )}
                </div>

                {/* Task Stats */}
                {task.length > 0 && (
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        Total tasks: <span className="font-semibold text-blue-600">{task.length}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tasks