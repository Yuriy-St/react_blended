import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/reducers';

export const Todo = ({ text, id }) => {
  const dispatch = useDispatch();

  return (
    <TodoWrapper>
      <Text>{text}</Text>
      <DeleteButton onClick={() => dispatch(deleteTodo({ id }))}>
        <RiDeleteBinLine />
      </DeleteButton>
      <EditButton>
        <RiEdit2Line />
      </EditButton>
    </TodoWrapper>
  );
};
