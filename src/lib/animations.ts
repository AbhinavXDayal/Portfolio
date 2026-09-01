export const standardTransition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1],
};

export const staggerDelay = (index: number, baseDelay = 0.08) => {
  return `${index * baseDelay}s`;
};

