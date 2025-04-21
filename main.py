from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user, help
import logging

# Setup logging
logging.basicConfig(filename="logs/app.log", level=logging.INFO,
                    format="%(asctime)s - %(levelname)s - %(message)s")

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routes
app.include_router(user.router)
app.include_router(help.router)
