// 최소 힙
// 완전 이진 트리 기반 자료 구조로 항상 부모 노드가 자식 노드보다 작거나 같은 특징
// 우선순위 큐 구현에 자주 사용됨
// 삽입, 삭제, 탐색 연산이 O(log n)의 시간 복잡도를 가짐

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모, 자식 인덱스 계산
  getParent(i) {
    return Math.floor(i - 1) / 2;
  }
  getLeft(i) {
    return i * 2 + 1;
  }
  getRight(i) {
    return i * 2 + 2;
  }

  // 두 원소 교환
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 값 삽입
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  // 새로운 원소 삽입 후 위로 올리며 정렬
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.getParent(index);
      if (this.heap[parent] <= this.heap[index]) {
        break;
      }
      this.swap(parent, index);
      index = parent;
    }
  }

  // 최솟값 꺼내기
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0]; // 최솟값
    this.heap[0] = this.heap.pop(); // 마지막 원소를 루트로 이동
    this.bubbleDown(); // 아래로 내리며 정렬
    return root;
  }

  // 루트 원소를 아래로 내리며 정렬
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const left = this.getLeft(index);
      const right = this.getRight(index);
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === index) break; // 더 이상 내릴 곳이 없으면 종료
      this.swap(index, smallest);
      index = smallest;
    }
  }
}
