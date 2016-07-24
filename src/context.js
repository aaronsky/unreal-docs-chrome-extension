var getGitHubLinkForClass = function (name) {

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
var headerContainerEl = titleEl.nextElementSibling;

var className = '';
var apiLink = getApiLinkForClass(className);
if (apiLink) {
    var apiEl = createDocTagNode('API Reference', apiLink);
    headerContainerEl.appendChild(apiEl);
}
var githubLink = getGitHubLinkForClass(className);
if (githubLink) {
    var gitHubEl = createDocTagNode('View on GitHub', githubLink);
    headerContainerEl.appendChild(gitHubEl);
}
