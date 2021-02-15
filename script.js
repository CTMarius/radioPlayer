window.onload=function(){storeFirstSong();getStreamingData();setInterval(function(){getStreamingData();},3000);}
function run(interval,frames){var int=1;function func(){document.body.id="b"+int;int++;if(int===frames){int=1;}}
var swap=window.setInterval(func,interval);}
function Updatelist(song){var ul=document.getElementById("songlist");var li=ul.getElementsByTagName("li");var lastLi=li[li.length-1];var currentSong=document.getElementById('currentSong');var newDate=new Date().toLocaleString()
if(lastLi.innerHTML.includes(song)===false){var newli=document.createElement("li");newli.appendChild(document.createTextNode(song+" at: "+newDate));ul.appendChild(newli);}}
function storeFirstSong(){var ul=document.getElementById("songlist");var li=document.createElement("li");var newDate=new Date().toLocaleString()
const checkElement=async selector=>{while(document.getElementById(selector).innerHTML===''){await new Promise(resolve=>requestAnimationFrame(resolve))}
return document.getElementById(selector);};checkElement('currentSong').then((selector)=>{var currentSong=document.getElementById('currentSong').innerHTML;li.appendChild(document.createTextNode(currentSong+" at: "+newDate));ul.appendChild(li);});}
function Page(){this.refreshCurrentSong=function(song,visitors){var currentSong=document.getElementById('currentSong');var currentVisitsElement=document.getElementById('currentListeners');if(song!==currentSong.innerHTML){currentSong.className='animated flipInY text-uppercase';currentSong.innerHTML=song;currentVisitsElement.innerHTML="People listening now: "+visitors;setTimeout(function(){currentSong.className='text-uppercase';},2000);}}}
function updateBackground(){var bodyElemewnt=document.getElementsByTagName('body');for(var i=20;i<20;i++){bodyElemewnt.style.backgroundImage="url('img/Pictures'"+i+"'.jpg')";}}
function playerVisibility(){var musicPlayer=document.getElementById('player');var time;if(typeof(musicPlayer)!='undefined'&&musicPlayer!==null)
{window.onload=resetTimer;document.onmousemove=resetTimer;document.onkeypress=resetTimer;}else{document.onmousemove=showPlayer;}
function showPlayer(){var musicPlayer=document.getElementById('player');musicPlayer.style.opacity="1";}
function hideplayerAfterInterval(){var musicPlayer=document.getElementById('player');musicPlayer.style.opacity="0";}
function resetTimer(){clearTimeout(time);time=setTimeout(hideplayerAfterInterval,3000)}}
function getStreamingData(){var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState===4&&this.status===200){if(this.response.length===0){console.log('%cdebug','font-size: 22px')}
var data=JSON.parse(this.responseText);var page=new Page();var currentSongElement=document.getElementById('currentSong').innerHTML.replace(/&apos;/g,'\'');let currentSongEl=currentSongElement.replace(/&amp;/g,'&');var currentVisitsElement=document.getElementById('currentListeners').innerHTML
let song=data.icestats.source.title.replace(/&apos;/g,'\'');let currentSong=song.replace(/&amp;/g,'&');let visitors=data.icestats.source.listeners;document.title=currentSong;if(currentSongEl.trim()!==currentSong.trim()){page.refreshCurrentSong(currentSong,visitors);Updatelist(currentSong);}}};xhttp.open('GET','https://668dee490f14.ngrok.io/status-json.xsl',true);xhttp.send();}
