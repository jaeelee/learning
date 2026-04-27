// async / await

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "홍길동",
    id: "gildong",
  };
}
// 원래 promise를 반환하는 함수라면 그냥 promise를 반환하도록 내버려둠

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
