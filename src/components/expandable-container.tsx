"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import IconArrow from "@/components/icons/icon-arrow";

const MAX_CONTENT_HEIGHT_PX = 270;

const ExpandableContainer = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      if (contentHeight > MAX_CONTENT_HEIGHT_PX) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, []);

  return (
    <>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: isExpanded ? "1000px" : `${MAX_CONTENT_HEIGHT_PX}px`,
        }}
      >
        {children}
      </div>
      {showButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-base lg:text-xl font-normal leading-snug lg:leading-snug"
        >
          <span>{isExpanded ? "Скрыть" : "Подробнее"}</span>
          <IconArrow direction={isExpanded ? "down" : "up"} />
        </button>
      )}
    </>
  );
};

export default ExpandableContainer;
