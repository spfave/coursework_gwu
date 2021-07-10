import { ADD_STUDENT, REMOVE_STUDENT } from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudent = { ...action.payload };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        // spread state.cars to make copy of students for modification
        // filter method returns new array so not necessary
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
