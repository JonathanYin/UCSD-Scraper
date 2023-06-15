from flask import Flask, jsonify
import praw

app = Flask(__name__)

reddit = praw.Reddit(
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
    user_agent="YOUR_APP_NAME",
)


@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = []
    hot_posts = reddit.subreddit('ucsd').hot(limit=10)
    for post in hot_posts:
        posts.append(post.title)
    return jsonify(posts)


if __name__ == '__main__':
    app.run(debug=True)
