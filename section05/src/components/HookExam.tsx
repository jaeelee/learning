// hooks 팁 3가지
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다 -> 조건문과 반복문 안에서는 호출될 수 없다
// 호출 순서가 엉망이 되기 때문
// 3. 커스텀 훅을 직접 만들 수 있다

export default function HookExam() {
  return <div>hook Exam</div>;
}
