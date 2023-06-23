import React from "react"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"	https://i.imgflip.com/39t1o.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    function handleChange(event){
        const {name,value} = event.target;
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value

        }))
    }
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])
    
    console.log(allMemes)

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url

        }))
    }
    return(
        <main >
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder='topText'
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                    />
                <input 
                    className="form--input" 
                    placeholder='bottomText'
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                    
                    />
                <button className="form--button" 
                        onClick={getMemeImage}
                    >Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--img"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}