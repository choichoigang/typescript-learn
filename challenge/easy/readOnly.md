# ReadOnly

### 설명

타입스크립트의 ReadOnly 유틸리티 타입은 속성을 바꿀 수 없는 기능을 제공합니다.<br/>
객체의 모든 값들이 readOnly 속성을 가져야 한다면 인터페이스를 생성할 때 보일러 플레이트를 줄일 수 있습니다.<br/>
또한 선택적으로 타입을 공유하는 특정 객체만 readOnly 속성을 부여할 수 있습니다.

```jsx
interface Options {
  key: string;
  date: string;
}

const myOptions: Readonly<Options> = {
  key: "!@#$QWER",
  date: "2020-10-20",
};

// Error !
myOptions.key = "QWER!@#$";
```

### 직접 구현하기

ReadOnly를 직접 구현하는 방법은 아래와 같습니다.

```jsx
type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
```

- 타입 T를 받는다.

- T의 key를 유니온 타입으로 추출한 후 T에 속하는 타입과 매치 시킨다.

- 생성된 타입은 모두 readonly 속성을 부여한다.
