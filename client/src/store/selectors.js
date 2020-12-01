import { selector } from 'recoil';
import { personState } from './atoms';
export const lenPersonState = selector({
  key: 'lenPersonState',
  get: ({ get }) => {
    const personObj = get(personState);
    return personObj.user.length;
  },
});
