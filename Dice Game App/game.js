"use strict";

const winningTotal = 50;

const getRandomNumber = max => {
    let rand = null;
    if (!isNaN (max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }

    return rand;
};

const change_player = () => {
    if ($("#current").text() == $("#player1").val()) {
        $("#current").text($("#player2").val());
    } else {
        $("#current").text( $("#player1").val ());
    }

    $("#dice").val ("0");
    $("#total").val ("0");
    $("#roll").focus();
};

$(document).ready ( () => {
    $("#new_game").click ( () => {
        $("#score1").val("0");
        $("#score2").val("0");

        if ($("#player1").val() == "" || $("#player2").val() == "") {
            alert ("Please enter two players names.");
        } else {
            $("#turn").removeClass("hide");
            change_player();
        }
    });

    $("#roll").click ( () => {
        let total = parseInt($("#total").val());
        const dice = getRandomNumber(6);

        if (dice == 1) {
            total = 0;
            change_player();
        } else {
            total = total + dice;
        }
        $("#dice").val(dice);
        $("#total").val(total);
    });

    $("#hold").click ( () => {
        let score = 0;
        const total = parseInt ($("#total").val()); 

        if ($("#current").text() == $("#player1").val()) {
            score = $("#score1");
        } else {
            score = $("#score2");
        }

        score.val(parseInt(score.val())+total);

        if (score.val() >= winningTotal) {
            alert ($("#current").text() + "wins!");
        } else {
            change_player();
        }

        });
    $("#winning_total").text(winningTotal);
    $("#player1").focus();
});
