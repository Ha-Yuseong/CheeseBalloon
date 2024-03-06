
from fastapi import FastAPI
from sqlalchemy.orm import Session

from config.database import SessionLocal, engine, Base
from controllers import users

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(users.router)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def base_get_route():
    return {"message": "hello dddworld"}
