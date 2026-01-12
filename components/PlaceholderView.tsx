import React from "react";

export default function PlaceholderView({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative z-10 w-full pt-28 px-5 pb-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-[2.2rem] overflow-hidden shadow-2xl">
          <div className="px-8 py-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-white/60 mt-4 text-lg leading-relaxed">
              {subtitle ?? "이 탭은 곧 연결할 예정입니다. (현재는 탭만 준비해둠)"}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-3xl p-6">
                <div className="text-white/40 text-sm">상태</div>
                <div className="mt-2 text-xl font-semibold">준비중</div>
                <p className="text-white/55 mt-2 text-sm leading-relaxed">
                  기능/데이터/연동 방식 확정 후 연결 예정
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="text-white/40 text-sm">다음 단계</div>
                <div className="mt-2 text-xl font-semibold">요구사항 정리</div>
                <p className="text-white/55 mt-2 text-sm leading-relaxed">
                  입력 파일/산출물/지표 정의 후 UI 고도화
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="text-white/40 text-sm">목표</div>
                <div className="mt-2 text-xl font-semibold">업무 고도화</div>
                <p className="text-white/55 mt-2 text-sm leading-relaxed">
                  반복업무 제거 + 분석/판단 중심 전환
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs mt-6">
          * 탭은 만들어두었고, 연결(URL/기능)은 다음 작업에서 추가하면 됩니다.
        </p>
      </div>
    </section>
  );
}
