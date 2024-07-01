"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ResponsiveCalendar } from "@nivo/calendar";
import styles from "./DetailCalendarChart.module.scss";

type ChartDataType = {
  value: number;
  day: string;
};

const API_URL = process.env.NEXT_PUBLIC_TIME_API_URL;

async function getData(streamerId: string, date: string) {
  let res;
  if (date) {
    res = await fetch(`${API_URL}streamerId=${streamerId}&date=${date}`);
  } else {
    res = await fetch(`${API_URL}streamerId=${streamerId}&date=1`);
  }

  return res.json();
}

export default function DetailCalendarChart() {
  // const { id, date } = useParams();
  // const [chartData, setChartData] = useState<ChartDataType>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responseData = await getData(id as string, date as string);
  //     const datae = [];
  //     responseData.data.dailyTimes.map((item) => {
  //       datae.push({
  //         value: item.totalAirTime,
  //         day: item.date,
  //       });
  //     });
  //     setChartData(datae);
  //   };
  //   fetchData();
  //   console.log(chartData);
  // }, [id, date]);

  const data = [
    {
      value: 263,
      day: "2015-06-09",
    },
    {
      value: 153,
      day: "2018-01-01",
    },
    {
      value: 254,
      day: "2016-06-05",
    },
    {
      value: 34,
      day: "2017-11-10",
    },
    {
      value: 298,
      day: "2017-07-15",
    },
    {
      value: 109,
      day: "2017-02-28",
    },
    {
      value: 149,
      day: "2015-09-01",
    },
    {
      value: 285,
      day: "2017-10-16",
    },
    {
      value: 14,
      day: "2017-01-02",
    },
    {
      value: 335,
      day: "2015-07-14",
    },
    {
      value: 69,
      day: "2017-08-27",
    },
    {
      value: 89,
      day: "2015-08-07",
    },
    {
      value: 253,
      day: "2016-06-12",
    },
    {
      value: 148,
      day: "2017-07-28",
    },
    {
      value: 244,
      day: "2017-03-14",
    },
    {
      value: 242,
      day: "2015-06-22",
    },
    {
      value: 261,
      day: "2017-10-28",
    },
    {
      value: 67,
      day: "2017-08-07",
    },
    {
      value: 13,
      day: "2016-12-27",
    },
    {
      value: 54,
      day: "2017-03-23",
    },
    {
      value: 216,
      day: "2015-10-23",
    },
    {
      value: 334,
      day: "2015-07-15",
    },
    {
      value: 314,
      day: "2018-05-13",
    },
    {
      value: 232,
      day: "2018-07-03",
    },
    {
      value: 191,
      day: "2015-04-29",
    },
    {
      value: 295,
      day: "2017-06-23",
    },
    {
      value: 110,
      day: "2018-07-20",
    },
    {
      value: 335,
      day: "2016-07-08",
    },
    {
      value: 365,
      day: "2017-01-22",
    },
    {
      value: 323,
      day: "2016-12-22",
    },
    {
      value: 329,
      day: "2018-02-20",
    },
    {
      value: 310,
      day: "2017-08-01",
    },
    {
      value: 40,
      day: "2016-06-18",
    },
    {
      value: 294,
      day: "2017-06-19",
    },
    {
      value: 120,
      day: "2017-08-29",
    },
    {
      value: 158,
      day: "2018-04-24",
    },
    {
      value: 20,
      day: "2016-11-10",
    },
    {
      value: 115,
      day: "2017-12-28",
    },
    {
      value: 302,
      day: "2018-07-19",
    },
    {
      value: 394,
      day: "2017-12-24",
    },
    {
      value: 343,
      day: "2018-04-29",
    },
    {
      value: 224,
      day: "2018-06-16",
    },
    {
      value: 144,
      day: "2018-06-02",
    },
    {
      value: 169,
      day: "2015-07-18",
    },
    {
      value: 38,
      day: "2016-07-06",
    },
    {
      value: 107,
      day: "2018-02-15",
    },
    {
      value: 361,
      day: "2017-06-22",
    },
    {
      value: 24,
      day: "2017-11-17",
    },
    {
      value: 22,
      day: "2017-06-05",
    },
    {
      value: 347,
      day: "2015-05-09",
    },
    {
      value: 74,
      day: "2015-11-14",
    },
    {
      value: 381,
      day: "2016-04-22",
    },
    {
      value: 325,
      day: "2016-07-01",
    },
    {
      value: 303,
      day: "2015-07-02",
    },
    {
      value: 272,
      day: "2016-05-14",
    },
    {
      value: 345,
      day: "2015-04-09",
    },
    {
      value: 335,
      day: "2015-10-08",
    },
    {
      value: 54,
      day: "2016-01-11",
    },
    {
      value: 21,
      day: "2015-12-01",
    },
    {
      value: 139,
      day: "2016-06-29",
    },
    {
      value: 337,
      day: "2018-03-01",
    },
    {
      value: 118,
      day: "2017-04-14",
    },
    {
      value: 201,
      day: "2016-10-26",
    },
    {
      value: 0,
      day: "2017-06-02",
    },
    {
      value: 70,
      day: "2015-11-18",
    },
    {
      value: 186,
      day: "2018-03-17",
    },
    {
      value: 18,
      day: "2017-04-23",
    },
    {
      value: 116,
      day: "2017-10-15",
    },
    {
      value: 191,
      day: "2016-12-11",
    },
    {
      value: 78,
      day: "2018-01-09",
    },
    {
      value: 248,
      day: "2015-05-31",
    },
    {
      value: 247,
      day: "2018-06-17",
    },
    {
      value: 150,
      day: "2017-06-04",
    },
    {
      value: 11,
      day: "2017-12-26",
    },
    {
      value: 37,
      day: "2017-09-10",
    },
    {
      value: 66,
      day: "2015-06-04",
    },
    {
      value: 369,
      day: "2016-01-06",
    },
    {
      value: 277,
      day: "2018-01-04",
    },
    {
      value: 109,
      day: "2018-05-08",
    },
    {
      value: 109,
      day: "2017-10-09",
    },
    {
      value: 280,
      day: "2017-03-29",
    },
    {
      value: 160,
      day: "2018-01-15",
    },
    {
      value: 96,
      day: "2016-05-31",
    },
    {
      value: 27,
      day: "2017-01-01",
    },
    {
      value: 230,
      day: "2017-09-07",
    },
    {
      value: 36,
      day: "2016-10-29",
    },
    {
      value: 373,
      day: "2016-11-14",
    },
    {
      value: 50,
      day: "2016-10-07",
    },
    {
      value: 359,
      day: "2018-05-07",
    },
    {
      value: 393,
      day: "2017-05-19",
    },
    {
      value: 363,
      day: "2015-09-17",
    },
    {
      value: 189,
      day: "2017-07-26",
    },
    {
      value: 17,
      day: "2015-11-11",
    },
    {
      value: 334,
      day: "2018-07-05",
    },
    {
      value: 394,
      day: "2016-07-28",
    },
    {
      value: 59,
      day: "2016-09-19",
    },
    {
      value: 340,
      day: "2018-05-11",
    },
    {
      value: 200,
      day: "2015-10-02",
    },
    {
      value: 359,
      day: "2016-02-10",
    },
    {
      value: 399,
      day: "2017-01-29",
    },
    {
      value: 34,
      day: "2018-06-03",
    },
    {
      value: 3,
      day: "2016-03-07",
    },
    {
      value: 199,
      day: "2016-03-22",
    },
    {
      value: 144,
      day: "2016-08-13",
    },
    {
      value: 41,
      day: "2015-04-20",
    },
    {
      value: 377,
      day: "2017-10-17",
    },
    {
      value: 128,
      day: "2015-05-17",
    },
    {
      value: 132,
      day: "2017-08-24",
    },
    {
      value: 106,
      day: "2017-11-12",
    },
    {
      value: 138,
      day: "2015-10-28",
    },
    {
      value: 129,
      day: "2016-03-06",
    },
    {
      value: 165,
      day: "2016-03-08",
    },
    {
      value: 359,
      day: "2016-06-26",
    },
    {
      value: 55,
      day: "2015-11-12",
    },
    {
      value: 252,
      day: "2015-10-07",
    },
    {
      value: 13,
      day: "2015-04-16",
    },
    {
      value: 253,
      day: "2018-04-07",
    },
    {
      value: 127,
      day: "2018-02-09",
    },
    {
      value: 172,
      day: "2016-12-19",
    },
    {
      value: 180,
      day: "2015-09-13",
    },
    {
      value: 239,
      day: "2016-05-18",
    },
    {
      value: 103,
      day: "2017-02-20",
    },
    {
      value: 368,
      day: "2017-12-31",
    },
    {
      value: 285,
      day: "2015-10-01",
    },
    {
      value: 350,
      day: "2017-03-08",
    },
    {
      value: 384,
      day: "2016-01-24",
    },
    {
      value: 158,
      day: "2016-08-07",
    },
    {
      value: 13,
      day: "2018-03-11",
    },
    {
      value: 30,
      day: "2015-08-01",
    },
    {
      value: 375,
      day: "2017-09-11",
    },
    {
      value: 33,
      day: "2017-01-27",
    },
    {
      value: 336,
      day: "2016-05-20",
    },
    {
      value: 281,
      day: "2017-10-21",
    },
    {
      value: 277,
      day: "2016-05-09",
    },
    {
      value: 268,
      day: "2017-03-31",
    },
    {
      value: 371,
      day: "2015-05-27",
    },
    {
      value: 59,
      day: "2017-06-06",
    },
    {
      value: 113,
      day: "2016-04-15",
    },
    {
      value: 292,
      day: "2016-10-28",
    },
    {
      value: 77,
      day: "2015-07-09",
    },
    {
      value: 53,
      day: "2017-05-01",
    },
    {
      value: 314,
      day: "2018-05-02",
    },
    {
      value: 252,
      day: "2016-04-19",
    },
    {
      value: 369,
      day: "2016-06-13",
    },
    {
      value: 81,
      day: "2018-03-10",
    },
    {
      value: 176,
      day: "2016-01-29",
    },
    {
      value: 259,
      day: "2017-08-05",
    },
    {
      value: 83,
      day: "2015-08-03",
    },
    {
      value: 33,
      day: "2016-12-09",
    },
    {
      value: 131,
      day: "2017-12-18",
    },
    {
      value: 163,
      day: "2015-09-05",
    },
    {
      value: 373,
      day: "2015-12-07",
    },
    {
      value: 396,
      day: "2016-08-05",
    },
    {
      value: 76,
      day: "2016-11-15",
    },
    {
      value: 224,
      day: "2018-05-25",
    },
    {
      value: 386,
      day: "2017-03-24",
    },
    {
      value: 55,
      day: "2017-11-02",
    },
    {
      value: 138,
      day: "2017-08-09",
    },
    {
      value: 76,
      day: "2018-07-25",
    },
    {
      value: 341,
      day: "2017-01-21",
    },
    {
      value: 268,
      day: "2017-05-22",
    },
    {
      value: 168,
      day: "2017-05-07",
    },
    {
      value: 253,
      day: "2015-12-31",
    },
    {
      value: 178,
      day: "2016-06-23",
    },
    {
      value: 222,
      day: "2016-05-29",
    },
    {
      value: 290,
      day: "2016-07-25",
    },
    {
      value: 215,
      day: "2017-10-06",
    },
    {
      value: 258,
      day: "2018-02-16",
    },
    {
      value: 119,
      day: "2016-08-23",
    },
    {
      value: 172,
      day: "2017-04-22",
    },
    {
      value: 219,
      day: "2017-05-04",
    },
    {
      value: 267,
      day: "2016-07-13",
    },
    {
      value: 137,
      day: "2017-10-05",
    },
    {
      value: 158,
      day: "2015-12-14",
    },
    {
      value: 279,
      day: "2018-01-10",
    },
    {
      value: 223,
      day: "2018-05-01",
    },
    {
      value: 333,
      day: "2017-10-07",
    },
    {
      value: 24,
      day: "2018-05-23",
    },
    {
      value: 241,
      day: "2016-01-03",
    },
    {
      value: 162,
      day: "2016-02-08",
    },
    {
      value: 107,
      day: "2016-03-12",
    },
    {
      value: 368,
      day: "2016-01-28",
    },
    {
      value: 104,
      day: "2017-11-09",
    },
    {
      value: 137,
      day: "2015-08-04",
    },
    {
      value: 67,
      day: "2015-07-19",
    },
    {
      value: 169,
      day: "2017-10-25",
    },
    {
      value: 362,
      day: "2017-10-03",
    },
    {
      value: 360,
      day: "2016-10-16",
    },
    {
      value: 290,
      day: "2017-12-30",
    },
    {
      value: 75,
      day: "2015-12-05",
    },
    {
      value: 205,
      day: "2018-08-09",
    },
    {
      value: 267,
      day: "2015-05-04",
    },
    {
      value: 174,
      day: "2018-01-20",
    },
    {
      value: 387,
      day: "2016-11-11",
    },
    {
      value: 258,
      day: "2016-01-22",
    },
    {
      value: 64,
      day: "2016-09-01",
    },
    {
      value: 169,
      day: "2016-07-15",
    },
    {
      value: 314,
      day: "2017-11-21",
    },
    {
      value: 46,
      day: "2016-06-06",
    },
    {
      value: 228,
      day: "2017-04-16",
    },
    {
      value: 287,
      day: "2016-06-16",
    },
    {
      value: 115,
      day: "2017-10-22",
    },
    {
      value: 343,
      day: "2018-05-12",
    },
    {
      value: 66,
      day: "2017-03-22",
    },
    {
      value: 104,
      day: "2017-10-13",
    },
    {
      value: 339,
      day: "2017-11-06",
    },
    {
      value: 224,
      day: "2018-05-30",
    },
    {
      value: 355,
      day: "2017-08-12",
    },
    {
      value: 355,
      day: "2018-01-24",
    },
    {
      value: 39,
      day: "2015-05-03",
    },
    {
      value: 82,
      day: "2018-03-29",
    },
    {
      value: 209,
      day: "2016-12-26",
    },
    {
      value: 67,
      day: "2018-06-10",
    },
    {
      value: 53,
      day: "2016-08-09",
    },
    {
      value: 258,
      day: "2016-10-30",
    },
    {
      value: 56,
      day: "2015-12-25",
    },
    {
      value: 121,
      day: "2016-06-27",
    },
    {
      value: 252,
      day: "2016-10-23",
    },
    {
      value: 217,
      day: "2017-08-16",
    },
    {
      value: 65,
      day: "2017-02-16",
    },
    {
      value: 342,
      day: "2018-05-26",
    },
    {
      value: 355,
      day: "2015-04-01",
    },
    {
      value: 264,
      day: "2018-02-01",
    },
    {
      value: 287,
      day: "2017-07-17",
    },
    {
      value: 299,
      day: "2018-01-31",
    },
    {
      value: 116,
      day: "2018-06-01",
    },
    {
      value: 241,
      day: "2018-07-17",
    },
    {
      value: 91,
      day: "2017-01-07",
    },
    {
      value: 25,
      day: "2017-09-14",
    },
    {
      value: 285,
      day: "2016-10-25",
    },
    {
      value: 135,
      day: "2015-10-09",
    },
    {
      value: 243,
      day: "2018-01-13",
    },
    {
      value: 238,
      day: "2016-04-05",
    },
    {
      value: 336,
      day: "2018-07-28",
    },
    {
      value: 97,
      day: "2015-10-06",
    },
    {
      value: 253,
      day: "2018-01-16",
    },
    {
      value: 362,
      day: "2015-10-29",
    },
    {
      value: 241,
      day: "2016-11-02",
    },
    {
      value: 152,
      day: "2015-11-08",
    },
    {
      value: 345,
      day: "2015-11-16",
    },
    {
      value: 332,
      day: "2016-10-05",
    },
    {
      value: 356,
      day: "2016-03-27",
    },
    {
      value: 49,
      day: "2018-06-18",
    },
    {
      value: 96,
      day: "2016-12-28",
    },
    {
      value: 326,
      day: "2018-04-26",
    },
    {
      value: 174,
      day: "2016-12-01",
    },
    {
      value: 145,
      day: "2015-08-14",
    },
    {
      value: 187,
      day: "2017-01-06",
    },
    {
      value: 82,
      day: "2016-09-08",
    },
    {
      value: 322,
      day: "2018-05-10",
    },
    {
      value: 361,
      day: "2016-06-20",
    },
    {
      value: 328,
      day: "2016-05-15",
    },
    {
      value: 19,
      day: "2017-02-03",
    },
    {
      value: 18,
      day: "2016-06-09",
    },
    {
      value: 156,
      day: "2015-08-23",
    },
    {
      value: 320,
      day: "2016-10-01",
    },
    {
      value: 300,
      day: "2016-08-15",
    },
    {
      value: 132,
      day: "2016-08-14",
    },
    {
      value: 365,
      day: "2018-07-10",
    },
    {
      value: 76,
      day: "2016-07-11",
    },
    {
      value: 141,
      day: "2016-04-27",
    },
    {
      value: 216,
      day: "2016-03-04",
    },
    {
      value: 271,
      day: "2015-05-28",
    },
    {
      value: 234,
      day: "2016-08-26",
    },
    {
      value: 156,
      day: "2018-05-03",
    },
    {
      value: 165,
      day: "2016-08-25",
    },
    {
      value: 377,
      day: "2016-10-24",
    },
    {
      value: 225,
      day: "2016-03-01",
    },
    {
      value: 296,
      day: "2017-12-12",
    },
    {
      value: 335,
      day: "2016-08-08",
    },
    {
      value: 157,
      day: "2016-06-14",
    },
    {
      value: 61,
      day: "2015-05-15",
    },
    {
      value: 67,
      day: "2016-09-14",
    },
    {
      value: 100,
      day: "2015-11-01",
    },
    {
      value: 360,
      day: "2016-03-14",
    },
    {
      value: 222,
      day: "2018-01-25",
    },
    {
      value: 161,
      day: "2016-04-20",
    },
    {
      value: 305,
      day: "2017-08-11",
    },
    {
      value: 385,
      day: "2016-05-06",
    },
    {
      value: 174,
      day: "2017-12-21",
    },
    {
      value: 82,
      day: "2016-04-17",
    },
    {
      value: 122,
      day: "2015-09-04",
    },
    {
      value: 199,
      day: "2016-01-16",
    },
    {
      value: 145,
      day: "2018-03-26",
    },
    {
      value: 6,
      day: "2018-05-06",
    },
    {
      value: 8,
      day: "2015-08-09",
    },
    {
      value: 232,
      day: "2016-08-18",
    },
    {
      value: 84,
      day: "2015-07-26",
    },
    {
      value: 228,
      day: "2017-07-09",
    },
    {
      value: 187,
      day: "2017-01-03",
    },
    {
      value: 193,
      day: "2018-07-30",
    },
    {
      value: 120,
      day: "2016-08-03",
    },
    {
      value: 203,
      day: "2018-01-22",
    },
    {
      value: 300,
      day: "2018-07-16",
    },
    {
      value: 193,
      day: "2015-12-27",
    },
    {
      value: 283,
      day: "2015-04-21",
    },
    {
      value: 145,
      day: "2018-08-02",
    },
    {
      value: 179,
      day: "2015-11-10",
    },
    {
      value: 79,
      day: "2015-11-13",
    },
    {
      value: 78,
      day: "2017-08-20",
    },
    {
      value: 224,
      day: "2016-12-16",
    },
    {
      value: 17,
      day: "2015-10-26",
    },
    {
      value: 80,
      day: "2016-11-13",
    },
    {
      value: 80,
      day: "2016-03-18",
    },
    {
      value: 239,
      day: "2016-10-13",
    },
    {
      value: 120,
      day: "2017-06-20",
    },
    {
      value: 180,
      day: "2015-05-29",
    },
    {
      value: 275,
      day: "2015-05-26",
    },
    {
      value: 296,
      day: "2017-04-17",
    },
    {
      value: 105,
      day: "2017-06-10",
    },
    {
      value: 141,
      day: "2017-07-02",
    },
    {
      value: 150,
      day: "2018-01-29",
    },
    {
      value: 341,
      day: "2017-01-12",
    },
    {
      value: 13,
      day: "2018-07-04",
    },
    {
      value: 89,
      day: "2015-04-17",
    },
    {
      value: 41,
      day: "2017-10-26",
    },
    {
      value: 120,
      day: "2017-06-09",
    },
    {
      value: 118,
      day: "2017-12-10",
    },
    {
      value: 371,
      day: "2016-11-07",
    },
    {
      value: 194,
      day: "2018-05-17",
    },
    {
      value: 346,
      day: "2017-03-12",
    },
    {
      value: 153,
      day: "2017-12-11",
    },
    {
      value: 5,
      day: "2017-12-19",
    },
    {
      value: 201,
      day: "2018-03-18",
    },
    {
      value: 119,
      day: "2016-01-13",
    },
    {
      value: 38,
      day: "2018-04-03",
    },
    {
      value: 259,
      day: "2017-12-03",
    },
    {
      value: 390,
      day: "2017-08-19",
    },
    {
      value: 60,
      day: "2018-01-30",
    },
    {
      value: 128,
      day: "2018-01-11",
    },
    {
      value: 60,
      day: "2017-02-06",
    },
    {
      value: 155,
      day: "2015-06-18",
    },
    {
      value: 367,
      day: "2018-05-21",
    },
    {
      value: 81,
      day: "2016-03-21",
    },
    {
      value: 203,
      day: "2016-03-31",
    },
    {
      value: 104,
      day: "2016-04-07",
    },
    {
      value: 330,
      day: "2016-09-07",
    },
    {
      value: 255,
      day: "2017-06-01",
    },
    {
      value: 38,
      day: "2016-04-01",
    },
    {
      value: 360,
      day: "2018-02-23",
    },
    {
      value: 71,
      day: "2018-07-06",
    },
    {
      value: 123,
      day: "2015-08-10",
    },
    {
      value: 98,
      day: "2017-06-16",
    },
    {
      value: 80,
      day: "2016-03-03",
    },
    {
      value: 286,
      day: "2017-04-09",
    },
    {
      value: 153,
      day: "2016-04-26",
    },
    {
      value: 350,
      day: "2017-04-21",
    },
    {
      value: 22,
      day: "2017-05-26",
    },
    {
      value: 286,
      day: "2016-11-30",
    },
    {
      value: 366,
      day: "2015-11-06",
    },
    {
      value: 176,
      day: "2018-02-11",
    },
    {
      value: 190,
      day: "2017-09-15",
    },
    {
      value: 183,
      day: "2018-04-10",
    },
    {
      value: 28,
      day: "2016-09-13",
    },
    {
      value: 83,
      day: "2016-02-25",
    },
    {
      value: 226,
      day: "2018-01-12",
    },
    {
      value: 143,
      day: "2016-10-02",
    },
    {
      value: 93,
      day: "2015-04-04",
    },
    {
      value: 181,
      day: "2017-11-08",
    },
    {
      value: 105,
      day: "2018-02-08",
    },
    {
      value: 51,
      day: "2016-08-24",
    },
    {
      value: 388,
      day: "2018-03-08",
    },
    {
      value: 300,
      day: "2017-12-08",
    },
    {
      value: 33,
      day: "2017-07-10",
    },
    {
      value: 57,
      day: "2016-05-26",
    },
    {
      value: 70,
      day: "2015-09-07",
    },
    {
      value: 242,
      day: "2017-10-30",
    },
    {
      value: 101,
      day: "2015-10-24",
    },
    {
      value: 86,
      day: "2016-12-12",
    },
    {
      value: 244,
      day: "2015-12-13",
    },
    {
      value: 86,
      day: "2016-01-30",
    },
    {
      value: 111,
      day: "2015-12-15",
    },
    {
      value: 130,
      day: "2015-12-19",
    },
    {
      value: 395,
      day: "2016-04-09",
    },
    {
      value: 165,
      day: "2018-02-17",
    },
    {
      value: 102,
      day: "2017-02-12",
    },
    {
      value: 330,
      day: "2016-02-27",
    },
    {
      value: 130,
      day: "2017-07-13",
    },
    {
      value: 231,
      day: "2017-11-18",
    },
    {
      value: 320,
      day: "2016-09-18",
    },
    {
      value: 100,
      day: "2017-03-04",
    },
    {
      value: 81,
      day: "2015-08-30",
    },
    {
      value: 270,
      day: "2017-05-15",
    },
    {
      value: 66,
      day: "2015-11-28",
    },
    {
      value: 179,
      day: "2015-09-08",
    },
    {
      value: 228,
      day: "2016-10-18",
    },
    {
      value: 353,
      day: "2016-02-26",
    },
    {
      value: 376,
      day: "2015-05-18",
    },
    {
      value: 214,
      day: "2017-02-15",
    },
    {
      value: 360,
      day: "2016-10-19",
    },
    {
      value: 275,
      day: "2015-08-28",
    },
    {
      value: 200,
      day: "2018-03-31",
    },
    {
      value: 364,
      day: "2016-02-04",
    },
    {
      value: 112,
      day: "2017-03-20",
    },
    {
      value: 355,
      day: "2017-12-25",
    },
    {
      value: 174,
      day: "2017-02-01",
    },
    {
      value: 16,
      day: "2015-08-25",
    },
    {
      value: 245,
      day: "2016-07-23",
    },
    {
      value: 101,
      day: "2018-03-23",
    },
    {
      value: 378,
      day: "2015-08-17",
    },
    {
      value: 363,
      day: "2016-03-15",
    },
    {
      value: 166,
      day: "2015-05-14",
    },
    {
      value: 396,
      day: "2018-03-27",
    },
    {
      value: 329,
      day: "2016-02-07",
    },
    {
      value: 126,
      day: "2017-07-29",
    },
    {
      value: 383,
      day: "2017-01-04",
    },
    {
      value: 133,
      day: "2016-11-05",
    },
    {
      value: 195,
      day: "2016-07-27",
    },
    {
      value: 152,
      day: "2016-12-15",
    },
    {
      value: 156,
      day: "2015-05-23",
    },
    {
      value: 398,
      day: "2017-03-10",
    },
    {
      value: 153,
      day: "2017-12-04",
    },
    {
      value: 383,
      day: "2016-10-12",
    },
    {
      value: 2,
      day: "2017-12-29",
    },
    {
      value: 339,
      day: "2016-02-28",
    },
    {
      value: 151,
      day: "2017-06-11",
    },
    {
      value: 56,
      day: "2016-04-10",
    },
    {
      value: 368,
      day: "2016-12-18",
    },
    {
      value: 202,
      day: "2017-08-13",
    },
    {
      value: 253,
      day: "2015-11-25",
    },
    {
      value: 79,
      day: "2017-07-25",
    },
    {
      value: 261,
      day: "2015-11-20",
    },
    {
      value: 228,
      day: "2017-01-09",
    },
    {
      value: 181,
      day: "2015-08-19",
    },
    {
      value: 238,
      day: "2016-09-28",
    },
    {
      value: 131,
      day: "2016-06-24",
    },
    {
      value: 292,
      day: "2018-05-09",
    },
    {
      value: 253,
      day: "2017-06-27",
    },
    {
      value: 201,
      day: "2015-09-30",
    },
    {
      value: 380,
      day: "2018-01-03",
    },
    {
      value: 263,
      day: "2015-05-19",
    },
    {
      value: 341,
      day: "2017-01-10",
    },
    {
      value: 388,
      day: "2016-09-23",
    },
    {
      value: 261,
      day: "2018-06-23",
    },
    {
      value: 120,
      day: "2017-05-20",
    },
    {
      value: 180,
      day: "2018-01-05",
    },
    {
      value: 366,
      day: "2017-09-22",
    },
    {
      value: 151,
      day: "2017-06-12",
    },
    {
      value: 258,
      day: "2016-08-02",
    },
    {
      value: 373,
      day: "2017-08-10",
    },
    {
      value: 149,
      day: "2018-01-19",
    },
    {
      value: 161,
      day: "2017-06-03",
    },
    {
      value: 22,
      day: "2015-09-10",
    },
    {
      value: 303,
      day: "2015-07-12",
    },
    {
      value: 195,
      day: "2016-03-24",
    },
    {
      value: 81,
      day: "2016-07-05",
    },
    {
      value: 17,
      day: "2015-07-21",
    },
    {
      value: 323,
      day: "2015-07-11",
    },
    {
      value: 236,
      day: "2018-07-14",
    },
    {
      value: 113,
      day: "2015-10-13",
    },
    {
      value: 54,
      day: "2016-07-17",
    },
    {
      value: 373,
      day: "2015-11-07",
    },
    {
      value: 8,
      day: "2016-07-30",
    },
    {
      value: 230,
      day: "2017-07-23",
    },
    {
      value: 259,
      day: "2016-11-23",
    },
    {
      value: 291,
      day: "2016-11-01",
    },
    {
      value: 395,
      day: "2016-10-04",
    },
    {
      value: 170,
      day: "2017-01-31",
    },
    {
      value: 304,
      day: "2015-09-12",
    },
    {
      value: 288,
      day: "2015-06-25",
    },
    {
      value: 233,
      day: "2016-05-08",
    },
    {
      value: 301,
      day: "2016-04-18",
    },
    {
      value: 310,
      day: "2016-05-27",
    },
    {
      value: 209,
      day: "2017-08-06",
    },
    {
      value: 324,
      day: "2017-04-04",
    },
    {
      value: 141,
      day: "2015-10-05",
    },
    {
      value: 215,
      day: "2016-03-25",
    },
    {
      value: 378,
      day: "2016-07-21",
    },
    {
      value: 301,
      day: "2016-02-22",
    },
    {
      value: 22,
      day: "2017-04-19",
    },
    {
      value: 290,
      day: "2018-03-02",
    },
    {
      value: 106,
      day: "2015-08-08",
    },
    {
      value: 31,
      day: "2018-01-07",
    },
    {
      value: 39,
      day: "2017-04-12",
    },
    {
      value: 113,
      day: "2016-01-14",
    },
    {
      value: 95,
      day: "2016-05-12",
    },
    {
      value: 46,
      day: "2017-12-27",
    },
    {
      value: 73,
      day: "2016-04-16",
    },
    {
      value: 344,
      day: "2018-07-18",
    },
    {
      value: 350,
      day: "2017-05-09",
    },
    {
      value: 75,
      day: "2015-11-19",
    },
    {
      value: 112,
      day: "2017-04-01",
    },
    {
      value: 269,
      day: "2017-05-14",
    },
    {
      value: 394,
      day: "2016-10-11",
    },
    {
      value: 376,
      day: "2015-05-12",
    },
    {
      value: 33,
      day: "2015-10-31",
    },
    {
      value: 277,
      day: "2017-05-08",
    },
    {
      value: 261,
      day: "2017-10-19",
    },
    {
      value: 61,
      day: "2018-07-21",
    },
    {
      value: 57,
      day: "2017-10-14",
    },
    {
      value: 373,
      day: "2015-12-24",
    },
    {
      value: 216,
      day: "2017-03-07",
    },
    {
      value: 234,
      day: "2015-09-27",
    },
    {
      value: 343,
      day: "2016-11-28",
    },
    {
      value: 133,
      day: "2018-07-08",
    },
    {
      value: 268,
      day: "2016-04-04",
    },
    {
      value: 395,
      day: "2015-11-15",
    },
    {
      value: 194,
      day: "2017-09-04",
    },
    {
      value: 118,
      day: "2015-12-09",
    },
    {
      value: 218,
      day: "2018-03-03",
    },
    {
      value: 305,
      day: "2016-02-16",
    },
    {
      value: 41,
      day: "2016-12-31",
    },
    {
      value: 81,
      day: "2016-02-20",
    },
    {
      value: 0,
      day: "2016-01-20",
    },
    {
      value: 38,
      day: "2017-02-14",
    },
    {
      value: 400,
      day: "2017-10-12",
    },
    {
      value: 103,
      day: "2017-08-18",
    },
    {
      value: 93,
      day: "2017-07-22",
    },
    {
      value: 223,
      day: "2017-10-10",
    },
    {
      value: 357,
      day: "2016-09-24",
    },
    {
      value: 384,
      day: "2015-10-16",
    },
    {
      value: 210,
      day: "2016-03-26",
    },
    {
      value: 287,
      day: "2018-04-17",
    },
    {
      value: 52,
      day: "2017-12-15",
    },
    {
      value: 139,
      day: "2015-09-28",
    },
    {
      value: 145,
      day: "2015-10-15",
    },
    {
      value: 265,
      day: "2017-06-18",
    },
    {
      value: 108,
      day: "2018-06-11",
    },
    {
      value: 218,
      day: "2018-02-04",
    },
    {
      value: 150,
      day: "2015-06-12",
    },
    {
      value: 261,
      day: "2015-07-06",
    },
    {
      value: 396,
      day: "2015-08-27",
    },
    {
      value: 280,
      day: "2018-07-24",
    },
    {
      value: 147,
      day: "2017-04-30",
    },
    {
      value: 189,
      day: "2017-11-28",
    },
    {
      value: 51,
      day: "2016-07-24",
    },
    {
      value: 278,
      day: "2017-04-06",
    },
    {
      value: 29,
      day: "2015-06-07",
    },
    {
      value: 122,
      day: "2018-07-27",
    },
    {
      value: 372,
      day: "2017-10-31",
    },
    {
      value: 360,
      day: "2016-01-19",
    },
    {
      value: 45,
      day: "2016-09-11",
    },
    {
      value: 26,
      day: "2018-07-01",
    },
    {
      value: 235,
      day: "2016-12-04",
    },
    {
      value: 330,
      day: "2015-05-25",
    },
    {
      value: 50,
      day: "2016-04-06",
    },
    {
      value: 258,
      day: "2015-04-07",
    },
    {
      value: 156,
      day: "2015-05-05",
    },
    {
      value: 250,
      day: "2017-02-27",
    },
    {
      value: 130,
      day: "2015-08-02",
    },
    {
      value: 135,
      day: "2016-12-13",
    },
    {
      value: 144,
      day: "2016-06-30",
    },
    {
      value: 157,
      day: "2016-05-13",
    },
    {
      value: 334,
      day: "2016-10-22",
    },
    {
      value: 328,
      day: "2018-04-21",
    },
    {
      value: 141,
      day: "2017-02-23",
    },
    {
      value: 175,
      day: "2018-05-27",
    },
    {
      value: 114,
      day: "2018-03-05",
    },
    {
      value: 3,
      day: "2018-02-28",
    },
    {
      value: 8,
      day: "2017-10-18",
    },
    {
      value: 249,
      day: "2017-08-08",
    },
    {
      value: 372,
      day: "2016-02-19",
    },
    {
      value: 167,
      day: "2016-08-29",
    },
    {
      value: 9,
      day: "2017-05-30",
    },
    {
      value: 51,
      day: "2018-02-13",
    },
    {
      value: 61,
      day: "2015-11-21",
    },
    {
      value: 385,
      day: "2017-08-03",
    },
    {
      value: 181,
      day: "2017-04-08",
    },
    {
      value: 272,
      day: "2018-04-12",
    },
    {
      value: 232,
      day: "2017-02-08",
    },
    {
      value: 119,
      day: "2016-05-16",
    },
    {
      value: 144,
      day: "2017-05-17",
    },
    {
      value: 364,
      day: "2017-01-19",
    },
    {
      value: 89,
      day: "2016-02-23",
    },
    {
      value: 302,
      day: "2018-06-13",
    },
    {
      value: 345,
      day: "2017-11-29",
    },
    {
      value: 62,
      day: "2015-04-24",
    },
    {
      value: 379,
      day: "2015-06-02",
    },
    {
      value: 94,
      day: "2015-04-22",
    },
    {
      value: 375,
      day: "2016-01-01",
    },
    {
      value: 374,
      day: "2016-06-22",
    },
    {
      value: 381,
      day: "2018-03-06",
    },
    {
      value: 288,
      day: "2016-06-25",
    },
    {
      value: 200,
      day: "2016-10-08",
    },
    {
      value: 128,
      day: "2018-08-06",
    },
    {
      value: 143,
      day: "2016-10-09",
    },
    {
      value: 81,
      day: "2016-11-16",
    },
    {
      value: 348,
      day: "2015-06-19",
    },
    {
      value: 119,
      day: "2015-12-02",
    },
    {
      value: 46,
      day: "2016-04-02",
    },
    {
      value: 154,
      day: "2016-02-15",
    },
    {
      value: 318,
      day: "2016-07-12",
    },
    {
      value: 22,
      day: "2015-07-16",
    },
    {
      value: 326,
      day: "2016-01-18",
    },
    {
      value: 318,
      day: "2017-03-18",
    },
    {
      value: 261,
      day: "2015-04-02",
    },
    {
      value: 229,
      day: "2018-01-08",
    },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      #calendar-container g rect[x][y][width][height][style] {
        rx: 4;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div id="calendar-container" className={styles.container}>
        <ResponsiveCalendar
          data={data}
          from="2016-01-01"
          to="2016-12-31"
          // emptyColor="#EFF0F2"
          emptyColor="#4e4e4e"
          // colors={["#FAC975", "#EC9909"]}
          colors={["#FFFAE5", "#FDEA9A"]}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          // yearLegend={(year: number) => ""}
          yearLegendOffset={20}
          // monthBorderColor="#ffffff"
          monthBorderWidth={1}
          monthLegendPosition="after"
          monthLegendOffset={20}
          monthLegend={(year: number, month: number, chartdate: Date) =>
            `${month + 1}월`
          }
          dayBorderWidth={3}
          // dayBorderColor="#ffffff"
          theme={{
            text: {
              fill: "white",
            },
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 34,
              itemHeight: 36,
              itemDirection: "top-to-bottom",
            },
          ]}
          minValue={0}
          maxValue={24}
        />
      </div>
    </div>
  );
}
