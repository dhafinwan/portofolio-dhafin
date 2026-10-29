import { useReducedMotion, type Variants, type Transition } from "motion/react";

// ─── Transitions ─────────────────────────────────────────────────────────────

/** Standard entrance: 0.45s, cubic ease */
const standardTransition: Transition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1],
};

/** Fast: 0.22s, used for hover / micro-interactions */
const fastTransition: Transition = {
  duration: 0.22,
  ease: [0.25, 0.1, 0.25, 1],
};

// ─── Entrance Variants ───────────────────────────────────────────────────────

/**
 * Standard entrance: fade + 14px translateY.
 * Use as child variant inside a stagger container, OR with
 * `whileInView="visible"` + `viewport={{ once: true, amount: 0.2 }}`.
 * Only animates opacity and transform without layout shift.
 */
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "none" },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
};

/**
 * Fade-only variant for elements where vertical shift causes layout issues
 * (e.g. text inside a flex container with fixed height).
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: standardTransition },
};

// ─── Stagger Container Variants ──────────────────────────────────────────────

/**
 * Hero-level stagger container (immediate entry, 0.06s between children).
 * Use `initial="hidden" animate="visible"` on the container.
 */
export const containerStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

/**
 * Viewport-aware stagger container used with `whileInView`.
 * Container itself has no opacity animation (children handle it),
 * preventing double-fade when the container enters.
 * staggerChildren: 0.07s max per spec.
 */
export const viewportContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

/**
 * Dense stagger for grids with many small cards (credentials, etc.).
 * Shorter delay prevents the last card feeling too slow.
 */
export const denseStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

// ─── Hover / Interaction Variants ────────────────────────────────────────────

/**
 * Card hover: subtle lift (-4px Y) + faint scale.
 * Pair with `initial="rest" whileHover="hover" whileTap="tap"`.
 * Only animates transform without reflow.
 */
export const cardHoverVariants: Variants = {
  rest:  { y: 0,  scale: 1,    transition: fastTransition },
  hover: { y: -4, scale: 1.005, transition: fastTransition },
  tap:   { y: 0,  scale: 0.99, transition: { duration: 0.1 } },
};

/**
 * Button hover: very subtle lift (-1px) + tap squish.
 */
export const buttonHoverVariants: Variants = {
  rest:  { y: 0, scale: 1,    transition: fastTransition },
  hover: { y: -1, scale: 1,   transition: fastTransition },
  tap:   { y: 0,  scale: 0.97, transition: { duration: 0.1 } },
};

/**
 * Icon/small-element hover: scale pulse.
 */
export const iconHoverVariants: Variants = {
  rest:  { scale: 1,    transition: fastTransition },
  hover: { scale: 1.15, transition: fastTransition },
  tap:   { scale: 0.9,  transition: { duration: 0.1 } },
};

// ─── Tab / Filter Animation ──────────────────────────────────────────────────

/**
 * Grid container for AnimatePresence + layout tab switching.
 * Combines fade exit with child stagger on enter.
 */
export const tabGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

// ─── Hook ────────────────────────────────────────────────────────────────────

/**
 * Returns `true` when `prefers-reduced-motion: reduce` is active.
 * Use to conditionally disable all motion variants.
 */
export const usePrefersReducedMotion = (): boolean => {
  const shouldReduceMotion = useReducedMotion();
  return Boolean(shouldReduceMotion);
};

// ─── Shared Viewport Config ──────────────────────────────────────────────────

/**
 * Standard viewport config for all `whileInView` animations.
 * `once: true` fires only the first time the element enters.
 * `amount: 0.2` triggers when 20% of element is visible.
 */
export const VIEWPORT = { once: true, amount: 0.2 } as const;
