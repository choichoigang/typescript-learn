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

interface Gift {
  cake: string;
  candle: number;
  ribbon?: string;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): void {
  // ...
}

let mySquare = createSquare({ colour: "red", width: 100 });

interface Person {
  name?: string;
}

const printArg = (arg: Person): void => {
  // ...
};

printArg({
  name: "hoi",
  age: 22,
});
