window.onload = function () {
    let context = document.querySelector("#mie_temperature_chart").getContext('2d')
    new Chart(context, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            datasets: [{
                label: "2021年",
                data: [5.7, 7.9, 11.5, 14.9, 19.3, 23.2, 27.4, 27.5, 24.0, 19.8, 13.6, 8.4],
                borderColor: '#87cefa',
                backgroundColor: '#87cefa',
            }, {
                label: "2022年",
                data: [5.3, 5.3, 10.6, 16.0, 19.1, 23.5, 27.6, 28.2, 25.6, 18.5, 15.0, 7.7],
                borderColor: '#c0c0c0',
                backgroundColor: '#c0c0c0',
            }, {
                label: "2023年",
                data: [6.0, 6.7, 11.9, 15.3, 19.7, 23.4, 28.7, 29.1, 27.0, 18.5, 13.9, 9.1],
                borderColor: '#ffdead',
                backgroundColor: '#ffdead',
            }],
        },
        options: {
            responsive: false,
        }
    })
}