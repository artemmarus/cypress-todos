import TodoPage from "../support/pages/todo";

describe('Todo Page', () => {
  const taskName = 'Task in Todo List';
  const completedTaskName = 'Completed task'
  const todoPage = new TodoPage();

  beforeEach( function () {
    cy.visit('/');
  })

  it('should be able to add new task', function () {
    todoPage.createNewTask(taskName)
      .verifyTaskExists(taskName)
      .verifyTasksLeft(1);
  });

  it('should be able to add task and mark as completed', function () {
    todoPage.createNewTask(taskName)
      .verifyTaskExists(taskName)
      .verifyTasksLeft(1);

    cy.shouldNotExist(todoPage.clearCompletedButton);

    todoPage.completeTask(taskName)
      .verifyTaskCompleted(taskName)
      .verifyTasksLeft(0)

    todoPage.showCompletedTasks()
      .verifyTaskExists(taskName)
      .clearCompletedTasks();
  });

  it('should be able to add and delete task from TODO list', function () {
    todoPage.createNewTask(taskName)
      .verifyTaskExists(taskName)
      .deleteTask(taskName)
      .verifyTaskExists(taskName, false);
  });

  it('should be able to create tasks and filter them', function () {
    todoPage.createNewTask(taskName)
      .verifyTaskExists(taskName);

    todoPage.createNewTask(completedTaskName)
      .verifyTaskExists(completedTaskName);

    todoPage.verifyTasksLeft(2);
    todoPage.completeTask(completedTaskName)

    todoPage.showActiveTasks()
     .verifyTaskExists(taskName);

    todoPage.showCompletedTasks()
      .verifyTaskExists(completedTaskName);
  });
})