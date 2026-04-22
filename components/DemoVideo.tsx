"use client";

import FadeContent from "@/components/FadeContent";
import GlareHover from "@/components/GlareHover";

export default function DemoVideo() {
  return (
    <section id="features" className="relative px-6 py-10 md:py-14">
      <div className="mx-auto w-full max-w-5xl">
        <FadeContent duration={0.9} blur>
          <GlareHover
            width="100%"
            height="auto"
            background="rgba(255,255,255,0.55)"
            borderRadius="32px"
            borderColor="rgba(232,230,220,0.14)"
            glareColor="#ffffff"
            glareOpacity={0.16}
            glareSize={160}
            className="w-full"
            style={{
              padding: "10px",
              boxShadow: "0 20px 52px rgba(31, 29, 26, 0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="w-full overflow-hidden rounded-[24px] bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                poster="https://claude-glance-1390058464.cos.ap-singapore.myqcloud.com/menupannel.png"
              >
                <source
                  src="https://claude-glance-1390058464.cos.ap-singapore.myqcloud.com/claude-glance-demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </GlareHover>
        </FadeContent>
      </div>
    </section>
  );
}
