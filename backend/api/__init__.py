from flask_cors import CORS

from flask import Flask
from api.routes import blueprint as api
import os

def create_app():
    app = Flask(__name__)
    
    CORS(app)

    app.register_blueprint(api)

    return app
