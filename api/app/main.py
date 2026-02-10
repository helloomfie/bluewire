from __future__ import annotations

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI(title="bluewire api")


class ContactIn(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/contact")
def contact(payload: ContactIn):
    # mvp: just echo back + pretend we stored it.
    # later: write to postgres, send email, etc.
    return {"status": "received", "name": payload.name}
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)