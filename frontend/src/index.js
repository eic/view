const Plot = createPlotlyComponent(Plotly);

ReactDOM.render(
    React.createElement(Plot, {
        data: [
            {
                type: 'scatter',
                mode: 'lines+points',
                x: [1, 2, 3],
                y: [2, 6, 3],
                marker: {color: 'red'}
            },
            {
                type: 'bar',
                x: [1, 2, 3],
                y: [2, 5, 3]
            }
        ],
        layout: {
            width: 640,
            height: 480,
            title: 'A Fancy Plot'
        }
    }),
    document.getElementById('root')
);
