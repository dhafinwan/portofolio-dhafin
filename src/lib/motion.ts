import { useReducedMotion, type Variants, type Transition } from "motion/react";

/**
 * Standard transition for subtle entrance animations
 */
const standardTransition: Transition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1],
};

const fastTransition: Transition = {
  duration: 0.25,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * (1) Standard entrance variants: subtle fade + small translateY (max 16px, duration 0.4-0.5s)
 */
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
};

/**
 * Fade-only variant for elements where vertical shift would cause layout issues
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: standardTransition,
  },
};

/**
 * (2) Container variant with short stagger (max 0.08s per child)
 */
export const containerStaggerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

/**
 * Viewport-aware container (for scroll reveals) — no opacity on container itself
 * so children can independently fade in.
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
 * Hover feedback variant for cards (subtle lift, transform only)
 */
export const cardHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -3,
    transition: fastTransition,
  },
};

/**
 * Hover feedback for buttons (subtle lift only)
 */
export const buttonHoverVariants = {
  rest: { y: 0 },
  hover: { y: -1, transition: fastTransition },
  tap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
};

/**
 * (3) Custom hook to detect if user prefers reduced motion
 * Wraps useReducedMotion from "motion/react"
 */
export const usePrefersReducedMotion = (): boolean => {
  const shouldReduceMotion = useReducedMotion();
  return Boolean(shouldReduceMotion);
};
