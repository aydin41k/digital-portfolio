<div align="center">
    <img src="https://freepngimg.com/thumb/paper_sheet/2-2-paper-sheet-transparent.png" height="80px"/>
    <h1>Digital Portfolio v1.4</h1>
</div>

## What?

Ever dreamt of having your awesome personal portfolio website? Have zero experience coding websites? Then you have come to the right place. Keep reading, and in a matter of minutes (read: a few days of frustration) you will have your website up and running.

## Where?

This project is deployed to: 

https://digital-portfolio-seven.vercel.app/ 

Keep reading and you'll see how you can deploy your resume just like this.

## Why?

- To showcase my React.js/Next.js skills
- To give a tool to my friends to have an awesome digital portfolio (and stop asking me to build one for them)
- To start a _useful_ project, where devs of all skill levels can collaborate
- To prepare the front-end of a bigger project centered around digital resume/portfolio building

## How?

0. [Fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), make it yours
1. Populate `data/resume.min.json` file with your details (currently holds sample data with Harry Potter's info)
2. Deploy on your own, or if you don't know how to, keep reading
3. Go to https://vercel.com/
4. Click on "Start Deploying" and then "Continue with Github"
5. Create an account on Vercel (they have a free tier for hobby projects - good to kick off), select and deploy your repo
6. Now every time code is pushed/merged to the main branch of the repo, Vercel will pull it and update your deployment. Just like in those cool movies

## How do I customise colours and fonts?

Easy! All the theme customisation is centralised in `styles/theme.css`. This file uses CSS custom properties (variables) to control the entire look and feel of your portfolio.

### Customising Colours

The theme uses a comprehensive colour system. You can modify any of these CSS variables in `styles/theme.css`:

- **Primary Brand Colours**: `--primary-colour`, `--primary-colour-dark`
- **Text Colours**: `--text-primary`, `--text-secondary`, `--text-muted`, `--text-white`
- **Background Colours**: `--bg-primary`, `--bg-white`, `--bg-dark`, `--bg-gray`, `--bg-light-blue`
- **Accent Colours**: `--accent-red`, `--accent-light-gray`, `--accent-separator`
- **Border Colours**: `--border-white`, `--border-white-transparent`

Simply change the colour values (hex, rgb, or rgba) to match your desired colour scheme.

### Customising Fonts

Typography is controlled by two main variables:

- `--font-family-header`: Used for headings and titles (default: 'Dosis', sans-serif)
- `--font-family-system`: Used for body text (default: system font stack)

Just update these variables with your preferred font families. Don't forget to import custom fonts in `styles/fonts.css` if needed!

### Quick Start Examples

The `theme.css` file includes commented-out examples at the bottom showing how to create a dark theme or switch to monospace fonts. Simply uncomment and modify these to get started quickly.

## What tech?

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Follow the link to get started with local setup and other guidelines.

## Can I contribute?

Sure! Any improvements are welcome. Feel free to open PR's. Especially welcome are solutions to the issues listed in the "Issues" section.

## Whom should I credit?

If you use this codebase, I would appreciate if you credit me somewhere. I won't sue you if you don't, but I am sure you will feel better :smile:

On that note, I would like to thank [Pascal van Gemert](https://github.com/pascalvgemert/resume) for the inspiration for the design of this portfolio.