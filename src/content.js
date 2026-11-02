/*
 * ✏️  EDIT THIS FILE TO CUSTOMIZE THE WEBSITE.
 * Every message, button label and joke on the page lives here.
 * To use a real photo: drop it into src/assets/ (e.g. us.jpg) and change the import below.
 */
import { Smile, HeartHandshake, Zap, Sparkles } from 'lucide-react'
import ourPhoto from './assets/vio.png'

export const content = {
  brand: 'Dear Vio',

  photo: {
    src: ourPhoto,
    alt: 'A photo of Vio',
    caption: 'My future lawyer',
  },

  // 🎵 Background song (floating button, bottom-right)
  // To play audio on the page: put an mp3 you own in the `public/` folder (e.g. public/our-song.mp3)
  // and set file: 'our-song.mp3'. Leave file: null to show a button that opens the song on YouTube instead.
  music: {
    file: 'our-song.mp3',
    startAt: 0, // seconds into the track where the clip starts
    clipLength: 120, // seconds to play before gently fading out
    youtubeUrl: 'https://www.youtube.com/watch?v=s1uZO-SHfts',
    label: 'Our song',
  },

  // Section 1
  welcome: {
    eyebrow: 'Case No. 001 · The Forehead Incident',
    title: 'A Very Serious Apology',
    highlight: 'Serious', // word in the title shown in italic rose
    greeting: 'My dearest Vio,',
    paragraphs: [
      'I would like to formally apologize for my unacceptable comments regarding your beautiful forehead. 😂',
      'I admit that I made a joke without considering the consequences. I understand that I may now face a lifetime sentence of apologizing.',
      'You are beautiful, special, and precious to me. I promise to think twice before making such dangerous jokes again.',
    ],
    signoff: 'Signed,',
    signature: 'Your stubborn but loving boyfriend ❤️',
    acceptLabel: 'I Accept Your Apology ❤️',
    acceptedMessage: 'Justice has been served! Vio has forgiven her boyfriend! 😂❤️',
    rejectLabel: 'Reject apology',
    rejectQuips: [
      'Nope, too slow',
      'Error 403: Forbidden',
      'This button is shy',
      'Try the pink one?',
      'Rejection.exe crashed',
      'Still no',
    ],
    rejectToast: 'Rejecting this apology is not supported on your device. Please use the pink button.',
    caseClosed: 'Case closed. Court adjourned.',
  },

  // Section 2 (the joke settings panel)
  settings: {
    title: 'Boyfriend Settings',
    intro: 'Some settings have been changed to prevent future incidents.',
    foreheadTitle: 'Forehead jokes',
    foreheadText: 'Permanently disabled after the incident.',
    foreheadToast: 'Locked by order of Vio. This setting cannot be changed.',
    apologiesTitle: 'Unlimited apologies',
    apologiesText: 'Required for continued happiness.',
    apologiesToast: 'Nice try. Apologies have no cancel button.',
    sincerityTitle: 'Sincerity level',
    sincerityStart: 72,
    sincerityStep: 14,
    sincerityMax: 240,
  },

  // Section 3
  special: {
    eyebrow: 'Evidence for the defense',
    title: "Why You're Special",
    cards: [
      { icon: Smile, title: 'Your Smile', text: 'You make even my ordinary days special.' },
      { icon: HeartHandshake, title: 'Your Heart', text: 'Your kindness makes me appreciate you more.' },
      { icon: Zap, title: 'Your Energy', text: 'Talking to you can turn my whole day around.' },
      { icon: Sparkles, title: 'Simply You', text: "You don't need to be perfect to be amazing." },
    ],
  },

  // Section 4
  note: {
    eyebrow: 'Handwritten (well, typed)',
    title: 'A Little Love Note',
    to: 'To: Vio',
    paragraphs: [
      'Even when we tease each other, disagree, or have little misunderstandings, I want you to know that you matter to me.',
      'I love the little moments we share, the laughter, the conversations, and the happiness you bring into my life.',
      'This little website is just one small way of reminding you that you are appreciated. ❤️',
    ],
    signature: 'With love, always',
  },

  // Section 5
  question: {
    eyebrow: 'The final verdict',
    question: 'Will you forgive your favorite troublemaker? 🥹',
    yesLabel: 'Of course, my love ❤️',
    thinkLabel: 'Let me think about it 😂',
    yesMessage: 'YAY! ❤️ I promise to use my jokes responsibly from now on. No more forehead investigations without permission! 😂😘',
    thinkMessage: 'Take your time, Vio. Your humble boyfriend is waiting patiently. 😂',
    // Extra lines shown if she keeps clicking "Let me think about it"
    thinkFollowUps: [
      '',
      'Still thinking? The other button seems to be getting bigger.',
      'Your boyfriend has started drafting a second apology, just in case.',
      'Fun fact: the left button does not bite.',
      'Patience level: legendary. Waiting continues.',
    ],
  },

  // Section 6
  closing: {
    line1: 'Made with love, just for you ❤️',
    line2: 'Forever grateful to have you in my life.',
    backToTop: 'Read it again',
  },
}
