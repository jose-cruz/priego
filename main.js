function galeryLeft(galleryName, useHelper){
    var changeThis;
    var el = document.getElementById(galleryName);
    var children = el.children;
    if(useHelper){
        var helper = document.getElementById('galery-helper');
        var helpChildren = helper.children;
    }
    for (var i = children.length - 1; i >= 0; i--){
        if(changeThis){
            changeThis = false;
            children[i].classList.replace('hide', 'show');
            if (useHelper) {
                helpChildren[i].classList.replace('hide', 'show');
            }
            break;
        }
        if(children[i].classList[0] == 'show'){
            changeThis = true;
            children[i].classList.replace('show', 'hide');
            if(useHelper){
                helpChildren[i].classList.replace('show', 'hide');
            }
            if(i == 0){
                children[children.length - 1].classList.replace('hide','show');
                if(useHelper){
                    helpChildren[children.length - 1].classList.replace('hide','show');
                }
            }
        }
    }
}

function galeryRight(galleryName, useHelper) {
    var changeThis;
    var el = document.getElementById(galleryName);
    var children = el.children;
    if (useHelper) {
        var helper = document.getElementById('galery-helper');
        var helpChildren = helper.children;
    }
    for (var i = 0; i < children.length; i++){
        if(changeThis){
            changeThis = false;
            children[i].classList.replace('hide', 'show');
            if (useHelper) {
                helpChildren[i].classList.replace('hide', 'show');
            }
            break;
        }
        if(children[i].classList[0] == 'show'){
            changeThis = true;
            children[i].classList.replace('show', 'hide');
            if (useHelper) {
                helpChildren[i].classList.replace('show', 'hide');
            }
            if(i == children.length - 1){
                children[0].classList.replace('hide','show');
                if (useHelper) {
                    helpChildren[0].classList.replace('hide','show');
                }
            }
        }
    }
}


function helperSelector(number) {
    var el = document.getElementById("galery-slider");
    var children = el.children;
    var helper = document.getElementById('galery-helper');
    var helpChildren = helper.children;

    for (var i = 0; i < children.length; i++) {
        children[i].classList.replace('show', 'hide');
        helpChildren[i].classList.replace('show', 'hide');
    }

    children[number].classList.replace('hide', 'show');
    helpChildren[number].classList.replace('hide', 'show');
}

function goToProject(projectNumber){
    var projectHolder = document.getElementById('project-holder');
    projectHolder.classList.add('proj-'+projectNumber);
}

function closeProject(){
    var projectHolder = document.getElementById('project-holder');
    projectHolder.removeAttribute("class");
}

function goToMenu(){
    var menuHolder = document.getElementById('menu-holder');
    menuHolder.classList.add('show-menu');
}
function closeMenu(){
    var menuHolder = document.getElementById('menu-holder');
    menuHolder.removeAttribute("class");
}

