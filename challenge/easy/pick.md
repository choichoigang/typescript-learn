# Pick

### 설명

픽 타입은 타입스크립트의 유틸리티 타입 중 하나 입니다.<br/>
픽을 활용하면 기존의 인터페이스에서 원하는 타입만을 선택하여 짧은 라인으로 타입 정의가 가능합니다.<br/>

```jsx
interface Item {
  name: string;
  description: string;
  price: number;
  count: number;
}

type ItemPreview = Pick<Item, "name" | "price">;

const PreviewItemList: Array<ItemPreview> = [{ name: "샴푸", price: 20000 }];
```

### 직접 구현하기

픽 유틸리티에 필요한 값은 아래와 같습니다<br/>

- 인터페이스 타입 (타입)

- 유니온 타입 (하나의 프로퍼티에 다양한 변수를 받을 수 있는 형태)
  <br/>

```jsx
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

- [K extends keyof T] : K는 T 인터페이스의 모든 프로퍼티의 키를 상속받습니다.

- [P in K] : 유니온 타입으로 전달한 Key를 타입의 Key로 지정합니다.

- [T[P]] : 전달한 인터페이스에서 해당하는 키의 타입을 추출하여 타입으로 지정합니다.
