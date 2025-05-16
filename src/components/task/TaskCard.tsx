import React, { useState } from 'react';
import { Clock, Tag, Edit2, Trash2, AlertCircle } from 'lucide-react';
import { Task } from '../../types';
import { formatDate } from '../../utils/formatDate';
import { TaskModal } from './TaskModal';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string, columnId: string) => void;
  draggable?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  draggable = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const priorityColors = {
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (draggable) {
      e.dataTransfer.setData('taskId', task.id);
      e.dataTransfer.setData('sourceColumnId', task.columnId);
    }
  };

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-3 cursor-grab hover:shadow-md transition-shadow duration-200"
        draggable={draggable}
        onDragStart={handleDragStart}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900 dark:text-white">{task.title}</h3>
          <div className="flex space-x-1">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Edit2 size={16} />
            </button>
            <button 
              onClick={() => onDelete(task.id, task.columnId)} 
              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        
        {task.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {task.description}
          </p>
        )}
        
        <div className="flex flex-wrap items-center mt-3 text-xs">
          {task.dueDate && (
            <div className="flex items-center mr-3 text-gray-600 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          )}
          
          <div className={`px-2 py-1 rounded-full ${priorityColors[task.priority]} mr-2`}>
            {task.priority === 'high' && <AlertCircle size={12} className="inline mr-1" />}
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </div>
          
          {task.tags && task.tags.length > 0 && (
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Tag size={14} className="mr-1" />
              <span className="truncate max-w-[150px]">
                {task.tags.slice(0, 2).join(', ')}
                {task.tags.length > 2 && '...'}
              </span>
            </div>
          )}
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={task}
        onSave={(updatedTask) => {
          onEdit(updatedTask);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};