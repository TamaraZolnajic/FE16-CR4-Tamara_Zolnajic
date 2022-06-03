/*const cardContents = JSON.parse(cards);
const content = document.querySelector(".content");

function andrea(ime) {
    content.innerHTML = "";
    for (let cards of ime) {
        if (cards.priority <= 1) {
            color = "bg-success";
        } else if (cards.importance <= 3) {
            color = "bg-warning";
        } else {
            color = "bg-danger";
        }
        content.innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12 g-4">
    <div class="card h-100" style="width: 18rem;">
    <div class="card-header">
    <button type="button" class="btn btn-info">Task</button>
    <div class="icons justify-content-end">
        <i class="fa-solid fa-bookmark"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i></div>
</div>
  <img src="${cards.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cards.taskName}</h5>
    <p class="card-text">${cards.description}</p>
  </div>
  <hr>
  <div class="card-footer">
  <i class="fa-solid fa-triangle-exclamation druck"></i> Priority Level:<p class="mx-1 px-2 ${color} rounded neew"> ${cards.importance}</p>
  <p><i class="fa-solid fa-calendar-days"></i> Deadline: ${cards.deadline}</p>
  <hr>
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can justify-content-end"></i> Delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-circle-check justify-content-end"></i> Done</button>
</div>
</div>
</div>
    `;
    }
    work();
}

function work() {
    let nesto = document.getElementsByClassName("druck");
    for (let i = 0; i < nesto.length; i++) {
        nesto[i].addEventListener("click", function() {
            cardContents[i].importance++;
            document.getElementsByClassName("neew")[i].innerHTML = cardContents[i].importance;
            var red = cardContents.slice((a, b) => b.importance - a.importance);
            andrea(red);
        });
    }
}
andrea(cardContents);
work();

function sortfun() {
    cardContents.sort(function(min, max) {
        return max.importance - min.importance;
    })
}
document.querySelector(".sorting").addEventListener("click", function() {
    sortfun();
    andrea(cardContents);
});*/





const tasksList = JSON.parse(tasks);
const content = document.querySelector(".content");

function printCards(warningMeasure) {
    content.innerHTML = "";
    for (let cards of warningMeasure) {
        if (cards.priority <= 1) {
            color = "bg-success";
        } else if (cards.priority <= 3) {
            color = "bg-warning";
        } else {
            color = "bg-danger";
        }
        content.innerHTML += `
    <div class="col-lg-4 col-sm-6 col-xs-12 g-4">
    <div class="card  shadow mb-5 bg-body rounded">
        <div class="card-header">
        <button class="btn btn-info" type="submit" style="color:white;">Task</button>
    <div class="icons justify-content-end">
        <i class="fa-solid fa-bookmark"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i></div>
</div>
  <img src="${tasks.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${tasks.title}</h5>
    <p class="card-text">${tasks.description}</p>
  </div>
  <hr>
  <div class="card-footer">
  <i class="fa-solid fa-triangle-exclamation druck"></i> Priority Level:<p class="mx-1 px-2 ${color} rounded neew"> ${cards.priority}</p>
  <p><i class="fa-solid fa-calendar-days"></i> Deadline: ${tasks.deadline}</p>
  <hr>
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can justify-content-end"></i> Delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-circle-check justify-content-end"></i> Done</button>
</div>
</div>
</div>
    `;
    }
    work();
}

function work() {
    let nesto = document.getElementsByClassName("druck");
    for (let i = 0; i < nesto.length; i++) {
        nesto[i].addEventListener("click", function() {
            tasksList[i].priority++;
            document.getElementsByClassName("neew")[i].innerHTML = tasksList[i].priority;
            var red = tasksList.slice((a, b) => b.priority - a.priority);
            printCards(red);
        });
    }
}
printCards(tasksList);
work();

function sortfun() {
    tasksList.sort(function(min, max) {
        return max.priority - min.priority;
    })
}
;