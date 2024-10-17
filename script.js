(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });
  //2_1.2

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        answer.innerHTML = "";
        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");

          const titleElement = document.createElement("h2");
          titleElement.textContent = post.title;
          postElement.appendChild(titleElement);

          const bodyElement = document.createElement("p");
          bodyElement.textContent = post.body;
          postElement.appendChild(bodyElement);

          answer.appendChild(postElement);
        });
      })
      .catch((error) => console.error("Error fetching posts:", error));
  });

  /*
  // 2_1.3
  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        answer.innerHTML = `Wyświetlono post o ID = ${post.id}`;

        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);

        const bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;
        postElement.appendChild(bodyElement);

        answer.appendChild(postElement);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        answer.innerHTML = "Error loading post.";
      });
  });
*/
  //2_1.4
  /*cw1.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((post) => {
        answer.innerHTML = `Dodano nowy post o ID = ${post.id}`;
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        answer.innerHTML = "Error creating post.";
      });
  });*/

  cw2.addEventListener("click", function () {
    //TODO
  });
  cw3.addEventListener("click", function () {
    //TODO
  });
})();
