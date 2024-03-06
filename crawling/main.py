
from fastapi import FastAPI
from sqlalchemy.orm import Session

from config.database import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def base_get_route():
    return {"message": "hello dddworld"}
