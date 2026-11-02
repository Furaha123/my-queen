import { useEffect, useRef, useState } from 'react'
import { Music, Pause, Play } from 'lucide-react'

const floatStyle = {
  right: 'calc(1rem + env(safe-area-inset-right, 0px))',
  bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))',
}
const baseClass =
  'fixed z-40 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-rose-700 shadow-soft ring-1 ring-rose-200 backdrop-blur transition hover:bg-rose-50 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300'

/**
 * Floating song button.
 * - With `file` set: plays a clip (startAt → startAt + clipLength) and fades out.
 * - Without `file`: opens the song link in a new tab.
 */
export default function MusicButton({ file, startAt = 0, clipLength = 60, youtubeUrl, label }) {
  const audioRef = useRef(null)
  const fadeRef = useRef()
  const fadingRef = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [remaining, setRemaining] = useState(clipLength)

  useEffect(() => () => clearInterval(fadeRef.current), [])

  if (!file) {
    return (
      <a href={youtubeUrl} target="_blank" rel="noreferrer" className={baseClass} style={floatStyle}>
        <Music className="h-4 w-4" aria-hidden />
        {label}
      </a>
    )
  }

  const stop = () => {
    const audio = audioRef.current
    clearInterval(fadeRef.current)
    fadingRef.current = false
    if (audio) {
      audio.pause()
      audio.volume = 1
      audio.currentTime = startAt
    }
    setPlaying(false)
    setRemaining(clipLength)
  }

  const fadeOut = () => {
    const audio = audioRef.current
    clearInterval(fadeRef.current)
    fadeRef.current = setInterval(() => {
      if (!audio || audio.volume <= 0.06) return stop()
      audio.volume = Math.max(0, audio.volume - 0.06)
    }, 120)
  }

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }
    if (audio.currentTime < startAt || audio.currentTime >= startAt + clipLength) audio.currentTime = startAt
    try {
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  const onTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio) return
    const left = Math.max(0, Math.ceil(startAt + clipLength - audio.currentTime))
    setRemaining(left)
    if (left <= 3 && !fadingRef.current) {
      fadingRef.current = true
      fadeOut()
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}${file}`}
        preload="none"
        onTimeUpdate={onTimeUpdate}
        onEnded={stop}
      />
      <button type="button" onClick={toggle} className={baseClass} style={floatStyle} aria-pressed={playing}>
        {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
        {playing ? `${label} · ${remaining}s` : label}
      </button>
    </>
  )
}
