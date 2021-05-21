# FirstOfArray

### 설명

FirstOfArray 유틸리티 타입은 배열의 첫번째 인자를 타입으로 지정하는 유틸리티 입니다.<br/>

```jsx
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

### 직접 구현하기

처음 구현한 방식으로도 배열의 첫번째 인자를 타입으로 가져올 수 있었습니다.<br/>
하지만 빈 배열을 전달할 경우에 타입이 undefined로 지정되는 문제가 있었습니다.<br/>
해당 유틸리티 타입은 배열의 첫 인자를 가져 온다는 목적을 가지고 있지만 해당 형태에서는 undefined로 처리하는 동작은 유틸리티 동작에서 의도한 타입 정의가 아니라고 생각합니다.

```jsx
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type First<T extends any[]> = T[0];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be undefined
```

해당 코드는 문제점을 개선한 코드입니다.<br/>
`T[number]`와 같이 배열을 유니온 타입으로 변환 후 해당 값이 true가 아니라면 never 타입을 할당해 줍니다.<br/>
never는 모든 타입의 하위 타입인 특성을 가지고 있고 따라서 어떤 값도 never 타입에 할당할 수 없습니다.<br/>
따라서 배열이 어떠한 요소도 가지고 있지 않는 경우라면 타입을 할당할 수 없도록 활용할 수 있습니다.

```jsx
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be never
```
