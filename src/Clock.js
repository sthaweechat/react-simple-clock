import React from "react"

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick()
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState(() => {
            return{
                date: new Date()
            }
        })
    }

    render(){
        return <div>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
    }
}

export default Clock