import { atom } from 'recoil';
export const personState = atom({
  key: 'personState',
  default: {
    user: '1234',
    pass: '5678',
  },
});
