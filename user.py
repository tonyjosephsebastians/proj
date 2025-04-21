from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from auth import authenticate_user, create_jwt_token
import logging

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str
    domain: str

@router.post("/login")
def login(data: LoginRequest):
    if authenticate_user(data.username, data.password, data.domain):
        token = create_jwt_token({"sub": data.username})
        logging.info(f"User '{data.username}' logged in successfully.")
        return {"token": token}
    else:
        logging.warning(f"Failed login attempt for user '{data.username}'.")
        raise HTTPException(status_code=401, detail="Invalid credentials")

