import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

import {useController} from '../../../main/controller';
import { useAuthRedux, useTodoRedux } from '../../container/redux';

export default () => {
  const { todoController } = useController();

  const { login } = useAuthRedux();
  const { getTodos } = useTodoRedux();

  useEffect(() => {
    if (
      login.response?.data?.accessToken &&
      !getTodos.loading &&
      !getTodos.response?.data?.todos
    ) {
      todoController.getTodos();
    }
  }, [login]);

  return (
    <View style={styles.todoListContainer}>
      <Item author="글쓴이" content="내용" deadline="마감일" isLate={false} />
      {login.response?.data?.accessToken &&
        getTodos.response?.data?.todos.map(
          ({id, author, content, deadline, isLate}) => (
            <Item key={id} {...{author, content, deadline, isLate}} />
          )
        )}
    </View>
  );
};

interface ItemProps {
  author: string;
  content: string;
  deadline: string;
  isLate: boolean;
}

function Item(props: ItemProps) {
  return (
    <View style={todoItemContainerStyle(props.isLate)}>
      <Text style={styles.columnText}>{props.author}</Text>
      <Text style={styles.columnText}>{props.content}</Text>
      <Text style={styles.columnText}>{props.deadline}</Text>
    </View>
  );
}

const todoItemContainerStyle = (isLate: boolean) => ({
  flex: 1,
  alignSelf: 'stretch',
  flexDirection: 'row',
  backgroundColor: isLate ? 'yellow' : 'transparent',
});

const styles = StyleSheet.create({
  todoListContainer: {
    paddingVertical: 24,
  },
  columnText: {
    textAlign: 'center',
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
  },
});
