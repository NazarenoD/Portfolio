import React from 'react'
import '../styles/hexMenu.css'

export default function HexMenu(props){
    let url = 'menu.png'
    return(
        <div className= 'main'>
            <div className='container'>
            {
            props.data.map((item,i)=>{
                if(item.light){
                    return(
                    <div onClick={()=>{props.handlerMenu(i)}} className='hex-g' key={i}>
                        <section className='hex'>
                            <img className='img-menu' src={
                                require(`../images/${ item.img }`)
                                } alt=''></img>
                            <div className='text-menu'><h3>{item.text}</h3></div>
                            </section>
                    </div>
                    )
                }
                return(<div className='hex-g-none' key={i}>
                <section className='hex-none'>
                    <img className='img-menu-none' src={
                        require(`../images/${ url }`)
                        } alt=''></img>
                    </section>
            </div>)
                })
            }
            </div>
        </div>
    )
}