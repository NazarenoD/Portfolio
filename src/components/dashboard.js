import React from "react";
import '../styles/dashboard.css';

import pro from '../images/programming.png'
import git from '../images/github.png'

export default function Dashboard(){

    return(
        <>
        
        <section className="grid-Dashboard">
            <article className="article article-main">
                <div className="css-typing">
                    <p>from fastapi import FastApi</p>
                    <p>app = FastApi()</p>
                </div>
                <span data-tooltip="Tooltip help here!" data-flow="right">CSS Tooltips</span>
            </article>
            <article className="article article-description">
                <img className="img-pro" src = {pro} alt="">
                    
                </img>
                <img className="img-git" src = {git} alt=""></img>
            </article>
            <article className="article article-information">info</article>
            <article className="article article-decoration">deco</article>
        </section>
        </>
        
    )
}


//<a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Dave Gandy - Flaticon</a>