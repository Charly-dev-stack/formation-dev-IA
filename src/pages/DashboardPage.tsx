import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { useBoard } from '../context/BoardContext';
import { useAuth } from '../context/AuthContext';
import { Card, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const DashboardPage: React.FC = () => {
  const { boards, addBoard, setCurrentBoard } = useBoard();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCreateBoard = () => {
    const name = `New Board ${boards.length + 1}`;
    addBoard(name);
    
    // Navigate to the board creation page
    navigate('/board/new');
  };

  const handleBoardSelect = (boardId: string) => {
    navigate(`/board/${boardId}`);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome, {user?.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your tasks and stay organized with TaskFlow
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Boards</h2>
          <Button leftIcon={<Plus size={16} />} onClick={handleCreateBoard}>
            Create Board
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {boards.map(board => (
            <Card 
              key={board.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleBoardSelect(board.id)}
            >
              <CardBody>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">{board.title}</h3>
                  <ArrowRight size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {board.columns.reduce((total, column) => total + column.tasks.length, 0)} tasks
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {board.columns.map(column => (
                    <div 
                      key={column.id}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {column.title}: {column.tasks.length}
                    </div>
                  )).slice(0, 2)}
                  {board.columns.length > 2 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{board.columns.length - 2} more
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
          
          {/* Create board card */}
          <Card 
            className="border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-pointer"
            onClick={handleCreateBoard}
          >
            <CardBody className="flex flex-col items-center justify-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                <Plus size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">Create New Board</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Start organizing your tasks
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            No recent activity to show
          </div>
        </div>
      </div>
    </div>
  );
};