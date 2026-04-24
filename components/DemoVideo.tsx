"use client";

import FadeContent from "@/components/FadeContent";
import GlareHover from "@/components/GlareHover";
import { useEffect, useRef, useState } from "react";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // 懒加载：视频进入视口才开始加载
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 加载后开始播放
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const p = video.play();
      if (p) {
        p.catch(() => {
          // 浏览器阻止了自动播放，保持 poster 展示
        });
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", playVideo);
    };
  }, [shouldLoad]);

  return (
    <section ref={sectionRef} id="features" className="relative px-6 py-10 md:py-14">
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
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload={shouldLoad ? "auto" : "none"}
                className="w-full h-auto"
                poster="/video-poster.jpg"
              >
                {shouldLoad && (
                  <source
                    src="https://claude-glance-1390058464.cos.ap-singapore.myqcloud.com/claude-glance-demo.mp4"
                    type="video/mp4"
                  />
                )}
              </video>
            </div>
          </GlareHover>
        </FadeContent>
      </div>
    </section>
  );
}
