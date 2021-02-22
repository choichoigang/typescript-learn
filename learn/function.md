# function

Javascript 함수는 추상화 계층을 구축하거나 클래스 모방 , 정보 은닉 , 모듈에 대한 방법을 제공한다고 설명합니다.<br/>
여기서 classes 모방은 prototype , 정보 은닉은 클로져 , 모듈화는 메서드 또는 함수 자체를 유틸로 사용하여 활용 가능할거라고 생각합니다.

### 기명함수와 익명함수

```jsx
// 기명 함수
function add(x, y) {
  return x + y;
}

// 익명 함수
let myAdd = function (x, y) {
  return x + y;
};
```

## 함수의 타이핑

함수가 받는 인자 그리고 return type까지 typescript는 표현이 가능합니다.<br/>
아래의 함수는 number type의 인자 2개를 받아 number를 return 하는것을 예측할 수 있습니다.

```jsx
function add(x: number, y: number): number {
  return x + y;
}
```

## 함수의 타입

함수는 기본적으로 매개변수와 반환 타입만 구성이 가능합니다.<br/>
그 결과 전역에서 캡처된 변수는 타입에 반영할 수 없습니다.

```jsx
// 파악할 수 없는 전역에 캡처된 상태 c
const c = 3;

function add(x: number, y: number): number {
  return x + y + c;
}
```

### 선택적 매개변수와 기본 매개변수

typescript는 선언된 모든 매개변수는 함수가 실행되는 순간에 필요하다고 가정합니다.<br/>
하지만 우리는 함수를 실행할 때 어떤 인자는 선택적으로 부여하는 형태로 함수를 활용하곤 합니다.<br/>

```jsx
// 정확히 x , y의 매개변수가 들어가야지만 error가 발생하지 않습니다.

function joinString(x: string, y: string): string {
  return x + y;
}

/*---------------------------------------------------*/

// ? 키워드를 사용하여 선택적인 매개변수를 활용할 수 있습니다.

function joinString(x: string, y?: string): string {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}

/*---------------------------------------------------*/

// 기본-초기화 매개변수를 지정해주는 경우는 undefined를 전달해야 정상적으로 실행이 가능합니다.

function joinString(x = "first", y: string) {
  return x + y;
}

joinString("second"); // 초기화되었다고 y에 자동으로 할당되지 않습니다.
joinString(undefined, "second"); // firstsecond 반환
```

### 나머지 매개변수ㅇ

예측할 수 없는 매개변수는 함수 내부의 arguments의 형태와 연관지어 타입의 상태를 지정할 수 있습니다.

```jsx
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

### 오버로드를 사용한 다향한 인자와 return 타입 정의

아래와 같이 다양한 리턴 타입 그리고 원한다면 인자 역시 다양하게 표현할 수 있습니다.<br/>
위에서 오버로드에 사용된 인자의 구조가 복잡하다면 인터페이스의 형태를 or 표현을 통해서 사용할 수 있습니다.

```jsx
function foo(x: boolean): number;
function foo(x: boolean): string;

function foo(x : boolean): any {
  if (x) return 1;
  if (!x) return "1";
}

```
