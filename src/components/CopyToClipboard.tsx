import React from 'react';
import toast from 'react-hot-toast';

interface CopyToClipboardProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, children, className = '' }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', {
        duration: 2000,
        position: 'bottom-right',
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    } catch (err) {
      toast.error('Failed to copy to clipboard', {
        duration: 2000,
        position: 'bottom-right',
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div onClick={handleCopy} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export default CopyToClipboard; 