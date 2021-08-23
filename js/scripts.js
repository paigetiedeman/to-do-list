// Business Logic for TaskList
function TaskList () {
  this.tasks = {};
}

TaskList.prototype.addTask = function(task) {
  this.tasks[task.item] = task;
};

// Business Logic for Tasks

function Task(item, ranking) {
  this.item = item;
  this.ranking = ranking;
}

Task.prototype.listItem = function() {
  return this.item + " " + this.ranking;
};

// User Interface Logic