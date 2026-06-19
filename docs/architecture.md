# Architecture

## Backend Flow

Route
→ Controller
→ Service
→ Repository
→ PostgreSQL

---

## Frontend Flow

Page
→ Service (Axios)
→ API
→ Backend

---

## Full Request Flow

Browser
→ React Page
→ Axios Service
→ Express Route
→ Controller
→ Service
→ Repository
→ PostgreSQL

PostgreSQL
→ Repository
→ Service
→ Controller
→ React
→ Browser

---

## Architecture Style

Layered Architecture

Responsibilities:

Route:
Receives requests

Controller:
Handles request and response

Service:
Business logic

Repository:
Database queries

Database:
Stores data