import React, { useEffect, useState } from "react";
import { Tab } from "./types";
import Navbar from "./components/Navbar";
import SplineBackground from "./components/SplineBackground";
import ReservationView from "./components/ReservationView";
import PlaceholderView from "./components/PlaceholderView";
import { ArrowRight } from "lucide-react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  useEffect(() => {
    // 탭 바꾸면 페이지 상단으로 올라가게(UX)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <SplineBackground />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10">
        {activeTab === "home" && (
          <section className="pt-28 pb-20 px-5 animate-fade-in">
            <div className="max-w-6xl mx-auto">
              <div className="glass rounded-[2.8rem] overflow-hidden shadow-2xl">
                <div className="px-8 md:px-12 py-12 md:py-16">
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.0]">
                    업무지원팀을 위한
                    <br />
                    AI 고도화 도구 모음
                  </h1>

                  <p className="text-white/60 mt-6 text-lg md:text-xl leading-relaxed max-w-2xl">
                    상단 탭에서 필요한 업무 도구를 선택하세요.
                    <br />
                    (각 탭은 앞으로 계속 추가/확장됩니다)
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("reservation")}
                      className="btn-primary flex items-center gap-2"
                    >
                      Reservation 바로가기 <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() => setActiveTab("quote")}
                      className="btn-ghost"
                    >
                      견적서 비교(준비중)
                    </button>

                    <button
                      onClick={() => setActiveTab("si")}
                      className="btn-ghost"
                    >
                      S&I 소모품(준비중)
                    </button>
                  </div>
                </div>

                <div className="px-8 md:px-12 py-10 border-t border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass rounded-3xl p-6">
                      <div className="text-white/40 text-sm">Reservation</div>
                      <div className="mt-2 text-xl font-semibold">회의실 예약률</div>
                      <p className="text-white/55 mt-2 text-sm leading-relaxed">
                        월/전체 평균, 추이, 인사이트 자동 생성
                      </p>
                    </div>

                    <div className="glass rounded-3xl p-6">
                      <div className="text-white/40 text-sm">견적서 비교</div>
                      <div className="mt-2 text-xl font-semibold">단가/조건 비교</div>
                      <p className="text-white/55 mt-2 text-sm leading-relaxed">
                        여러 견적서를 자동으로 정리/비교(예정)
                      </p>
                    </div>

                    <div className="glass rounded-3xl p-6">
                      <div className="text-white/40 text-sm">S&I 소모품</div>
                      <div className="mt-2 text-xl font-semibold">재고/발주 관리</div>
                      <p className="text-white/55 mt-2 text-sm leading-relaxed">
                        자주 쓰는 소모품 관리 자동화(예정)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="text-white/25 text-xs mt-10 px-2">
                © {new Date().getFullYear()} 업무지원팀 AI 고도화 TOOL
              </footer>
            </div>
          </section>
        )}

        {activeTab === "reservation" && <ReservationView />}

        {activeTab === "quote" && (
          <PlaceholderView title="견적서 비교" subtitle="견적서 업로드 → 항목/단가/조건 자동 비교 (연결 예정)" />
        )}

        {activeTab === "si" && (
          <PlaceholderView title="S&I 소모품" subtitle="소모품 현황/발주/정산 자동화 (연결 예정)" />
        )}
      </main>
    </div>
  );
};

export default App;

