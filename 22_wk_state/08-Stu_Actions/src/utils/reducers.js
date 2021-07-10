import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';

// TODO: Add a comment explaining what a reducer is
/* Reduce is a pure function that takes the current state and an action to take on the 
   state to modify it */
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = state.students[state.students.length - 1].id + 1;

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index
      /* Use the JS findIndex array method to search the array for the first array
         item that satisfies the callback function.
      */
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
      /* Makes a copy of student object found at the studentIndex for modification. 
         Copied student has all student fields, payload my only have a subset of fields
      */
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // Returns state with majors array updated to include an additional new major value
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // Returns state with the majors array filtered to remove a major value
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
