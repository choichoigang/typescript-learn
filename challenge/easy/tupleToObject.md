# Tuple To Object

### 설명

튜플 타입은 고정된 수의 요소의 타입을 나타내면서 다른 값의 배열을 표현할 수 있습니다.

```jsx
type Locations = [number, number];
const currLocations: Locations = [123.11, 36.33];

let locations = [number, number] as const;
locations = [123, 36];
```

### 직접 구현하기

TupleToObject는 튜플의 형태에서 key : key의 형태로 인터페이스를 만들 수 있도록 지원하는 유틸리티 입니다.

```jsx
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
```

- [ T extends readonly any[] ] : 전달받은 튜플을 readOnly의 형태로 T에 상속합니다.
- [ [K in T[number]]: K ] : 튜플 타입의 각 인덱스에 해당하는 값을 key로 지정하고 value 역시 해당 값으로 매핑해 줍니다.
