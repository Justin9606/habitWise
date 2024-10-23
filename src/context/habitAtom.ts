import {atom} from 'recoil';
import {Habit} from 'types/index';

// Define the Habit type

// Use Habit[] as the atom's type
export const habitState = atom<Habit[]>({
  key: 'habitState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (initial state)
});
