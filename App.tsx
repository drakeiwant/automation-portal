import React, { useEffect, useState } from "react";
import { Tab } from "./types";
import Navbar from "./components/Navbar";
import SplineBackground from "./components/SplineBackground";
import ReservationView from "./components/ReservationView";
import { Sparkles, ArrowRight } from "lucide-react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <SplineBackground />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10">
        {activeTab === "home" && (
          <section className="pt-28 pb-20 px-5 animate-fade-in">
            <div className="max-w-6xl mx-auto">
              <div
                className={
                  "glass rounded-[2.8rem] overflow-hidden shadow-2xl " +
                  (scrolled ? "" : "")
                }
              >
                <div className="px-8 md:px-12 py-12 md:py-16">
                  <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/80">
                    <Sparkles size={16} />
                    AI 기반 업무 자동화 포털
                  </div>

                  <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.0]">
                    한 곳에서,
                    <br />
                    모든 자동화를 실행.
                  </h1>

                  <p className="text-white/60 mt-6 text-lg md:text-xl leading-relaxed max-w-2xl">
                    반복 업무는 자동화하고, 운영 데이터는 인사이트로 바꾸는 포털입니다.
                    상단 탭에서 원하는 도구를 선택하세요.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("reservation")}
                      className="btn-primary flex items-center gap-2"
                    >
                      Reservation 바로가기 <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
                      className="btn-ghost"
                    >
                      포털 소개 보기
                    </button>
                  </div>
                </div>

                <div className="px-8 md:px-12 py-10 border-t border-white/10 apple-gradient">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass rounded-3xl p-6">
                      <div className="text-white/40 text-sm">목표</div>
                      <div className="mt-2 text-xl font-semibold">업무 고도화</div>
                      <p className="text-white/55 mt-2 text-sm leading-relaxed">
                        수작업/비부가 업무를 줄이고 분석·의사결정에 집중합니다.
                      </p>
                    </div>

                    <div className="glass rounded-3xl p-6">
                      <div className="text-white/40 text-sm">방식</div>
                      <div className="mt-2 text-xl font-semibold">툴 허브화</div>
                      <p className="text-white/55 mt-2 text-sm leading-relaxed">
                        여러 자동화 사이트를 하나의 포털에서 접근하도록 통합합니다.
                      </p>
                    </div>

                    <div className="glass rounded-3xl p-6">
                      <div className="text-white/40 text-sm">확장</div>
                      <div className="mt-2 text-xl font-semibold">계속 추가</div>
                      <p className="text-white/55 mt-2 text-sm leading-relaxed">
                        출장비/비품/회의록 등 다음 자동화도 같은 방식으로 붙이면 됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="text-white/25 text-xs mt-10 px-2">
                © {new Date().getFullYear()} 업무 자동화 포털
              </footer>
            </div>
          </section>
        )}

        {activeTab === "reservation" && <ReservationView />}
      </main>
    </div>
  );
};

export default App;
