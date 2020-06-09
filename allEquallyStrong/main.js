//compare between your hands & friend hands. check if tow sides of yours hands are weakest or strongest, compared to your friends hands, weakest/strongest, (yourLeft, yourRight, friendsLeft, friendsRight)

function areAllEqual(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
}

console.log(areAllEqual(15, 10, 10, 15));
console.log(areAllEqual(10, 15, 10, 15));
console.log(areAllEqual(15, 10, 10, 9));
