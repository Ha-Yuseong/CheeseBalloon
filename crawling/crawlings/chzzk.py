from typing import List
from schemas.streamer_info import StreamerInfo
from schemas.streamer_logs import StreamerLogCreate
from schemas.streamers import StreamerRead

import httpx

class Chzzk:
    async def init_live(self):
        async with httpx.AsyncClient() as client:
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                              "Chrome/123.0.0.0 Safari/537.36"
            }
            res = await client.get('https://api.chzzk.naver.com/service/v1/lives?size=50&sortType=POPULAR',
                                   headers=headers)
            return res.json()

    async def more_live(self, concurrent_user_count: int, live_id: int):
        async with httpx.AsyncClient() as client:
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                              "Chrome/123.0.0.0 Safari/537.36"
            }

            res = await client.get(f'https://api.chzzk.naver.com/service/v1/lives?' +
                                   f'concurrentUserCount={concurrent_user_count}&' +
                                   f'liveId={live_id}&size=50&sortType=POPULAR',
                                   headers=headers)
            return res.json()

    async def follower(self, origin_id: str):
        async with httpx.AsyncClient() as client:
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " +
                              "Chrome/123.0.0.0 Safari/537.36"
            }

            res = await client.get(f'https://api.chzzk.naver.com/service/v1/channels/{origin_id}',
                                   headers=headers)
            return res.json()

    async def chzzk(self):
        print("치지직 크롤링을 시작합니다.")
        # StreamerInfo 객체 저장 딕셔너리 생성
        streamers_dict = {}

        live_list = await self.init_live()
        concurrent_user_count = live_list['content']['page']['next']['concurrentUserCount']
        live_id = live_list['content']['page']['next']['liveId']
        item_list = live_list['content']['data']

        for new_item in item_list:
            if new_item['liveImageUrl'] is None:
                continue
            streamer_info = StreamerInfo(
                origin_id=str(new_item['channel']['channelId']),
                name=str(new_item['channel']['channelName']),
                profile_url=str(new_item['channel']['channelImageUrl']),
                channel_url=f"https://chzzk.naver.com/{new_item['channel']['channelId']}",
                platform="C",
                stream_url=f"https://chzzk.naver.com/live/{new_item['channel']['channelId']}",
                live_origin_id=int(new_item['liveId']),
                thumbnail_url=str(new_item['liveImageUrl']).format(type=480),
                category=str(new_item['liveCategoryValue']),
                title=str(new_item['liveTitle']),
                viewer_cnt=int(new_item['concurrentUserCount'])
            )
            streamers_dict[streamer_info.live_origin_id] = streamer_info

        # live_id를 키로 하는 딕셔너리로 변환
        # live_dict = {item["liveId"]: item for item in item_list}

        while concurrent_user_count > 20:
            new_list = await self.more_live(concurrent_user_count, live_id)
            concurrent_user_count = new_list['content']['page']['next']['concurrentUserCount']
            live_id = new_list['content']['page']['next']['liveId']
            streamer_item_list = new_list['content']['data']
            for new_item in streamer_item_list:
                if new_item['liveImageUrl'] is None:
                    continue
                streamer_info = StreamerInfo(
                    origin_id=str(new_item['channel']['channelId']),
                    name=str(new_item['channel']['channelName']),
                    profile_url=str(new_item['channel']['channelImageUrl']),
                    channel_url=f"https://chzzk.naver.com/{new_item['channel']['channelId']}",
                    platform="C",
                    stream_url=f"https://chzzk.naver.com/live/{new_item['channel']['channelId']}",
                    live_origin_id=int(new_item['liveId']),
                    thumbnail_url=str(new_item['liveImageUrl']).format(type=480),
                    category=str(new_item['liveCategoryValue']),
                    title=str(new_item['liveTitle']),
                    viewer_cnt=int(new_item['concurrentUserCount'])
                )
                streamers_dict[streamer_info.live_origin_id] = streamer_info

        streamers_list = list(streamers_dict.values())
        # print(tabulate(streamers_list, headers=["origin_id", "name", "profile_url", "channel_url", "platform", "stream_url", "live_origin_id", "thumbnail_url", "category", "title", "viewer_cnt"]))
        # print(streamers_list)
        print("치지직 크롤링을 끝냅니다.")
        return streamers_list

    async def chzzk_follower(self, streamers: List[StreamerRead]):
        streamer_follower_list = []
        print("치지직 팔로우 크롤링 시작합니다.")
        for s in streamers:
            res = await self.follower(s.origin_id)
            # print(s.name)
            # print("아싸" + str(res['content']['channelName']))
            follower_text = res['content']['followerCount']
            follower_cnt = int(follower_text)

            streamer_follower_list.append(StreamerLogCreate(
                streamer_id=s.streamer_id,
                follower=follower_cnt
            ))
        print("치지직 팔로우 크롤링 끝냅니다.")
        # print(streamer_follower_list)
        return streamer_follower_list