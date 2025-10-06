# Static HTML Project

## Overview
This is a simple static website that displays an embedded Canva design presentation titled "+Diversão +Conhecimento= Aprendizado que Fica pra Sempre!" by Felipe Souza Chiacchio.

## Project Structure
- `index.html` - Main HTML page with embedded Canva iframe
- `server.py` - Python HTTP server configured to serve static content on port 5000
- `.replit` - Replit configuration file

## How It Works
The project uses Python's built-in HTTP server to serve the static HTML file. The server is configured with:
- Port: 5000
- Host: 0.0.0.0 (to allow access from Replit's proxy)
- Cache-Control headers to prevent caching issues in the Replit environment

## Running the Project
The server automatically starts via the configured workflow and serves the content at port 5000.

## Deployment
Configured for autoscale deployment using the same Python server.
