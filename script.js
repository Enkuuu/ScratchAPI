function search(that){
    fetch("https://hackingtonsapiproxy.herokuapp.com/"+ "https://api.scratch.mit.edu/users/" +that.value+ "/projects")
    .then(function(response){
        return response.json()
    }) .then(function(data){
        if(data.lengrth > 0){
            showResults(data)
        }else{
            notFound()
        }
        showResults(data)
    })
}

function showResults(data){
    document.getElementById('games').innerHTML = ''
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
    newImage.onclick = function(){
        playGame(project.id, imageContainer)
    }
    let newGame = makeElement('div', 'game');
    imageContainer.append(newImage);
    newGame.append(newTitle);
    newGame.append(imageContainer);
    newGame.append(viewCount);
    document.getElementById('games').append(newGame)
}

function makeElement(type='div', newClass, inner = ''){
    let newEl = document.createElement(type);
    if(newClass){
        newEl.classList.add(newClass);
    }
    newEl.innerHTML = inner;
    return newEl;
}

function notFound(){
    document.getElementById('games').innerHTML = 'No User Found'
}

function playGame(id, container){
    container.innerHTML="<iframe src='https://scratch.mit.edu/projects/" + id + "/embed' allowtransparency='true' width='485' height='492' frameborder='0' scrolling ='no' allowfullscreen></iframe>";
}