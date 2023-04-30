import {Layout} from '@/components/Layout'
import React, {useState} from 'react'


export default function WordleBot() {
  const [green1, setGreen1] = useState('')
  const [green2, setGreen2] = useState('')
  const [green3, setGreen3] = useState('')
  const [green4, setGreen4] = useState('')
  const [green5, setGreen5] = useState('')
  const [orange1, setOrange1] = useState('')
  const [orange2, setOrange2] = useState('')
  const [orange3, setOrange3] = useState('')
  const [orange4, setOrange4] = useState('')
  const [orange5, setOrange5] = useState('')
  const [orange6, setOrange6] = useState('')
  const [orange7, setOrange7] = useState('')
  const [orange8, setOrange8] = useState('')
  const [orange9, setOrange9] = useState('')
  const [orange10, setOrange10] = useState('')
  const [orange11, setOrange11] = useState('')
  const [orange12, setOrange12] = useState('')
  const [orange13, setOrange13] = useState('')
  const [orange14, setOrange14] = useState('')
  const [orange15, setOrange15] = useState('')
  const [orange16, setOrange16] = useState('')
  const [orange17, setOrange17] = useState('')
  const [orange18, setOrange18] = useState('')
  const [orange19, setOrange19] = useState('')
  const [orange20, setOrange20] = useState('')
  const [orange21, setOrange21] = useState('')
  const [orange22, setOrange22] = useState('')
  const [orange23, setOrange23] = useState('')
  const [orange24, setOrange24] = useState('')
  const [orange25, setOrange25] = useState('')
  const [letters, setLetters] = useState<Record<string, boolean>>({
    q: true,
    w: true,
    e: true,
    r: true,
    t: true,
    y: true,
    u: true,
    i: true,
    o: true,
    p: true,
    a: true,
    s: true,
    d: true,
    f: true,
    g: true,
    h: true,
    j: true,
    k: true,
    l: true,
    z: true,
    x: true,
    c: true,
    v: true,
    b: true,
    n: true,
    m: true,
  })
  const [listWordle, setListWordle] = useState<string[]>([])
  const index0Mashup = orange1 + orange6 + orange11 + orange16 + orange21
  const index1Mashup = orange2 + orange7 + orange12 + orange17 + orange22
  const index2Mashup = orange3 + orange8 + orange13 + orange18 + orange23
  const index3Mashup = orange4 + orange9 + orange14 + orange19 + orange24
  const index4Mashup = orange5 + orange10 + orange15 + orange20 + orange25
  const orangeMashup = index0Mashup + index1Mashup + index2Mashup + index3Mashup + index4Mashup
  const allGrayLetters = Object.entries(letters).filter(([, value]) => !value).map(([key]) => key).join('')

  async function WordleSolver() {
    const response = await fetch('/words_alpha.txt')
    const words = (await response.text()).split('\r\n')

    const listOne = (words.filter(word => word.length == 5)
        .filter(word => word.match(`^${green1 || (index0Mashup ? `[^${index0Mashup}]` : '.')}${green2 || (index1Mashup ? `[^${index1Mashup}]` : '.')}${green3 || (index2Mashup ? `[^${index2Mashup}]` : '.')}${green4 || (index3Mashup ? `[^${index3Mashup}]` : '.')}${green5 || (index4Mashup ? `[^${index4Mashup}]` : '.')}`))
        .filter(word => word.match(orangeMashup ? `[${orangeMashup}]+` : `.`))
    )

    const listTwo = (listOne
        .filter(word => word.match(`^[^${allGrayLetters}]+$`))
    )

    setListWordle(listTwo
      .filter(word => word.match(``)),
    )
  }

  const toggleLetter = (letter: keyof typeof letters) => {
    setLetters(current => {
      return {
        ...current,
        [letter]: !current[letter],
      }
    })
  }

  return (
    <Layout>
      <div className={'flex justify-evenly w-full prose prose-slate max-w-none gap-2'}>
        <div className={'flex flex-col items-center'}>
          Gray word buttons
          <div className={'flex'}>
            {Object.keys(letters).slice(0, 10).map((letter) => (
              <button
                className={`border border-slate-300 rounded w-7 hover:bg-slate-200 transition-colors duration-200 ${letters[letter] ? 'bg-slate-50' : 'bg-slate-500'}`}
                key={letter}
                onClick={() => toggleLetter(letter)}
              >
                {letter.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={'flex'}>
            {Object.keys(letters).slice(10, 19).map((letter) => (
              <button
                className={`border border-slate-300 rounded w-7 hover:bg-slate-200 transition-colors duration-200 ${letters[letter] ? 'bg-slate-50' : 'bg-slate-500'}`}
                key={letter}
                onClick={() => toggleLetter(letter)}
              >
                {letter.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={'flex'}>
            {Object.keys(letters).slice(19).map((letter) => (
              <button
                className={`border border-slate-300 rounded w-7 hover:bg-slate-200 transition-colors duration-200 ${letters[letter] ? 'bg-slate-50' : 'bg-slate-500'}`}
                key={letter}
                onClick={() => toggleLetter(letter)}
              >
                {letter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className={'flex flex-col items-center'}>
          Green letter boxes:
          <div>
            <input
              className={'letterbox'}
              maxLength={1}
              value={green1}
              onChange={e => setGreen1(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={green2}
              onChange={e => setGreen2(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={green3}
              onChange={e => setGreen3(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={green4}
              onChange={e => setGreen4(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={green5}
              onChange={e => setGreen5(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        <div className={'flex flex-col items-center py-2 px-2'}>
          Orange letter boxes:
          <div>
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange1}
              onChange={e => setOrange1(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange2}
              onChange={e => setOrange2(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange3}
              onChange={e => setOrange3(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange4}
              onChange={e => setOrange4(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange5}
              onChange={e => setOrange5(e.target.value.toLowerCase())}
            />
          </div>
          <div>
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange6}
              onChange={e => setOrange6(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange7}
              onChange={e => setOrange7(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange8}
              onChange={e => setOrange8(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange9}
              onChange={e => setOrange9(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange10}
              onChange={e => setOrange10(e.target.value.toLowerCase())}
            />
          </div>
          <div>
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange11}
              onChange={e => setOrange11(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange12}
              onChange={e => setOrange12(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange13}
              onChange={e => setOrange13(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange14}
              onChange={e => setOrange14(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange15}
              onChange={e => setOrange15(e.target.value.toLowerCase())}
            />
          </div>
          <div>
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange16}
              onChange={e => setOrange16(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange17}
              onChange={e => setOrange17(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange18}
              onChange={e => setOrange18(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange19}
              onChange={e => setOrange19(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange20}
              onChange={e => setOrange20(e.target.value.toLowerCase())}
            />
          </div>
          <div>
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange21}
              onChange={e => setOrange21(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange22}
              onChange={e => setOrange22(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange23}
              onChange={e => setOrange23(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange24}
              onChange={e => setOrange24(e.target.value.toLowerCase())}
            />
            <input
              className={'letterbox'}
              maxLength={1}
              value={orange25}
              onChange={e => setOrange25(e.target.value.toLowerCase())}
            />
          </div>
        </div>
      </div>
      <div className={'flex justify-center py-4'}>
        <button className={'px-6 py-1 border border-blue-400 rounded hover:bg-blue-300 transition-colors duration-200'}
                onClick={WordleSolver}> Finish the scrabble for me
        </button>
      </div>
      <footer className={'flex flex-wrap w-34'}>
        {listWordle.map(word =>
          <div key={word}>{word},&nbsp;</div>,
        )}
      </footer>

    </Layout>
  )
}

// const first = useRef<HTMLInputElement>(null)
// const second = useRef<HTMLInputElement>(null)
// const third = useRef<HTMLInputElement>(null)
//
// const jumpToNext = (thisInput: RefObject<HTMLInputElement>, nextInput: RefObject<HTMLInputElement>) => {
//   if (thisInput.current?.value?.length === thisInput.current?.maxLength) {
//     nextInput.current?.focus()
//   }
// }


// <div className={'flex flex-col w-full prose prose-slate max-w-none gap-2'}>
//   <h1>Minu leht</h1>
//   <p>Minu sisu.</p>
//   <input ref={first} onChange={() => jumpToNext(first, second)} maxLength={3} type={'text'} className={'w-64 px-2 py-1 rounded shadow border border-slate-200'}/>
//   <input ref={second} onChange={() => jumpToNext(second, third)} maxLength={3} type={'text'} className={'w-64 px-2 py-1 rounded shadow border border-slate-200'}/>
//   <input ref={third} maxLength={3} type={'text'} className={'w-64 px-2 py-1 rounded shadow border border-slate-200'}/>
// </div>