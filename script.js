function addTask() {

    let task = document.getElementById("task").value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}