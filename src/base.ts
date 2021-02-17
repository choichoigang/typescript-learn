// string type
let message: string = "hello world";

// number type
let number: number = 10;

// bool type
let bool: boolean = true;

// array type
let numbers: number[] = [1, 2, 3];
let messages: string[] = ["a", "b", "c"];

// object type

// interface를 통한 타입 추론

interface UserInfo {
  id: number;
  address: string;
  name: string;
  age: number;
}

const user: UserInfo = {
  id: 1,
  address: "경기도 고양시",
  name: "hoi",
  age: 27,
};

// Classes를 통한 클래스 선언

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// interface를 통한 매개변수 표현과 리턴값 명시

interface ApprovalResult {
  result: string;
  time: string;
}

function getUserData(approvalResult: ApprovalResult) {
  console.log(approvalResult);
}

function AccessServer(): ApprovalResult {
  return {
    result: "true",
    time: "Thu Feb 18 2021 00:11:42 GMT+0900",
  };
}

// Unions type

type IsOpen = true | false;

// Generics type

type Colors = Array<string>;

// interface와 Generics를 같이 활용하는 방법
type Users = Array<UserInfo>;

const palette: Colors = ["#181818"];

const activeUsers: Users = [
  {
    id: 1,
    address: "경기도 고양시",
    name: "hoi",
    age: 27,
  },
];
