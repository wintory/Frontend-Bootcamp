var chartnum = []
var data = {
    labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ],
    datasets: [
        {
            label: "Prime and Fibonacci",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [
                2,
                3,
                5,
                7,
                11,
                13,
                17,
                19,
                23,
                29
            ]
        }
    ]
};

let detailchart = (chartname) => {
    $(`#${chartname}`).realtimeChart(2000, {
        dataset: {
            label: 'Widget 1',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
    });
}

$('#addchart')
    .click(function () {
        var chartname = $('#chartname').val();
        let chk = chartnum.indexOf(chartname)
        console.log();

        if (chartname == null || chartname == '') {
            alert("please input chart name")
        } else if (chk != -1) {
            alert("chart name is already to create")
        } else {
            var promise = addchart(chartname)
            chartnum.push(chartname)
            console.log(chartnum);

        }

    })

let addchart = (chartname) => {
    $('#groupchart').append(`<div class="card" id="card${chartname}" >
                    <button id="delete" class="btn col-md-2 offset-10 btn-bd-download" id="delete" onclick="todelete(${chartname})" value="${chartname}" >x</button>
                    <canvas id="${chartname}"></canvas>
                    <div class="card-body inline-group">
                        <div>
                        <h5 class="card-title col-md-6">${chartname}</h5>
                        <select class="custom-select" id="drop1">
                    <option selected>Choose frequency</option>
                    <option value="rgb(231, 169, 169)">30 sec</option>
                    <option value="rgb(202, 240, 180)">5 min</option>
                    <option value="rgb(195, 243, 245)">30 min</option>
                </select>
                        </div>
                    </div>
                </div>`)
    detailchart(chartname)
}

let deleteArr = (ch) => {
    let arr = chartnum.indexOf(ch)
    chartnum.splice(arr, 1);
    console.log(chartnum);
}

let todelete = (chartname) => {
    $(`#card${chartname.id}`).remove()
    deleteArr(chartname.id)
}

$("#inputGroupSelect01")
    .change(function (event) {
        let color = $(this).val()
        $('#outbox').css('background-color', color)
    });
