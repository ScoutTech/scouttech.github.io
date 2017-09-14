var CONSTANTES = {
    subTitulo: "Issues de",
    owner: "ScoutTech",
};
$(document).ready(function () {
    var repo = $.url("?repo");
    var issuesPath = "https://api.github.com/repos/" + CONSTANTES.owner + "/" + repo + "/issues";
    var labelsPath = "https://api.github.com/repos/" + CONSTANTES.owner + "/" + repo + "/labels";
    $("#One").find("p").text(CONSTANTES.subTitulo);
    $("#One").find("h2").text(repo.toUpperCase());

    $.ajax(labelsPath).done(function (data) {
        data.forEach(function (x) {
            $("#two").find(".labels").append(
                $("<div>", {
                    text: x.name,
                    style: "background-color:#" + x.color + "!important",
                    class: "issue-label"
                }).click(function () {
                    $(this).toggleClass("issue-label-apagado");
                    getIssues();
                })
            );
        });
    });

    var getIssues = function () {
        $.ajax(issuesPath).done(function (data) {
            var labelsFiltro = $(".issue-label:not(.issue-label-apagado)").map(function () { return $(this).text() });
            var validos = data.filter(function (x) {
                var etiquetasActuales = x.labels.map(function (y) { return y.name });
                if ($(etiquetasActuales).filter(labelsFiltro).length > 0)
                { return x; }
            });
            $("#two").find(".lista").empty();
            validos.forEach(function (x) {
                $("#two").find(".lista").append(
                    $("<li>").append(
                        $("<a>", { href: x.html_url, target: "_blank" }).append(
                            $("<h3>", { text: x.title })
                        ).append(
                            $("<span>", { text: x.body })
                        )
                    )
                );
                x.labels.forEach(function (y) {
                    $("#two").find("li:last").append($("<span>", {
                        text: y.name,
                        style: "background-color:#" + y.color,
                        class: "tag"
                    }));
                });
            });
        });
    };

    getIssues();
});