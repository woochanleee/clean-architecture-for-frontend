import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useController } from '../../../main/controller';
import { useAuth, useTodo } from '../../container';

// export default () => { // if 'IS_REDUX_MODE' is 'true' -> uncomment
export default observer(() => { // else -> uncomment
  const { todoController } = useController();

  const { login } = useAuth();
  const { getTodos } = useTodo();

  useEffect(() => {
    if (login.response?.data?.accessToken && !getTodos.loading && !getTodos.response?.data?.todos) {
      todoController.getTodos();
    }
  }, [login]);

  return (
    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black' }}>글쓴이</th>
          <th style={{ border: '1px solid black' }}>내용</th>
          <th style={{ border: '1px solid black' }}>마감일</th>
        </tr>
      </thead>
      <tbody>
        {login.response?.data?.accessToken &&
          getTodos.response?.data?.todos.map(({ id, author, content, deadline, isLate }) => (
            <Item key={id} {...{ author, content, deadline, isLate }} />
          ))}
      </tbody>
    </table>
  );
// } // if 'IS_REDUX_MODE' is 'true' -> uncomment
}); // else -> uncomment

interface ItemProps {
  author: string;
  content: string;
  deadline: string;
  isLate: boolean;
}

const Item: FC<ItemProps> = ({ author, content, deadline, isLate }) => {
  return (
    <tr style={{ backgroundColor: isLate ? 'yellow' : 'transparent' }}>
      <td style={{ border: '1px solid black' }}>{author}</td>
      <td style={{ border: '1px solid black' }}>{content}</td>
      <td style={{ border: '1px solid black' }}>{deadline}</td>
    </tr>
  );
};
