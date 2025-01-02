# the hackersquare

the hackersquare is a community of cybersecurity experts getting together to help one another out. The cybersecurity industry relies on collaboration and networked learning. We provide a place for that to happen.

## Prerequisites
- [Docker](https://www.docker.com/) installed on your system.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohamedghan/the_hacker_square.git
   cd the_hacker_square
2. **Set Up Environment Variables**
    Copy the .env.local.example file to .env.local. create a github oauth 2.0 application and a sanity project
    ```bash
    cp .env.local.example .env.local
3. **Build the Docker image**
    ```bash
    docker build -t next_server .
4. **Run the Docker Image**
    remeber to pass the env.local file to the container
    ```bash
    docker run -p 3000:3000 --env-file=.env.local next_server