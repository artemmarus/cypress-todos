import Base from "./base";

class TodoPage extends Base {

    activeTaskButton: string;
    clearCompletedButton: string;
    completeTaskInput: string;
    completedTasksButton: string;
    deleteTodoButton: string;
    inputCreteTask: string;
    listOfTasks: string;
    taskCounter: string;
    taskContainer: string;
    taskItem: string;

    constructor() {
        super();
        this.activeTaskButton = 'a:contains("Active")';
        this.clearCompletedButton = '.clear-completed';
        this.completeTaskInput = 'input.toggle';
        this.completedTasksButton = 'a:contains("Completed")';
        this.deleteTodoButton = '.destroy';
        this.inputCreteTask = '.new-todo';
        this.listOfTasks = '.todo-list';
        this.taskCounter = '.todo-count';
        this.taskContainer = this.listOfTasks + ' div.view';
        this.taskItem = this.listOfTasks + ' li';
    }

    createNewTask(taskName: string) {
        cy.get('h1').should('be.visible').and('contain.text', 'todos');
        cy.get(this.inputCreteTask).type(taskName + '{enter}');
        return this;
    }

    verifyTaskExists(taskName: string, exists: boolean = true) {
        cy.contains(this.taskItem, taskName).should(exists ? 'be.visible' : 'not.exist');
        return this;
    }

    deleteTask(taskName: string) {
        cy.contains(this.taskItem, taskName).find(this.deleteTodoButton).invoke('show').should('be.visible').click();
        return this;
    }

    verifyTasksLeft(numberOfTasks: number) {
        cy.get(this.taskCounter).should('be.visible').and('contain.text', numberOfTasks);
    }

    completeTask(taskName: string) {
        cy.contains(this.taskItem, taskName).find(this.completeTaskInput).click();
        return this;
    }

    verifyTaskCompleted(taskName: string) {
        cy.contains(this.taskItem, taskName).should('have.attr', 'class', 'completed');
        return this;
    }

    showCompletedTasks() {
        cy.get(this.completedTasksButton).should('be.visible').click();
        return this;
    }

    clearCompletedTasks() {
        cy.get(this.clearCompletedButton).should('be.visible').click();
    }

    showActiveTasks() {
        cy.get(this.activeTaskButton).should('be.visible').click();
        return this;
    }
}

export default TodoPage