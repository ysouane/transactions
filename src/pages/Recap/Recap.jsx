import React, { useState, useEffect } from "react";
import SemiCircleDonutGraphic from "../../components/SemiCircleDonutGraphic";

import "./Recap.css";

const Recap = ({ data }) => {
  const [accountBalancetext, setAccountBalanceText] = useState("");

  let creditSum = 0;
  let debitSum = 0;

  data.forEach((entry) => {
    if (entry.type === "crédit") {
      creditSum = creditSum + Number(entry.amount);
    }

    if (entry.type === "débit") {
      debitSum = debitSum + Number(entry.amount);
    }
  });

  const balance = debitSum - creditSum;

  useEffect(() => {
    if (balance > 0) {
      setAccountBalanceText(
        `Solde débiteur <br>${Number(balance).toFixed(2)}<br>`
      );
    } else {
      setAccountBalanceText(
        `Solde créditeur <br>${Number(balance).toFixed(2)}<br>`
      );
    }
  }, [balance]);

  const chartConfig = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: accountBalancetext,
      align: "center",
      verticalAlign: "middle",
      y: 60,
      style: {
        fontWeight: "bold",
        fontSize: "12px",
        color: "#162761",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        colors: ["green", "#f00"],
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "100%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Pourcentage",
        innerSize: "50%",
        data: [
          ["Débit", debitSum],
          ["Crédit", creditSum],
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="recap">
      <SemiCircleDonutGraphic config={chartConfig} />
    </div>
  );
};

export default Recap;
