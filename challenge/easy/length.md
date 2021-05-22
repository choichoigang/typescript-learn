### Length

### 설명

Length 유틸리티 타입은 배열 타입을 전달하면 해당 배열의 길이를 타입으로 지정해주는 유틸리티 입니다.<br/>

### 직접 구현

Length 유틸리티는 any 타입의 배열을 상속 받습니다.<br/>
배열 타입이 된 T에 괄호 표기법 T['length']를 사용히여 해당 배열의 길이를 타입으로 지정합니다.<br/>

```jsx
type length1 = [1, 2, 3, 4, 5, 6, 7];
type length2 = ["a", "b", "c", "d"];

type Length<T extends any[]> = T["length"];

type arrOfLength1 = Length<length1>; // expected 7
type arrOfLength2 = Length<length2>; // expected 4
```

### 배열['length']는 어떻게 접근이 가능한걸까 ?

<img width="234" alt="스크린샷 2021-05-21 오후 8 13 58" src="https://user-images.githubusercontent.com/49897409/119129366-c7bc2880-ba71-11eb-9ba6-5d95782dc4ed.png">

크롬의 개발자 도구에서 변수에 할당된 배열을 찍어보면 [length] : [arr length] 해당 키값이 담겨있는걸 볼 수 있습니다. 따라서 length라는 key name으로 접근하면 배열의 길이를 얻을 수 있습니다. 간단히 생각하면 점 표기법으로 접근이 가능하다는 점을 알고 있었으면 당연히 괄호 표기법으로도 접근이 가능하다는 것을 생각할 수 있지만 자주 사용해보지 않은 형태라서 정리를 추가합니다.<br/><br/>

**(배열은 생성 시점에서 length라는 key에 자신의 길이의 정보를 담고 있다.)**
