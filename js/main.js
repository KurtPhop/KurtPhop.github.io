'use strict';
(function() {
    fetch("https://api.github.com/users/w3bsme/repos").then(function(response) {
        if (response.status !== 200) {
            /** @type {string} */
            document.getElementById("js-gh").textContent = "Failed to load repositories [" + response.status + "]";
            return;
        }
        response.json().then(function(data) {
            data = data.map(function(repo) {
                repo.combined_counts = repo.stargazers_count + repo.watchers_count + repo.forks_count;
                return repo;
            }).sort(function(a, b) {
                return b.combined_counts - a.combined_counts;
            });
            /** @type {!DocumentFragment} */
            var tableDataCellElementOne = document.createDocumentFragment();
            /** @type {(Element|null)} */
            var layerTemplate = document.getElementById("js-tpl-repo"); //<template id="js-tpl-repo"></template>
            data.forEach(function(repo) {
                if (repo.fork) {
                    return;
                }
                var a = layerTemplate.content.querySelector(".name");
                a.textContent = repo.name;
                a.href = repo.html_url;
                layerTemplate.content.querySelector(".count-num").textContent = repo.combined_counts;
                layerTemplate.content.querySelector(".desc").textContent = repo.description;
                layerTemplate.content.querySelector(".lang").textContent = repo.language;
                layerTemplate.content.querySelector(".homepage").href = repo.homepage || "";
                /** @type {(Node|null)} */
                var optionsLink = document.importNode(layerTemplate.content, true);
                tableDataCellElementOne.appendChild(optionsLink);
            });
            /** @type {(Element|null)} */
            var a = document.getElementById("js-gh");
            /** @type {string} */
            a.textContent = "";
            a.appendChild(tableDataCellElementOne);
            /** @type {string} */
            var b = document.querySelectorAll("#preloader")[0].style = "display:none";
        });
    });
})();