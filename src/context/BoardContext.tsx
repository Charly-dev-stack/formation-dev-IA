import React, { createContext, useContext, useState } from 'react';
import { Board, Column, Task } from '../types';

type BoardContextType = {
  boards: Board[];
  currentBoard: Board | null;
  setCurrentBoard: (board: Board) => void;
  addBoard: (title: string) => void;
  addColumn: (boardId: string, title: string) => void;
  addTask: (columnId: string, task: Omit<Task, 'id' | 'createdAt' | 'columnId'>) => void;
  moveTask: (taskId: string, sourceColumnId: string, destinationColumnId: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (taskId: string, columnId: string) => void;
};

// Initial mock data
const initialColumns: Column[] = [
  {
    id: 'col-1',
    title: 'To Do',
    tasks: [
      {
        id: 'task-1',
        title: 'Research competitors',
        description: 'Analyze the top 5 competitors in our market',
        priority: 'high',
        dueDate: '2025-05-20',
        tags: ['research', 'marketing'],
        createdAt: new Date().toISOString(),
        columnId: 'col-1',
        createdBy: '1',
        assignedTo: '1',
      },
      {
        id: 'task-2',
        title: 'Create wireframes',
        description: 'Design wireframes for the new landing page',
        priority: 'medium',
        dueDate: '2025-05-25',
        tags: ['design', 'website'],
        createdAt: new Date().toISOString(),
        columnId: 'col-1',
        createdBy: '1',
        assignedTo: null,
      },
    ],
  },
  {
    id: 'col-2',
    title: 'In Progress',
    tasks: [
      {
        id: 'task-3',
        title: 'Update documentation',
        description: 'Update the user documentation with the latest features',
        priority: 'low',
        dueDate: '2025-05-18',
        tags: ['documentation'],
        createdAt: new Date().toISOString(),
        columnId: 'col-2',
        createdBy: '1',
        assignedTo: '1',
      },
    ],
  },
  {
    id: 'col-3',
    title: 'Done',
    tasks: [
      {
        id: 'task-4',
        title: 'Fix navigation bug',
        description: 'Resolve the issue with the dropdown menu not closing',
        priority: 'high',
        dueDate: null,
        tags: ['bug', 'frontend'],
        createdAt: new Date().toISOString(),
        columnId: 'col-3',
        createdBy: '1',
        assignedTo: '1',
      },
    ],
  },
];

const initialBoards: Board[] = [
  {
    id: 'board-1',
    title: 'Project Alpha',
    columns: initialColumns,
  },
  {
    id: 'board-2',
    title: 'Personal Tasks',
    columns: [
      { id: 'col-4', title: 'To Do', tasks: [] },
      { id: 'col-5', title: 'In Progress', tasks: [] },
      { id: 'col-6', title: 'Done', tasks: [] },
    ],
  },
];

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [boards, setBoards] = useState<Board[]>(initialBoards);
  const [currentBoard, setCurrentBoard] = useState<Board | null>(initialBoards[0]);

  const addBoard = (title: string) => {
    const newBoard: Board = {
      id: `board-${Date.now()}`,
      title,
      columns: [
        { id: `col-${Date.now()}-1`, title: 'To Do', tasks: [] },
        { id: `col-${Date.now()}-2`, title: 'In Progress', tasks: [] },
        { id: `col-${Date.now()}-3`, title: 'Done', tasks: [] },
      ],
    };
    
    setBoards([...boards, newBoard]);
    setCurrentBoard(newBoard);
  };

  const addColumn = (boardId: string, title: string) => {
    const newColumn: Column = {
      id: `col-${Date.now()}`,
      title,
      tasks: [],
    };

    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            columns: [...board.columns, newColumn],
          };
        }
        return board;
      })
    );

    if (currentBoard?.id === boardId) {
      setCurrentBoard({
        ...currentBoard,
        columns: [...currentBoard.columns, newColumn],
      });
    }
  };

  const addTask = (columnId: string, task: Omit<Task, 'id' | 'createdAt' | 'columnId'>) => {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
      columnId,
    };

    setBoards(
      boards.map((board) => {
        return {
          ...board,
          columns: board.columns.map((column) => {
            if (column.id === columnId) {
              return {
                ...column,
                tasks: [...column.tasks, newTask],
              };
            }
            return column;
          }),
        };
      })
    );

    if (currentBoard) {
      setCurrentBoard({
        ...currentBoard,
        columns: currentBoard.columns.map((column) => {
          if (column.id === columnId) {
            return {
              ...column,
              tasks: [...column.tasks, newTask],
            };
          }
          return column;
        }),
      });
    }
  };

  const moveTask = (taskId: string, sourceColumnId: string, destinationColumnId: string) => {
    // Find the task in the source column
    let taskToMove: Task | undefined;
    
    setBoards(
      boards.map((board) => {
        const updatedColumns = board.columns.map((column) => {
          if (column.id === sourceColumnId) {
            const task = column.tasks.find(t => t.id === taskId);
            if (task) {
              taskToMove = { ...task, columnId: destinationColumnId };
            }
            
            return {
              ...column,
              tasks: column.tasks.filter(t => t.id !== taskId),
            };
          }
          
          if (column.id === destinationColumnId && taskToMove) {
            return {
              ...column,
              tasks: [...column.tasks, taskToMove],
            };
          }
          
          return column;
        });

        return {
          ...board,
          columns: updatedColumns,
        };
      })
    );

    if (currentBoard) {
      setCurrentBoard({
        ...currentBoard,
        columns: currentBoard.columns.map((column) => {
          if (column.id === sourceColumnId) {
            return {
              ...column,
              tasks: column.tasks.filter(t => t.id !== taskId),
            };
          }
          
          if (column.id === destinationColumnId && taskToMove) {
            return {
              ...column,
              tasks: [...column.tasks, taskToMove],
            };
          }
          
          return column;
        }),
      });
    }
  };

  const updateTask = (updatedTask: Task) => {
    setBoards(
      boards.map((board) => {
        return {
          ...board,
          columns: board.columns.map((column) => {
            if (column.id === updatedTask.columnId) {
              return {
                ...column,
                tasks: column.tasks.map((task) => 
                  task.id === updatedTask.id ? updatedTask : task
                ),
              };
            }
            return column;
          }),
        };
      })
    );

    if (currentBoard) {
      setCurrentBoard({
        ...currentBoard,
        columns: currentBoard.columns.map((column) => {
          if (column.id === updatedTask.columnId) {
            return {
              ...column,
              tasks: column.tasks.map((task) => 
                task.id === updatedTask.id ? updatedTask : task
              ),
            };
          }
          return column;
        }),
      });
    }
  };

  const deleteTask = (taskId: string, columnId: string) => {
    setBoards(
      boards.map((board) => {
        return {
          ...board,
          columns: board.columns.map((column) => {
            if (column.id === columnId) {
              return {
                ...column,
                tasks: column.tasks.filter((task) => task.id !== taskId),
              };
            }
            return column;
          }),
        };
      })
    );

    if (currentBoard) {
      setCurrentBoard({
        ...currentBoard,
        columns: currentBoard.columns.map((column) => {
          if (column.id === columnId) {
            return {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            };
          }
          return column;
        }),
      });
    }
  };

  return (
    <BoardContext.Provider
      value={{
        boards,
        currentBoard,
        setCurrentBoard,
        addBoard,
        addColumn,
        addTask,
        moveTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
};