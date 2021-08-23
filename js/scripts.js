// Business Logic for TaskList
function TaskList() {
  this.tasks = {};
  this.taskId = 0;
}

TaskList.prototype.addTask = function (task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

TaskList.prototype.assignId = function () {
  this.taskId += 1;
  return this.taskId;
};

TaskList.prototype.findTask = function (id) {
  if (this.tasks[id] != undefined) {
    return this.tasks[id];
  }
  return false;
};

TaskList.prototype.deleteTask = function (id) {
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

Task.prototype.listItem = function () {
  return this.item + " " + this.ranking;
};

// User Interface Logic
let taskList = new TaskList();

function displayTaskList(taskListToDisplay) {
  let listItems = $("ul#tasks");
  let htmlForListInfo = "";
  Object.keys(taskListToDisplay.tasks).forEach(function (key) {
    const task = taskListToDisplay.findTask(key);
    htmlForListInfo +=
      "<li id=" + task.id + ">" + task.item + ": " + task.ranking + "</li>";
  });
  listItems.html(htmlForListInfo);
}

function showTask(taskId) {
  const task = taskList.findTask(taskId);
  $("#show-list").show();
  $(".list-item").html(task.item);
  $(".numeric-ranking").html(task.ranking);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append(
    "<button class='deleteButton' id=" + + task.id + ">Delete</button>"
  );
}

function attachTaskListeners() {
  $("ul#tasks").on("click", "li", function () {
    showTask(this.id);
  });
  $("buttons").on("click", ".deleteButton", function () {
    taskList.deleteTask(this.id);
    $("#show-list").hide();
    displayTaskList(taskList);
  });
}

$(document).ready(function () {
  attachTaskListeners();
  $("form#new-list").submit(function (event) {
    event.preventDefault();
    const inputtedListItem = $("input#new-list-item").val();
    const inputtedRanking = $("input#new-ranking").val();
    $("input#new-list-item").val("");
    $("input#new-ranking").val("");
    let newTask = new Task(inputtedListItem, inputtedRanking);
    taskList.addTask(newTask);
    displayTaskList(taskList);
  });
});
