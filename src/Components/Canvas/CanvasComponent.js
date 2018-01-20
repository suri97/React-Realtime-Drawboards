import React, {Component} from 'react'
import './Canvas.css'

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class CanvasComponent extends Component {

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0,500,500);
        rect({ctx, x: 10, y: 10, width: 50, height: 50});
        rect({ctx, x: 110, y: 110, width: 50, height: 50});
    }

    render() {
        return (
            <canvas className="canvas" ref="canvas" width={500} height={500} />
        )
    }

}

export default CanvasComponent