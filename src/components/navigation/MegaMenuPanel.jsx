import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import "./mega-menu.css";

/**
 * Reusable MegaMenuPanel with live preview pane.
 * @param {{ items: Array<{ id: string, title: string, desc: string, href?: string, preview: React.ComponentType }> }} props
 */
export function MegaMenuPanel({ items }) {
  const [active, setActive] = useState(items[0]?.id || "");
  const reduce = useReducedMotion();
  const activeItem = items.find((i) => i.id === active) || items[0];
  const Preview = activeItem?.preview;
  const blur = (v) => (reduce ? "none" : `blur(${v}px)`);

  return (
    <div className="mm">
      <ul className="mm__list" role="menu">
        {items.map((i) => (
          <li key={i.id} role="none">
            <a
              href={i.href || "#"}
              className="mm__link"
              role="menuitem"
              data-active={active === i.id}
              onPointerEnter={() => setActive(i.id)}
              onFocus={() => setActive(i.id)}
            >
              <span className="mm__title">{i.title}</span>
              <span className="mm__desc">{i.desc}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mm__preview" aria-hidden="true">
        <AnimatePresence initial={false}>
          {Preview && (
            <motion.div
              key={active}
              className="mm__layer"
              initial={{ opacity: 0, filter: blur(4) }}
              animate={{ opacity: 1, filter: blur(0), transitionEnd: { filter: "none" } }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0.15 : 0.3, ease: "easeOut" }}
            >
              <Preview />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MegaMenuPanel;
