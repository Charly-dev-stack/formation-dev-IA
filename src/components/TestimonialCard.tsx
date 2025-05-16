import React from 'react';
import { User } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <User className="h-6 w-6 text-blue-800" />
        </div>
        <div className="ml-3">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}