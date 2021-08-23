// Business Logic for TaskList
function TaskList () {
  this.tasks = {};
  this.currentId = 0;
}

TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
}

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TaskList.prototype.findTask = function(id) {
  if (this.tasks[id] != undefined) {
    return this.tasks[id];
  } 
  return false;
}

TaskList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
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