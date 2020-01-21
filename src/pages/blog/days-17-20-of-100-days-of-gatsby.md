---
templateKey: blog-post
title: Days 17-20 of 100 Days of Gatsby
date: 2020-01-21T03:01:08.191Z
tags:
  - Gatsby
  - Tags
  - Filtering
thumbnail: /img/days17-20.jpg
---
# Intro

For this set of days, my main goal was to set up a tag / category system for the blog. This is with the intention of making it easier to see which topics I cover in each post and also quickly see when I added specific things to the blog. 

## Tags

I did a hybrid of what I wanted on the [/uses page](https://uses.tech/) from Wes Bos and also still preserved the ability to link directly to a specific tag filter. Linking to the specific filter was something that Wes [pointed out](https://twitter.com/wesbos/status/1215310634226724864?s=20), which I actually liked the idea of once I thought about it a bit more. With this in mind, I was able to set up tags pretty easily following the [wonderful documentation](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/) on Gatsby. I put these tags as filters on the new `/blog` page so people can see the different topics I talk about in each post. To enable that further, I added these tags on the `blog-post` pages. On click, it takes you to the Blog page already filtering using that tag. Since Gatsby is so fast, it feels like this is all inline filtering on the page rather than separate pages. So I honestly feel like I got the best of both worlds.. the nice UX of inline filtering with the tags, and also the ability to link to a page with a filter pre-enabled. 

![Screenshot showing an enabled tag filter](/img/screen-shot-2020-01-20-at-9.00.31-pm.png "Tag filter")

## Homepage Restructure

To give some better distinction between the homepage and the new blog page, I limited the blog posts on the homepage to only the most recent 2, with a CTA button to see the rest of the blog posts. Eventually I will add more info about 100 Days of Gatsby on this homepage and spruce it up a bit more.

# Closing

Implementing these changes was pretty easy, which is a relief considering I couldn't really understand how Wes set up the filtering on the /uses page. As for my goals for the next batch of days, I'd like to:

* Set up the ability to search (either the tags, blog posts, or both)
* Create an 'up next' component to have at the end of the blog post
