#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker
import ipdb
# Local imports
from app import app
from models import db, Player, Team, City
fake = Faker()
team_names=['Chargers', 'Cowboys', 'Jets', 'Vikings', 'Browns', 'Cardinals', 'Panthers']

def delete_tables():
    print('Deleting records')
    Team.query.delete()
    Player.query.delete()
    City.query.delete()
    db.session.commit()

def create_city():
    print('Creating cities')
    cities=[]
    for i in range(10):
        population=int(fake.random_int(min=100, max=100000))
        city=City(
            name=fake.city(),
            population=population
        )
        cities.append(city)
            
    db.session.add_all(cities)
    db.session.commit()

def create_players():
    print('Creating players')
    teams=Team.query.all()
    players=[]
    for i in range(10):
        random_team=rc(teams)
        player=Player(
            name=fake.name(),
            jersey_number=fake.random_int(min=0, max=99),
        )
        player.team=random_team
        players.append(player)

    db.session.add_all(players)
    db.session.commit()

def create_teams():
    print('Creating teams')
    cities=City.query.all()
    teams=[]
    for i in range(10):
        selected_city=rc(cities)
        team=Team(
            name=fake.name(),
            mascot=fake.name(),
            city=rc(cities)
        )
        
        teams.append(team)

    db.session.add_all(teams)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        delete_tables()
        create_city()
        create_teams()
        create_players()
        
#changes cities to coaches
        
        
       



        
