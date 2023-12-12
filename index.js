document.querySelector("#getOne").addEventListener("click", getOne)

document.querySelector("#getAll").addEventListener("click", getAll)
function getAll() {
    let url = "https://jsonplaceholder.typicode.com/posts"
    let xhr = new XMLHttpRequest()

    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status === 200) {
            let posts = JSON.parse(this.responseText);

            let html = ""

            posts.forEach(post => {
                html += `
                <div class="card mb-4">
                <div class="card-header">
                id: ${post.id}
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                   title: <p>${post.title}</p>
                  body:
                    <p>${post.body}</p>
                  </blockquote>
                </div>
              </div>
                `
            });

            document.querySelector("#melumatlar").innerHTML = html
        }
    }
    xhr.send()
}
function getOne() {
    let id = document.getElementById("postid").value;
    let url = "https://jsonplaceholder.typicode.com/posts/" + id

    let xhr = new XMLHttpRequest()

    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status === 200) {
            let post = JSON.parse(this.responseText);

            let html = ""
            html += `
                <div class="card mb-4">
                <div class="card-header">
                id: ${post.id}
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                   title: <p>${post.title}</p>
                  body:
                    <p>${post.body}</p>
                  </blockquote>
                </div>
              </div>
                `
            document.querySelector("#melumatlar").innerHTML = html
        }
    }
    xhr.send()
}