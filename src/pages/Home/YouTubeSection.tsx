import React from 'react';

const YouTubeSection: React.FC = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch Our Story
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we're revolutionizing the future of technology and innovation
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/watch?v=LyYhDwZJnQM"
            title="LancerBridge Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection; 