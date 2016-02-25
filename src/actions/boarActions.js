import * as types from '../constants/ActionTypes';

export function saveNewSpeech(newSpeech) {
	return { type: types.SAVE_NEW_SPEECH, newSpeech };
}
