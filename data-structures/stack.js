// 스택(Stack) 자료구조 구현
// 후입선출(LIFO, Last In First Out) 구조

class Stack {
  constructor() {
    this.items = [];
  }

  // 데이터 삽입
  push(item) {
    this.items.push(item);
  }

  // 데이터 삭제
  pop() {
    return this.items.pop();
  }

  // 스택 최상단 데이터 확인
  peek() {
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택 크기 확인
  size() {
    return this.items.length;
  }

  // 스택 초기화
  clear() {
    this.items = [];
  }
}
