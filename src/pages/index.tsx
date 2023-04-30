import {Layout} from '@/components/Layout'
import React, {useState} from 'react'

export default function Scrabbler() {
  const [mandatory, setMandatory] = useState('')
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [fourth, setFourth] = useState('')
  const [fifth, setFifth] = useState('')
  const [sixth, setSixth] = useState('')
  const [list, setList] = useState<string[]>([])

  async function WordScrambler() {
    const response = await fetch('/words_alpha.txt')
    const words = (await response.text()).split('\r\n')

    const listOne = (words.filter(word => word.length > 3)
      .filter(word => word.match(`${mandatory}+`)))

    setList(listOne
      .filter(word => word.match(`^[${first}${second}${third}${fourth}${fifth}${sixth}${mandatory}]+$`)))
  }

  return (
    <Layout>
      <div>
        <main className={'flex flex-col justify-center'}>
          <label className={'flex gap-3 py-4 justify-center'}>
            Mandatory letter:
            <input
              className={'letterbox'}
              value={mandatory}
              onChange={e => setMandatory(e.target.value)}
              required
              maxLength={1}
            />
          </label>
          <label className={'flex gap-3 py-4 justify-center'}>
            Optional letters:
            <input
              value={first}
              onChange={e => setFirst(e.target.value)}
              className={'letterbox'}
              required
              maxLength={1}
            />
            <input
              value={second}
              onChange={e => setSecond(e.target.value)}
              className={'letterbox'}
              required
              maxLength={1}
            />
            <input
              value={third}
              onChange={e => setThird(e.target.value)}
              className={'letterbox'}
              required
              maxLength={1}
            />
            <input
              value={fourth}
              onChange={e => setFourth(e.target.value)}
              className={'letterbox'}
              required
              maxLength={1}
            />
            <input
              value={fifth}
              onChange={e => setFifth(e.target.value)}
              className={'letterbox'}
              required
              maxLength={1}
            />
            <input
              value={sixth}
              onChange={e => setSixth(e.target.value)}
              className={'letterbox'}
              required
              maxLength={1}
            />
          </label>
          <div className={'flex justify-center py-4'}>
            <button
              className={'px-6 py-1 border border-blue-400 rounded hover:bg-blue-300 transition-colors duration-200'}
              onClick={WordScrambler}> Finish the scrabble for me
            </button>
          </div>
          <div className={'text-xl justify-center'}>
            Here are some possible solutions:
          </div>
          <footer className={'flex flex-wrap w-34'}>
            {list.map(word =>
              <div key={word}>{word},&nbsp;</div>,
            )}
          </footer>

        </main>
      </div>

    </Layout>
  )
}
