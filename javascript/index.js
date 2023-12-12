$("div.button").on("click", function() {
    let api_key = $("#myInput").val();
    fetch("https://api-dev.headspin.io/v0/devices", {
        headers: {
            "Authorization": `Bearer ${api_key}`
        }
    })
    .then(response => {
        if (!response.ok) {
            $("#myInput").val("");
            $('#myInput').attr('placeholder', 'invalid Apikey!!!');
        } else {
            return response.json()
        }
    })
    .then(data => {
        if (data!=undefined){
            var header1 = $('<h2 class="border">NAME</h2>');
            var header2 = $('<h2 class="border">UDID</h2>');
            $('div.data').append(header1);
            $('div.data').append(header2 );
            data.devices.forEach(element => {
                var data1 = $(`<h2 class="border weight">${element.model}</h2>`);
                var data2 = $(`<h2 class="border weight">${element.device_id}</h2>`); 
                $('div.data').append(data1);
                $('div.data').append(data2);  

            });
        }
    })
});

$("div.reset").on("click", function() {
    $("div.data h2").remove();
    $("#myInput").val("");
    $("#myInput").attr('placeholder',"Apikey...");
});
