// 두 개 뽑아서 더하기 (2020.09.19.)
// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  var answer = [];

  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] + numbers[j]);
        var answerSet = [...new Set(answer)];
        var answerSort = answerSet.sort((a, b) => a - b);
        // answer = [...new Set(answer)].sort((a,b)=>a-b)
      }
    }
  }
  return answerSort;
}
