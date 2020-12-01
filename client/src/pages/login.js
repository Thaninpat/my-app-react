import { useRecoilState } from 'recoil';
import { personState } from '../store';
import Logout from './logout';
export default function login() {
  const [userObj, setUserObj] = useRecoilState(personState);
  function changeHandler(event) {
    setUserObj({
      ...dataHook,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div>
      <p>Enter your Username:</p>
      <input type='user' name='user' onChange={changeHandler} />
      <p>Enter your Password:</p>
      <input type='password' name='pass' onChange={changeHandler} />
      <Logout />
    </div>
  );
}
