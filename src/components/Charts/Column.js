// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart,FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "column3D", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Starred Repositories",
        //Set the theme for your chart
        yAxisName:"Stars",
        xAxisName:"Repositories",
        theme: "fusion",
        decimals: 0,
        pieRadius:'50%',
        paletteColors: '#2aa29e,#cd0e74,#fdca40,#95389e,#00ad7c'
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
