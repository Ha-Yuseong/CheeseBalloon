"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import afreeca from "public/svgs/afreeca.svg";
import chzzk from "public/svgs/chzzk.svg";
import style from "src/containers/detail/DetailProfileContent.module.scss";

interface StreamerDataType {
  streamId: number;
  originId: string;
  name: string;
  profileUrl: string;
  streamUrl: string;
  followerCnt: number;
  platform: string;
  bookmark: boolean;
}

interface RankDataType {
  rank: number;
  diff: number;
}
interface LiveDataType {
  live: boolean;
  streamerUrl: string;
  thumbnailUrl: string;
}

const STREAMER_API_URL = process.env.NEXT_PUBLIC_STREAMER_API_URL;
const STREAMER_LIVE_API_URL = process.env.NEXT_PUBLIC_STREAMER_LIVE_API_URL;
const SUMMARY_API_URL = process.env.NEXT_PUBLIC_SUMMARY_API_URL;

async function getData(api: string, streamerId: string) {
  const res = await fetch(`${api}${streamerId}`);

  return res.json();
}

export default function DetailProfileContent() {
  const { id } = useParams();
  const [streamerData, setStreamerData] = useState<StreamerDataType | null>(
    null
  );
  const [rankData, setRankData] = useState<RankDataType | null>(null);
  const [liveData, setLiveData] = useState<LiveDataType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const streamerDataResponse = await getData(
        STREAMER_API_URL as string,
        id.toString()
      );
      const rankDataResponse = await getData(
        SUMMARY_API_URL as string,
        id.toString()
      );
      const liveDataResponse = await getData(
        STREAMER_LIVE_API_URL as string,
        id.toString()
      );

      if ("data" in streamerDataResponse) {
        setStreamerData(streamerDataResponse.data);
      } else {
        router.push("/error");
      }
      if ("data" in rankDataResponse) {
        setRankData(rankDataResponse.data);
      }
      if ("data" in liveDataResponse) {
        setLiveData(liveDataResponse.data);
      }
    };

    fetchData();
  }, [id, router]);

  return (
    streamerData &&
    rankData && (
      <div className={style.wrapper}>
        <div className={style["image-container"]}>
          <img
            className={`${style["profile-image"]} ${liveData && liveData.live ? style.live : null}`}
            src={streamerData.profileUrl}
            alt="https://ssl.pstatic.net/cmstatic/nng/img/img_anonymous_square_gray_opacity2x.png?type=f120_120_na"
          />
        </div>
        <div>
          <div className={style["logo-and-name"]}>
            {streamerData.platform === "C" ? (
              <img className={style["platform-logo"]} src={chzzk.src} alt="" />
            ) : (
              <img
                className={style["platform-logo"]}
                src={afreeca.src}
                alt=""
              />
            )}
            <div className={style.name}>{streamerData.name}</div>
          </div>
        </div>
        <div className={style.rank}>
          <div className={style["rank-num"]}># {rankData.rank}</div>
          <div
            className={`${style["rank-diff"]} ${rankData.diff >= 0 ? style.positive : style.negative}`}
          >
            {rankData.diff >= 0 ? `(+${rankData.diff})` : `(${rankData.diff})`}
          </div>
        </div>
      </div>
    )
  );
}