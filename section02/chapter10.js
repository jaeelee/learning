// 1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자

let date2 = new Date("1999-11-11-11:11:11");

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초":UTC로 부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // month 는 0부터 시작이기 때문에 +1 해줘야함!!!
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let secounds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 주의! 0부터 시작하기 때문에 2를 넣으면 3월임
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
date1.toDateString();
date1.toLocaleString();
