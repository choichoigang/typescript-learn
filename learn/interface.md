# Interface

참고 링크<br>
https://typescript-kr.github.io/pages/interfaces.html

Typescript는 타입 검사가 값의 형태에 초점을 맞추고 있다라고 말합니다.<br/>
값의 형태를 맞추는 것을 덕 타이핑 혹은 구조적 서브타이핑이라고 서술하고 있습니다.

### duck typing

"If it walks like a duck and it quacks like a duck, then it must be a duck" <br/>
duck typing을 설명해주는 유명한 위의 구문은 "만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다"라고 말하고 있습니다.<br/>

간단한 예제를 통해서 이해해 보도록 하겠습니다.

아래의 Quackable interface는 quack이라는 메서드를 가지는 객체 형태를 정의하고 있습니다.<br/>
형태에 초점을 맞추는 특성답게 Person 객체라도 Quackable의 형태를 따르게 되죠 하지만 Cat 객체는 다른 형태를 가지고 있으므로 에러를 발생시킵니다.

```jsx
interface Quackable {
  quack(): void;
}

const Duck: Quackable = {
  quack: (): void => {
    console.log("꽥꽥");
  },
};

const Person: Quackable = {
  quack: (): void => {
    console.log("꽥꽥 ...?");
  },
};

const Cat: Quackable = {
  meow: (): void => {
    console.log("야옹");
  },
};
```

### 선택적 프로퍼티

interface는 모든 프로퍼티를 필수로 요구하지 않는 형태로도 운용이 가능합니다.<br/>
선택적인 프로퍼티는 ? 를 사용해서 사용이 가능합니다.<br/>
만약에 선물을 주는데 기본적으로 케잌과 촛불은 들어가지만 리본이 들어간 선물이 있을수도 있고 없을수도 있다면 어떻게 표현할까요 ?

```jsx
interface Gift {
  cake: string;
  candle: number;
  ribbon?: string;
}

const randomGifts: Array<Gift> = [
  {
    cake: "딸기",
    candle: 20,
    ribbon: "땡떙이 리본",
  },
  {
    cake: "초코",
    candle: 32,
    ribbon: "땡떙이 리본",
  },
  {
    cake: "말차",
    candle: 11,
    ribbon: "땡떙이 리본",
  },
  {
    cake: "고구마",
    candle: 1,
  },
];
```

### 읽기전용 프로퍼티

읽기 전용은 수정을 금지하는 기능을 제공합니다.<br/>
만약에 유저의 상태가 있고 그중에 id와 name은 읽기만 가능하고 변동하면 안된다는 상황을 통해서 설명해 보도록 하겠습니다.

```jsx
interface User {
    readonly id: number;
    readonly name: string;
    status: string;
}

const user : User = {
    id : 1,
    name : 'soo',
    status : 'happy',
}

user.id = 100; // Error fire !

```

### 초과 프로퍼티 검사

interface는 형태가 지정되지 않은 객체가 초과적인 프로퍼티를 가져도 허용해주는 특징을 가지고 있습니다.

```jsx
interface Person {
  name: string;
}

const person = {
  name: "hoi",
  age: 22,
};

const printArg = (arg: Person): void => {
  console.log(arg);
};

printArg(person);
```

위의 예제에서는 age 프로퍼티를 추가적으로 가지고 있음에도 Error를 발생시키지 않습니다.</br>
하지만 읽기 전용의 속성을 가지는 인터페이스의 경우에는 위와 같은 특성에서 오류를 유발할 수 있습니다.<br/>

```jsx
interface Person {
  name?: string;
}

const printArg = (arg: Person): void => {
  // ...
};

printArg({
  name: "hoi",
  age: 22, // Error
});
```

위와 같은 상황에서는 에러를 유발합니다.<br/>
이는 타입스크립트에서 자체적으로 다른 변수에 할당하거나 인수로 전달할 때 초과 프로퍼티를 검사하게 되기 때문입니다.<br/>
만약에 예측할 수 없는 추가 프로퍼티가 있는 경우라면 아래와 같이 해결할 수 있습니다.

```jsx
// 타입 단언
printArg(person as Person);

// 문자열 인덱스 서명 (string index signatuer)

interface Person {
    name?: string;
    [propName: string]: any;
};

// 변수에 담기

const person = {
    name : 'goo',
    age : 25,
}

printArg(person);
```

위의 방법중이 변수에 담기는 인터페이스간 공유하는 프로퍼티가 없으면 Error를 유발합니다.<br/>
즉 현재는 name을 통해서 공유하는 상태를 말하고 있으므로 선택적 프로퍼티인 name이 없다면 에러를 발생시킵니다.<br/>
사실상 이런 피하는 방식보다는 예측되는 추가 프로퍼티들을 모두 선택적 프로퍼티로 잘 선언하여 예측하는것이 더 좋다고 생각합니다.
