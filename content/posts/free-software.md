---
title: "Free Software Hall of Fame"
description: "Some of my favorite free software projects"
date: 2020-03-20T00:00:00-06:00
coverImage: /images/posts/software.jpg
categories: ["software"]
type: posts
---

As you might know, I'm an avid [free software
advocate](https://www.gnu.org/philosophy/free-sw.en.html), and I try to use free
software over proprietary ones as much as I reasonably can. These are some of
the best free software projects that I have found, which I either use on a daily
basis or have made me say "how did I possibly live before this?". Hopefully
you'll be able to discover a project that'll make you feel the same, too!

{{< toc >}}

# Syncthing

[Syncthing](https://syncthing.net/) is one of my favorite open-source projects
right now and one I use on a daily basis. It syncs files between all of my
devices, all through encrypted connections and with no need for my files to be
stored on the cloud (read: someone else's computer). Its easy-to-use and highly
customizable network-baed UI is also extremely convenient. I'd highly recommend
it to anyone needing to transfer files or replace Box/Dropbox/Drive, etc.

# Music Player Daemon

[MPD](https://www.musicpd.org/) and its associated ecosystem is my go-to way to
enjoy music. I adore the server-client model that MPD uses, which lets me easily
use any frontend to browse and control my entire music library. Currently, I use
[cantata](https://github.com/CDrummond/cantata) on desktop, which has a ton of
handy features and is super user friendly. Setting up MPD on a central server
allows multiple people to run clients and control a singular MPD instance that
could be hooked up to, say, a home audio system.

# KDEConnect

[KDEConnect](https://community.kde.org/KDEConnect) provides fantastic
integration of your mobile device with a Linux computer. While it's natively a
KDE application, I use it through my GNOME desktop through a handy [gnome
extension](https://extensions.gnome.org/extension/1319/gsconnect/). In addition
to MPRIS controls, GSConnect provides direct PulseAudio volume modification, as
well as a bunch of other handy features like remote mouse/keyboard input, remote
command execution, file transfers, 2-way notification syncing, SMS messaging and
more, all connected through an encrypted connection. While its connections are
restricted to local networks only, with a home OpenVPN server it shouldn't be an
issue.

# MPV

[MPV](https://mpv.io/) is a great minimalist vide player, with a fantastic
ecosystem of addons and plugins. I use
[mpv-mpris](https://github.com/hoyon/mpv-mpris) to enable MPRIS controls on my
GNOME desktop.

# GDM

The [Gnome Desktop Manager](https://www.gnome.org/) is a great desktop
environment with lots of features. In addition, it's [huge library of
extensions](https://extensions.gnome.org) can provide almost any modification
that you could want. However, I've since moved to i3/sway for a more minimal
desktop environment.

## Extensions

- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)
- [Wallpaper Changer](https://extensions.gnome.org/extension/1225/wallpaper-changer/)
- [Window Is Ready - Notification Remover](https://extensions.gnome.org/extension/1007/window-is-ready-notification-remover/)
- [windowNavigator](https://extensions.gnome.org/extension/10/windownavigator/)
- [Workspace Scroll](https://extensions.gnome.org/extension/943/workspace-scroll/)
- [Bluetooth Quick Connect](https://extensions.gnome.org/extension/1401/bluetooth-quick-connect/)
- [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
- [CPU Power Manager](https://extensions.gnome.org/extension/945/cpu-power-manager/)
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
- [Disconnect Wifi](https://extensions.gnome.org/extension/904/disconnect-wifi/)
- [Freon](https://extensions.gnome.org/extension/841/freon/)
- [GSConnect](https://extensions.gnome.org/extension/1319/gsconnect/)
- [gTile](https://extensions.gnome.org/extension/28/gtile/)
- [JackVolume](https://extensions.gnome.org/extension/1135/jackvolume/)
- [Keyboard battery](https://extensions.gnome.org/extension/2170/keyboard-battery/)
- [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/)
- [OpenWeather](https://extensions.gnome.org/extension/750/openweather/)
- [Panel OSD](https://extensions.gnome.org/extension/708/panel-osd/)
- [Refresh Wifi Connections](https://extensions.gnome.org/extension/905/refresh-wifi-connections/)
- [Removable Drive Menu](https://extensions.gnome.org/extension/7/removable-drive-menu/)
- [Screenshot Window Sizer](https://extensions.gnome.org/extension/881/screenshot-window-sizer/)
- [Sound Input & Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)
- [TopIcons Plus](https://extensions.gnome.org/extension/1031/topicons/)

# i3 / sway

i3 is a minimalist tiling window manager that allows you to greatly customize
your desktop environment with keybinds. I find that it really makes it easy to
move between different windows, and makes me more productive. The configuration
relies on an intimate knowledge of command line and command line tools which may
seem more difficult, but allow you to really customize your desktop experience.
sway works exactly the same as i3, but is written to use Wayland instead of X.

## Addons

- [Waybar](https://github.com/Alexays/Waybar)
- [swaylock](https://github.com/swaywm/swaylock)
- [swayidle](https://github.com/swaywm/swayidle)
- [rofi](https://github.com/davatorium/rofi)
- [mako](https://github.com/emersion/mako)
- [playerctl](https://github.com/altdesktop/playerctl)
- [kanshi](https://sr.ht/~emersion/kanshi/)
- [slurp](https://github.com/emersion/slurp)
- [wf-recorder](https://github.com/ammen99/wf-recorder)
- [grim](https://github.com/emersion/grim)

# Arch Linux

I use [Arch](https://www.archlinux.org/) for my operating system. Among all the
distros that can be considered minimalist, Arch Linux is very popular and in my
experience, [just tends to
work](/images/posts/software/works-on-my-machine.png), albeit after a
non-significant amount of configuration time. Its modularity and emphasis on
"working beneath the hood" are the main reasons why my computer literacy is
where it is now. As a result of bootstrapping it from nearly scratch, I've
become extremely comfortable with essential system administration tools and
learned so much more about how computers actually work than anything I could
learn in a class. I highly recommend Arch to anyone who doesn't just want a
great operating system, but also desires to truly know their computer from the
ground up.

# Firefox

I use [Firefox](https://www.mozilla.org/en-US/firefox/new/) for my web browser
for several reasons. Mozilla's commitment to open-source software and privacy
has been encouraging, but I mainly use it for the [Temporary Containers
addon](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/),
which is all but a killer feature in my mind. This allows each tab to be
isolated from cookies and other tracking features, as well as switching between
multiple accounts super easily.

## Extensions

- [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/)
- [GSConnect](https://addons.mozilla.org/en-US/firefox/addon/gsconnect/?src=search)
- [KeePassXC-Browser](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/)
- [Reddit's Moderator Toolbox](https://addons.mozilla.org/en-US/firefox/addon/reddit-moderator-toolbox/)
- [Feed Preview](https://addons.mozilla.org/en-US/firefox/addon/feed-preview/)
- [Gnome Shell Extension](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/)
- [Firefox Multi-Account Containers](https://addons.mozilla.org/en-GB/firefox/addon/multi-account-containers/)
- [HTTPS Everywhere](https://www.eff.org/https-everywhere)
- [Live Reload](https://addons.mozilla.org/en-US/firefox/addon/livereload-web-extension/)
- [Image Search Options](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/)
- [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
- [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/)
- [Reddit Enhancement Suite](https://addons.mozilla.org/en-US/firefox/addon/reddit-enhancement-suite/)
- [Song Identifier](https://addons.mozilla.org/en-US/firefox/addon/song-identifier/)
- [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/?src=search)
- [The Camelizer](https://addons.mozilla.org/en-US/firefox/addon/the-camelizer-price-history-ch/)
- [To Google Translate](https://addons.mozilla.org/en-US/firefox/addon/to-google-translate/)
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [Video Speed Controller](https://addons.mozilla.org/en-US/firefox/addon/videospeed/)
- [Visual Hashing](https://addons.mozilla.org/en-US/firefox/addon/visual-hashing-webext/),
    really cool, never type in your password wrong again
- [Web Scrobbler](https://addons.mozilla.org/en-US/firefox/addon/web-scrobbler/)
- [Content-Type Fixer](https://addons.mozilla.org/en-US/firefox/addon/content-type-fixer/),
  force certain content-types to display in browser instead of downloading as attachments
- [Temporary Containers](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/)
- [Tree Style Tabs](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/),
    completely revolutionizes how I browse. Here's my
    [custom style for TST](/assets/tst-style.css), and my custom
  [userChrome.css](/assets/userChrome.css) to hide the tab bar, too.
  - [TST Bookmarks Subpanel](https://addons.mozilla.org/firefox/addon/tst-bookmarks-subpanel/)
  - [Move unloaded tabs for TST](https://addons.mozilla.org/en-US/firefox/addon/move-unloaded-tabs-for-tst/)
  - [Tab Unloader for TST](https://addons.mozilla.org/en-US/firefox/addon/tab-unload-for-tree-style-tab/)
  - [Bookmark Tree for TST](https://addons.mozilla.org/en-US/firefox/addon/bookmark-tree-for-tst/)

# youtube-dl

I use the incredibly comprehensive [youtube-dl](https://youtube-dl.org/) for
downloading media from almost any website that hosts it, and its amount of
customizability is unprecedented. Youtube-dl also integrates very nicely with
[ffmpeg](https://ffmpeg.org) to convert files into almost any format imaginable
with just one extra argument.

# Lutris

[Lutris](https://lutris.net/) allows you to effortlessly run your games with
[Wine](https://www.winehq.org/) and Valve's
[Proton](https://github.com/ValveSoftware/Proton) with one click. It also boasts
a great UI with impressive amounts of customization (even better than winecfg in
my opinion!).

# Quassel

[Quassel](https://quassel-irc.org/) is a great IRC client that utilizes a
server/client model, as well as allowing for extensive themeing and
customization. What more could you need?

# Trackma (Linux) / Taiga (Windows)

One of the rare Windows-only programs here, [Taiga](https://taiga.moe/) is
absolutely fantastic for keeping track of your consumption of Japanese media.
However, since I use Linux, I currently use
[Trackma](https://github.com/z411/trackma), which has support for Anilist, Kitsu
(what I use), MAL, and more. Taiga's automatic recognition/playback detection
worked fantastically, but I have personally yet to get Trackma's feature to
work. However, it is still extremely convenient in order to update and keep
track of all your media.

# Anki

[Anki](https://apps.ankiweb.net/) is an incredibly solid flashcard program that
adjusts to your knowledge level to help you learn as effectively as possible. I
use it to improve my 中文 vocab, and the AnkiWeb platform allows you to
effectively sync your sets to all your devices, and even your phone!

# Keepass XC

[Keepass XC](https://keepassxc.org/) securely stores all of your passwords.
Combined with the browser extension, it can also prefill form data for websites
and even fill in simple HTTP authentication, which is also super useful.

# Deluge

[Deluge](https://deluge-torrent.org/) is a torrent client that uses a
client/server architecture. It meets the perfect balance of efficiency and handy
features, like labels for easy sorting, that put it above other good choices
such as [Transmission](https://transmissionbt.com/) or
[rTorrent](https://github.com/rakshasa/rtorrent) for me personally.

# Nginx

Did you know its pronounced "engine-ex", and not "en-jinx"? I won't say how long
it took me until I realized. Anyways, [nginx](https://nginx.org) is a great
open-source hosting proxy server, and it is infinitely better than Apache.
Combined with
[nginx-fancy-index](https://github.com/Naereen/Nginx-Fancyindex-Theme), nginx
works great as a super-lightweight fileshare as well.

# rsync / rsnapshot

[rsync](https://linux.die.net/man/1/rsync) is the swiss army knife of getting
files from point a to point b, and can be pretty easily dropped in to replace
`cp`, if you wanted. However, as the -sync suffix implies, rsync really shines
when syncing files across folders, file systems, and even completely different
machines with ssh. rsync will hash your files block by block, allowing you to
skip redundant file transfers.

I used to have a custom backup script to use rsync, but I've recently discovered
[rsnapshot](https://rsnapshot.org/), which builds off of rsync to create the
ultimate backup system. Making use of good use of hardlinks to save disk space,
rsnapshot can create efficient snapshots every month, week, day and hour. If
you're using Arch, the [Arch
Wiki](https://wiki.archlinux.org/index.php/Rsnapshot) makes editing the config
file and setting up the systemd timers a breeze. I've found that rsnapshot makes
it super easy to create versioned, efficient backups.

# Jekyll / Hugo

[Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/) are very similar
to each other, both being very easy and intuitive to use, with the biggest
hurdle typically getting them installed properly.

For me, site generators strike
the perfect balance between manually creating HTML files and using monolith or
proprietary platforms like Wordpress, while still being powerful, accessible and
open-source.

While there are many other platforms that I could have used instead
of Hugo that would probably have worked just as well at hosting and sharing the
content I'm putting here, there's just something special when you are in full
control of the product from the raw words in the beginning to the final HTML
files being served in the end.

Setting up a simple generated website/blog is a fun project that I'd recommend
to anyone who doesn't have a blog platform already or isn't satisfied with their
current workflow, and also has an added bonus of having a nice product at the
end.

# Wireguard

[Wireguard](https://wireguard.com/) is my recommended way of setting up a home
VPN connection. It takes a bit of legwork at the beginning to generate all the
appropriate keys and make sure things are working with your network, but at the
end of the day you'll end up with a secure, reliable and fast VPN connection. As
always, the [Arch wiki](https://wiki.archlinux.org/title/WireGuard) is very
helpful, and if you use GDM, then NetworkManager will have full support.
However, its important to note that GDM doesn't expose all of its settings in
the default settings application (such as auto-connecting to your VPN on certain
wifi connections); instead, you'll need to install and open
[nm-connection-editor](https://www.archlinux.org/packages/extra/x86_64/nm-connection-editor/).
Just a note that the default Arch package doesn't come with a `.desktop` file
for you, either (although that's pretty easy to fix for yourself).

# Calibre

[Calibre](https://calibre-ebook.com/) is hands-down the absolute best way to
manage your ebook collection. No matter how you source them, Calibre supports a
bajillion different features from your standard metadata and tagging to some
killer features in no particular order: automatic searching to find metadata
from online sources such as Google Books or Amazon, downloading high resolution
covers from said sources, device autoconnection, and content server hosting.
Calibre is also super customizable too, allowing you to change almost every
aspect of the UI and download new icon packs from within the default settings
panel! If you want to get into reading books digitally, Calibre is absolutely
essential.

# Koreader

Another e-reader tool that I can't recommend enough,
[Koreader](https://koreader.rocks) is also an amazing open source offering,
specifically tailored for low-refresh-rate e-ink screens like on my [Kobo
Aura](https://us.kobobooks.com/products/kobo-aura), which I love so much. It has
an incredible breadth of features, besides an almost infinitely configurable
reading experience (size, text, font, dictionary addons, network and backlight
settings) but also some extra fancy ones like Calibre server wireless connection
(no need to plug in your device anymore!), wireless OTA updates, and even a
built-in SSH server (!!!). Koreader was easy to install on my Kobo with the
[Kobo Start Menu](https://www.mobileread.com/forums/showthread.php?t=293804),
and I know that I'll be very satisfied with this e-reading experience for years
to come.

## E-reader sidenote

Seriously, if you've never tried reading on an e-ink screen, go down to your
local bookstore and try it out. It also has the added bonus of being able to
store hundreds or thousands of books in a super light and convenient package. If
you've ever taken more than a couple books with you at once before, you'll
quickly realize how much bulk and volume physical books actually have, and how
quickly they can add up. If you do get one, make sure to get one with a built-in
backlight. As an owner of the original Kindle (rip that free unlimited 3G) and
Kindle Touch, I never realized how indispensible that backlight actually was
until I got my Kobo years later. Personally, I'd recommend the Kobo since it's
much more straightforward to jailbreak and tweak the internals. However, one
note you might encounter is that by default the file system is mounted `noatime`
and `nodiratime`, which will break the "sort by last read" setting for Koreader
(it'll sort via last modified instead). To fix this, you'll want to change to
`relatime` if you can. The mounting script is in `/etc/init.d/rcS`, where you
will need to modify the above accordingly.

# Tiny Tiny RSS

[Tiny Tiny RSS](https://tt-rss.org/) is a GPLv3 rss reader that is self-hosted.
Personally, i've found that it's one of the most easy-to-use and feature-rich
rss readers out there. While it needs to be self-hosted, it fully supports the
greader API so that most mobile rss clients can sync with ttrss, keeping all of
your feeds up to date even on the go.

# Mumble

[Mumble](https://www.mumble.info) is a free, open source voice chat application
that's super lightweight and secure. I use it to chat or game with my friends,
and the desktop and mobile clients work really well. There's even a
self-hostable [web client under
development](https://github.com/Johni0702/mumble-web)!

# Searx

[Searx](https://searx.github.io/searx/) is a self-hostable metasearch engine
that aggregates results from a wide variety of search engines and services. With
Searx, your searches will be protected from tracking and profiling, only
returning you with the results that you need. Since it implements the
[OpenSearch](https://developer.mozilla.org/en-US/docs/Web/OpenSearch) format,
you can even add it easily to most major browsers!

# Revolt

[Revolt](https://revolt.chat/) is an upcoming chat application that takes heavy
inspiration from Discord in it's design, but under the hood it's 100% completely
free software. It seems like a fantastic alternative to Discord or Slack, and
I'm excited to see it's future development!

# ArchiveBox

[ArchiveBox](https://archivebox.io/) is a self-hostable website archiver that
can make copies of websites or media that you might want to save later on. Think
of it like a personal [Wayback Machine](https://web.archive.org/).

# Mealie

[Mealie](https://hay-kot.github.io/mealie/) is a self-hostable recipe planner
that doesn't just let you save recipes for future use, but also plan out your
mealplan for the week! Mealie's parser works on pretty much every recipe I've
come across, getting rid of the super long paragraphs of junk and trimming down
the recipes just to their steps.

# N.eko

[N.eko](https://github.com/m1k1o/neko) is a self-hosted virtual browser that is
very similar to the now defunct rabb.it website. You and your friends can join a
n.eko instance and browse to any website like Youtube and begin watching videos
in perfect sync. Anyone can grab control and visit another website, letting you
and your friends have the perfect virtual party!

# Jellyfin

[Jellyfin](https://jellyfin.org) is a self-hosted, open source media server much
like Plex. I like using Jellyfin to view my media since it's fully open source
and has lots of cool features like sync play that make watching your digital
media library a joy. There are great mobile apps for Android to stream your
media library on the go, as well.

# Wakatime / Wakapi

[Wakatime](https://wakatime.com) is a productivity-tracking application that
hooks into Visual Studio Code and relays your activity to their servers. While
this service and the extension might be proprietary, there are open-source
compatible backend services like [Wakapi](https://github.com/muety/wakapi) that
you can use the Wakatime extension with instead. You can even expose Prometheus
metrics to feed your wakatime data into Grafana with [this
dashboard](https://grafana.com/grafana/dashboards/12790)!

# Conclusion

Well, I hope that you've found something that can really enjoy from the list
above. Got any more that you think I'd like to try out? Feel free to send them
to [olivia@sculley.dev](mailto:olivia@sculley.dev) and I'll be more than
happy to take a look!
