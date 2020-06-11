from get_data import *
from run_backend import search_db

from flask import Flask, jsonify
import json
import os
import time

app = Flask(__name__)

def get_predictions(update=False):
    videos = []
    new_videos_json = "database.json"
    if not os.path.exists(new_videos_json):
        search_db()
    if update: search_db 

    #pegando os vídeos do arquivo json
    with open(new_videos_json, 'r') as data_file:
        for line in data_file:
            line_json = json.loads(line)
            line_json["update_time"] = time.time() - line_json["update_time"]
            videos.append(line_json)

    videos = sorted(videos, key= lambda x: x['score'], reverse=True)[:30]

    return jsonify({"videos":videos})

@app.route('/videos', methods=['GET'])
def main_page():
   
    videos = get_predictions(update=False)

    return videos, 200

@app.route('/update', methods=['GET'])
def update_data():
   
    videos = get_predictions(update=True)

    return videos, 200

if __name__ == '__main__':
    app.run(debug=True)