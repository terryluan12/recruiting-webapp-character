from flask import request
from flask_restx import Namespace, Resource

players = Namespace("players", description="Player related operations")

playersData = {}

@players.route("/players/<int:pid>")
class PlayersView(Resource):
    def put(self, pid):
        print(f'Saving player ${pid} data: ${playersData[pid]}')
        playersData[pid] = request.form['data']
        return {"message": "Successfully saved"}, 200
