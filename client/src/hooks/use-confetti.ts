import confetti from 'canvas-confetti';

export function useConfetti() {
  const triggerConfetti = (originElement: HTMLElement) => {
    const rect = originElement.getBoundingClientRect();
    const buttonCenter = {
      x: (rect.left + rect.right) / 2,
      y: (rect.top + rect.bottom) / 2,
    };

    // Convert to relative coordinates (0-1)
    const origin = {
      x: buttonCenter.x / window.innerWidth,
      y: buttonCenter.y / window.innerHeight,
    };

    // First burst with stars
    confetti({
      origin,
      particleCount: 40,
      spread: 80,
      startVelocity: 35,
      gravity: 1,
      ticks: 100,
      decay: 0.94,
      shapes: ['star'],
      scalar: 1.4,
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
      drift: 0.2,
    });

    // Second burst with circles
    confetti({
      origin,
      particleCount: 60,
      spread: 90,
      startVelocity: 30,
      gravity: 0.9,
      ticks: 100,
      decay: 0.94,
      shapes: ['circle'],
      scalar: 1.1,
      colors: ['#45B7D1', '#FF6B6B', '#4ECDC4'],
      drift: 0.2,
    });
  };

  return { triggerConfetti };
}