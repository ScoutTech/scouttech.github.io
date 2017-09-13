$(document).ready(function () {
    $.ajax("https://api.github.com/orgs/ScoutTech/members")
        .done(function (data) {
                data.forEach(function(x) {
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
});