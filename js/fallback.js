// fallback function for Font Awesome
function ensureCssFileInclusion(cssFileToCheck) {
    var styleSheets = document.styleSheets;
    for (var i = 0, max = styleSheets.length; i < max; i++) {
        if (styleSheets[i].href == cssFileToCheck) {
            return;
        }
    }
    // because no matching stylesheets were found, we will add a new HTML link element to the HEAD section of the page.
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://kit.fontawesome.com/84793fd9ad.js";
    document.getElementsByTagName("head")[0].appendChild(link);
}

//call function
ensureCssFileInclusion("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");