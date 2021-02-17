// <T> 부분은 유동적으로 type을 주입할 수 있다. 인터페이스도 물론 가능하다.
function idenrity<T>(arg: T): T {
  return arg;
}

type Arr = Array<number>;

const result = idenrity<Arr>([22, 33, 44]);

// <T>를 전달하지 않으면 타입을 추론해 주기도 한다. (타입 인수 추론)
// 코드를 간결하게 유지하는데 있어서 유용 , 하지만 복잡한 상태를 가질땐 뭐가 더 좋을지 고민이 필요할 듯
// const result_2 = idenrity(22);
