function search(that){
    fetch("https://hackingtonsapiproxy.herokuapp.com/"+ "https://api.scratch.mit.edu/users/" +that.value+ "/projects")
    .then(function(response){
        return response.json()
    }) .then(function(data){
        showResults(data)
    })
}

function showResults(data){
    data.forEach(function(project){
        buildProject(project)
    })
}

function buildProject(project){
    let newTitle = makeElement('h2', 'title', project.title);
    let viewCount = makeElement('p', undefined, 'Views: '+ project.stats.views)
    let imageContainer = makeElement();
    let newImage = makeElement('img');
    newImage.src = project.image;
    let newGame = makeElement('div', 'game');
    
}

function makeElement(type='div', newClass, inner = ''){
    let newEl = document.createElement(type);
    if(newClass){
        newEl.classList.add(newClass);
    }
    newEl.innerHTML = inner;
    return newEl;
}