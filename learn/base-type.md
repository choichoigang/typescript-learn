# 기본 타입 (basic type)

### Boolean

true | false 표현 타입

```jsx
const bool: boolean = false;
```

### Number

Number는 정수뿐 아니라 16진수 10진수 2진수 8진수 모두 표현

```jsx
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### 문자열

```jsx
let color: string = "blue";
```

### 배열

기본적인 타입부터 인터페이스 객체를 포함한 배열도 표현 가능

```jsx
interface User {
  name: string;
  id: number;
}

let arr: Array<number> = [1, 2, 3];
let arr: Array<User> = [{ name: "me", id: 1 }];
```

### Tuple

고정된 개수와 그에 따른 타입을 가지는 배열 표현 가능

```jsx
type Tuple = [string, number, boolean];
const arr: Tuple = ["a", 1, false];
```

### enum

enum은 서로 연관된 상수들의 집합으로 이해할 수 있으며 또한 관련된 값들이 변경되지 않음을 보장합니다.<br/>
초기값을 지정해 주지 않는다면 0부터 순서대로 값을 가지게 됩니다.

```jsx
enum CompanyAddress {
  Apple = "City Cupertino",
  Google = "Mountain View",
}
```
