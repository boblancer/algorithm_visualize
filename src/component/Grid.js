import React from "react";
import Sketch from 'react-p5';
import solveSuduko from '../core/sudoku'

class Grid extends React.Component {

	constructor(props) {
		super(props);
		this.frames = [];
		this.grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
			[ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
			[ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
			[ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
			[ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
			[ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
			[ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]
		solveSuduko(this.frames, this.grid, 0, 0);
		this.colors  = [
			[249, 202, 36],
			[240, 147, 43],
			[235, 77, 75],
			[106, 176, 76],
			[199, 236, 238],
			[34, 166, 179],
			[224, 86, 253],
			[104, 109, 224],
			[48, 51, 107],
			[149, 175, 192],
			[246, 229, 14]
		]
		this.current_frame = 0
	}

	cols = 9;
	rows = 9;
	size = 50

	// matrix = Array(this.rows).fill().map(()=>Array(this.cols).fill(
	// 	Math.floor(Math.random() * 10)
	// ));



	setup = (p5, parentRef) => {
		p5.createCanvas(this.size * 9, this.size * 9).parent(parentRef);
		p5.frameRate(200)
	};

	draw = (p5) => {
		p5.background(51);

		for(var i = 0; i < this.cols; i++){
			for(var j = 0; j < this.rows; j++){
				var x = i * this.size
				var y = j * this.size
				p5.stroke(0)
				p5.fill(255)
				p5.rect(x, y, this.size, this.size)
				console.log(i , j)
				p5.textSize(this.size / 1.5)
				console.log("current frame", this.current_frame)
				let num = (this.frames[this.current_frame])[i][j]
				if (num !== 0){
					let color = this.colors[num]
					p5.fill(p5.color(color[0], color[1], color[2]));
					p5.text(num, x + this.size/3, y + this.size/1.3);
				}
			}
		}
		this.current_frame += 1
		if (this.current_frame == this.frames.length){
			p5.noLoop()
		} 
	};

	render() {
		console.log(this.matrix)
		return (
			<div className="App">
				<h1>react-p5</h1>
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

export default Grid;