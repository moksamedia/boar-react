import {SAVE_NEW_SPEECH} from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import dateHelper from '../businessLogic/dateHelper';

const initialState = {
    dateModified: null
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function boarAppState(state = initialState, action) {
	switch (action.type) {
		case SAVE_NEW_SPEECH:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
			return objectAssign({}, state, { dateModified: dateHelper.getFormattedDateTime(new Date()) });

		default:
			return state;
	}
}
