![A screenshot of code server](/posts/code-server/code-server.jpg)

So, imagine if there was a portable, convenient way to do software development
from any of your web-capable devices, but also leverage the power of beefier
machines to compile and run heavier applications? What if this coding
environment was reproducible and allowed you to seemlessly switch between
different devices or operating systems and pick up right where you left off?

If you guessed it, this coding environment already exists from
[code-server](https://docs.linuxserver.io/assets/docker-code-server), which lets
you run VS Code on a remote server, accessible through the browser! No longer
will you forget to push your work, deal with troublesome merge commits due to
changes on different devices, or feel the lag as your laptop struggles to run
beefy applications.

# Requirements

Now, you'll need a couple of items before you can use this super handy service:

- A reverse proxy (I recommend Nginx, but there's also Apache)
- An externally available server or instance to run this on
  - If you don't have a spare computer or server lying around, don't worry!
    There are tons of super cheap VPS services where you can get access to
    datacenter speeds at low prices! I'm not sponsored by OVH and I don't use
    them anymore, but I think the [$4.20/month starter
    instance](https://us.ovhcloud.com/vps/uc-vps-sandbox/) is probably the
    cheapest deal that I know of. If you find this isn't enough power, you can
    easily upgrade to a beefier instance or another service.

There are lots of guides on how to set up a reverse proxy like [this
one](https://www.domysee.com/blogposts/reverse-proxy-nginx-docker-compose) that
can help you with this, so won't cover that here. Personally, I use [Nginx
Proxy Manager](https://nginxproxymanager.com) to do my proxying, and I talk
about that more in [another blog post here](/posts/hosted).

Now, since you probably have your own languages and tools for development,
you'll have to extend the `linuxserver/code-server` Docker image to include
those. But don't fret, it's super easy! Since I mostly code in Elixir with
Phoenix, Hugo for this blog or Python, I've included them here for reference.
This image also includes some handy dev tools like the [Python Livereload
server](https://pypi.org/project/livereload/) for regular HTML websites and
[direnv](https://direnv.net/) to set environment variables, and a PostgreSQL
instance for my applications. I also use the super handy [asdf version
manager](https://github.com/asdf-vm/asdf) to manage binaries for all my
languages, but that installs to your home path so there's no need to add it to
the Docker image.

# Installation

First, you'll need to install [Docker
Compose](https://docs.docker.com/compose/install), on your machine. Next, Copy
the `Dockerfile`, `docker-compose.yml` and `.dockerignore` files to a directory
on your server. The `Dockerfile` contains the steps to create your own custom
Docker image, and the `docker-compose.yml` contains your runtime configuration
settings. `.dockerignore` will keep other files out of your Docker image and
make sure it's as small as possible.

Now, you'll want to tweak the `Dockerfile` to install the languages and
dependencies that you need for your own development. The
`linuxserver/code-server` image uses Ubuntu as a base, so you'll need to copy
any install commands after `RUN`, and you can use my `Dockerfile` as a
reference.

You'll also need to set up the bind mounts that will connect the `/config` and
`/home` directories to folders on your host machine. My config below just puts
them in the same folder, so simply run `mkdir data config postgres` in the same
folder. You'll also need to make sure they have the correct permissions by
running `chown 1000:1000 -R data/ config/`, since the `docker-compose.yml` I
have runs the containers with the user and group `1000`. If this doesn't exist
on your machine, you can change it to the UID and GUID for your own user and
group, or make a new one if you'd like.

You'll also need to run `chown 999:999 -R postgres` for PostgreSQL, assuming
that `999` corresponds to your desired PostgreSQL user account. If you have
another database, you'll need to adjust the folders and `docker-compose.yml` for
the image that you'll be using. If you're going to use a stock Nginx
configuration, set up `nginx.conf` in your directory now.

Finally, to run your server, all you need to do is do `docker-compose up
--build` to build and run your services or `docker-compose up -d --build` to
build and run the services in the background. If you run this in the background,
you can use `docker-compose logs` to view the standard output from the services
or `docker-compose logs -f` to follow along.

# Quirks

This setup actually has a few quirks, but luckily I've discovered them for you!

- The `linuxserver/code-server` image's home actually isn't `/home` like you'd
  expect, but is actually located at `/config` in the container. This means most
  of your system configuration (including VS Code's) will be located in this
  folder, and you'll need to place any of your keys or configs that you want
  accessible at `~/.ssh` and `~/.config` in the `config` folder that you
  created. I've mapped `/home` to my projects which are located in the `home`
  folder you created, but you can also use a different path, or remove the
  `/home` folder from your configuration completely if you'd like.
- Since Microsoft prohibits the use of any non-Microsoft VS Code instances from
  using Microsoft's extension marketplace, `code-server` is [unable to use the
  official VS Code extensions
  market](https://coder.com/docs/code-server/latest/FAQ#why-cant-code-server-use-microsofts-extension-marketplace)
  😱😱😱. Luckily, you can still use the [Open VSX
  Registry](https://open-vsx.org/) which contains most of the open-source
  extensions. I've found that Open VSX contains all the extensions that I use,
  but you can still [install extensions
  manually](https://coder.com/docs/code-server/latest/FAQ#how-do-i-install-an-extension-manually)
  if it's not available. The `SERVICE_URL` and `ITEM_URL` environment variables
  in `docker-compose.yml` are already set up to use the Open VSX registry, so
  you should be good to go there.
- By default, the `code-server` image isn't able to access your host machine's
  SSH agent. I use Arch Linux, so I've added the `SSH_AUTH_SOCK` environment
  variable to point to the SSH agent at `/run/ssh-agent.socket`, but if your
  SSH agent socket is located at a different directory, you'll need to modify
  the `docker-compose.yml` with the correct location.
- Similarly, the `code-server` image isn't able to access your host machine's
  Docker daemon as well. If you need to do Docker development from within this
  container, you can forward the Docker socket similarly to the SSH agent by
  [following these
  instructions](https://github.com/coder/code-server/blob/main/docs/FAQ.md#can-i-use-docker-in-a-code-server-container).
  There's also [Docker in
  Docker](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/docker-in-docker)
  if you really need it and you've seen _Inception_ too many times.

# Conclusion

I've been using this setup for multiple years now, and while it required some
setup, I really enjoyed daily driving it. If you spot any issues with this post,
feel free to let me know at [olivia@sculley.dev](mailto:olivia@sculley.dev) and
I'll be more than happy to take a look!

# Configuration

## Dockerfile

```docker
FROM linuxserver/code-server

# base packages
RUN apt-get update -qq -y && \
	apt-get upgrade -qq -y && \
	apt-get install -qq -y \
	git \
	curl \
	wget \
	inotify-tools \
	postgresql-client

# python
# these dependencies are from their respective asdf packages
# example: https://github.com/pyenv/pyenv/wiki#suggested-build-environment
RUN apt-get install -qq -y \
	build-essential \
	libssl-dev \
	zlib1g-dev \
	libbz2-dev \
	libreadline-dev \
	libsqlite3-dev \
	curl \
	libncursesw5-dev \
	xz-utils \
	tk-dev \
	libxml2-dev \
	libxmlsec1-dev \
	libffi-dev \
	liblzma-dev

# erlang
RUN apt-get install -qq -y \
	build-essential \
	autoconf \
	m4 \
	libncurses5-dev \
	libwxgtk3.0-gtk3-dev \
	libwxgtk-webview3.0-gtk3-dev \
	libgl1-mesa-dev \
	libglu1-mesa-dev \
	libpng-dev \
	libssh-dev \
	unixodbc-dev \
	xsltproc \
	fop \
	libxml2-utils \
	libncurses-dev \
	openjdk-11-jdk

# elixir
RUN apt-get install -qq -y unzip

# nodejs
RUN apt-get install -qq -y \
	python3 \
	g++ \
	make \
	python3-pip

# ruby
RUN apt-get install -qq -y \
	autoconf \
	patch \
	build-essential \
	rustc \
	libssl-dev \
	libyaml-dev \
	libreadline6-dev \
	zlib1g-dev \
	libgmp-dev \
	libncurses5-dev \
	libffi-dev \
	libgdbm6 \
	libgdbm-dev \
	libdb-dev \
	uuid-dev

# latex
RUN apt-get install -qq -y \
	texlive \
	texlive-latex-extra \
	latexmk \
	texlive-xetex \
	texlive-fonts-extra \
	fonts-ibm-plex

# neovim
RUN apt-get install -qq -y software-properties-common
RUN add-apt-repository -y ppa:neovim-ppa/stable
RUN add-apt-repository -y ppa:deadsnakes/ppa
RUN apt-get update -qq -y
RUN apt-get install -qq -y neovim

# livereload
RUN apt-get install -qq -y python3-livereload

# gh cli
RUN type -p curl >/dev/null || sudo apt install curl -y
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
	&& chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
	&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
	&& apt update \
	&& apt install gh -qq -y

# clean
RUN apt-get clean -qq -y
RUN apt-get autoclean -qq -y
RUN apt-get autoremove -qq -y
RUN rm -rf /usr/share/doc/*

ENV LANG C.UTF-8

# setup direnv
RUN curl -sfL https://direnv.net/install.sh | bash
RUN echo 'eval "$(direnv hook bash)"' >> $HOME/.bashrc
```

## docker-compose.yml

```yml
version: "3"

services:
  nginx:
    image: nginx:latest
    container_name: production_nginx
    volumes:
      # Make sure to reverse proxy to `http://code-server:8443`!
      - ./nginx.conf:/etc/nginx/nginx.conf
    ports:
      - 80:80
      - 443:443

  code-server:
    build:
      context: ./
    container_name: code-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=US/Eastern
      - PROXY_DOMAIN=code.yourcool.tld
      - PASSWORD=yourpassword # very important, otherwise it's an open shell on your container which is Not Good™
      # Alternatively, use a hashed password
      # - HASHED_PASSWORD=yourhashedpassword
      - SUDO_PASSWORD=verycoolsudopassword
      # - SUDO_PASSWORD_HASH
      # The following configurations are optional
      - EDITOR=nvim
      - DEFAULT_WORKSPACE=/home
      - SERVICE_URL=https://open-vsx.org/vscode/gallery
      - ITEM_URL=https://open-vsx.org/vscode/item
      - SSH_AUTH_SOCK=/ssh-agent.socket # corresponds to bind mount below
    restart: always
    volumes:
      - ./data/:/home
      - ./config:/config/
      # Forward local machine SSH agent
      - /run/ssh-agent.socket:/ssh-agent.socket
    depends_on:
      - code-server-db
    expose:
      - "8443"

  code-server-db:
    image: postgres:13
    container_name: code-server-db
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
    volumes:
      - ./postgres:/var/lib/postgresql/data
```

## .dockerignore

```text
data/
config/
postgres/
nginx.conf
```
