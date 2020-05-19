import {
    SAVE_MESSAGE,
} from './types';

//dataToSubmit 에 conversation이 들어감.
export function saveMessage(dataToSubmit) {
   
    return {
        type: SAVE_MESSAGE,
        payload: dataToSubmit
    }
}
