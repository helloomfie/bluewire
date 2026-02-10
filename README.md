# bluewire audits

emf audit logger (mvp). fastapi + postgres + a small server-rendered ui.

## why this exists
quick way to capture emf audit readings during a walkthrough, then export a clean csv for a client or for your own records.

## features (current)
- create an audit (client, location, date)
- add readings (room, device, distance, value, unit, notes)
- view audits in the browser
- export an audit to csv
- postgres-backed storage (via sqlalchemy + alembic)

## stack
- python 3.12+
- fastapi
- postgres
- sqlalchemy + alembic
- htmx (minimal ui interactions)

## quickstart (local)

requirements: python 3.12+ and docker

start postgres
```bash
docker compose up -d db
```
create env
```bash
cp .env.example .env
```
install deps
```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```
run migrations
```bash
alembic upgrade head
```
start the server
```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

open
	•	http://localhost:8000

routes
	•	GET / home (create audit + list recent)
	•	POST /audits create audit
	•	GET /audits/{audit_id} audit detail + readings table
	•	POST /audits/{audit_id}/readings add reading (htmx partial update)
	•	GET /audits/{audit_id}/export download csv

data model (mvp)
	•	audits: client_name, location, audit_date
	•	readings: audit_id, room, device, distance_cm, value, unit, notes

status

active development. current state:
	•	app boots locally
	•	migrations present
	•	ui + csv export working

next:
	•	redirect to audit detail after create
	•	basic auth + roles
	•	tags + attachments per audit

**screenshots**
