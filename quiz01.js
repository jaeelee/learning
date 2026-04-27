/**
 * Quiz1
 */

function calcTicketPrice(price, discountFn, memberName) {
  const finalPrice = (discountFn && discountFn(price)) || price;
  const name = memberName || "비회원";

  console.log(`${name} - 최종가격 : ${finalPrice}원`);
}

calcTicketPrice(15000, (price) => price * 0.8, "김효빈");
// 출력 결과 :
// 김효빈 - 최종 가격 : 12000원

calcTicketPrice(15000, null, "이정환");
// 출력 결과 :
// 이정환 - 최종 가격 : 15000원

calcTicketPrice(15000, (price) => price - 3000);
// 출력 결과 :
// 비회원 - 최종 가격 : 12000원

/**
 * Quiz2
 */
function printReceipt({ customer, items }) {
  const [Signature] = items;
  console.log(`주문자 : ${customer}`);
  console.log(`대표 메뉴 : ${Signature || "메뉴 없음"}`);
  console.log(`총 수량 : ${items.length}잔`);
}

printReceipt({
  customer: "김효빈",
  items: ["아메리카노", "카페라떼", "바닐라라떼"],
});

// 출력 결과 :
// 주문자 : 김효빈
// 대표 메뉴 : 아메리카노
// 총 수량 : 3잔

printReceipt({
  customer: "이정환",
  items: [],
});

// 출력 결과 :
// 주문자 : 이정환
// 대표 메뉴 : 메뉴 없음
// 총 수량 : 0잔

/**
 * Quiz3
 */

function filterRanking(players, minScore) {
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].score >= minScore) {
      console.log(
        `${i + 1}등 - ${players[i].nickname} (${players[i].score}점)`,
      );
      count++;
    }
  }
  if (count === 0) console.log("조건을 만족하는 플레이어가 없습니다.");
}

filterRanking(
  [
    { nickname: "ProGamer", score: 950 },
    { nickname: "Noob123", score: 120 },
    { nickname: "SilverFox", score: 730 },
    { nickname: "GoldKing", score: 880 },
    { nickname: "BronzeHero", score: 310 },
  ],
  700,
);

// 출력 결과 :
// 1등 - ProGamer (950점)
// 3등 - SilverFox (730점)
// 4등 - GoldKing (880점)

filterRanking(
  [
    { nickname: "Newbie1", score: 50 },
    { nickname: "Newbie2", score: 30 },
  ],
  500,
);

// 출력 결과 :
// 조건을 만족하는 플레이어가 없습니다.
