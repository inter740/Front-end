function popupTicket(message) {
    var Tiket = document.createElement('div');
    $(Tiket).addClass("Tiket");



    var LeftPartTicket = document.createElement('div');
    $(LeftPartTicket).attr('id','ticketPartLeft');

    var RightPartTiket = document.createElement('div');
    $(RightPartTiket).attr('id', 'ticketPartRight');

    var divInternalTicket = document.createElement('div');
    $(divInternalTicket).addClass("divIn");

    var txtMessage = document.createTextNode(message);
    var txtLeftTik = document.createTextNode('Tiket');

    var divInternalMessage = document.createElement('div');
    $(divInternalMessage).addClass("divIn");

    if ($('body').attr('class') !== 'dark') {
        $(LeftPartTicket).addClass('ticketPartLeft');
        $(RightPartTiket).addClass('ticketPartRight')
    } else {
        $(LeftPartTicket).addClass('ticketPartLeftDark');
        $(RightPartTiket).addClass('ticketPartRightDark')
    }

    divInternalTicket.appendChild(txtLeftTik);
    divInternalMessage.appendChild(txtMessage);
    $(LeftPartTicket).append(divInternalTicket);
    $(RightPartTiket).append(divInternalMessage);
    $(Tiket).append(LeftPartTicket);
    $(Tiket).append(RightPartTiket);

    $(Tiket).animate({
        opacity: 0
    }, 10000);

    $(".Tiket").animate({ opacity: 0 }, function () {
       removeObj($(this).remove());
    });

    $(".showTicket").append(Tiket);

    if ($(divInternalMessage).height() >= $(RightPartTiket).height()) {
        $(RightPartTiket).height('auto');
        $(divInternalTicket).height($(divInternalMessage).height());
        $(LeftPartTicket).height('auto');
    }
};

function removeObj(obj) {
    (obj).remove();
};

$(function () {
    $(".button").click(function () {
        var count = "";
        count = $('.showTicket').children().length;
        if (count > 7) {
            removeObj($('.Tiket:first'))
        } else {
            message = $('#MessageInput').val();
            popupTicket(message);
            $('#MessageInput').val("");
            $('#MessageInput').focus();
        }

     })
});


