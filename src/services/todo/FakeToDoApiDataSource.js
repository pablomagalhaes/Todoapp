import toDosFakeResponse from "./todos.json";
import ToDoConverter from "./ToDoConverter";

class FakeToDoApiDataSource {

  getToDos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ToDo = new ToDoConverter().mapperResponsesToEntities(
          ToDoFakeResponse
        );

        resolve(ToDo);
      }, 2000);
    });
  }

  createToDo(todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        new ToDoConverter().mapperEntityToRequest(todo);

        resolve(todo);
      }, 2000);
    });
  }

  removeToDo(todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        new ToDoConverter().mapperEntityToRequest(todo);

        resolve(todo);
      }, 2000);
    });
  }


}

export default FakeToDoApiDataSource;
