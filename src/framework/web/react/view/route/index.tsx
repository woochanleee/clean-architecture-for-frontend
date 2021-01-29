import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from '../page/home';

import { useController } from '../../main/controller';

export default () => {
  const { userController } = useController();

  useEffect(() => {
    userController.loadStorageToken();
  }, []);

  return (
    <BrowserRouter>
      <Route path='/' exact component={HomePage} />
    </BrowserRouter>
  );
}
