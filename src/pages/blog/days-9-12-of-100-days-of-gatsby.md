---
templateKey: blog-post
title: Days 9-12 of 100 Days of Gatsby
date: 2020-01-13T04:43:53.146Z
thumbnail: /img/days9-12.jpg
---
### Warning: This is a lame set of updates

I accomplished 2/3 of the goals I set in the last blog post, but I didn't really do anything well because I was pretty busy with other things for the last few days. Hopefully you can forgive me ❤️

# Responsive

Ta-Da! The site is now responsive! This was pretty easy considering how barebones the site is, but it's nice regardless. I still don't love how bloated it feels to write media queries for CSS-in-JS, where a single stylesheet would be able to tackle responsive problems a bit more consistently. This is probably only an issue because I don't know much about how to do this well yet. 

The big win here was implementing a hamburger menu! It's dead simple and I love it.

![A GIF showing the hamburger menu interaction](/img/ezgif.com-optimize.gif "Hamburger Menu")

# Contact Form

I was able to get the contact form up and running with virtually no issues. It's pretty simple with Netlify forms & Gatsby. Any questions I had were answered by [this](https://codebushi.com/form-handling-gatsby-netlify/) blog post. It seems like a normal form with just a few special affordances to connect to Netlify: `data-netlify-honeypot` and "`hidden"` attributes for a couple inputs.

The one thing that I personally wanted to nail was a floating label for each form input field. I leveraged `react-floating-label-input`, which was a great starting point that I was able to style on top of. I also adapted it to create a floating label text area as well. 

![The floating label text field](/img/screen-shot-2020-01-12-at-10.57.07-pm.png "Floating Label")

The inputs are a bit hacky (especially with the styling), but they work! I will revisit them in the future to clean them up.

# Closing

I didn't get around to working on the About page like I hoped, but that is top of my list for days 13-16. I also tried to figure out how to get open graph images working in the meta tags for my SEO component, but no dice. That will also be tabled for the next few days. 

I'd really like to get these things done by the end of day 16:

* Put some good content on the About page
* Hook up open graph images on the SEO component
* Reach goal: set up blog categories that allow for hot sorting of the posts (like Wes Bos' [/uses page](https://uses.tech/))
