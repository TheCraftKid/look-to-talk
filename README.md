# Look-to-Talk
This is a program that allows execution of an action based off the presence of
a stare, inspired by my own personal need and MIT's [experiment](http://groups.csail.mit.edu/vision/vip/papers/chi2002.pdf)
on the subject. 

## Running
This project uses Flask's development server, so make sure to install the Flask
module and set the FLASK_APP environment variable:
```shell
pip3 install flask
# Done at project root
export FLASK_APP="server.py"
# Start the server
python3 -m flask run
```

Go to `localhost:5000` to use the site.