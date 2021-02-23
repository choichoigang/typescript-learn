# Union type

함수의 인자 타입은 때로는 2가지 그리고 그 이상의 인사를 허용하기를 기대하는 경우가 있습니다.<br/>
어떤 타입이든 허용하는 any를 사용할수도 있겠지만 docs에서는 전통적인 객체지향 코드에서, 타입의 계층을 생성하여 두 타입을 추상하는 방법을 제시하곤 합니다.<br/>
하지만 허용하는 두 타입이 간단한 원시 타입이라면 유니언 타입 표기법을 사용하여 더욱 간결하게 표현할 수 있습니다.

### 공동 필드를 갖는 유니언

유니언 타입인 값이 있고 유니언들이 형태를 표현하는 인터페이스라면 공동된 타입에만 접근이 가능합니다.<br/>
문서의 예시를 보도록 하겠습니다.

```jsx
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
// 두 유니언 타입이 모두 가지고있는 layEggs에는 접근이 가능합니다.
pet.layEggs();

// 하지만 개별적으로 존재하는 메서드에 접근하려고 한다면 둘중에 어떤 타입인지 불분명하기 떄문에 typescript는 error를 return 합니다.
pet.swim();
pet.fly();
```

### 유니언 구별하기

문서에서는 다양한 유니언을 사용할 때 위와같은 문제를 피하기 위해서는 어떤 유니언 타입을 지칭하는지 분류하는 리터럴 타입을 선언해주기를 권하고 있습니다.<br/>

위의 예시를 통해서 유니언의 구별자를 활용해 보도록 하겠습니다.

```jsx
interface Bird {
  name: "Bird";
  fly(): void;
}

interface Fish {
  name: "Fish";
  swim(): void;
}

type AnimalType = Bird | Fish;

function getSmallPet(arg: AnimalType): string {
  if (arg.name === "Bird") {
    arg.fly();
  } else {
    arg.swim();
  }

  return arg.name;
}
```

### 교차 타입

교차 타입은 유니언과 밀접한 관련이 있지만 사용 방법은 다르다고 말하고 있습니다.<br/>
쉽게 말해서 유니언은 a 또는 b 이지만 교차는 a 와 b 즉 a,b가 모두 합쳐진 타입의 형태를 가집니다.

```jsx
interface Error {
  message: string;
}

interface fetchFailure {
  status: number;
  error: Error;
}

interface fetchSuccess {
  data: string;
}
// fetchSuccess와 fetchFailure를 교차하여 보유한 교차 타입입니다. 두 타입은 다른 형태를 지니고 있으며 이를 통해서 어떤 ServerResponse를 받았는지 파악할 수 있습니다.
type ServerResponse = fetchSuccess & fetchFailure;

function handleResponse(response: ServerResponse): string {
  if (response.error) {
    console.log(response.error.message);
  }

  return response.data;
}
```
