var CONSTANTES = {
    subTitulo: "Issues de",
    owner: "ScoutTech",
};
$(document).ready(function () {
    var repo = $.url("?repo");
    var issuesPath = "https://api.github.com/repos/" + CONSTANTES.owner + "/" + repo + "/issues";
    $("#One").find("p").text(CONSTANTES.subTitulo);
    $("#One").find("h2").text(repo.toUpperCase());
    $.ajax(issuesPath).done(function (data) {
        data.forEach(function(x){
            $("#two").find("ul").append(
                $("<li>").append(
                    $("<a>", { href: x.html_url, target: "_blank" }).append(
                        $("<h3>", { text: x.title })
                    ).append(
                        $("<span>", { text: x.body })
                    )
                )
            );
        });
    });
});