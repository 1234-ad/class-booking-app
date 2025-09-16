// Simulate booking with 15% failure rate
export const simulateBooking = (): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.15; // 85% success rate
      resolve(success);
    }, 1000); // 1 second delay to simulate network request
  });
};