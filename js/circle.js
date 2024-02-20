var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['データ1', 'データ2', 'データ3', 'データ4'],
        datasets: [{
            label: '%',
            data: [43, 30, 15, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 218, 185, 0.2)',
                'rgba(192, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 218, 185, 1)',
                'rgba(192, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    /*円グラフの中心の空洞を設定する*/
    options: {
        responsive: false,
        cutout: 60,
    }
});