# Exclude

### 설명

Exclude 유틸리티는 T,U 타입 2개를 전달한 후 U타입이 T타입이 포함되는지를 검증합니다.<br/>
만약에 포함된다면 `never type`을 반환하고 포함되지 않는다면 전달받은 T타입을 타입으로 지정합니다.<br/>

```jsx
interface User1 {
  name: string;
  age: number;
}

interface User2 {
  name: string;
  age: number;
}

const user1: Exclude<User1, User2> = {
  name: "hoi", // Type 'string' is not assignable to type 'never'.ts
  age: 27, // Type 'number' is not assignable to type 'never'.ts
};
```

### 직접 구현

T에 U를 상속한 결과가 true라면 never 아니라면 T를 타입으로 지정합니다.

```jsx
type MyExclude<T, U> = T extends U ? never : T;
```
