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

    team=db.relationship('Team', back_populates='player')


class Coach(db.Model, SerializerMixin):
    __tablename__= 'coaches'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False, unique=True)
    coaching_position=db.Column(db.Integer)

    team=db.relationship('Team', back_populates='coach')

class Team(db.Model, SerializerMixin):
    __tablename__= 'teams'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    mascot=db.Column(db.String)

    player_id=db.Column(db.Integer, db.ForeignKey('players.id'), nullable=False)
    coach_id=db.Column(db.Integer, db.ForeignKey('coaches.id'))

    player=db.relationship('Player', back_populates='team')
    coach=db.relationship('Coach', back_populates='team')