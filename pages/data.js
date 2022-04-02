import uniqid from "uniqid";
let cardsData = [
  {
    id: uniqid(),
    url: "/eth-logo.png",
    closed: true,
    eliminated: false,
  },
  {
    id: uniqid(),
    url: "/flow-logo.png",
    closed: true,
    eliminated: false,
  },
  {
    id: uniqid(),
    url: "/sol-logo.png",
    closed: true,
    eliminated: false,
  },
  {
    id: uniqid(),
    url: "/btc-logo.png",
    closed: true,
    eliminated: false,
  },
  {
    id: uniqid(),
    url: "/bnb-logo.png",
    closed: true,
    eliminated: false,
  },
  {
    id: uniqid(),
    url: "/algo-logo.png",
    closed: true,
    eliminated: false,
  },
];
cardsData.forEach((el) => {
  cardsData.push({
    ...el,
    id: uniqid(),
  });
});

// cardsData = cardsData.sort(() => 0.5 - Math.random());

export default cardsData;
