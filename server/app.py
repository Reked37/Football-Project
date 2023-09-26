#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Player, City, Team

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Players(Resource):
    def get(self):
        players_dict=[player.to_dict for player in Player.query.all()]
        return jsonify(players_dict), 200
    
    def post(self):
        json=request.get_json()
        new_player=Player(
            name=json['name'],
            jersey_number=json['jersey_number']
        )
        db.session.add(new_player)
        db.session.commit()
        player_dict=new_player.to_dict()
        return jsonify(player), 201
api.add_resource(Players, '/players')

class PlayerByID(Resource):
    def get(self,id):
        player=Player.query.filter_by(id=id).first().to_dict()
        return jsonify(player), 200
    
    def patch(self,id):
        player=Player.query.filter_by(id=id).first()
        json=request.get_json()
        for attr in json:
            setattr(player, attr, json[attr])

        db.session.add(player)
        db.session.commit()
        player_dict=player.to_dict()
        return jsonify(player_dict), 200

    def delete(self, id):
        player=Player.query.filter_by(id=id).first()
        db.session.delete(player)
        db.session.commit()
        response_body={"message": "Player has been successfully deleted"}
        response=make_response(
            response_body,
            200
        )
        return response
api.add_resource(PlayerByID, '/players/<int:id>')

class Teams(Resource):
    def get(self):
        teams=Teams.query.all().to_dict()
        return jsonify(teams), 200
    
    def post(self):
        json=request.get_json()
        new_team=Team(
            name=json['name'],
            mascot=json['mascot']
        )
        db.session.add(new_team)
        db.session.commit()
        team_dict=new_team.to_dict()
        return jsonify(team_dict), 201
api.add_resource(Teams, '/teams')

class City(Resource):
    def get(self):
        cities=City.query.all().to_dict()
        return jsonify(cities), 200

    def post(self):
        json=request.get_json()
        new_city=City(
            name=json['name'],
            population=json['population']
        )
        db.session.add(new_city)
        db.session.commit()
        city_dict=new_city.to_dict()
        return jsonify(city_dict), 201
api.add_resource(City, '/cities')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

