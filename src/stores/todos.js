import { observable, computed, action} from 'mobx';

export default class TodoStore {
  @observable todos = [];
  @computed get todosCount() {
    return this.todos.length;
  }
  @computed get todosDisabledCount() {
    return this.todos.filter(d => d.switch === true).length;
  }
  @action addTodo(title) {
    this.todos.push({ title, switch: false });
  }
  @action deleteTodo(index) {
    this.todos.splice(index, 1);
  }
  @action switchTodo(disabled, index) {
    this.todos[index].disabled = disabled;
  }
}
