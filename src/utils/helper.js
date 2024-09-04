export const generateUniqueName = () => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36
  const randomString = Math.random().toString(36).substr(2, 5); // Generate random string
  return `user_${timestamp}_${randomString}`;
};

export const generateMessage = () => {
  const messages = [
    "Hello, world!",
    "How are you doing?",
    "What's up?",
    "Nice to meet you!",
    "Have a great day!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

//Function to check the number is prime
export const isPrime = (num) =>{
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export const findNthPrime = (n) => {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}
