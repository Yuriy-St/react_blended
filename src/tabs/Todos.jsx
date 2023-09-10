import { Grid, GridItem, AddTodoForm, EditForm, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';

export const Todos = () => {
  const todos = useSelector(getTodos);

  return (
    <>
      <AddTodoForm></AddTodoForm>
      {todos.length > 0 && (
        <Grid>
          {todos.map(({ text, id }) => (
            <GridItem key={id}>
              <Todo text={text} id={id} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
