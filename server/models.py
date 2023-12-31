from sqlalchemy import MetaData, ForeignKey, Column, Table
from sqlalchemy.orm import validates, relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
player_coach_association=db.Table('player_coach_association',
db.Column('player_id', db.Integer, db.ForeignKey('players.id')),
db.Column('coach_id', db.Integer, db.ForeignKey('coaches.id')))

class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'

    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String, nullable=False)
    jersey_number= db.Column(db.Integer)

    team=db.relationship('Team', back_populates='players')
    team_id=db.Column(db.Integer, db.ForeignKey('teams.id'))

    coaches=db.relationship('Coach', secondary=player_coach_association, back_populates='players')

    serialize_rules=('-team.players', '-team.coaches', '-coaches')

    def __repr__(self):
        return f'Player(id={self.id} name={self.name} jersey_number={self.jersey_number} team_id={self.team_id})'


class Coach(db.Model, SerializerMixin):
    __tablename__= 'coaches'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False, unique=True)
    coaching_position=db.Column(db.Integer)
    
    team=db.relationship('Team', back_populates='coaches')
    team_id=db.Column(db.Integer, db.ForeignKey('teams.id'))

    players=db.relationship('Player', secondary=player_coach_association, back_populates='coaches')

    serialize_rules=('-team.players', '-team.coaches', '-players')

    def __repr__(self):
        return f'Coach(id={self.id} name={self.name} coaching_position={self.coaching_position} team_id={self.team_id})'

class Team(db.Model, SerializerMixin):
    __tablename__= 'teams'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    mascot=db.Column(db.String)

    players=db.relationship('Player', back_populates='team')
    coaches=db.relationship('Coach', back_populates='team')

    serialize_rules=('-players','-coaches')

    def __repr__(self):
        return f'Team(id={self.id} name={self.name} mascot={self.mascot})'

