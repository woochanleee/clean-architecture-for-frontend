import React, { useState, ChangeEvent } from 'react';

import { useController } from '../../../main/controller';

import { observer } from 'mobx-react';
import { useAuth } from '../../container';

// export default function () { // if 'IS_REDUX_MODE' is 'true' -> uncomment
export default observer(() => { // else -> uncomment
  const { userController } = useController();
  
  const { login } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const setState = e.target.name === 'email' ? setEmail : setPassword;
    setState(e.target.value);
  }

  function onClickLogin() {
    userController.login(email, password);
  }
  
  return (
    <div>
      <input name='email' placeholder='email' type='email' value={email} onChange={onChangeInput} />
      <input name='password' placeholder='password' type='password' value={password} onChange={onChangeInput} />
      <input type='button' value='로그인' onClick={onClickLogin} />
      {login.loading ? 'true' : 'false'}
      {JSON.stringify(login.response)}
    </div>
  );
// } // if 'IS_REDUX_MODE' is 'true' -> uncomment
}); // else -> uncomment