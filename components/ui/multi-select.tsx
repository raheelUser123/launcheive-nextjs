import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";

interface MultiSelectProps {
  options: readonly string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  selectedValues,
  onChange,
  placeholder = "Select options",
  className,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    const newValues = selectedValues.includes(option)
      ? selectedValues.filter((v) => v !== option)
      : [...selectedValues, option];
    onChange(newValues);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex w-full items-center justify-between rounded-[10px] border border-[#edf1f3] bg-white px-[14px] py-[12px] font-body text-[14px] sm:text-[14px] font-medium text-black shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] outline-none transition focus:border-[#1C5AF9] focus:ring-2 focus:ring-[#1C5AF9]/10",
          className
        )}
      >
        <span className="truncate pr-4 text-left">
          {selectedValues.length === 0 
             ? <span className="text-[#98a2b3]">{placeholder}</span>
             : selectedValues.join(", ")}
        </span>
        <ChevronDown 
          className={clsx(
             "size-5 shrink-0 text-black transition-transform duration-200", 
             isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[10px] border border-[#e9ebf1] bg-white py-2 shadow-lg">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option);
            return (
              <div
                key={option}
                onClick={() => toggleOption(option)}
                className="flex cursor-pointer items-center px-4 py-2 hover:bg-[#f9fafb]"
              >
                <div
                  className={clsx(
                    "mr-3 flex size-[16px] shrink-0 items-center justify-center rounded-[4px] border",
                    isSelected
                      ? "border-[#1C5AF9] bg-[#1C5AF9] text-white"
                      : "border-[#667085] bg-white text-transparent"
                  )}
                >
                  <Check className="size-3" />
                </div>
                <span className="text-[13px] font-medium text-[#334155] sm:text-[14px] leading-5">{option}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
