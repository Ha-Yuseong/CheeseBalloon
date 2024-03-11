from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from tabulate import tabulate
import time
import re

class Crawling:
    def chzzk(self):
        # Chrome 옵션 설정
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # 헤드리스 모드 활성화
        chrome_options.add_argument("--disable-gpu")  # GPU 가속 비활성화 (일부 시스템에서 필요)
        chrome_options.add_argument("--no-sandbox")  # 샌드박스 비활성화
        chrome_options.add_argument("--disable-dev-shm-usage")  # 리소스 제한 문제 방지

        try:
            # Selenium WebDriver를 초기화하고 ChromeDriverManager를 통해 ChromeDriver 설치
            driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
            # 페이지 로드를 기다리기 위한 대기 시간 설정
            driver.implicitly_wait(10)
            # 웹사이트 열기
            driver.get('https://chzzk.naver.com/lives')

            # 웹사이트의 동적 컨텐츠가 로드될 때까지 기다림 (필요에 따라 시간 조정)
            time.sleep(5)  # 적절한 로딩 시간을 기다림

            # 페이지의 소스 가져오기
            html = driver.page_source
            soup = BeautifulSoup(html, 'html.parser')

            # 스크롤을 위한 대기 시간 설정
            SCROLL_PAUSE_TIME = 2

            # 페이지 스크롤 다운을 위한 루프
            scroll_position = 0
            last_height = 0
            while True:

                new_height = driver.execute_script("return document.body.scrollHeight")

                # 페이지의 끝까지 스크롤 다운
                # driver.execute_script("window.scrollTo(0, document.body.scrollHeight/3 * 2);")

                # 페이지를 조금씩 내리는 스크롤 (예: 100픽셀씩)
                # scroll_position += (new_height - last_height) * 2 / 5
                scroll_position += 300
                driver.execute_script(f"window.scrollTo(0, {scroll_position});")

                # 새로운 페이지 콘텐츠 로드를 기다림
                time.sleep(SCROLL_PAUSE_TIME)

                # 새로운 높이를 계산하고, 이전 높이와 비교
                # new_height = driver.execute_script("return document.body.scrollHeight")
                html = driver.page_source
                soup = BeautifulSoup(html, 'html.parser')

                view_cnt = soup.find_all('span', {'class', 'video_card_badge__w02UD'})
                # view_cnt = driver.find_elements('video_card_badge__w02UD')
                # print(len(view_cnt))
                # print(view_cnt[len(view_cnt)-1].text.strip())
                cnt = re.sub(r'\D', '', view_cnt[len(view_cnt)-1].text.strip())
                # print(cnt)
                if int(cnt) < 20:
                    break
                scroll_position = new_height
                # last_height = new_height



            # 'component_container__CTlNd' 클래스를 가진 section 요소 찾기
            component_container = soup.find_all('section', {'class','component_section__lGX4U'})

            # 시청자 수를 저장할 리스트 초기화
            streamer_list = []

            # 각 파트너 항목에서 시청자 수 추출
            streamer_items = component_container[0].find_all('li', {'class','component_item__WsLOa'})
            index = 0
            for item in streamer_items:
                # 'video_card_badge__w02UD' 클래스를 가진 요소의 텍스트 추출 - 시청자 수
                viewer_count = item.find('span', {'class', 'video_card_badge__w02UD'})
                if viewer_count:
                    count = re.sub(r'\D', '', viewer_count.text.strip())
                    if int(count) < 20:
                        break
                data = []
                index += 1
                data.append(index)

                # 'name_text__yQG50' 클래스를 가진 요소의 텍스트 추출 - 방송인 이름
                streamer_name = item.find('span', {'class', 'name_text__yQG50'})
                if streamer_name:
                    data.append(streamer_name.text.strip())

                click_streamer = item.find('a', {'class', 'video_card_image__yHXqv'})

                # print(click_streamer.get('href'))

                # <a> 태그의 href 속성 값을 가져옴
                href_value = click_streamer.get('href')

                # print(href_value)

                # 자바스크립트를 사용하여 새 탭에서 href URL 열기
                driver.execute_script(f"window.open('https://chzzk.naver.com' + '{href_value}');")

                # 새 탭으로 스위치
                driver.switch_to.window(driver.window_handles[1])

                channel_profile = driver.find_element(By.CLASS_NAME, 'channel_profile_cell__kkiQb')

                data.append(channel_profile.text)

                driver.close()  # 새 탭 닫기
                driver.switch_to.window(driver.window_handles[0])  # 원래 탭으로 스위치

                # 'video_card_title__Amjk2' 클래스를 가진 요소의 텍스트 추출 - 제목
                live_title = item.find('a', {'class', 'video_card_title__Amjk2'})
                if live_title:
                    blind_text = live_title.find('span', {'class','blind'}).get_text()
                    data.append(live_title.text.replace(blind_text, '').strip())

                # 시청자 수 데이터
                data.append(viewer_count.text.strip())

                # 'video_card_category__xQ15T' 클래스를 가진 요소의 텍스트 추출 - 태그
                live_tag = item.find('span', {'class', 'video_card_category__xQ15T'})
                if live_tag:
                    data.append(live_tag.text.strip())
                else:
                    data.append("없음")

                # 'video_card_image__yHXqv' 클래스를 가진 요소의 텍스트 추출 - 썸네일
                live_img = item.find('img', {'class', 'video_card_image__yHXqv'})
                if live_img:
                    data.append(live_img.get('src'))


                streamer_list.append(data)



            # 결과 출력
            print(tabulate(streamer_list, headers=["번호", "방송인", "팔로우", "제목", "시청자 수", "태그", "썸네일"]))

            # 브라우저 종료
            driver.quit()
        except Exception as e:
            print(e)

    def afreeca(self):
        # Chrome 옵션 설정
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # 헤드리스 모드 활성화
        chrome_options.add_argument("--disable-gpu")  # GPU 가속 비활성화 (일부 시스템에서 필요)
        chrome_options.add_argument("--no-sandbox")  # 샌드박스 비활성화
        chrome_options.add_argument("--disable-dev-shm-usage")  # 리소스 제한 문제 방지

        try:
            # Selenium WebDriver를 초기화하고 ChromeDriverManager를 통해 ChromeDriver 설치
            driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
            # 페이지 로드를 기다리기 위한 대기 시간 설정
            driver.implicitly_wait(10)
            # 웹사이트 열기
            driver.get('https://www.afreecatv.com/?hash=all')

            # 웹사이트의 동적 컨텐츠가 로드될 때까지 기다림 (필요에 따라 시간 조정)
            time.sleep(5)  # 적절한 로딩 시간을 기다림

            # 페이지의 소스 가져오기
            html = driver.page_source
            soup = BeautifulSoup(html, 'html.parser')

            # 스크롤을 위한 대기 시간 설정
            SCROLL_PAUSE_TIME = 2

            # 페이지 스크롤 다운을 위한 루프
            scroll_position = 0
            last_height = 0
            while True:

                button = driver.find_element(By.XPATH, "//button[.//span[text()='더보기']]")

                button.click()

                html = driver.page_source
                soup = BeautifulSoup(html, 'html.parser')

                # broadlist = soup.find_all('div', {'id', 'cBox-list'})
                # broadlist = driver.find_element(By.ID, "cBox-list")
                # print(broadlist)
                view_cnt = driver.find_elements(By.XPATH, "//li[@data-type='cBox']")
                # view_cnt = driver.find_elements('video_card_badge__w02UD')
                # print(len(view_cnt))

                last_view = view_cnt[len(view_cnt) - 1]
                # print(last_view.find_element(By.CLASS_NAME, "views").text)
                # print(last_view.find_element(By.XPATH, "//span[@class='views']").text)
                cnt = re.sub(r'\D', '', last_view.find_element(By.CLASS_NAME, "views").text.strip())

                # print(cnt)
                if int(cnt) < 50:
                    break

            # 'component_container__CTlNd' 클래스를 가진 section 요소 찾기
            # component_container = soup.find_all('div', {'class', 'cBox-list'})
            # component_container = driver.find_elements(By.CLASS_NAME, "cBox-list")
            #
            # # 시청자 수를 저장할 리스트 초기화
            streamer_list = []
            #
            # # 각 파트너 항목에서 시청자 수 추출
            streamer_items = driver.find_elements(By.XPATH, "//li[@data-type='cBox']")
            index = 0
            for item in streamer_items:
                # 'video_card_badge__w02UD' 클래스를 가진 요소의 텍스트 추출 - 시청자 수
                viewer_count = item.find_element(By.CLASS_NAME, "views")
                if viewer_count:
                    count = re.sub(r'\D', '', viewer_count.text.strip())
                    if int(count) < 50:
                        break
                data = []
                index += 1
                data.append(index)

                # 'name_text__yQG50' 클래스를 가진 요소의 텍스트 추출 - 방송인 이름
                streamer_name = item.find_element(By.CLASS_NAME, "nick")
                if streamer_name:
                    data.append(streamer_name.text.strip())

                click_streamer = item.find_element(By.CLASS_NAME, "thumb")

                # print(click_streamer.get('href'))

                # <a> 태그의 href 속성 값을 가져옴
                href_value = click_streamer.get_attribute('href')

                # print(href_value)

                # 자바스크립트를 사용하여 새 탭에서 href URL 열기
                driver.execute_script(f"window.open('{href_value}');")

                # 새 탭으로 스위치
                driver.switch_to.window(driver.window_handles[1])

                channel_profile = driver.find_element(By.CLASS_NAME, 'favor')
                if channel_profile:
                    data.append(channel_profile.text)
                else:
                    data.append("없음")

                driver.close()  # 새 탭 닫기
                driver.switch_to.window(driver.window_handles[0])  # 원래 탭으로 스위치

                # 'video_card_title__Amjk2' 클래스를 가진 요소의 텍스트 추출 - 제목
                live_title = item.find_element(By.CLASS_NAME, 'title')
                if live_title:
                    # blind_text = live_title.find('span', {'class', 'blind'}).get_text()
                    # data.append(live_title.text.replace(blind_text, '').strip())
                    # print(live_title.text)
                    data.append(live_title.text.strip())

                # 시청자 수 데이터
                # print(viewer_count.text.strip())
                data.append(viewer_count.text.strip())

                # 'video_card_category__xQ15T' 클래스를 가진 요소의 텍스트 추출 - 태그
                live_tag = item.find_element(By.CLASS_NAME, 'tag_wrap')
                if live_tag:
                    tags = []
                    tag_list = live_tag.find_elements(By.TAG_NAME, "a")
                    for tag in tag_list:
                        tags.append(tag.text.strip())
                    # print(tags)
                    data.append(tags)
                else:
                    data.append("없음")

                # 'video_card_image__yHXqv' 클래스를 가진 요소의 텍스트 추출 - 썸네일
                live_img = driver.find_element(By.CLASS_NAME, "thumbs-box")
                if live_img:
                    live_url = live_img.find_element(By.XPATH, "//img")
                    data.append(live_url.get_attribute('src'))

                streamer_list.append(data)

            # 결과 출력
            print(tabulate(streamer_list, headers=["번호", "방송인", "팔로우", "제목", "시청자 수", "태그", "썸네일"]))

            # 브라우저 종료
            driver.quit()
        except Exception as e:
            print(e)