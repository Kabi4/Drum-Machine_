const q= document.getElementById("Q");
const w= document.getElementById("W");
const e= document.getElementById("E");
const a= document.getElementById("A");
const s= document.getElementById("S");
const d= document.getElementById("D");
const z= document.getElementById("Z");
const x= document.getElementById("X");
const c= document.getElementById("C");

const Q= document.getElementById("q");
const W= document.getElementById("w");
const E= document.getElementById("e");
const A= document.getElementById("a");
const S= document.getElementById("s");
const D= document.getElementById("d");
const Z= document.getElementById("z");
const X= document.getElementById("x");
const C= document.getElementById("c");

const drum = document.getElementById("drum");
const string = document.getElementById("string");

const volume = document.getElementById("volume");

const text = document.getElementById("display");

const path = "Sounds/Drum1";
const path2 = "Sounds/Drum2";

const q1 = "Heater-1";
const w1 = "Heater-2";
const e1 = "Heater-3";
const a1 = "Heater-4";
const s1 = "Heater-6";
const d1 = "Kick_n_Hat";
const z1 = "Punchy_Kick";
const x1 = "RP4_KICK";
const c1 = "Side_Kick";

const q2 = "Bld_H1";
const w2 = "Brk_Snr";
const e2 = "Cev_H2";
const a2 = "Chord_1";
const s2 = "Chord_2";
const d2 = "Chord_3";
const z2 = "Dry_Ohh";
const x2 = "Dsc_Oh";
const c2 = "Give_us_a_light";


window.onLoad = setEverything();
window.onLoad = setVolume();

function setEverything(){
	if(drum.checked==true){
		q.src=path+"/"+q1+".mp3";
		w.src=path+"/"+w1+".mp3";
		e.src=path+"/"+e1+".mp3";
		a.src=path+"/"+a1+".mp3";
		s.src=path+"/"+s1+".mp3";
		d.src=path+"/"+d1+".mp3";
		z.src=path+"/"+z1+".mp3";
		x.src=path+"/"+x1+".mp3";
		c.src=path+"/"+c1+".mp3";

	}
	else{
		q.src=path2+"/"+q2+".mp3";
		w.src=path2+"/"+w2+".mp3";
		e.src=path2+"/"+e2+".mp3";
		a.src=path2+"/"+a2+".mp3";
		s.src=path2+"/"+s2+".mp3";
		d.src=path2+"/"+d2+".mp3";
		z.src=path2+"/"+z2+".mp3";
		x.src=path2+"/"+x2+".mp3";
		c.src=path2+"/"+c2+".mp3";
	}
}

function setVolume(){
	let currentvol = (volume.value)/100;
		q.volume=currentvol;
		w.volume=currentvol;
		e.volume=currentvol;
		a.volume=currentvol;
		s.volume=currentvol;
		d.volume=currentvol;
		z.volume=currentvol;
		x.volume=currentvol;
		c.volume=currentvol;
}

function playq(){
	if(drum.checked==true){
		q.play();
		text.textContent=q1;
	}
	else{
		q.play();
		text.textContent=q2;
	}
}

function playw(){
	if(drum.checked==true){
		w.play();
		text.textContent=w1;
	}
	else{
		w.play();
		text.textContent=w2;
	}
}

function playe(){
	if(drum.checked==true){
		e.play();
		text.textContent=e1;
	}
	else{
		e.play();
		text.textContent=e2;
	}
}

function playa(){
	if(drum.checked==true){
		a.play();
		text.textContent=a1;
	}
	else{
		a.play();
		text.textContent=a2;
	}
}

function plays(){
	if(drum.checked==true){
		s.play();
		text.textContent=s1;
	}
	else{
		s.play();
		text.textContent=s2;
	}
}

function playd(){
	if(drum.checked==true){
		d.play();
		text.textContent=d1;
	}
	else{
		d.play();
		text.textContent=d2;
	}
}

function playz(){
	if(drum.checked==true){
		z.play();
		text.textContent=z1;
	}
	else{
		z.play();
		text.textContent=z2;
	}
}

function playx(){
	if(drum.checked==true){
		x.play();
		text.textContent=x1;
	}
	else{
		x.play();
		text.textContent=x2;
	}
}

function playc(){
	if(drum.checked==true){
		c.play();
		text.textContent=c1;
	}
	else{
		c.play();
		text.textContent=c2;
	}
}

function keypressed(e){
	let character = String.fromCharCode(e.keyCode);
	if(character==='Q'){
		Q.click();
	}
	if(character==='W'){
		W.click();
	}
	if(character==='E'){
		E.click();
	}
	if(character==='A'){
		A.click();
	}
	if(character==='S'){
		S.click();
	}
	if(character==='D'){
		D.click();
	}
	if(character==='Z'){
		Z.click();
	}
	if(character==='X'){
		X.click();
	}
	if(character==='C'){
		C.click();
	}
}