# Enums

열거형은 이름이 있는 상수들의 집합을 정의할 때 사용합니다.

### 숫자 열거형

숫자 열거형은 초기화해주지 않는다면 0부터 순서대로 1씩 증가하게 됩니다.<br/>
초기화되지 않은 상태는 0부터 시작하지만 초기화를 해준다면 초기화된 index부터 차례대로 증가하게 됩니다.

```jsx
enum Count {
  First,
  Second,
}

console.log(Count.First); // 0
console.log(Count.First); // 1

enum Count {
  First = 1,
  Second,
}

console.log(Count.First); // 1
console.log(Count.Second); // 2

```

### 문자열 열거형

문자열 열거형의 특징은 각 맴버들이 문자열 리터럴 또는 다른 문자열 열거형의 맴버로 상수를 초기화 해줘야 한다는 것입니다.
