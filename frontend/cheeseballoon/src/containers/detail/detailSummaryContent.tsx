"use client";

import dynamic from "next/dynamic";
import style from "./detailSummaryContent.module.scss";

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DetailSummaryContentData {
  avgViewer: number;
  viewerDiff: number;
  avgTime: number;
  timeDiff: number;
  follow: number;
  followDiff: number;
  rating: number;
  ratingDiff: number;
}

// 임시데이터
const data: DetailSummaryContentData = {
  avgViewer: 8534,
  viewerDiff: 237,
  avgTime: 10.7,
  timeDiff: 0.5,
  follow: 18375,
  followDiff: 273,
  rating: 5.7,
  ratingDiff: 0.3,
};

const chartData = {
  options: {
    chart: {
      height: "100%",
      width: "100%",
      toolbar: {
        show: false,
        tools: {
          download: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
        },
      },
    },

    markers: {
      size: 3,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels: {
        style: {
          colors: "white",
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
          fontWeight: "bold",
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#bcbcbc",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#F0BD53"],
  },

  series: [
    {
      name: "누적 방송시간",
      type: "line",
      data: [9, 17, 25, 32, 39, 39, 45, 52, 60],
    },
  ],
};

export default function DetailSummaryContent() {
  // 개요
  const contentBox = (name: string, num: number, diff: number) => {
    let mod: string = "%";
    let updown: string = "상승";

    switch (name) {
      case "평균 시청자수":
        mod = "명";
        if (diff >= 0) {
          updown = "상승 ↑";
        } else {
          updown = "하락 ↓";
        }
        break;
      case "평균 방송시간":
        mod = "시간";
        if (diff >= 0) {
          updown = "증가 ↑";
        } else {
          updown = "감소 ↓";
        }
        break;
      case "팔로워":
        mod = "명";
        if (diff >= 0) {
          updown = "상승 ↑";
        } else {
          updown = "하락 ↓";
        }
        break;
      case "평균 시청률":
        mod = "%";
        if (diff >= 0) {
          updown = "상승 ↑";
        } else {
          updown = "하락 ↓";
        }
        break;
      default:
        break;
    }

    return (
      <div className={style.content}>
        {name === "누적 방송시간" ? (
          <div className={style["chart-container"]}>
            <div className={style["content-name"]}>{name}</div>
            <ApexChart
              type="line"
              options={chartData.options}
              series={chartData.series}
              height="auto"
              width="100%"
            />
          </div>
        ) : (
          <div>
            <div className={style["content-name"]}>{name}</div>
            <div className={style["content-num"]}>{num}</div>
            <div
              className={`${style["content-diff"]} ${diff >= 0 ? style.positive : style.negative}`}
            >
              {Math.abs(diff)}
              {mod} {updown}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {contentBox("평균 시청자수", data.avgViewer, data.viewerDiff)}
        {contentBox("평균 방송시간", data.avgTime, data.timeDiff)}
        {contentBox("팔로워", data.follow, data.followDiff)}
        {contentBox("평균 시청률", data.rating, data.ratingDiff)}
        {contentBox("누적 방송시간", 123, 345)}
      </div>
    </div>
  );
}
