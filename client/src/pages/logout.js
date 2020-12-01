import { useRecoilValue } from 'recoil';
import { personState, lenPersonState } from '../store';
export default function logout() {
  const personObj = useRecoilValue(personState);
  const lenuser = useRecoilValue(lenPersonState);
  return (
    <div>
      User : {personObj.user}
      <br />
      Len User : {lenuser}
    </div>
  );
}
