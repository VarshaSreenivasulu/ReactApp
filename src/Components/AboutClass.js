import {Component} from "react";

class AboutClass extends Component{
    constructor(props){
        super(props);  
        // console.log(this.props.name +" " + "Constructor");
        this.state={
            count : 0
        };
    };
   
    componentDidMount(){
        // console.log( this.props.name +" " +  "Mount Called");
        this.int = setInterval(()=>{
            // console.log("Interval Done")
        },1000)

        // async function Classapi() {
        //     const data = await fetch();
        //     const json = await data.json();
        // }
    }

    componentDidUpdate(){
        // console.log(this.props.name +" " +  "Update Called");
    }

    componentWillUnmount(){
        // console.log(this.props.name +" " + "Unmount Called");
        clearInterval(()=>{this.int});
    }
  
    render(){
        // console.log(this.props.name +" " +  "render");
        const {name , location} = this.props;
        return (
            <>
            <p>Count = {this.state.count}</p>
            <button onClick={()=>{
                this.setState( {count : this.state.count + 1})
            }}>Count Increase</button>
            <h1>{name}</h1>
            <h1>{location}</h1>
            </>
        );
    }
}

export default AboutClass;