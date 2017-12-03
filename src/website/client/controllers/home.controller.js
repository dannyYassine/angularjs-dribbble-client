/**
 * Created by dannyyassine on 2017-12-01.
 */

const Chart = require('chart.js');

let HomeController = function () {

    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 15, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
        }
    });


    const context = document.getElementById('bubbleChart').getContext('2d');
    const bubbleChart = new Chart(context, {
        // The type of chart we want to create
        type: 'radar',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(100, 150, 132)',
                borderColor: 'rgb(100, 150, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });

};

module.exports = HomeController;