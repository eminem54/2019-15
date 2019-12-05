const maxPeopleNum = {
  '3명': 3,
  '6명': 6,
  '12명': 12,
  '100명': 100,
  비밀방: 100,
};

const roomState = {
  EMPTY: 0,
  WAITING: 1,
  SELECTING_WORD: 2,
  PLAYING_QUESTION: 3,
  END_GAME: 4,
};

module.exports = { maxPeopleNum, roomState };
