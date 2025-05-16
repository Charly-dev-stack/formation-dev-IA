import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { useBoard } from '../context/BoardContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardBody, CardFooter } from '../components/ui/Card';

export const NewBoardPage: React.FC = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [columns, setColumns] = useState(['To Do', 'In Progress', 'Done']);
  const [newColumnInput, setNewColumnInput] = useState('');
  const { addBoard, boards } = useBoard();
  const navigate = useNavigate();

  const handleAddColumn = () => {
    if (newColumnInput.trim() && !columns.includes(newColumnInput.trim())) {
      setColumns([...columns, newColumnInput.trim()]);
      setNewColumnInput('');
    }
  };

  const handleRemoveColumn = (index: number) => {
    setColumns(columns.filter((_, i) => i !== index));
  };

  const handleCreateBoard = () => {
    if (boardTitle.trim()) {
      const boardId = `board-${Date.now()}`;
      addBoard(boardTitle.trim());
      navigate(`/board/${boardId}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddColumn();
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 pt-24 pb-10">
      <div className="text-center mb-8">
        <LayoutDashboard className="h-12 w-12 mx-auto text-blue-600 mb-3" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Board</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Set up your board with columns that match your workflow
        </p>
      </div>
      
      <Card>
        <CardBody>
          <div className="space-y-6">
            <div>
              <Input
                label="Board Title"
                value={boardTitle}
                onChange={(e) => setBoardTitle(e.target.value)}
                placeholder="e.g., Project Alpha, Personal Tasks"
                fullWidth
                autoFocus
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Board Columns
              </label>
              
              <div className="space-y-2 mb-4">
                {columns.map((column, index) => (
                  <div key={index} className="flex items-center">
                    <Input
                      value={column}
                      onChange={(e) => {
                        const updatedColumns = [...columns];
                        updatedColumns[index] = e.target.value;
                        setColumns(updatedColumns);
                      }}
                      className="flex-grow"
                    />
                    <button
                      onClick={() => handleRemoveColumn(index)}
                      className="ml-2 text-gray-400 hover:text-red-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <Input
                  value={newColumnInput}
                  onChange={(e) => setNewColumnInput(e.target.value)}
                  placeholder="Add a new column"
                  onKeyDown={handleKeyDown}
                  className="flex-grow"
                />
                <Button
                  onClick={handleAddColumn}
                  variant="secondary"
                  className="ml-2"
                  disabled={!newColumnInput.trim()}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
        
        <CardFooter>
          <div className="flex justify-end space-x-3">
            <Button variant="ghost" onClick={() => navigate('/')}>
              Cancel
            </Button>
            <Button onClick={handleCreateBoard} disabled={!boardTitle.trim() || columns.length === 0}>
              Create Board
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};