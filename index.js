// Code your solution in this file!

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42); 
}

module.exports = {
  distanceFromHqInBlocks: distanceFromHqInBlocks
};

// Function to calculate distance in feet from headquarters
function distanceFromHqInFeet(location) {
  const feetPerBlock = 264; // One city block is 264 feet
  const blocks = distanceFromHqInBlocks(location);
  const feet = blocks * feetPerBlock;
  return feet;
}
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264; // One city block is 264 feet
  const blocksTravelled = Math.abs(destination - start);
  const feetTravelled = blocksTravelled * feetPerBlock;
  return feetTravelled;
}

function calculatesFarePrice(start, destination) {
  // Calculate distance in feet
  const distanceInFeet = Math.abs(destination - start) * 264; // Each block is 264 feet

  // Special condition for free sample
  if (start === destination) {
      return 'You are already at your destination!'; // If start and destination are the same, no fare is charged
  }

  // Determine fare based on distance
  if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
  } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
  }
}

// Example usage:
console.log(calculatesFarePrice(34, 34)); // No fare charged, already at destination
console.log(calculatesFarePrice(34, 32)); // Example distance within the limits
console.log(calculatesFarePrice(34, 25)); // Example distance within the limits
console.log(calculatesFarePrice(34, 20)); // Example distance over 2500 feet