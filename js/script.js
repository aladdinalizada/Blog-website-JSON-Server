const BlogApi = "  http://localhost:8000/blogs  ";

const fetchBlog = async () => {
  let response = await fetch(`${BlogApi}`);
  let data = await response.json();
  return data;
};
fetchBlog();

let blogs = document.querySelector(".blogs");
fetchBlog().then((data) => {
  data.forEach((elem) => {
    blogs.innerHTML += `
    <div class="blog">
            <h2>${elem.title}</h2>
            <p>${elem.content}</p>
            <p>written by ${elem.author}</p>
            <button id="${elem.id}">Delete</button>
          </div>
    `;
  });
});
// const renderBlogs = async () => {
//   let blogs = await fetchBlog();
//   let blogHtml = blogs.map((blog) => {
//     return `
//       <div class="blog">
//         <h2>${blog.title}</h2>
//         <p>${blog.content}</p>
//         <p>${blog.author}</p>
//       </div>
//     `;
//   });
//   blogsArea.innerHTML = blogHtml.join("");
// };
