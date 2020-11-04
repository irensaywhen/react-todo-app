import './App.css';
import React from 'react';
import ToDoItem from './components/ToDoItem';
import data from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: data,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    return (
      <section className='toDos'>
        {this.state.todos.map(toDoData => (
          <ToDoItem
            key={toDoData.id}
            {...toDoData}
            handleChange={this.handleChange}
          />
        ))}
      </section>
    );
  }
}

export default App;
