"use client";

import React, {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

export function getPlainText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getPlainText).join("");
  }

  if (!node || typeof node === "boolean") {
    return "";
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    if (node.type === "br") {
      return " ";
    }

    return getPlainText((node as ElementWithChildren).props.children);
  }

  return "";
}

function renderAnimatedWords(node: ReactNode, keyPrefix = "word"): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
      .split(/(\s+)/)
      .filter((part) => part.length > 0)
      .map((part, index) => {
        if (/^\s+$/.test(part)) {
          return " ";
        }

        return (
          <span
            key={`${keyPrefix}-${index}-${part}`}
            data-reveal-word="true"
            className="inline-block"
            style={{
              opacity: 0,
              filter: "blur(8px)",
              transform: "translateY(18px)",
              transition: "opacity 0.15s ease-out, filter 0.15s ease-out, transform 0.15s ease-out",
            }}
          >
            {part}
          </span>
        );
      });
  }

  if (Array.isArray(node)) {
    return node.map((child, index) =>
      <React.Fragment key={`${keyPrefix}-fragment-${index}`}>
        {renderAnimatedWords(child, `${keyPrefix}-${index}`)}
      </React.Fragment>
    );
  }

  if (!node || typeof node === "boolean") {
    return null;
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    if (node.type === "br") {
      return <br key={`${keyPrefix}-br`} />;
    }

    return cloneElement(
      node as ElementWithChildren,
      { key: `${keyPrefix}-element` },
      renderAnimatedWords((node as ElementWithChildren).props.children, `${keyPrefix}-child`)
    );
  }

  return null;
}

const WordRevealText = React.memo(function WordRevealText({
  as: Component,
  children,
  className,
}: {
  as: "h1" | "h2" | "p";
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const plainText = getPlainText(children).replace(/\s+/g, " ").trim();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div data-reveal-block="true">
      <Component className={className} aria-label={plainText}>
        <span aria-hidden="true">{renderAnimatedWords(children)}</span>
      </Component>
    </div>
  );
});

export default WordRevealText;
