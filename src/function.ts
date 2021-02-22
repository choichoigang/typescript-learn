function buildName(firstName: string, ...restOfName: string[]) {
  console.log(restOfName);
  return firstName + " " + restOfName.join(" ");
}

// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

function foo(x: boolean): number;
function foo(x: boolean): string;

function foo(x: boolean): any {
  if (x) return 1;
  if (!x) return "1";
}
