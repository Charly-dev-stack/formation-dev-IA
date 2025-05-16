import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useBoard } from '../context/BoardContext';
import { TaskColumn } from '../components/task/TaskColumn';
import { BoardHeader } from '../components/board/BoardHeader';
import { Modal } from '../components/ui/Modal';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const BoardPage: React.FC = () => {
  const { boards, currentBoard, setCurrentBoard, addColumn } = useBoard();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');

  // Set the current board based on the ID in the URL
  useEffect(() => {
    if (id) {
      const board = boards.find(board => board.id === id);
      if (board) {
        setCurrentBoard(board);
      } else {
        // If board not found, redirect to home
        navigate('/');
      }
    }
  }, [id, boards, setCurrentBoard, navigate]);

  if (!currentBoard) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      addColumn(currentBoard.id, newColumnTitle);
      setNewColumnTitle('');
      setIsAddColumnModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen pt-16">
      <BoardHeader
        board={currentBoard}
        onAddColumn={() => setIsAddColumnModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="flex-1 overflow-x-auto p-4 bg-gray-50 dark:bg-gray-900">
        <div className="flex h-full">
          {currentBoard.columns.map(column => (
            <TaskColumn key={column.id} column={column} />
          ))}
          
          <div className="w-72 flex-shrink-0">
            <button
              onClick={() => setIsAddColumnModalOpen(true)}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 w-full h-16 rounded-md flex items-center justify-center text-sm font-medium transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add Column
            </button>
          </div>
        </div>
      </div>
      
      <Modal
        isOpen={isAddColumnModalOpen}
        onClose={() => setIsAddColumnModalOpen(false)}
        title="Add New Column"
        footer={
          <div className="flex justify-end space-x-3">
            <Button variant="ghost" onClick={() => setIsAddColumnModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddColumn} disabled={!newColumnTitle.trim()}>
              Create Column
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Column Title"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            placeholder="e.g., To Do, In Progress, Done"
            fullWidth
            autoFocus
          />
        </div>
      </Modal>
    </div>
  );
};