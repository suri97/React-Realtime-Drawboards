import React, {Component} from 'react'
import SocketIOClient from 'socket.io-client';
import './Canvas.css'

class CanvasComponent extends Component {

    constructor() {
        super();
        this.state = {
            prevX: 0,
            prevY: 0,
            currX: 0,
            currY: 0,
            drawing: false
        };
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.addEventListeners();
        const socket = SocketIOClient("http://localhost:8080");
        // socket.on("getCoordinates", () => {
        //     console.log("Connected");
        // })
    }

    componentWillUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.ctx;
        const {prevX, prevY, currX, currY} = this.state;
        ctx.beginPath();
        ctx.moveTo(prevX,prevY);
        ctx.lineTo(currX,currY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }

    onMouseDown(e) {
        e.preventDefault();
        const canvas = this.canvas;
        let prevX = e.clientX - canvas.offsetLeft;
        let prevY = e.clientY - canvas.offsetTop;
        this.setState({
            prevX: prevX,
            prevY: prevY,
            currX: prevX,
            currY: prevY,
            drawing: true
        });
    }

    onMouseMove(e) {
        e.preventDefault();
        if ( !this.state.drawing ) return;
        const canvas = this.canvas;
        let currX = e.clientX - canvas.offsetLeft;
        let currY = e.clientY - canvas.offsetTop;
        this.setState({
            currX: currX,
            currY: currY
        });
        this.setState({
            prevX: currX,
            prevY: currY
        })
    }

    onMouseUp(e) {
        e.preventDefault();
        this.setState({
            drawing: false
        });
    }

    addEventListeners() {
        document.addEventListener("mousedown", this.onMouseDown, false);
        document.addEventListener("mouseup",this.onMouseUp,false);
        document.addEventListener("mousemove", this.onMouseMove, false);
    }

    render() {
        return (
            <canvas className="canvas"
                    ref = "canvas" width={500} height={500} />
        )
    }

}

export default CanvasComponent