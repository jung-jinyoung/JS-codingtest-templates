// 해시맵
// key - value 저장 구조 -> O(1) 평균 시간 복잡도로 탐색/삽입/삭제 가능
// Map 객체를 사용

// 가장 많이 사용되는 "빈도수 세기" 구현

function countFrequency(arr) {
  const map = new Map();
  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  return map;
}
