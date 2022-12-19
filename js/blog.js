const BlogApi = " http://localhost:8000/blogs";

const fetchBlogApi = async () => {
  let response = await fetch(`${BlogApi}`);
  let data = await response.json();
  console.log(data);
  return data;
};
fetchBlogApi();

let addBtn = document.getElementById("addBtn");
let title = document.getElementById("title");
let content = document.getElementById("content");
let author = document.getElementById("author");

addBtn.addEventListener("click", () => {
  const Blog = {
    title: title.value,
    content: content.value,
    author: author.value,
  };
  const createBlog = async () => {
    let response = await fetch(`${BlogApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Blog),
    });
    let data = await response.json();
    console.log(data);
  };
  createBlog();
});
