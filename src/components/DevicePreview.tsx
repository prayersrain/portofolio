"use client";

import { useEffect, useRef, useState } from "react";

/** Renders a site at its real viewport size and scales it down to fit the frame. */
function ScaledSite({ url, title, width, height }: { url: string; title: string; width: number; height: number }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width));
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={box} className="relative overflow-hidden bg-white" style={{ aspectRatio: `${width} / ${height}` }}>
      {scale > 0 && (
        <iframe
          src={url}
          title={title}
          loading="lazy"
          width={width}
          height={height}
          className="absolute top-0 left-0 origin-top-left border-0"
          style={{ transform: `scale(${scale})` }}
        />
      )}
    </div>
  );
}

export default function DevicePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex items-end justify-center gap-6">
      <div className="hidden flex-1 overflow-hidden rounded-xl border border-line bg-raised shadow-2xl md:block">
        <div className="flex h-8 items-center gap-1.5 border-b border-line px-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 truncate font-mono text-[11px] text-subtle">{url.replace(/^https:\/\//, "")}</span>
        </div>
        <ScaledSite url={url} title={`${title} (desktop)`} width={1280} height={800} />
      </div>
      <div className="w-64 shrink-0 overflow-hidden rounded-[2rem] border-[6px] border-neutral-800 bg-neutral-800 shadow-2xl md:w-52">
        <ScaledSite url={url} title={`${title} (mobile)`} width={390} height={844} />
      </div>
    </div>
  );
}
