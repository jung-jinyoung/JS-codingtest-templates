// 다익스트라 알고리즘
// 가중치가 있는 그래프에서 최단거리를 찾는 알고리즘
// 우선순위 큐로 가장 짧은 경로부터 탐색

class PrioirityQueue {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i) {
    return i * 2 + 1;
  }
  getRight(i) {
    return i * 2 + 2;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 큐에 데이터 삽입
  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.bubbleUp();
  }

  // 삽입 후 우선순위에 따라 위로 올리며 정렬
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = this.getParent(index);
      if (this.heap[parent].priority <= this.heap[index].priority) {
        break;
      }
      this.swap(parent, index);
      index = parent;
    }
  }

  // 우선순위가 가장 높은(숫자가 가장 낮은) 데이터 꺼내기
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bublleDown();
    return root;
  }

  // 루트 원소를 아래로 내리며 정렬
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let left = this.getLeft(index);
      let right = this.getRight(index);
      let highest = index; // 우선순위가 가장 높은(숫자가 가장 낮은) 원소의 인덱스

      if (
        left < length &&
        this.heap[left].priority < this.heap[highest].priority
      ) {
        highest = left;
      }
      if (
        right < length &&
        this.heap[right].priority < this.heap[highest].priority
      ) {
        highest = right;
      }
      if (highest === index) break;
      this.swap(index, highest);
      index = highest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(graph, start) {
  const dist = {};
  const pq = new PrioirityQueue();

  // 거리 초기화
  for (let node in graph) {
    dist[node] = Infinity;
  }
  dist[start] = 0;
  // 시작 노드 삽입 (거리 = 0)
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { val: currentNode, priority: currentDist } = pq.dequeue();
    if (currentDist > dist[currentNode]) continue; // 이미 더 짧은 경로가 있으면 무시

    for (let [next, weight] of graph[currentNode]) {
      const newDist = currentDist + weight;
      if (newDist < dist[next]) {
        dist[next] = newDist;
        pq.enqueue(next, newDist);
      }
    }
  }

  return dist;
}
