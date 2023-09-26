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

    def __repr__(self):
        return f'Player {self.id}'


class City(db.Model, SerializerMixin):
    __tablename__= 'cities'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False, unique=True)
    population=db.Column(db.Integer)

    team=db.relationship('Team', back_populates='city')

class Team(db.Model, SerializerMixin):
    __tablename__= 'teams'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    mascot=db.Column(db.String)

    player_id=db.Column(db.Integer, db.ForeignKey('players.id'))
    city_id=db.Column(db.Integer, db.ForeignKey('cities.id'))

    player=db.relationship('Player', back_populates='team')
    city=db.relationship('City', back_populates='city')