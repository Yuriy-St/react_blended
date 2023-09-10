import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from 'redux/reducers';

export const Todo = ({ text, id }) => {
  const dispatch = useDispatch();
const handleClick= ()=> {
  const newText = prompt('Input your text');
  if(!newText) return;
  dispatch(editTodo({text:newText,id}))
}
  return (
    <TodoWrapper>
      <Text>{text}</Text>
      <DeleteButton onClick={() => dispatch(deleteTodo({ id }))}>
        <RiDeleteBinLine />
      </DeleteButton>
      <EditButton onClick={handleClick}>
        <RiEdit2Line />
      </EditButton>
    </TodoWrapper>
  );
};
