import React from "react";
import { ExternalLink } from "lucide-react";

const STREAMLIT_URL =
  "https://meeting-room-koidi5bb4usqlt7ifajsyf.streamlit.app/"; // <- 네 주소로 교체

const ReservationView: React.FC = () => {
  const open = () => window.open(STREAMLIT_URL, "_blank", "noopener,noreferrer");

  return (
    <section className="relative z-10 w-full pt-28 px-5 pb-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-[2.2rem] overflow-hidden shadow-2xl">
          <div className="px-8 py-8 border-b border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              회의실 예약률 대시보드
            </h1>
            <p className="text-white/60 mt-3 text-lg leading-relaxed">
              Reservation 탭에서 바로 실행하고, 상세 분석은 Streamlit 대시보드에서 확인합니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={open} className="btn-primary flex items-center gap-2">
                대시보드 열기 <ExternalLink size={18} />
              </button>

              <a
                href={STREAMLIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                링크로 열기
              </a>
            </div>
          </div>

          <div className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-3xl p-6">
                <div className="text-white/40 text-sm">기능</div>
                <div className="mt-2 text-xl font-semibold">예약률 자동 집계</div>
                <p className="text-white/55 mt-2 text-sm leading-relaxed">
                  월/전체 평균, 추이, 인사이트를 자동으로 보여줍니다.
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="text-white/40 text-sm">운영 기준</div>
                <div className="mt-2 text-xl font-semibold">업무시간 반영</div>
                <p className="text-white/55 mt-2 text-sm leading-relaxed">
                  주말/공휴일 제외, 주요업무시간 옵션 등 운영룰을 반영합니다.
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="text-white/40 text-sm">확장</div>
                <div className="mt-2 text-xl font-semibold">다른 자동화도 추가</div>
                <p className="text-white/55 mt-2 text-sm leading-relaxed">
                  앞으로 만든 자동화 툴을 이 포털에 계속 붙이면 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/35 text-sm mt-6">
          ※ 새 탭으로 여는 방식(A/A)은 iframe 이슈 없이 가장 안정적으로 운영됩니다.
        </p>
      </div>
    </section>
  );
};

export default ReservationView;

