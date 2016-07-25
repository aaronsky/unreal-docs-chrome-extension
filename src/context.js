var classNameForPage = function (shouldMakeLink) {
    var referenceTableEls = document.getElementsByClassName('member-list');
    var referenceTableEl = referenceTableEls[referenceTableEls.length - 1];
    var descCellEls = referenceTableEl.getElementsByClassName('desc-cell');
    var descCellEl = descCellEls[descCellEls.length - 1];
    var classPath = descCellEl.textContent.trim();
    if (shouldMakeLink) {
        var link = getGitHubLinkForClass(classPath);
        var plainNode = descCellEl.children[0];
        console.log(plainNode);
        var linkNode = document.createElement('a');
        linkNode.setAttribute('href', link);
        linkNode.textContent = plainNode.textContent;
        console.log(linkNode);
        descCellEl.replaceChild(linkNode, plainNode);
        console.log(descCellEl);
    }
    return {
        path: classPath,
        name: classPath.split('/').splice(-1)   
    };
};

var getGitHubLinkForClass = function (path) {
    return 'https://www.github.com/EpicGames/UnrealEngine/blob/release/Engine/Source/' + path;
};

var getApiLinkForClass = function (name) {

};

var createDocTagNode = function (text, link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link);
    linkEl.textContent = text;
    var divEl = document.createElement('div');
    divEl.setAttribute('class', 'version_tag_filter');
    divEl.appendChild(linkEl);
    return divEl;
};


var titleEl = document.getElementById('H1TitleId');
var title = titleEl.textContent;
var trimmedTitle = title.substring(1);

var { path, name } = classNameForPage(true);

if (name === trimmedTitle + '.h') {
    /*
    var apiLink = getApiLinkForClass(className);
    if (apiLink) {
        var apiEl = createDocTagNode('API Reference', apiLink);
        headerContainerEl.appendChild(apiEl);
    }
    */
    var headerContainerEl = titleEl.nextElementSibling;
    var githubLink = getGitHubLinkForClass(path);
    if (githubLink) {
        var gitHubEl = createDocTagNode('View on GitHub', githubLink);
        headerContainerEl.appendChild(gitHubEl);
    }
}