const articleSection = document.querySelector('.article__container');

const posts = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    return response.json()
  })
  .then(json => {
    const posts = json.map((obj, i) => {
      if (i % 2) {
        return`<article class="card">
        <div>
          <header>
            <span class="card__tag--green">Design</span>
            <h2 class="card__header --design">${obj.title}</h2>
            <span class="card__date">Nov 11</span>
          </header>
          <p class="card__paragraph --design">${obj.body}</p>
        </div>
        <a href="#" class="card__continue">Continue reading</a>
      </article>`
      } else {
      return `<article class="card">
        <div>
          <header>
            <span class="card__tag--blue">World</span>
            <h2 class="card__header --world">${obj.title}</h2>
            <span class="card__date">Nov 12</span>
          </header>
          <p class="card__paragraph --world">${obj.body}</p>
        </div>
        <a href="#" class="card__continue">Continue reading</a>
      </article>`

      }
    })
    articleSection.innerHTML = posts.join("");
  })
