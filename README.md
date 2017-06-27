# conspiracy-theory-comment-generator

## What it does

Generates YouTube-style comments on conspiracy theories

## How it does it

It scrapes comments from YouTube videos (currently hard-coded to [FLAT EARTH - How can NASA recover from this, EVER???](https://www.youtube.com/watch?v=ksSZPNQaFP8)),
feeds those comments into a [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) text generator and uses this generator to
produce some new similar-sounding comments

## Try it out

It's a work in progress but to see what it does so far:

```bash
# clone the repo
git clone https://github.com/borilla/conspiracy-theory-comment-generator

# switch to the repo directory
cd conspiracy-theory-comment-generator

# install required modules
npm install

# run the program
node index.js
```

Output looks something like:

```
Best proof ever Go to college and get it out every now and again to reminisce Nasa is trying to abuse
anyones beliefs but thats pretty much it Also if you have lived in both hemispheres as I guess Just my
guess it would create to much light pollution Anybody that believes that the Earth during a space filled with

what about the atmosphere its about ambient lightif you stand in a football stadium with all the dumb
aholes are gonna say its to cover up the money thats spent but you know what longitude they wore at
To also know what the government spends tons of money on black budget programs that they dont wish people
to know they

I just find this stuff interesting. means is that there is 3000 people as stupid as you are Take away the
light grey Lunar surface must be on the conspiracy too Has this never cross your minds Looking forward to
some constructive replies. place you flat earth when they thin the heard seriously. perpetuate a lie but
they dont take

Wow Missing films Lying astronauts WTF over Good taxpaying Americans should demand a refund Oh thats
right the taxpayers are milk cows on the dark side of the Moons surface would make it to bright to see
images of space why do we never stop this ball from being in space but whats that smell My only wish is I

Nasa lies but you know what longitude they wore at To also know their latitude they needed the sun also
is spinning on invisible magnetic energy fields at 1000 mph at the equator then above Ok well if thats
the truth although it could be and wouldnt even know where to look deep into the problem and test everything
```
(Yep, I'm working on finding a better generator algorithm!)
