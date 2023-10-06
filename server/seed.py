#!/usr/bin/env python3

# Standard library imports
from random import randint, choice  as rc

# Remote library imports
from faker import Faker
import ipdb
# Local imports
from app import app
from models import db, Player, Team, Coach
fake = Faker()
team_names=['Chargers', 'Cowboys', 'Jets', 'Vikings', 'Browns', 'Cardinals', 'Panthers']

def delete_tables():
    print('Deleting records')
    Team.query.delete()
    Player.query.delete()
    Coach.query.delete()
    db.session.commit()

def create_coaches():
    print('Creating coaches')
    positional_coaching_roles=['Running back', 'Wide Receiver', 'Defensive Linemen', 'Defensive backs', 'Offensive Linemen', 'Quarterback']
    coaches=[]
    teams=Team.query.all()
    for i in range(30): 
        random_team=rc(teams)
        coach=Coach(
            name=fake.name(),
            coaching_position=rc(positional_coaching_roles),
            team_id=random_team.id
        )
        coaches.append(coach)
            
    db.session.add_all(coaches)
    db.session.commit()

def create_players():
    print('Creating players')
    teams=Team.query.all()
    players=[]
    for i in range(50):
        random_team=rc(teams)
        player=Player(
            name=fake.name(),
            jersey_number=fake.random_int(min=0, max=99),
            team_id=random_team.id
        )
        players.append(player)

    db.session.add_all(players)
    db.session.commit()

def create_teams():
    print('Creating teams')
    players=Player.query.all()
    coaches=Coach.query.all()
    teams=[]
    for i in range(20):
        team=Team(
            name=fake.name(),
            mascot=fake.name(),
        )
        teams.append(team)

    db.session.add_all(teams)
    db.session.commit()

def player_coach_table():
    players = Player.query.all()
    coaches = Coach.query.all()

    for player in players:
        num_coaches=random.randint(1,30)
        player_coaches= random.sample(coaches, num_coaches)
    
        for coach in player_coaches:
            player.coaches.append(coach)
    
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        delete_tables()
        create_teams()
        create_coaches()
        create_players()
        player_coach_table()
        
