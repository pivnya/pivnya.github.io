---
title: "Info"
description: "Information about the pivnya.cool site, the resources used and privacy policy."
---
{{% mdblock %}}
## About the Website
I have created this website using the [HUGO](https://gohugo.io/) with the [LUGO theme](https://github.com/LukeSmithxyz/lugo). The site is hosted on my [GitHub](https://github.com/pivnya/pivnya.github.io) via GitHub Pages. You can freely look up the code.  
  
If you have found any mistakes, unoptimised behaviour, or anything that could be improved, you can email me at pivnoy_chel@pivnya.cool or create an issue in my repository.  
{{% /mdblock %}}

{{% mdblock %}}
## Old site
Here are screenshots of how the site looked until **2026/08/29**, when it was updated.  
  
{{< columns >}}
{{< image src="oldsite_home.png" alt="Home page of my old site" height=200 style="" >}}
<--->
{{< image src="oldsite_reviews.png" alt="Links page of my old site" height=200 style="" >}}
<--->
{{< image src="oldsite_links.png" alt="Links page of my old site" height=200 style="" >}}
{{< /columns >}}

The **frutiger aero** styles for tables were taken from [Frutiger Aero Archive](https://frutigeraeroarchive.org/), so they looked a little bit different before. The whole site was very unoptimised and looked **bad**. I hate the PaperMod theme.
{{% /mdblock %}}

{{% mdblock %}}
## AVIF usage
This site uses [AVIF](https://aomediacodec.github.io/av1-avif/) as the primary source when possible and JPEG/PNG is set up as a fallback. Otherwise, when I decide so, it's not used ( ͡° ͜ʖ ͡°) AVIF is an image format based on the AV1 codec. So it's basically scraps left from a video format that were reused. Like a single frame from a video used as an image.  
  
It offers much smaller file size for lossy images, reducing their size roughly by 50% of a JPEG image and 20% of a WebP image, which is pretty cool. However, it technically falls short as an image format. The main thing is that it doesn't support [progressive rendering](https://youtu.be/UphN1_7nP8U), so it's all or nothing.  
  
I understand that many people dislike the AVIF for various reasons. Although I would love to use JXL and hope it will get [more support](https://caniuse.com/?search=JPEGXL) as the ultimately superior image format, it's very unlikely ([Google shills AVIF over JXL](https://storage.googleapis.com/avif-comparison/index.html)), especially for [HUGO](https://github.com/gohugoio/hugo/issues/11806).  
  
I still find AVIF very useful for reducing the image size. It is also easy to use since HUGO can actually [encode/decode](https://github.com/gohugoio/hugo/releases/tag/v0.162.0) it and it has [much broader support](https://caniuse.com/?search=AVIF).  
  
I recommend checking out [this blog post](https://jakearchibald.com/2020/avif-has-landed/) about AVIF and other image formats ^^  
{{% /mdblock %}}

{{% mdblock %}}
## Privacy Policy
This website does not use its own [trackers, analytics, or cookies](https://digdeeper.love/articles/websites.xhtml). This site uses JavaScript for such things as sounds and the navigation sidebar button on smaller screens. The sounds use only local storage for retaining their state, which may be flagged as a cookie by some extensions.  
  
As the site uses GitHub Pages for hosting, the visitor's IP address is collected by GitHub.  
From the [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection):
> When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not.  

You can learn more about their [Privacy Policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). However, it is not clearly stated if it's for visitors to GitHub, or visitors to sites hosted on GitHub pages.  
The only data explicitly stated to be collected for visitors of sites hosted via GitHub Pages, and therefore, this site, is the IP address.  
{{% /mdblock %}}

{{% mdblock %}}
## License
The site's code is licensed under [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) *(General Public License)*.  
  
Other content, like images and sounds, is subject to a separate copyright or licensing terms. I do not own them, and most of them were found online. For their respective authors, check the [credits](/credits) page.  
  
If you are a copyright holder and want your content to be taken down, please email me at pivnoy_chel@pivnya.cool.   
{{% /mdblock %}}