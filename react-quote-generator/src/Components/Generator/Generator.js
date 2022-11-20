import React from 'react'
import axios from 'axios'

function Generator() {

    //create state for data
    const [quote, setQuote] = React.useState("");


    //function for to generate quote
    const getQuote = () => {
        console.log("Quote")
        //create url
        const url = "https://api.quotable.io/random";
        //use api to get data
        axios.get(url)
        .then(res=>{
            console.log(res.data)
            //store data in state
            setQuote(res.data)
        })
    }


  return (
    <div>
        <h1>Quote Generator</h1>
        <button onClick={getQuote}>Click Me For Quotes</button>
        <h4>{quote.content}</h4>
        <h3>{quote.author}</h3>
    </div>
  )
}

export default Generator