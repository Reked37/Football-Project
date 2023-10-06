from sqlalchemy import MetaData, ForeignKey, Column
from sqlalchemy.orm import validates, relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'

    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String, nullable=False)
    jersey_number= db.Column(db.Integer)
    team_id=db.Column(db.Integer, db.ForeignKey('teams.id'))
    team=db.relationship('Team', back_populates='players')

    serialize_rules=('-team',)


class Coach(db.Model, SerializerMixin):
    __tablename__= 'coaches'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False, unique=True)
    coaching_position=db.Column(db.Integer)
    team_id=db.Column(db.Integer, db.ForeignKey('teams.id'))
    team=db.relationship('Team', back_populates='coaches')

    serialize_rules=('-team.players', '-team.coaches')

class Team(db.Model, SerializerMixin):
    __tablename__= 'teams'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    mascot=db.Column(db.String)

    players=db.relationship('Player', back_populates='team')
    coaches=db.relationship('Coach', back_populates='team')

    serialize_rules=('-players','-coaches')

# class Fans(db.Model, SerializerMixin):
#     __tablename__= 'fans'

#     id=db.Column(db.Integer, primary_key=True)
#     name=db.Column(db.String, nullable=False)

#     player_id=db.Column(db.Integer, db.ForeignKey('players.id'))
#     player=db.relationship('Player', secondary='players', back_populates='fans')