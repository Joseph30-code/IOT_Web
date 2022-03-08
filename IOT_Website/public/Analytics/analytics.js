$("#chart-container").insertFusionCharts({
    type: "doughnut2d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Quick Climate Info",
        enableSmartLabels: false,
        subcaption: "For all users residing at United Kingdom",
        showpercentvalues: "1",
        defaultcenterlabel: "Climate & Weather",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "0",
        plottooltext:
          "<b>$Value SH</b> humidity in <b>$label</b>",
        
        theme: "fusion"
      },
      data: [
        {
          color: "#72a0c1",
          label: "Hottest Month(July)",
          value: "52"
        },
        {
          color:"#00308f",
          label: "Coldest Month(January)",
          value: "80"
        },
        {
          color:"#89cff0",
          label: "Wettest Month(November)",
          value: "81"
        },
        {
          color:"#1dacd6",
          label: "Windiest Month(January)",
          value: "90"
        }
        
      ]
    }
  });
  