import { content } from './content'
import { ToastProvider } from './components/Toast'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import SettingsSection from './components/SettingsSection'
import SpecialSection from './components/SpecialSection'
import LoveNoteSection from './components/LoveNoteSection'
import QuestionSection from './components/QuestionSection'
import Closing from './components/Closing'
import MusicButton from './components/MusicButton'

export default function App() {
  return (
    <ToastProvider>
      <Navbar brand={content.brand} />
      <main>
        <WelcomeSection data={content.welcome} photo={content.photo} />
        <SettingsSection data={content.settings} />
        <SpecialSection data={content.special} />
        <LoveNoteSection data={content.note} />
        <QuestionSection data={content.question} />
      </main>
      <Closing data={content.closing} />
      <MusicButton {...content.music} />
    </ToastProvider>
  )
}
