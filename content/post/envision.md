---
title:  "Envision Center projects"
description: "Projects by Olivia Sculley"
date: 2019-08-08T00:00:00-06:00
categories: ["portfolio"]
type: post
---

I worked at the [Purdue Envision
Center](https://envision-public-builds.s3.amazonaws.com/EnvisionCenter/index.html)
from January 2019 to August 2020. During my time there, I had the opportunity to
work on some really interesting and rewarding projects. Most of these projects
were created with C#/.NET using Unity 3D, and range anywhere from roughly 2k to
over 10k lines of code. Almost all of these projects are public and able to be
used in a browser, so definitely don't hesitate to try some of them out!

## Completed Projects

### [Showcase Site](https://envision-public-builds.s3.amazonaws.com/EnvisionCenter/index.html)

{{< image classes="fancybox" src="/images/posts/envision/site.png" title="Showcase Site screenshot" >}}

This one is pretty self-explanatory, but I really like how it turned out!
Piggy-backing off some work done by an earlier developer and a template, I
modified it pretty heavily in order to support projects and models, as well as a
lightweight search function.

### [College of Engineering - Electrical Engineering Virtual Labs](https://envision-public-builds.s3.amazonaws.com/ElecLab/index.html)

{{< image classes="fancybox" src="/images/posts/envision/elec.png" title="College of Engineering - Electrical Engineering Virtual Labs" >}}

The EE project has been my longest running and most complicated project to-date.
Made for Purdue's College of Engineering, this virtual lab was built from the
ground up to fully simulate the process of diagramming circuits with a
breadboard. With this application, users can arrange 3D components in order to
build circuits which are then agnostically checked according to the diagram.
This virtual lab also implements SPICE probing to give students actual voltage
readings or plot voltage behavior over time. It's been incredibly rewarding to
gradually build this application from scratch, and I've spent a lot of time
ensuring that the structure is simple, modular, and accommodating for future
development. I've also really enjoyed being able to create an object-oriented
design for a problem that lends itself very well to individual components. As of
Fall 2020, it features 10 modules with 3-4 circuits each, as well as Brightspace
support for automated grading. As part of the second phase of development, I've
been able to coordinate development with developers such as [Saad
Jamal](https://www.linkedin.com/in/saad-jmal/), who's been a big help! You can
view the source code on [the RCAC's github page
here](https://github.rcac.purdue.edu/EnvisionCenter/eleclabs-public), or [read
more about it in this article
here](https://www.purdue.edu/newsroom/purduetoday/releases/2020/Q4/purdues-forward-thinking-virtual-engineering-and-science-lab-initiative-helped-meet-challenge-of-a-global-pandemic-and-more.html).

### [College of Engineering - Aeronautics Virtual Labs](https://envision-public-builds.s3.amazonaws.com/AeroLab/index.html)

{{< image classes="fancybox" src="/images/posts/envision/aero.png" title="College of Engineering - Aeronautics Virtual Labs Screenshot" >}}

This was one of the first projects made for Purdue's College of Engineering, and
virtualizes instructional aviation and aeronautic labs into a web-based
simulation. The submodules of this lab allow the user to practice procedures
with industrial machinery, perform experiments, and observe virtual data
readouts. While I was responsible for most of the implementation, the amazing
[Kenny Park](https://parkkennypark.com) helped me with finishing this
application off (especially lab 6) and adding lots of polish. Overall, we're
really happy with this lab turned out!

### [Chicken Digestion Game](https://ansc.purdue.edu/poultryeducation)

{{< image classes="fancybox" src="/images/posts/envision/chicken.png" title="Chicken Digestion Game" >}}

The aptly named "Chicken Digestion Game" is a short online point-and-click game
providing a comprehensive overview of a chicken's digestive system targeted
towards fourth graders in a classroom environment. While most of the design was
provided, the project was a ton of fun to work on since we had full reign over
presentation, art, and animation. I was extremely lucky to work with the
incredibly talented [Kalli Zhang](https://zkalli.portfoliobox.net/) to create
the overall visual feel of the project, and I am very satisfied with how it
turned out. The developmental timeline was a bit short since the project design
was a bit simple in scope, and I got to learn a lot about Unity's 2D pipeline
and know the event system just a bit better 😃.

### [Turkey Animal Welfare](https://envision-public-builds.s3.amazonaws.com/AnimalWelfare/index.html)

{{< image classes="fancybox" src="/images/posts/envision/turkey.png" title="Turkey Animal Welfare Screenshot" >}}

An educational experience created for [Dr. Marisa
Erasmus](https://ag.purdue.edu/ansc/Pages/profile.aspx?strAlias=merasmus)
presenting a short instructional narrative illustrating differences in animal
welfare on turkey farms. Since this narrative project was shorter in scope and
similar to "Pollinator - Visit to the Royal Palace," I was able to reuse a lot
of the narrative logic that I had created previously. You can read more about it
in this
[article](https://ag.purdue.edu/stories/students-are-gobbling-up-this-simulation/)
written by Emma Ea Ambrose!

### [Pollinator Dissection](https://extension.entm.purdue.edu/POL_Virt_Learn/dissection.html)

{{< image classes="fancybox" src="/images/posts/envision/dissection.png" title="Pollinator Dissection Screenshot" >}}

Pollinator Dissection is a web-based 3D virtualized dissection application aimed
to help middle and high school students learn more about several important
plant-pollinator relationships. When I first joined the project, an early
prototype had been partially completed by a developer who had already moved on
into industry, but the project was far from complete. While the core recursive
dissection pattern was already in place, I transformed the project from a simple
proof-of-concept to the fully-featured application you can view today. The large
number of dissection specimens meant that this project required heavy
collaboration with artists as well. Ultimately, Pollinator Dissection was a
great starting project and the heavy asset involvement helped me hit the ground
running with all of the fantastic personnel at the Envision Center.

### [Subsurface Tile Drainage](https://envision-public-builds.s3.amazonaws.com/TileDrainage/index.html)

{{< image classes="fancybox" src="/images/posts/envision/field.png" title="Field Drainage Screenshot" >}}

A quick project with [Dr. Jane
Frankenberger](https://engineering.purdue.edu/~frankenb/) to build a web-based
interactive visualization tool illustrating the impact of varying water drainage
parameters on water runoff. This project actually involved lots of close
coordination with one of the most talented tech artists I know, [Andrew
Sumner](https://www.artstation.com/andrewsumner). While the animation itself may
seem simplistic, it actually required significant R&D before becoming the final
product that you can see today. With some of Drew's mind-bending Houdini magic,
we were able to procedurally generate the field and animations, and package them
in a compatible format for a lightweight and accessible online release.

### [Pollinator Matching Game](https://extension.entm.purdue.edu/POL_Virt_Learn/dissection.html)
 
{{< image classes="fancybox" src="/images/posts/envision/matching.png" title="Pollinator Matching Game Screenshot" >}}

Pollinator Matching Game is a simple web-based matching game aimed to help
middle and high school students learn more about several important
plant-pollinator relationships. When I was put onto the project, the majority of
the backend logic was already completed, however, more work on the UI and polish
was still needed. Ultimately, I helped implement a more responsive UI design and
ensured a smooth and successful deployment.

### [Pollinator - Visit to the Royal Palace](https://dev.extension.entm.purdue.edu/POL_Virt_Learn/royal_palace.html)

{{< image classes="fancybox" src="/images/posts/envision/royal.png" title="Pollinator - Visit to the Royal Palace Screenshot" >}}

When I jumped into the project, development had just about wrapped up on its
dialog and was ready to begin major production. A simple stack-based proof of
concept was passed on to me, but it was clear that the inherent complexity of
the branching narration required a much more powerful and flexible system. I
helped to create a custom, serializable dialog system capable of complex
narrative workflows while still allowing for flexible modifications, as well.

### [College of Engineering - Hydraulics Virtual Labs](https://envision-public-builds.s3.amazonaws.com/HydroLab/index.html)

{{< image classes="fancybox" src="/images/posts/envision/hydro.png" title="HydroLabs Screenshot" >}}

Currently ongoing project for the Purdue College of Engineering virtualizing
hydraulic labs into web-based 3D interactive simulations. Lab content includes
simulating data outputs from hydraulic phenomenon and industrial systems. I was
the first to break ground on the project initially, and ended up contributing
to roughly half of the labs in the current result.

### [College of Engineering - Chemical Engineering Virtual Labs](https://envision-public-builds.s3.amazonaws.com/ChemLab/index.html)

{{< image classes="fancybox" src="/images/posts/envision/chem.png" title="ChemLabs Screenshot" >}}

Currently ongoing project for the Purdue College of Engineering virtualizing
chemical volume into web-based 3D interactive simulations. Lab content includes
calculating properties of mixed chemicals, taking data points, and graphing
outcomes. Similarly to the Hydraulics lab, I helped to create the project from
scratch and ended up contributing to roughly half of the final product.

### Collab VR

<iframe width="100%" height="450"
  src="https://www.youtube.com/embed/pM5M2ByEW-w"
  frameborder="0" allowfullscreen
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
</iframe>

An exciting project to build a comprehensive, multiplayer virtual-reality
learning platform for dynamic and immersive media in a classroom setting! From
standalone VR devices to conventional webpages, Collab VR aimed to give both
educators and students the tools they need to gain a deeper intuition that only
VR can provide. Initially targeting 3D supernova datasets, this application will
eventually expand to hopefully cover any number of subjects at Purdue
University. Unfortunately, I was only able to help work on some of the very
beginnings of the application, but I'm definitely excited to hear from its
upcoming developments!
