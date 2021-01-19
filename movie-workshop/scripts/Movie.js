export function Movie (movieArray) {
    return `
<div class="movie-image">
    <img src="${movieArray.image}">
        <div class="movie-text">
            <p>${movieArray.title}</p>
        </div>
</div>

`
}

