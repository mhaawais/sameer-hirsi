// components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500">
      <div className="h-16 w-16 border-8 border-myred border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
