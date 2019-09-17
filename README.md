# The Bot Crew
This is the playground for **The Bot Crew** website: 

See: [thebotcrew.com](thebotcrew.com)

## Local Development
### Run webserver using Docker
Two ways to do this. You can either run it via the command line manually
```bash
docker build -t hhsu15/the_bot_crew_ui -f Dockerfile.dev .
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app hhsu15/the_bot_crew_ui
```
or use docker-compose (preferred)
```bash
docker-compose up --build  # in case it's not working, force the build
```

## Production Deployment
Production deployment is done via Travis CI on merging/pushing to master branch. 
The website is currently hosted on AWS using Elastic Beanstalk. 

### Production Build
If you want to build for production, you can run:
```bash
docker build -t hhsu15/the_bot_crew . # by default, use Dockerfile
docker run -p 8080:80 hhsu15/the_bot_crew # map nginx default port 80 to local 8080
```

