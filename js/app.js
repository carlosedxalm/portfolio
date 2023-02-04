const respositories = document.querySelector('.content-main');

function getApiGitHub() {
    fetch('https://api.github.com/users/carlosedxalm/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            let data = await res.json();
            //console.log(data)
            data.map(item => {
                let project = document.createElement('div');

                project.innerHTML = `
            <div class="project">
                <div>
                    <h4 class="tittle">${item.name}</h4>
                        <span class="date-create">${ Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                </div>
                <div>
                    <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                    <span class="Language"> ${item.language} </span>
                </div>
            </div>
            `
                respositories.appendChild(project);
            })
        })
}
getApiGitHub();