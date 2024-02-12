$(document).ready(function () {
    $("#cep").mask("00.000-000");
    $("#numero").mask("000");
    $("#ddd").mask("(00)");

    var optionsDocumento = {
        onKeyPress: function (documento, ev, el, op) {
            var masks = ["000.000.000-000", "00.000.000/0000-00"];
            $("#documento").mask(documento.length > 14 ? masks[1] : masks[0], op);
        },
    };

    $("#documento").length > 11 ? $("#documento").mask("00.000.000/0000-00", optionsDocumento) : $("#documento").mask("000.000.000-00#", optionsDocumento);

    var optionsTelefone = {
        onKeyPress: function (telefone, ev, el, op) {
            var masks = ["0000-00000", "00000-0000"];
            $("#telefone").mask(telefone.length > 9 ? masks[1] : masks[0], op);
        },
    };

    $("#telefone").length > 8 ? $("#telefone").mask("00000-0000", optionsTelefone) : $("#telefone").mask("0000-0000#", optionsTelefone);
});
