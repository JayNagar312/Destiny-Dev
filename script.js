function searchFunction() {
    // Remove previous highlights
    let content = document.getElementById('content');
    let innerText = content.innerText;
    innerText = innerText.replace(new RegExp('<span class="highlight">', g), '');
    innerText = innerText.replace(new RegExp('</span>', g), '');
    content.innerText = innerText;

    // Get search input
    let searchText = document.getElementById('searchInput').value.toLowerCase();
    if (searchText === "") {
        return false;
    }

    // Highlight search text
    let contentText = content.innerText;
    let regex = new RegExp(searchText, 'gi');
    let newContentText = contentText.replace(regex, function (match) {
        return '<span class="highlight">${match}</span>';
    });
    content.innerText = newContentText;

    return false; // Prevent form submission
}



