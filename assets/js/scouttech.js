var APIS = {
    Miembros: "https://api.github.com/orgs/ScoutTech/members",
    Repositorios:"https://api.github.com/orgs/ScoutTech/repos"
};

$(document).ready(function () {
    $.ajax(APIS.Miembros)
        .done(function (data) {
            data.forEach(function (x) {
                $("#member").append(
                    $("<li>").append(
                        $("<a>", {
                            href: x.html_url,
                            target: "_blank"
                        }).prepend(
                            $("<img>", {
                                src: x.avatar_url
                            })
                        ).append(
                            $("<span>", {
                                text: x.login
                            })
                        )
                    )
                );
            });
        });
    $.ajax(APIS.Repositorios)
        .done(function (data) {
            data.forEach(function (x) {
                $("#repos").append(
                    $("<li>").append(
                        $("<a>", {
                            href: x.html_url,
                            target:"_blank"
                        }).append(
                            $("<h3>", {
                                text: x.name,
                            })
                        ).append(
                            $("<span>", {
                                text: x.forks_count,
                                class: "fa fa-code-fork",
                            })
                        ).append(
                            $("<span>", {
                                text: x.stargazers_count,
                                class: "fa fa-star-o"
                            })
                        ).append(
                            $("<span>", {
                                text: x.description
                            })
                        )
                    )
                );
        });
});
});