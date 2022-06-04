console.log(typeof tasks);
const tasksList = JSON.parse(tasks);
console.log(typeof tasksList)
const content = document.querySelector(".content");

function printCards(warningMeasure) {
    content.innerHTML = "";
    for (let tasks of warningMeasure) {
        if (tasks.priority <= 1) {
            color = "bg-success";
        } else if (tasks.priority <= 3) {
            color = "bg-warning";
        } else {
            color = "bg-danger";
        }
        content.innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12 mb-4">
    <div class="card mb-5 bg-body rounded p-3">
    <div class="task-icons pb-1 ">
    <div class="d-flex justify-content-between"><button class="btn btn-info" type="submit" style="color:white; padding:0 5%; margin: 0 0 2% 0; font-size: 1rem;">Task</button>
    <div>
        <i class="fa-solid fa-bookmark"></i>&nbsp;
        <i class="fa-solid fa-ellipsis-vertical"></i> </div></div>
    </div>
    <img src="${tasks.image}" class="card-img-top" alt="...">
    <div class="card-body" >
    <h5 class="card-title text-center">${tasks.title}</h5>
    <p class="card-text text-center">${tasks.description}</p>
    </div>
    <hr>
    <div class="d-flex justify-content-start">
    <i class="fa-solid fa-triangle-exclamation press-on p-1 mt-0"></i> Priority Level:<p class="mx-1 px-2 ${color} rounded new"> ${tasks.priority}</p></div>
    <p><i class="fa-solid fa-calendar-days"></i> Deadline: ${tasks.deadline}</p>
  
    <hr>
    <div class="card-btn d-flex justify-content-end">
    <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can justify-content-end"></i> Delete</button>
    <button type="button" class="btn btn-success"><i class="fa-solid fa-circle-check justify-content-end"></i> Done</button></div>
    </div>
    </div>
    `;
    }
    priorityIncreaseButton();
}

function priorityIncreaseButton() {
    let priorityIncrease = document.getElementsByClassName("press-on");
    for (let i = 0; i < priorityIncrease.length; i++) {
        priorityIncrease[i].addEventListener("click", function () {
            tasksList[i].priority++;
            document.getElementsByClassName("new")[i].innerHTML = tasksList[i].priority;
            var red = tasksList.slice((a, b) => b.priority - a.priority);
            printCards(red);
        });
    }
}
printCards(tasksList);
priorityIncreaseButton();

function prioritySort() {
    tasksList.sort(function (min, max) {
        return max.priority - min.priority;
    })
}
document.querySelector(".sorting").addEventListener("click", function () {
    prioritySort();
    printCards(tasksList);
});