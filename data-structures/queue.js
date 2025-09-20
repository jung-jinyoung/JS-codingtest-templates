// 큐(Queue) 자료구조 구현 (FIFO - First In First Out)
// 배열로 구현할 수도 있지만, shift() 메서드가 O(n) 시간이 걸리므로 객체로 구현

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  // 데이터 삽입 (뒤에 추가))
  enqueue(item) {
    this.items[this.tail++] = item;
  }

  // 데이터 삭제 (앞에서 꺼내기)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.head === this.tail;
  }

  // 큐 크기 확인
  size() {
    return this.tail - this.head;
  }
  // 맨 앞 데이터 확인
  front() {
    return this.items[this.head];
  }

  //큐 초기화
  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}
