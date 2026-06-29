"use client";

import { useEffect, useState, type CSSProperties } from "react";

const progressPlan = {
  startDate: "2026-06-26T00:00:00+02:00",
  startProgress: 14,
  midProgress: 56,
  nearDoneProgress: 92,
  maxProgress: 96,
  firstPhaseDays: 7,
  secondPhaseDays: 14,
} as const;

const dayInMilliseconds = 24 * 60 * 60 * 1000;

function interpolate(start: number, end: number, ratio: number) {
  return start + (end - start) * Math.min(Math.max(ratio, 0), 1);
}

function calculateProgress(now = new Date()) {
  const startTime = new Date(progressPlan.startDate).getTime();
  const elapsedDays = (now.getTime() - startTime) / dayInMilliseconds;

  if (elapsedDays <= 0) {
    return progressPlan.startProgress;
  }

  if (elapsedDays <= progressPlan.firstPhaseDays) {
    return interpolate(
      progressPlan.startProgress,
      progressPlan.midProgress,
      elapsedDays / progressPlan.firstPhaseDays,
    );
  }

  if (elapsedDays <= progressPlan.secondPhaseDays) {
    return interpolate(
      progressPlan.midProgress,
      progressPlan.nearDoneProgress,
      (elapsedDays - progressPlan.firstPhaseDays) /
        (progressPlan.secondPhaseDays - progressPlan.firstPhaseDays),
    );
  }

  const softFinishRatio = Math.min((elapsedDays - progressPlan.secondPhaseDays) / 7, 1);

  return interpolate(
    progressPlan.nearDoneProgress,
    progressPlan.maxProgress,
    softFinishRatio,
  );
}

export function ComingSoonProgress() {
  const [progress, setProgress] = useState<number>(progressPlan.startProgress);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(Number(calculateProgress().toFixed(2)));
    };

    updateProgress();
    const interval = window.setInterval(updateProgress, 60 * 60 * 1000);

    return () => window.clearInterval(interval);
  }, []);

  const roundedProgress = Math.round(progress);
  const style = { "--progress": `${progress}%` } as CSSProperties;

  return (
    <div
      className="progress-wrap reveal reveal-5"
      role="progressbar"
      aria-label="Napredak pripreme sajta"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={roundedProgress}
      style={style}
    >
      <span className="progress-track">
        <span className="progress-fill">
          <span className="progress-scan" />
        </span>
      </span>
      <span className="progress-labels">
        <span>System update</span>
        <span>U toku · {roundedProgress}%</span>
      </span>
    </div>
  );
}
