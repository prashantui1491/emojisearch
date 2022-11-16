import React, { useState, useEffect } from 'react'
import emojiList from './emojiList.json'
import styles from './EmojiList.css'

const EmojiSearch = () => {

    const [data, setData] = useState(emojiList)
    const [search, setSearch] = useState('')

    const filterData = () => {
        return data?.filter((item) => {
            if (search == "") {
                return item
            }
            else {
                return item?.title?.toUpperCase().includes(search.toUpperCase())
            }
        })
    }

    const onchanheSearchHandler = (e) => {
        setSearch(e.target.value)
    }

    //console.log(data)

    
    return (
        <div>
            <h1><img src={"//cdn.jsdelivr.net/emojione/assets/png/1f638.png"}/>Emoji Search<img src={"//cdn.jsdelivr.net/emojione/assets/png/1f638.png"}/></h1>
            <input type="text" name={search} value={search} onChange={onchanheSearchHandler} />
            {
                filterData().map((list) => {
                    const codePointHex = list?.symbol.codePointAt(0).toString(16);
                    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
                    return (
                        <h3 key={list.title} class="copyText" ><img src={src} onClick = {()=>navigator.clipboard.writeText(list.symbol)}/>{list.title} <p class="hide">copy here</p></h3>
                    )
                })
            }
        </div>
    )
}

export default EmojiSearch