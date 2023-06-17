from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import praw

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

reddit = praw.Reddit(
    client_id=os.getenv("CLIENT_ID"),
    client_secret=os.getenv("CLIENT_SECRET"),
    user_agent=os.getenv("USER_AGENT"),
)


@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Hello, World!"})


@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = []
    hot_posts = reddit.subreddit('ucsd').hot(limit=10)
    for post in hot_posts:
        posts.append(post.title)
    return jsonify(posts)


@app.route('/api/posts/cs', methods=['GET'])
def get_cs_posts():
    posts = []
    cs_posts = reddit.subreddit('ucsd').search("CS OR CSE", limit=10)
    for post in cs_posts:
        posts.append({
            "title": post.title,
            "selftext": post.selftext,
            "permalink": f"https://www.reddit.com{post.permalink}",
            "flair": post.link_flair_text,
        })
    return jsonify(posts)


if __name__ == '__main__':
    app.run(debug=True)
