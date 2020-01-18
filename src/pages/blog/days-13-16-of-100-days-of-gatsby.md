---
templateKey: blog-post
title: Days 13-16 of 100 Days of Gatsby
date: 2020-01-17T02:40:12.885Z
tags:
  - Gatsby
  - NetlifyCMS
  - Open Graph
thumbnail: /img/days13-16.jpg
---
# Intro

For this set of updates, my goals were: 

* Put some good content on the About page
* Hook up open graph images on the SEO component
* Reach goal: set up blog categories that allow for hot sorting of the posts

I was able to get 1/3 of these goals accomplished (lol), so lets jump into it!



## About Page

I added some much better content to the About page! Now I have a photo of me and a little bio of information about me. I took this opportunity to set up the page as its own CMS item on the NetlifyCMS. This means that all of the page content (title, heading, subheading, bio, bio image, location, etc.) is all pulled from the CMS-populated markdown file. This will be the de facto setup for all pages moving forward. 

![Screenshot of the about page](/img/screen-shot-2020-01-15-at-8.48.45-pm.png "About Page V1")

## Open Graph Images

This failed miserably.. again. I still can't seem to figure out how to get this meta information from my SEO component (leveraging React Helmet), which is put into the Layout component, to populate any information from my site metadata. I followed [this](https://www.gatsbyjs.org/docs/add-seo-component/) information on the Gatsby docs and still came up short. This will just have to be an ongoing process until I can make it work.

## Editorial Workflow

Although this wasn't one of my goals for this batch of days, it was a welcome addition. One of my pet peeves of using  NetlifyCMS for writing my blog posts was that it did not allow me to save drafts. I wanted to use it to keep track of the work I did while I did it. Luckily I discovered that adding `publish_mode: editorial_workflow` to my `config.yml` file allowed me to access more features in NetlifyCMS! 

Enabling this meant that I could now categorize posts into 'Drafts', 'In Progress, and 'Ready'. This helped allowed me to write my posts beforehand to keep track of the work I did during the batch of days.

![Screenshot of the NetlifyCMS Editorial Workflow](/img/screen-shot-2020-01-15-at-9.06.43-pm.png "NetlifyCMS Editoral Workflow")

# Closing

Overall, it was just a bleh few days for the 100 Days of Gatsby. Luckily I am still very far ahead (the most recent challengs were to host the site somewhere and then set up gatsby-image), but there is still so much more I want to do. My big goal for the next few days is to get the blog categories set up. If I can't do it like Wes Bos did on the [/uses](https://uses.tech/) page, I'll do the default way that every Gatsby blog does.
