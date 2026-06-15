export const initialCard = {
  scale: 0.95,
  opacity: 0,
  transition: { duration: 0.3, ease: "easeOut" },
} as const;

export const animatedCard = {
  scale: 1,
  opacity: 1,
  transition: { duration: 0.3, ease: "easeOut" },
} as const;