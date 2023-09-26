#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        teams=['Chargers', 'Cowboys', 'Jets', 'Vikings', 'Browns', 'Cardinals', 'Panthers']
        def delete_tables():
            session.query(Player).delete()
            session.query(Team).delete()
            session.query(City).delete()
            session.commit()
        print("Starting seed...")
        
        def create_players():
            players=[]
            for player in range(10):
                player=Player(
                    name=fake.name(),
                    jersey_number=fake.number(),
                    team=rc(teams)
                )
                session.add(player)
                session.commit()
                players.append(player)

        def create_teams():
            for team in range(10):
                team=Team(
                    name=fake.name(),
                    mascot=fake.name()
                )
                session.add(team)
                session.commit()
                
        def create_city():
            for city in range(10):
                city=City(
                    name=fake.name(),
                    population=fake.number()
                )
                session.add(city)
                session.commit()



        
