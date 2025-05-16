export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  preferences: {
    theme: 'light' | 'dark';
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string | null;
  tags: string[];
  createdAt: string;
  columnId: string;
  createdBy: string;
  assignedTo: string | null;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  columns: Column[];
}