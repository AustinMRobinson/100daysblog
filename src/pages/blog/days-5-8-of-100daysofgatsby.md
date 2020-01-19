---
templateKey: blog-post
title: Days 5-8 of 100 Days of Gatsby
date: 2020-01-09T02:52:03.931Z
tags:
  - Gatsby
  - NetlifyCMS
  - Dark Mode
  - gatsby-image
  - Emotion
# tags: ["animals", "Chicago", "zoos"]
thumbnail: /img/days5-8.jpg
---
# Challenges

For Days 5-8, I was out of challenges on the official [\#100DaysofGatsby](https://www.gatsbyjs.org/blog/100days/) challenges (having only had one up to this point), so I went with some self-imposed challenges. 

These challenges were:

* Set up [NetlifyCMS](https://www.netlifycms.org/) as my CMS of choice
* Add dark mode (because of course)
* Set up [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)

## NetlifyCMS

On my previous explorations, I had either written all of my dynamic content directly in a markdown file or using Contentful as a CMS. Both of these solutions left me wanting more. Writing directly in markdown files was tough for me because I had never written in markdown before, and I also didn't want to have to bust open my code every time I wanted to write a blog post. With Contentful, I had a hard time being able to use some of the best Gatsby features (like gatsby-image). Contentful's content models (and the inability to group fields) also weren't my favorite. 

Luckily, NetlifyCMS is a great option, and being able to define the content models directly in the code allows for more flexibility for me. This especially comes in handy when I want to do content models for something like my homepage. I will migrate the majority of the copy in my site to be controlled by NetlifyCMS, which will need flexibility. 

Using NetlifyCMS with Gatsby was \*relatively\* easy, especially with the fact that I had already set up my blog posts using markdown files (which is what NetlifyCMS outputs to). Using the `gatsby-plugin-netlify-cms` plugin and its [documentation](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/) got me 90% of the way, and for the rest I had to look at the code for starters using the plugin (specifically for setting up the images folder).

## Dark Mode

Dark mode is fairly obvious in today's day and age, but I wanted to leverage the `prefers-color-scheme` media query that automatically sets the default site theme to the user's overall OS theme. I remember seeing it in early 2019, but [this blog post](https://brianlovin.com/overthought/adding-dark-mode-with-next-js) from Brian Lovin put it back on my radar. 

Luckily, I was able to implement this by using [gatsby-plugin-dark-mode](https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/). It was fairly straightforward, but the documentation on the plugin page wasn't much help. I had to dig through a [Gatsby starter](https://github.com/adamistheanswer/gatsby-starter-baysik-blog) using the plugin how I wanted in order to figure it out. I wanted to avoid stylesheets, and write all my CSS as CSS-in-JS, but the only way I could figure out how to make this work was with a global CSS file with variables for light and dark mode. Hopefully I can find a way to fix that in the future, but I'm leaving it for now. I also added some more styles to the site to make it look a bit prettier than it was in Days 1-4.

Really one of my only issues with this was getting the `prefers-color-scheme` media query to work. The dark mode toggle went off without a hitch, but I couldn't seem to figure out what I needed for that query. Luckily, after digging into that Gatsby starter, I found a `gatsby-browser.js` file that imported the global stylesheet. And that was all there was to it! I imported the global CSS variables in the `layout.js` file and referenced them wherever I wanted. Test out switching your OS theme and watch the site respond accordingly!

![A screenshot of dark mode on the website](/img/screen-shot-2020-01-08-at-10.30.14-pm.png "Dark Mode Screenshot")

## Gatsby-Image

This one is pretty easy, and one of my favorite things about Gatsby. Optimizing images for different breakpoints and offering loading effects like blur up is wonderful, so naturally I wanted to set this up asap. I waited until after I had NetlifyCMS running and then I installed the `gatsby-image` plugin, which also needs `gatsby-transformer-sharp` and `gatsby-plugin-sharp` in order to work. This worked wonderfully without files from NetlifyCMS, but for some reason it wasn't properly sourcing the images and I wasn't able to leverage the gatsby-image fragments I needed in order to use it. Luckily, I was able to solve this using [this](https://www.frontendstumbles.com/using-gatsby-image-with-netlify-cms/) handy blog post. I discovered I needed `gatsby-remark-relative-images`, and to make a couple changes in `gatsby-config.js` and `gatsby-node.js` to get it working properly. 

# Closing

I was able to accomplish all of the things I wanted to for this set of days! Honestly, I already did a lot of the hard work for the blog, so now the challenge is to keep finding things to do to make this site better outside of the challenges given directly by the Gatsby team. My goals for the next set of days are: make the site responsive, make a nice 'About' page, and to make a functioning contact form.
