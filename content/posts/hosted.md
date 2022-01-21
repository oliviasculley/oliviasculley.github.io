---
title:  "Self-hosted"
description: "a short post about Olivia's homelab"
date: 2021-12-08T00:00:00-06:00
gallery:
  - /images/posts/hosted/grafana.png "The docker dashboard with a few tweaks"
  - /images/posts/hosted/status-page.png "you know your self-hosting hobby is a
    bit out of control when your status page has two pages..."
  - /images/posts/hosted/nginx.png "look at all those hosts"
  - /images/posts/hosted/nginx-grafana.png "grafana dashboards are so pretty"
autoThumbnailImage: yes
categories: ["software"]
type: posts
---

I feel like a home server is a bit like the techie's project car. It might not
work perfectly 100% of the time, and it might be a bit louder and take up more
space in your garage, closet, or living room (if you're like me) than your
significant other might hope, but there's nothing more rewarding than getting to
take it out for a spin at the end of the day.

{{< toc >}}

# Why Not

First, devil's advocate. There can definitely be a few downsides to hosting your
own stuff. Evaluate some of them based on your own circumstances, in no
particular order:

- Can definitely eat up a fair amount of time
- Each service will require some amount of ongoing maintenance
- Might require networking shenanigans or might not even be possible if your ISP
  puts you behind some weird network routing
- Requires money to buy hardware (although this is definitely scalable to your
  aspirations)

# Why

However, I self-host in spite of these for several reasons:

1. **Data:** The foremost reason I self-host is to protect my data. With open
   source software and your own instances, you can be reasonably sure that your
   information is staying with you.
2. **Independence:** When you self-host, you can reduce your reliance on third
   party companies who might data-mine, sell your data, run proprietary
   software, or promote other damaging business practices.
3. **Tech:** Self-hosting can expose you to interesting new technologies,
   protocols, platforms and best practices that can help you improve your
   technological literacy, even if you aren't a developer. Since I've started
   self-hosting, i've gotten more familiar with software and protocols like
   Docker, Grafana, Prometheus, Minio, ZFS, IPFS, Gemini, ActivityPub and more!
4. **Cool Software:** A lot of cool software is being produced for self-hosters.
   Whether it's being able to fully automate your home with [Home
   Assistant](https://www.home-assistant.io/), or planning out your weekday
   meals with [Mealie](https://hay-kot.github.io/mealie/), there's a ton of cool
   software that's available for people who host their own services. There's
   already a fantastic [list of awesome self-hosted
   services](https://github.com/awesome-selfhosted/awesome-selfhosted) with a
   really fitting name, so I'll just link that here. If any of these services
   seem interesting to you, I'd really encourage you to get a self-hosted setup
   so that you can easily add or remove services whenever you want!

# [The Setup](https://www.youtube.com/watch?v=OyHddNCbBfY)

Everyone's self-hosting setup will be different due to personal preferences and
infrastructure needs, so I'll stick to giving a quick overview of my setup and
why I chose to use the stack that I did. My personal benchmark was ease of use,
since I knew I wanted to host a lot of services and I wanted to spend as little
time as possible doing system administration. I'm really happy how my setup
turned out, since I'm hosting an obscene number of services but I'm firmly
convinced that administration couldn't have gone smoother.

## Hardware

Hardware-wise, I am just using my old gaming pc I built back in high school, and
used the chance to upgrade my personal machine to a really compact mini-ITX
build :D. As a normal full-size ATX system, it fits really well in my
[Supermicro
745](https://www.supermicro.com/products/chassis/4U/745/SC745TQ-700.cfm) case I
bought off of someone in a local Linux user's group. I removed the CD drive and
added a random 5x3.5 HDD hot swap caddy, so with the 8 Supermicro hot bays in
the front, it comes up to 13 hot swap bays without even having to expand into a
DAS! My CPU cooler just barely fits into the aforementioned 4U rackmount, which
I have in a [12U StarTech
rack](https://www.amazon.com/12U-4-Post-Open-Rack/dp/B0037ECAJA/) I got off
Amazon, since I knew I wanted a rack format for cleaning. I am planning on
putting [this really nice walnut
countertop](https://www.amazon.com/dp/B002MZTTTY/) on top which should turn it
into a [really nice looking nightstandy
thing](https://www.reddit.com/r/Ubiquiti/comments/ensexs/consolidated_homelab_in_12u_rack_with_walnut/).
I just leave it next to my computer in my living room 😎👍.

## Nginx

First, I have nginx running as an overarching reverse proxy to 50+ subdomains
and counting. While you could do all of this manually, I've really enjoyed using
[Nginx Proxy Manager](https://nginxproxymanager.com) to manage my subdomains for
me. With NPM, you can spin up a subdomain with caching, websocket-compatibility,
block common exploits, and add fancy features like HSTS (if your domain doesn't
enforce it already), HTTP/2, and more with like 5 clicks. NPM takes care of
registering and renewing domains with certbot automatically, so you don't even
have to lift a finger to get an automatic setup. You can always add custom
elements to any part of the final config through extended config files and even
in parts of the UI, so rest assured it's easy to customize NPM to your ideal
setup. When you set up Nginx Proxy Manager, you can even use it to host itself
by pointing it to `http://nginx-proxy-manager:81`, or whatever you have the
container named as in your `docker-compose.yml`.

## Dynamic DNS

Since you'll most likely be hosting on a home internet line without a permanent
external IP address, your IP address could change at any time. Hopefully you
aren't behind a NAT, but you'll still need to make sure your domain name is
pointed at your external IP address. I personally use [ddclient with Google
Domains](https://support.google.com/domains/answer/6147083?hl=en#zippy=%2Cset-up-a-client-program-on-your-gateway-host-or-server),
which supports ddclient with minimal config, like so:

```
ssl=yes
protocol=googledomains
login=generated_username
password=generated_password
coolwebsite.tld
```

Pretty easy, huh?

## Docker

Docker is by far the biggest piece of the puzzle, helping host anywhere from
80-90 containers so far. Hosting that many different pieces of software on one
machine would've been improbable for one person in the past, but with modern
containerization it's a breeze. I keep all the configs as `docker-compose.yml`
files in their own directories, and starting or stopping a service is as easy as
`docker-compose up -d` or `docker-compose down` in each directory.

In addition, Docker also handles its own networking. By creating on Docker
network, you can refer to containers directly by their container name, which
eliminates the need to map ports to your machine. In NPM, this makes reverse
proxying very clear and explicit with addresses like `http://grafana:3000`. You
also get the peace of mind that your containers are only visible to each other,
so no more trying to figure out what service is running on port xyz (most of the
time).

While competiting solutions like Podman or LXC seem like promising more
lightweight alternatives, Docker is definitely pretty touch and go, and I've
been really happy with the ecosystem.

## ZFS

I use ZFS to ensure my data is stored redundantly, but there are lots of other
perks as well. Expansion is effortless when you can just add more drives to the
arrays, but I've also split out [datasets based on their
usage](https://jrs-s.net/2019/04/03/on-zfs-recordsize/), with most files on
SSDs, and large content files on WD Reds. While I haven't used too many other
features like snapshots, it's reassuring to have access to powerful ZFS features
and the wider ecosystem for a solution that's guaranteed to be scalable, and I
never need to worry about running out of space on any single disk.

## Monitoring

I use [Grafana](https://grafana.com/) and [Prometheus](https://prometheus.io/)
to help monitor my services. Grafana has a billion dashboards for pretty much
anything you could want (I even use Grafana to [graph my productivity in VS
Code](/posts/free-software/#wakatime--wakapi)). However, here are my configs and
the main dashboards that I use.

### Configs

- [docker-compose.yml](/assets/grafana-docker-compose.yml)
- [node_exporter_recording_rules.yml](/assets/node_exporter_recording_rules.yml)
- [prometheus.yml](/assets/prometheus.yml)

### Dashboards

- [Docker](https://grafana.com/grafana/dashboards/893)
- [Nginx](https://github.com/nginxinc/nginx-prometheus-exporter/blob/master/grafana/README.md)
- [ZFS](https://grafana.com/grafana/dashboards/11337)

## Uptime

I use [UptimeRobot](https://uptimerobot.com/) to help monitor the uptime of my
services. Their free plan allows up to 50 free monitors and allows you to
generate a status page, which is definitely good enough for me.

## Backups

While I do have versioned backups thanks to
[rsnapshot](/posts/free-software/#rsync--rsnapshot), I don't have them encrypted
and going off site with a service like [restic](https://restic.net/). However,
hopefully I'll get around to this soon!

# Conclusion

Since I've embarked on this self-hosted journey, I've managed to become much
more familiar with monitoring and hosting technologies that, as a generic
developer, I could've easily never encountered. However, I am the most grateful
to my server for allowing me and my friends to move away from centralized big
tech, and instead towards some awesome open source projects that I can't imagine
living without. While it might not be practical to expect everyone to self-host
all of their own services, for those with the know-how and time, it can be
incredibly rewarding to not just provide these services for yourself, but to
your friends and family as well.

# Photos
