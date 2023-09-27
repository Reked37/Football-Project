#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Player, Coach, Team

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Players(Resource):
    def get(self):
        players_dict=[player.to_dict() for player in Player.query.all()]
        response=make_response(jsonify(players_dict),200)
        return response
    
    def post(self):
        json=request.get_json()
        new_player=Player(
            name=json['name'],
            jersey_number=json['jersey_number']
        )
        db.session.add(new_player)
        db.session.commit()
        player_dict=new_player.to_dict()
        return jsonify(player_dict), 201
api.add_resource(Players, '/players')

class PlayerByID(Resource):
    def get(self,id):
        player=Player.query.filter_by(id=id).first()
        player_dict=player.to_dict()
        response=make_response(jsonify(player_dict), 200)
        return response
    
    def patch(self,id):
        player=Player.query.filter_by(id=id).first()
        json=request.get_json()
        for attr in json:
            setattr(player, attr, json[attr])

        db.session.add(player)
        db.session.commit()
        player_dict=player.to_dict()
        response=make_response(jsonify(player_dict), 200)
        return response

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
        teams=Team.query.all()
        teams_dict=[team.to_dict() for team in teams]
        response=make_response(
            jsonify(teams_dict),
            200
        )
        return response
    
    def post(self):
        json=request.get_json()
        new_team=Team(
            name=json['name'],
            mascot=json['mascot'],
            coach_id=json['coach_id'],
            player_id=json['player_id']
        )
        db.session.add(new_team)
        db.session.commit()
        team_dict=new_team.to_dict()
        response=make_response(jsonify(team_dict), 201)
        return response
api.add_resource(Teams, '/teams')

class Coaches(Resource):
    def get(self):
        coaches=Coach.query.all()
        coaches_dict=[coach.to_dict() for coach in coaches]
        response=make_response(jsonify(coaches_dict), 200)
        return response

    def post(self):
        json=request.get_json()
        new_coach=Coach(
            name=json['name'],
            coaching_position=json['coaching_position']
        )
        db.session.add(new_coach)
        db.session.commit()
        coach_dict=new_coach.to_dict()
        response=make_response(jsonify(coach_dict), 201)
        return response
api.add_resource(Coaches, '/coaches')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

