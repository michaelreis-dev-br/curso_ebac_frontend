var input = $("input");
var form = $("form");
var ul = $("ul");

form.on("submit", function (e) {
    e.preventDefault();
    inserirTarefa();
});

ul.on("click", "li", function () {
    $(this).css("text-decoration", "line-through");
});

function inserirTarefa() {
    var task = input.val();
    ul.append("<li>" + task + "</li>");
    limparCampos();
}

function limparCampos() {
    $("form")[0].reset();
}
