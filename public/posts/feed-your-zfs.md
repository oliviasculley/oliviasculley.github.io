So, I've talked about my [project server](/posts/hosted/) in the past, but I
wanted to give a bit of an update after upgrading my server a bit. I go over
more details in the previous post, but basically I had been running over 100
docker containers of various personal services with only 32 gigs of ram, which
resulted in a bit of swap usage and no excess available ram, until now!

Whether using a server as an application host or a NAS, ZFS is a fantastic tool
to ensure data reliability and redundancy, and is a must-have on practically any
server. If you haven't heard of ZFS before, it's basically a software raid
system, much like brtfs. However, it's way more advanced than just raid, and can
provide lots of cool features like snapshots, compression, encryption,
dataset-level tuning, and more! I won't get too into ZFS in this post, but if
you're interested, then I highly recommend reading [this blog
post](https://jrs-s.net/2018/04/11/primer-how-data-is-stored-on-disk-with-zfs)
for more information on how ZFS stores data. I can't recommend his blog for ZFS
matters enough!

When using a software raid, one might consider upgrades by adding more drives,
or switching from spinning rust to SSD or even NVMe SSDs to speed up read times.
While these are all great options to also gain more storage, did you know that
upgrading a ZFS system's ram could also provide a great benefit in access speeds
and sequential read reductions, which is especially important with limited-read
devices like SSDs? ZFS provides many different levels of caching and
optimization to help speed up reads, but I'll mostly be talking about the ARC
cache, which caches recently accessed and
frequently-but-intermittently-requested data. By default, it is set to use up to
50% of your available ram, and will basically look something like this on any of
your ram monitoring:

![picture of cat going into a kirby cat house](/posts/feed-your-zfs/cat.jpg)

If you think I'm lying, check out this before and after from Grafana (links to
these dashboards are in the previous post), and note the intense climb as the
ARC cache gets populated after the downtime:

![grafana chart of memory](/posts/feed-your-zfs/memory.jpg)

Now that's a pretty steep climb! We can definitely see how I was hurting for
extra ram with all the swap before the upgrade, and then virtually no swap
after, but now let's take a look at the impact it had on reads:

![grafana chart of reads with swap](/posts/feed-your-zfs/swap-reads.jpg)

Ok, we can definitely see the dramatic reduction in the system SSD reads (which
isn't in the ZFS array, in blue in the chart) from not needing to swap gigabytes
of data. However, let's take a closer look at just the ZFS drives this time:

![grafana chart of reads](/posts/feed-your-zfs/reads.jpg)

Wow! You can see physical reads here have almost halved with typical activity,
just from being served directly from the ARC! Finally, just to make sure, we can
peer into the ZFS ARC stats for a better look under the hood:

![grafana chart of arc hits](/posts/feed-your-zfs/arc-hits.jpg)

Just looking at the raw number of hits, we can see the number of metadata hits
almost double, causing a modest increase of the percentage of metadata hits to
go from 80-90% to nearly 100%, virtually eliminating the random metadata reads
that prevent ZFS from getting down to business, serving the raw data. However,
we need to view the ARC prefetch data to see where the additional ARC cache
truly shines, responding effectively to repeated sequential reads:

![grafana chart of arc prefetch hits](/posts/feed-your-zfs/arc-prefetch.jpg)

And going from <5% to over 70% prefetch data hits after filling the ARC cache is
pretty impressive, meaning when ZFS has detected sequential reads of data and
decided to also cache adjoining data blocks to improve streaming performance,
70% of the time they were already present in the ARC cache! This is definitely
confirmation that the ARC cache is finally able to do it's thing to massively
speed up repeated accesses of sequential data.

Anyways, this is just one example of the many great features in ZFS that's not
just about drives and parity modes and whatnot. And if all else, a reminder:
have you fed your ZFS array today?
