# The Bot Crew 

## Local Development
### Run webserver using Docker
Two ways to do this. You can either run it in the command line manually
```bash
docker build -t hhsu15/the_bot_crew_ui -f Dockerfile.dev .
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app hhsu15/the_bot_crew_ui
```
or use docker-compose (preferred)
```bash
docker-compose up --build  # in case it's not working, force the build
```

