// * Action Value: action을 변수 형태인 상수로 만듦 (휴먼 에러 방지)
const PLUS_NUMBER = 'counter/ADD_NUMBER';
const MINUS_NUMBER = 'counter/MINUS_NUMBER';

// * Action Creator: action의 value(type)을 return하도록 함수로 선언
export const plusNumber = (payload) => {
  return {
    type: PLUS_NUMBER,
    payload,
  }
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  }
}

// * 초기 상태값 설정
const initialState = {
  number: 0,
};

// * Reducer: 변화를 일으키는 함수
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      }
    default:
      return state;
  }
};

export default counter;