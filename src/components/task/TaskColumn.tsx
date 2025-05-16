import React from 'react';
import { Plus } from 'lucide-react';
import { Column, Task } from '../../types';
import { TaskCard } from './TaskCard';
import { useBoard } from '../../context/BoardContext';
import { TaskModal } from './TaskModal';

interface TaskColumnProps {
  column: Column;
}

export const TaskColumn: React.FC<TaskColumnProps> = ({ column }) => {
  const { addTask, updateTask, deleteTask, moveTask } = useBoard();
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = React.useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    if (sourceColumnId !== column.id) {
      moveTask(taskId, sourceColumnId, column.id);
    }
  };

  const defaultTask: Omit<Task, 'id' | 'createdAt' | 'columnId'> = {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: null,
    tags: [],
    createdBy: '1', // Using the mock user ID
    assignedTo: null,
  };

  return (
    <div className="flex flex-col h-full w-72 bg-gray-100 dark:bg-gray-850 rounded-md mr-4 flex-shrink-0">
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-750 rounded-t-md">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900 dark:text-white">{column.title}</h3>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
            {column.tasks.length}
          </span>
        </div>
      </div>
      
      <div 
        className="p-2 flex-1 overflow-y-auto"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
      
      <div className="p-2 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsAddTaskModalOpen(true)}
          className="flex items-center justify-center w-full py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Plus size={16} className="mr-1" />
          Add Task
        </button>
      </div>

      <TaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onSave={(newTask) => {
          addTask(column.id, newTask);
          setIsAddTaskModalOpen(false);
        }}
      />
    </div>
  );
};