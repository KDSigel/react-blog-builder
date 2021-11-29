import React, { useState } from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  const [title, setTitle] = useState()
  const [subtitle, setSubtitle] = useState()
  const [font, setFont] = useState()
  const [align, setAlign] = useState()
  const [text, setText] = useState()

  return (
    <main>
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor
        {...{
          title,
          setTitle,
          font,
          setFont,
          subtitle,
          setSubtitle,
          align,
          setAlign,
          text,
          setText,
        }}
      />
    </main>
  )
}
