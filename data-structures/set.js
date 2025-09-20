// Set 자료 구조
// 중복 없는 집합 자료 구조 -> 삽입/삭제/탐색 O(1)

// 가장 많이 사용되는 "방문 여부 체크" 구현

function checkVisited(arr) {
  const set = new Set();
  for (let x of arr) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
}
