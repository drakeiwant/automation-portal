import React from "react";

const SplineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <iframe
        src="https://my.spline.design/chips-L9fj0sZuk9NbQc94XzJoABmQ/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full opacity-80"
      />
      {/* 가독성용 오버레이 (다크 톤 추천) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black pointer-events-none" />
    </div>
  );
};

export default SplineBackground;
