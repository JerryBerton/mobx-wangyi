import TodoStore from 'stores/todos';
import mv from 'stores/mv';
import recommend from 'stores/recommend'
import song from 'stores/song'
// const song = new Song();
const todoStore = new TodoStore();
export default {
  todoStore,
  mv,
  recommend,
  song
}
