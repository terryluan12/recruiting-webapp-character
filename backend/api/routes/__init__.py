from flask import Blueprint
from flask_restx import Api

from api.routes.players import players as playersNameSpace

blueprint = Blueprint("api", __name__)
api = Api(blueprint, doc="/docs")

api.add_namespace(playersNameSpace, "/api")