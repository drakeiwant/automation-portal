import React from "react";

const SplineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <iframe
        src="https://my.spline.design/particles-VClcIxkq6EmpvjxzG5d3Qn4v/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full opacity-70"
      />
      {/* 어두운 그라데이션 오버레이(텍스트 가독성) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black pointer-events-none" />
    </div>
  );
};

export default SplineBackground;
