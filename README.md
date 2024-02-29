# Next.js with Hygraph Blog Starter
A starter repo for a blog built with Next.js, HyGraph, TypeScript, and Tailwind CSS. 

Logo by <a href="https://www.freepik.com/free-vector/gradient-code-development-logo_11817413.htm#query=dev%20logo%20marketing&position=0&from_view=keyword&track=ais&uuid=b3f1ecea-40b2-490c-aee5-62365fdc170a">Freepik</a>

## Get up and running

[Login to your HyGraph account](https://auth.hygraph.com/login?state=hKFo2SBtVjVaNEtOTGNBUzc3ZzdlZktlelFocnNyNUFMRGU0ZqFupWxvZ2luo3RpZNkgVWJMcWR3X2xJaV9wVGk4Y1ZxcGxHNTRkN1J2RDh4XzmjY2lk2SA4VldTZHlVaHRaVDQzbkFpcHIyZmpLUmhqSm1wOHNZeQ&client=8VWSdyUhtZT43nAipr2fjKRhjJmp8sYy&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fapp.hygraph.com%2Fauth&scope=openid%20https%3A%2F%2Fgraphcms.com%2FloginsCount&mode=login&nonce=kosQOJcAcpy4~ImeadghrxDX8OuCzcTL&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4xIn0%3D) and create a new template, selecting the **"Basic blog"** template provided from HyGraph's team.

<img alt="Select Blog Starter" src="public/docs/blog-starter.png" height="auto" width='420'>

Create a `.env.local` file in the root of this repository and add the following line: `HYGRAPH_ENDPOINT=insert-your-endpoint-here`.
For finding the endpoint, click on the link "Project Settings" in the sidebar on the left, the on "API Access". The string that you want to copy is the "Content API".

<img alt="Navigate to endpoint" src="public/docs/navigate-to-endpoint.png" style="object-fit: cover" height="379.5" width='255'>
<img alt="Select endpoint" src="public/docs/endpoint.png" height="208" width='408'>

## Schema structure

The schema is identical to the "Basic blog" template.