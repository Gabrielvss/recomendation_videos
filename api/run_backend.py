from get_data import *
from recomendadiotn_utils import *

import json


import time
import os
queries = ["machine+learning"  "data+science", "kaggle"]
new_videos = 'database.json'

def search_db():
    with open(new_videos, 'w+') as output:
        for query in queries:
            for page in range(1,4):
                print(query, page)
                search_page = download_search_page(query, page)
                video_list = parse_search_page(search_page)
                
                for video in video_list:

                    video_page = download_video_page(video['link'])
                    video_json_data = parse_video_page(video_page)

                    if 'watch-time-text' not in video_json_data:
                            continue

                    p = compute_prediction(video_json_data)    

                    print(p)  
                    video_id = video_json_data.get('og:video:url', '')                  
                    data_front = {'title':video['title'], 'video_id':video_id }
                    data_front['score'] = float(p)
                    data_front['update_time'] = time.time()

                    output.write(f'{json.dumps(data_front)}\n')
                    #write_new_video(f'{json.dumps(data_front)}\n',new_videos)


    return True
                       
def write_new_video(video,dir):
    with open(dir,'a') as output:
        output.write(video)



    

        