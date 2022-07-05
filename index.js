function writeCards(friend, birthday) {
    let thankYouCards = []
    for ( let i = 0; i < friend.length; i++ ) {
      thankYouCards.push( `Thank you, ${friend[i]}, for the wonderful ${birthday} gift!` )
    }
    return thankYouCards;
}

function countDown(positiveInteger) {
    while (positiveInteger > 0) {
        console.log(positiveInteger);
        positiveInteger -= 1;
    }
    console.log(positiveInteger);
}