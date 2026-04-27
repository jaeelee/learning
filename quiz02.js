// 1번
function getOrderSummary(orders) {
  return orders
    .filter((item) => item.status === "completed")
    .map(
      ({ menu, quantity, price }) =>
        `${menu} - ${quantity}개 (총 ${price * quantity}원)`,
    );
}

const result = getOrderSummary([
  { menu: "아메리카노", price: 3000, quantity: 2, status: "completed" },
  { menu: "카페라떼", price: 3500, quantity: 1, status: "cancelled" },
  { menu: "크로와상", price: 2800, quantity: 3, status: "completed" },
  { menu: "케이크", price: 5000, quantity: 1, status: "completed" },
  { menu: "녹차라떼", price: 4000, quantity: 2, status: "cancelled" },
]);

console.log(result);

// 출력 결과 :
// ["아메리카노 - 2개 (총 6000원)", "크로와상 - 3개 (총 8400원)", "케이크 - 1개 (총 5000원)"]

// 2번
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function countdown(seconds) {
  try {
    for (let i = seconds; i > 0; i--) {
      console.log(i);
      await wait(1000);
    }
    console.log("🎉 타이머 종료!");
  } catch (error) {
    console.log(error);
  }
}

countdown(5);

// 출력 결과 : (1초 간격으로 출력)
// 5
// 4
// 3
// 2
// 1
// 🎉 타이머 종료!
