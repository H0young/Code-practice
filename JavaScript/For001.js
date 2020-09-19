// 완주하지 못한 선수 (2020.09.16.)
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
