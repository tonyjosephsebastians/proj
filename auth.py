from ldap3 import Server, Connection, ALL
from fastapi import HTTPException
from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

def authenticate_user(username: str, password: str, domain: str) -> bool:
    try:
        server = Server(f"ldap://{domain}", get_info=ALL)
        conn = Connection(server, user=f"{domain}\\{username}", password=password, auto_bind=True)
        return conn.bound
    except Exception as e:
        return False

def create_jwt_token(data: dict):
    expire = datetime.utcnow() + timedelta(hours=1)
    data.update({"exp": expire})
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
