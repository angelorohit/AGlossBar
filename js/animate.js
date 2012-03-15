
/*
 Copyright (c) 2011 Angelo Rohit Joseph Pulikotil
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

var animPrg1Width = 0.0;
var animPrg2Width = 0.0;
var animPrg3Width = 0.0;
var animPrg1WidthInc = 1;
var animPrg2WidthInc = 0.5;
var animPrg3WidthInc = 0.25;

var isAnimating = false;
var animateInterval = ~~(1000 / 30);

function animateProgressBars() {		
	isAnimating = true;	
	
	animPrg1Width = 0.0;
	animPrg2Width = 0.0;
	animPrg3Width = 0.0;
}

function updatePrgBars() {
	if( isAnimating ) {
		var prgBar1 = document.getElementById('progressBar1');
		var prgBar1Text = document.getElementById('progressBar1Text');
		var prgBar2 = document.getElementById('progressBar2');
		var prgBar2Text = document.getElementById('progressBar2Text');
		var prgBar3 = document.getElementById('progressBar3');
		var prgBar3Text = document.getElementById('progressBar3Text');
				
		animPrg1Width += animPrg1WidthInc;
		if( animPrg1Width > 100.0) {
			animPrg1Width = 100.0;			
		}
		animPrg2Width += animPrg2WidthInc;
		if( animPrg2Width > 100.0) {
			animPrg2Width = 100.0;			
		}
		animPrg3Width += animPrg3WidthInc;
		if( animPrg3Width > 100.0) {
			animPrg3Width = 100.0;			
		}
		
		prgBar1.style.width = animPrg1Width + '%';
		prgBar1Text.innerHTML = ~~(animPrg1Width) + '%';		
		prgBar2.style.width = animPrg2Width + '%';
		prgBar2Text.innerHTML = ~~(animPrg2Width) + '%';		
		prgBar3.style.width = animPrg3Width + '%';
		prgBar3Text.innerHTML = ~~(animPrg3Width) + '%';		
	}	
}

window.onload = function() {
	document.getElementById('animateBtn').style.display = 'inline-block';
	setInterval(updatePrgBars, animateInterval);
}
