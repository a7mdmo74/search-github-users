// variabels
const URLAPI = 'https://api.github.com/users/'
let form = document.querySelector('#form');
let search = document.querySelector('#search');
let output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    output.style.display = "block"
    fetch(`https://api.github.com/users/${search.value}`)
        .then((res) => res.json())
        .then((data) => {
            let dataOutput = "<h2>User details</h2>";
            dataOutput += `
                <div class="output-container">
                    <div class="output-right">
                    <img src="${data.avatar_url}" />
                    </div>
                    <div class="output-right">
                        <h3>${data.name}</h3>
                        <p>${data.bio}</p>
                        <ul class="list-group">
                            <li class="list-group-item">Followers: ${data.followers}</li>
                            <li class="list-group-item">Following: ${data.following}</li>
                            <li class="list-group-item">Repos: ${data.public_repos}</li>
                        </ul>
                    </div>
                </div>
                <button class="btn btn-primary"><a class="link" target="_blanc" href="${data.html_url}">Show profile</a></button>
            `
            output.innerHTML = dataOutput
        })
        .catch(err => console.log(err))
})
