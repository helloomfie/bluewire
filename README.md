# bluewire home

EMF consulting landing page. Next.js frontend + FastAPI backend.

## what it does

marketing site for bluewire home — an EMF consulting service.
visitors can read about the service, understand the process, and submit a contact request.

## features (current)
- landing page with hero, services, and process sections
- contact form that posts to the FastAPI backend
- FastAPI `/health` and `/contact` endpoints
- CORS configured for local Next.js dev server

## stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- FastAPI (Python 3.12+)
- Pydantic + email-validator

## quickstart (local)

requirements: node 18+ and python 3.12+

### frontend

```bash
cp .env.example .env.local   # optional: set NEXT_PUBLIC_API_URL
npm install
npm run dev
```

open http://localhost:3000

### api

```bash
cd api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

api runs at http://localhost:8000

## routes

| method | path       | description               |
|--------|------------|---------------------------|
| GET    | /health    | health check              |
| POST   | /contact   | submit contact form       |

## status

active development. current state:
- landing page is functional (hero, services, process, contact form)
- api boots and accepts contact form submissions (in-memory only — no db yet)
- images in place

## next steps

- [ ] persist contact submissions to postgres (sqlalchemy + alembic)
- [ ] send email notification on contact form submit
- [ ] add redirect or thank-you page after form submission
- [ ] basic auth for an admin view of contact submissions
- [ ] extract api url to env var (`NEXT_PUBLIC_API_URL`) so it's not hardcoded
- [ ] docker compose for local dev (next + api + db)
- [ ] deploy frontend (vercel) and api (railway / fly.io)

**screenshots**
