# /usr/bin/env python
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return stream()


@app.route('/stream')
@app.route('/stream/<looking>')
def stream(looking=False):
    looking_string = 'looking' if looking else 'not looking'
    return render_template('index.html', looking=looking_string)


def main():
    app.run()


if __name__ is '__main__':
    main()
