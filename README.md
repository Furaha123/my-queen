# A Very Serious Apology

A small romantic, playful website built with React + Vite, Tailwind CSS and Lucide icons. No backend.

## Run it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Customize it

**All the text lives in one file: `src/content.js`.** Edit any message, button label or joke there and save. The page updates instantly while `npm run dev` is running.

| What | Where in `src/content.js` |
| --- | --- |
| Welcome letter, accept button, celebration message | `welcome` |
| The "Reject apology" button that runs away, and its jokes | `welcome.rejectQuips`, `welcome.rejectToast` |
| Joke settings panel (forehead jokes lock, sincerity meter) | `settings` |
| The four "Why You're Special" cards (title, text, icon) | `special.cards` |
| Love letter | `note` |
| Final question, answers and follow-up jokes | `question` |
| Footer lines | `closing` |
| Song button | `music` |

### Add your own photo

1. Copy your photo into `src/assets/`, for example `src/assets/us.jpg`.
2. In `src/content.js`, change
   `import ourPhoto from './assets/our-photo.svg'`
   to
   `import ourPhoto from './assets/us.jpg'`
3. Update `photo.caption` if you like.

A portrait photo (about 4:5) looks best.

### Add the song (1-minute clip)

By default the floating "Our song" button opens the song on YouTube. To play audio directly on the page:

1. Put an MP3 you have the right to use into the `public/` folder, for example `public/our-song.mp3`.
2. In `src/content.js` set `music.file: 'our-song.mp3'`.
3. Set `music.startAt` to the second where the clip should begin (for example `45` for the chorus). `clipLength: 60` plays one minute, then it fades out.

Browsers only allow sound after a tap, so the music starts when she presses the button.

### Change colors or fonts

- Colors and fonts: `tailwind.config.js` (the page uses Tailwind's `rose` palette plus `ink` and `blush`).
- Font files are loaded from Google Fonts in `index.html`.
- Animations: bottom of `src/index.css`. They switch off automatically for people who turn on "reduce motion".

## Project structure

```
src/
  content.js              ← all text, edit me
  assets/our-photo.svg    ← placeholder photo
  components/
    Navbar.jsx            sticky top navigation
    Section.jsx           reusable section + heading wrapper
    WelcomeSection.jsx    Section 1: apology letter + accept / runaway buttons
    SettingsSection.jsx   Section 2: joke "Boyfriend Settings" panel
    SpecialSection.jsx    Section 3: four cards
    LoveNoteSection.jsx   Section 4: letter
    QuestionSection.jsx   Section 5: the question
    Closing.jsx           Section 6: footer
    FloatingHearts.jsx    subtle background hearts
    HeartBurst.jsx        celebration burst
    RunawayButton.jsx     the button that will not be clicked
    MusicButton.jsx       floating song button
    Toast.jsx             little pop-up messages
```

## Deploy it (free)

First build it:

```bash
npm run build
```

This creates a `dist/` folder that holds the finished site.

**Option A: Netlify Drop (no account setup, about 1 minute)**
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page.
3. You get a public link right away. Sign in to keep it and rename it (e.g. `for-my-queen.netlify.app`).

**Option B: Vercel**
1. Push this folder to a GitHub repository.
2. On https://vercel.com click "Add New → Project", pick the repo.
3. Framework preset: Vite. Build command `npm run build`, output `dist`. Click Deploy.

**Option C: GitHub Pages**
1. Push the project to GitHub.
2. Run `npm run build`, then publish the `dist` folder (for example with the `gh-pages` package: `npx gh-pages -d dist`).
3. In the repo settings → Pages, choose the `gh-pages` branch.

`vite.config.js` uses `base: './'`, so the build works on all of these without changes.
