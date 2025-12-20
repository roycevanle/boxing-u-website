# These are my personal notes while making the webstie


# Things I've learned
## Github Related 
Things to consider when using a .gitignore file:
    1. There's something between vscode and .gitignore that doesn't track it properly. So if it doesn't work properly, I think you have to change something in vscode.
## VSCode + Tailwind
1. When working with linters & other css languages, sometimes conflict, you have to edit settings.json file (under .vscode)
    "files.associations": {
      "*.css": "tailwindcss"
    }
## VSCode
1. Shortcut to auto-align is SHIFT+ALT+F
## Tailwind
1. base simply applies styles globally. Elements like h1 tags or p tags. @layer base
2. components for styling specific components like cards, foots, & more @layer components
3. utilities for margins, typography, padding, colors, & more --->
4. directive @apply inserts tailwind 
5. To leave a negative margin use -m or -my, -mx, -mt, -mb, -mr, -ml
6. REMEMBER  npx @tailwindcss/cli -i ./src/css/input.css -o ./build/css/output.css --watch
## CSS
When min-width not working? Probably cause you need to define a width 1st since 100% width by default is on block elements.
https://stackoverflow.com/questions/78367415/tailwindcss-min-width-is-not-being-applied
1. To prevent overflowing where there's extra padding or scuffed margins, add to global css file, it acts as a safety net.
  html, body {
  max-width: 100%;
  overflow-x: hidden;
  }


# Other Boxing Gyms' Websites:
https://www.levelgroundmma.org
https://www.pacificmuaythai.com
https://www.seattleboxinggym.com/

# Resources
-To look for designs
  https://www.reddit.com/r/web_design/comments/12q1iuo/what_are_some_go_to_websites_to_look_at_for_good/
  https://www.youtube.com/watch?v=olYFQzXrpWI
  https://www.youtube.com/watch?v=waHuVF3XuMA
-To look for hero images
  https://www.reddit.com/r/web_design/comments/criu5v/how_do_you_find_amazing_hero_images_for_your/
  Flex Alignment Stuff
  https://marina-ferreira.github.io/tutorials/css/flexbox/
  For custom shapes
  https://css-generators.com/


# Things I have to do:
1. Figure out how to scale the hero pic
2. Fix nav bar
3. Work on Call to Action
4. Margins
5. look into shopify, looks like they were able to scale l&w of their flexbox
  https://www.shopify.com/
Resources
  https://www.youtube.com/watch?v=6biMWgD6_JY&t=1390s
  Reference: https://www.youtube.com/watch?v=z5yvZW8Ep-E
  BoxingU

