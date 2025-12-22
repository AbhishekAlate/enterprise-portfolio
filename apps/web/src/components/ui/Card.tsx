"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type CardVariant = "surface" | "soft";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  interactive?: boolean;
  shimmer?: boolean;
};

function assignRef<T>(ref: React.Ref<T> | undefined, value: T) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  if (ref) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "surface",
      interactive = true,
      shimmer = true,
      onPointerMove,
      onPointerEnter,
      onPointerLeave,
      style,
      ...props
    },
    ref,
  ) => {
    const localRef = React.useRef<HTMLDivElement | null>(null);

    const setRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        localRef.current = node;
        assignRef(ref, node);
      },
      [ref],
    );

    const updateShimmer = React.useCallback(
      (event: React.PointerEvent<HTMLDivElement>) => {
        if (!shimmer || !localRef.current) {
          return;
        }
        if (event.pointerType === "touch") {
          return;
        }
        const rect = localRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        localRef.current.style.setProperty("--shimmer-x", `${x}px`);
        localRef.current.style.setProperty("--shimmer-y", `${y}px`);
        localRef.current.style.setProperty("--shimmer-opacity", "1");
      },
      [shimmer],
    );

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerMove?.(event);
      updateShimmer(event);
    };

    const handlePointerEnter = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerEnter?.(event);
      if (!shimmer || !localRef.current || event.pointerType === "touch") {
        return;
      }
      localRef.current.style.setProperty("--shimmer-opacity", "1");
    };

    const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerLeave?.(event);
      if (!shimmer || !localRef.current) {
        return;
      }
      localRef.current.style.setProperty("--shimmer-opacity", "0");
    };

    return (
      <div
        ref={setRef}
        data-variant={variant}
        data-interactive={interactive ? "true" : "false"}
        data-shimmer={shimmer ? "true" : "false"}
        className={cn("ui-card", className)}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={
          {
            "--shimmer-x": "50%",
            "--shimmer-y": "50%",
            "--shimmer-opacity": 0,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

const MotionCard = motion(Card);

export { Card, MotionCard };
