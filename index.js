// Code your solutions in this file
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }
  
  function writeCards(names, event) {
    const thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouCards.push(message);
    }
  
    return thankYouCards;
  }
  
  function countDown(number) {
    let count = number;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  // Example usage
  const gifts = ["teddy bear", "drone", "doll"];
  wrapGifts(gifts);
  
  const names = ["Charlie", "Samip", "Ali"];
  const thankYouCards = writeCards(names, "birthday");
  console.log(thankYouCards);