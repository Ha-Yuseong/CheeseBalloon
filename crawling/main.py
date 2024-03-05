
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def base_get_route():
    return {"message": "hello world"}
