/* Standalone Torrent Downloader - v6.6; native focus events and white card highlight. */
(function(){
var oldFetch=window.fetch, id=0;
function verbose(){try{return window.Lampa&&Lampa.Storage.field("t-downloader.debug-logs")===true}catch(e){return false}}
if(typeof oldFetch==="function")window.fetch=function(input,init){
 var raw=String(input&&input.url||input),path="";
 try{path=new URL(raw,location.href).pathname}catch(e){}
 if(!(/^\/api\/v2\//.test(path)||/\/transmission\/rpc\/?$/.test(path)))return oldFetch.apply(this,arguments);
 var seq=++id,t=Date.now(),verb=verbose();
 if(verb)console.log("Torrent Downloader","→ #"+seq+" "+(init&&init.method||"GET")+" "+path);
 var p;try{p=oldFetch.apply(this,arguments)}catch(err){console.log("Torrent Downloader","✗ #"+seq+" "+path+" "+(err&&err.name||"Error"));throw err}
 return Promise.resolve(p).then(function(res){if(verb||!res.ok)console.log("Torrent Downloader",(res.ok?"✓":"✗")+" #"+seq+" "+path+" HTTP "+res.status+" "+(Date.now()-t)+" ms");return res},function(err){console.log("Torrent Downloader","✗ #"+seq+" "+path+" "+(err&&err.name||"Error")+" (network/CORS/mixed content) "+(Date.now()-t)+" ms");throw err});
};
})();
"use strict";(()=>{var Me=Object.defineProperty,Ue=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var se=(a,e,t)=>e in a?Me(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,D=(a,e)=>{for(var t in e||(e={}))Fe.call(e,t)&&se(a,t,e[t]);if(ne)for(var t of ne(e))Ye.call(e,t)&&se(a,t,e[t]);return a},C=(a,e)=>Ue(a,ze(e));var l=(a,e,t)=>new Promise((o,n)=>{var r=c=>{try{i(t.next(c))}catch(g){n(g)}},s=c=>{try{i(t.throw(c))}catch(g){n(g)}},i=c=>c.done?o(c.value):Promise.resolve(c.value).then(r,s);i((t=t.apply(a,e)).next())});var re={downloads:{ru:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438",en:"Downloads"},download:{ru:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",en:"Download"},"download-button.added":{ru:"\u0422\u043E\u0440\u0440\u0435\u043D\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",en:"Torrent added"},"downloads-tab.connected":{ru:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",en:"Connected"},"downloads-tab.disconnected":{ru:"\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",en:"Disconnected"},"downloads-tab.freespace":{ru:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: ",en:"Free space: "},"download-card.time.0":{en:"d",ru:"\u0434"},"download-card.time.1":{en:"h",ru:"\u0447"},"download-card.time.2":{en:"min",ru:"\u043C\u0438\u043D"},"download-card.time.3":{en:"s",ru:"\u0441\u0435\u043A"},"download-card.status.0":{en:"stopped",ru:"\u043F\u0430\u0443\u0437\u0430"},"download-card.status.1":{en:"queued to verify local data",ru:"\u0436\u0434\u0451\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"},"download-card.status.2":{en:"verifying local data",ru:"\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"},"download-card.status.3":{en:"queued to download",ru:"\u0436\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"},"download-card.status.4":{en:"downloading",ru:"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"},"download-card.status.5":{en:"queued to seed",ru:"\u0436\u0434\u0451\u0442 \u0440\u0430\u0437\u0434\u0430\u0447\u0438"},"download-card.status.6":{en:"seeding",ru:"\u0440\u0430\u0437\u0434\u0430\u0451\u0442\u0441\u044F"},"download-card.status.7":{en:"isolated",ru:"\u043D\u0435\u0442 \u043F\u0438\u0440\u043E\u0432"},"download-card.status.8":{en:"stalled",ru:"\u043F\u0440\u043E\u0441\u0442\u0430\u0438\u0432\u0430\u0435\u0442"},"download-card.status.9":{en:"error",ru:"\u043E\u0448\u0438\u0431\u043A\u0430"},"download-card.status.10":{en:"allocating",ru:"\u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0441\u0442\u0430"},"download-card.status.11":{en:"moving",ru:"\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435"},"download-card.status.12":{en:"unknown",ru:"\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E"},"download-card.status.13":{en:"initializing",ru:"\u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"},"download-card.status.14":{en:"completed",ru:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"},"download-card.size.0":{en:"B",ru:"\u0411"},"download-card.size.1":{en:"KB",ru:"\u041A\u0411"},"download-card.size.2":{en:"MB",ru:"\u041C\u0411"},"download-card.size.3":{en:"GB",ru:"\u0413\u0411"},"download-card.size.4":{en:"TB",ru:"\u0422\u0411"},"actions.title":{ru:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",en:"Actions"},"actions.open":{ru:"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438",en:"Play"},"actions.open-card":{ru:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0444\u0438\u043B\u044C\u043C\u0430",en:"Open movie card"},"actions.select-file":{ru:"\u0424\u0430\u0439\u043B\u044B:",en:"Files:"},"actions.pause":{ru:"\u041F\u0430\u0443\u0437\u0430",en:"Pause"},"actions.resume":{ru:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",en:"Resume"},"actions.hide":{ru:"\u0421\u043A\u0440\u044B\u0442\u044C",en:"Hide"},"actions.delete":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",en:"Delete"},"actions.delete-with-file":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442 \u0438 \u0444\u0430\u0439\u043B",en:"Delete torrent and file"},"actions.delete-torrent":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442",en:"Delete torrent"},"actions.delete-torrent-keep-file":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442, \u043D\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B",en:"Delete torrent but keep file"},"background-worker.connection-success":{ru:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",en:"Connection to server successfully established"},"background-worker.error-detected":{ru:"\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438",en:"An error has been detected. See console for details"}};var L=`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="4 4 16 16">\r
    <path fill="currentcolor" d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z" />\r
</svg>`;var d={type:"other",version:"2.6.1",author:"https://github.com/kvart714",name:"Torrent Downloader",description:"Transmission RPC client",component:"t-downloader"};var ie=d.component+".torrents.data.v2",w=class{static getData(){return this.data}static getMovie(e){if(!e)return null;let t=this.data.torrents.filter(o=>o.id===e);return t.length>0?t.reduce((o,n)=>o.percentDone>=n.percentDone?o:n):null}static getByHash(e){var t;return(t=this.data.torrents.find(o=>o.hash===e))!=null?t:null}static ensureMovie(e){let t=this.data.torrents.filter(o=>o.externalId===e.externalId);return t.length>0?t.reduce((o,n)=>o.percentDone>=n.percentDone?o:n):e}static setData(e){return l(this,null,function*(){this.data=e,Lampa.Storage.set(ie,this.data)})}};w.data=Lampa.Storage.get(ie,{torrents:[],info:{freeSpace:0}});var de=`<div class="selector download-card full-start__button d-updatable" id="download-card-{id}">\r
  <div class="download-card__file-info">\r
    <span class="file-name">\r
      <span data-key="fileName">{fileName}</span>\r
    </span>\r
    <span class="speed">\r
      <span data-key="speed">{speed}</span>\r
    </span>\r
  </div>\r
  <div class="download-card__progress-bar">\r
    <div class="download-card__progress-bar-progress" style="width: {percent}"></div>\r
  </div>\r
  <div class="download-card__stats">\r
    <span class="downloaded">\r
      <span data-key="downloadedSize">{downloadedSize}</span> / \r
      <span data-key="totalSize">{totalSize}</span>\r
    </span>\r
    <span class="percent">\r
      <span data-key="percent">{percent}</span>\r
    </span>\r
    <span class="eta">\r
      <span data-key="eta">{eta}</span>\r
    </span>\r
  </div>\r
</div>\r
`;var le=`.download-card {
  all: unset;
  display: block;
  width: 80%;
  height: auto;
  margin: 0;
  margin-top: 0.75em;
  padding: 0.75em;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  transition: background-color 0.3s;
  border-radius: 1em;
}
.download-card__file-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
.download-card__file-info .file-name, .download-card__file-info .speed {
  font-size: 1.5em;
}
.download-card__progress-bar {
  height: 6px;
  background: #ddd;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 0.7em;
  margin-bottom: 0.5em;
}
.download-card__progress-bar-progress {
  height: 100%;
  background: linear-gradient(90deg, #4a90e2, #357ab8);
  transition: width 0.5s ease;
}
.download-card__stats {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 1.1em;
}
.download-card__stats .speed {
  position: absolute;
  top: 0;
  right: 0;
  font-size: inherit;
}
.download-card__stats .percent {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: inherit;
}
.download-card__stats .downloaded {
  text-align: left;
  font-size: inherit;
}
.download-card__stats .eta {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: inherit;
}`;function h(...a){console.log(d.name,a.map(v=>v&&v.message?v.name+": "+v.message:String(v)).join(" "))}function ce(...a){console.warn(d.name,a.map(v=>v&&v.message?v.name+": "+v.message:String(v)).join(" "))}var pe=d.component+".movieinfo.data.v4",b=class{static getMovieInfo(e){if(!e.id)return null;let t=e.type+"_"+e.id;if(this.memoryCache[t])return this.memoryCache[t];if(!this.requestedIds.has(t)){this.requestedIds.add(t);this.loadContentInfo(e.id,e.type).then(o=>{this.requestedIds.delete(t);if(o){this.memoryCache[t]=o;this.diskCache[t]=o;Lampa.Storage.set(pe,this.diskCache);try{w.getData().torrents.filter(a=>a.id===e.id&&a.type===e.type).forEach(a=>Ae(a))}catch(n){}}}).catch(()=>{this.requestedIds.delete(t)})}return this.diskCache[t]||null}static loadContentInfo(e,t,o=!0){return new Promise(resolve=>{let api=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;if(!api||typeof api.get!=="function"){resolve(null);return}try{api.get(t+"/"+e,{},data=>{if(data&&(data.title||data.name))resolve(data);else if(o)this.loadContentInfo(e,t==="movie"?"tv":"movie",!1).then(resolve);else resolve(null)},()=>{if(o)this.loadContentInfo(e,t==="movie"?"tv":"movie",!1).then(resolve);else resolve(null)},{life:60*24})}catch(err){if(o)this.loadContentInfo(e,t==="movie"?"tv":"movie",!1).then(resolve);else resolve(null)}})}};b.requestedIds=new Set,b.diskCache=Lampa.Storage.get(pe,{}),b.memoryCache={};var p={STOPPED:0,CHECK_PENDING:1,CHECKING:2,DOWNLOAD_PENDING:3,DOWNLOADING:4,SEED_PENDING:5,SEEDING:6,ISOLATED:7,STALLED:8,ERROR:9,ALLOCATING:10,MOVING:11,UNKNOWN:12,INITIALIZATION:13};function me(a){switch(a){case 0:return p.STOPPED;case 1:return p.CHECK_PENDING;case 2:return p.CHECKING;case 3:return p.DOWNLOAD_PENDING;case 4:return p.DOWNLOADING;case 5:return p.SEED_PENDING;case 6:return p.SEEDING;default:return p.UNKNOWN}}function ue(a){switch(a){case"allocating":return p.ALLOCATING;case"checkingDL":case"checkingUP":case"checkingResumeData":return p.CHECKING;case"queuedDL":return p.DOWNLOAD_PENDING;case"queuedUP":return p.SEED_PENDING;case"downloading":case"forcedMetaDL":return p.DOWNLOADING;case"uploading":case"forcedUP":return p.SEEDING;case"pausedDL":case"pausedUP":case"stoppedDL":case"stoppedUP":return p.STOPPED;case"stalledDL":case"stalledUP":return p.STALLED;case"missingFiles":return p.ISOLATED;case"moving":return p.MOVING;case"error":return p.ERROR;case"metaDL":case"forcedDL":return p.INITIALIZATION;default:return p.UNKNOWN}}function T(a,e=2){if(a===0)return"0";let t=1024,o=e<0?0:e,n=Math.floor(Math.log(a)/Math.log(t));return parseFloat((a/Math.pow(t,n)).toFixed(o))+" "+Lampa.Lang.translate(`download-card.size.${n}`)}function We(a){let e=Lampa.Lang.translate("download-card.time.3");return`${T(a)}/${e}`}function Ve(a){let e=Math.floor(a/86400),t=Math.floor(a%86400/3600),o=Math.floor(a%3600/60),n=Math.floor(a%60);return[e,t,o,n].map((s,i)=>s?s+Lampa.Lang.translate(`download-card.time.${i}`):null).filter(Boolean).slice(0,2).join(" ")}function je(a){let e=new Date(a||"");return isNaN(e.getTime())?"":e.getFullYear()}function v(a){let e=b.getMovieInfo(a),t=K[Lampa.Storage.get(q)]||K[1];return{id:a.id+"_"+a.externalId,torrentName:a.name,title:(e==null?void 0:e.title)||(e==null?void 0:e.name)||(a.status===p.INITIALIZATION?"Initialization":a.name),poster:e!=null&&e.poster_path?Lampa.TMDB.image(`t/p/${t}${e.poster_path}`):"",year:je((e==null?void 0:e.release_date)||(e==null?void 0:e.first_air_date)),fileName:e!=null&&e.title||e!=null&&e.name?a.name:"",percent:(100*a.percentDone).toFixed(2)+"%",speed:a.speed>0?We(a.speed):"",downloadedSize:T(a.percentDone*a.totalSize),totalSize:T(a.totalSize),eta:a.status===p.DOWNLOADING?Ve(a.eta):a.status===p.STALLED&&a.percentDone===1?Lampa.Lang.translate("download-card.status.14"):Lampa.Lang.translate(`download-card.status.${a.status}`),status:a.status===p.DOWNLOADING?"downloading":a.percentDone===1?"completed":"paused",seeders:`${a.seeders||0} (${a.activeSeeders||0})`}}var fe=d.component+".torrents.data.views.",S=class a{static getViews(e){let t=Lampa.Storage.get(fe+e.externalId);return t&&typeof t=="object"?t:{}}static rememberView(e,t){let o=a.getViews(e);o.last=t,o[t]=!0,Lampa.Storage.set(fe+e.externalId,o)}};function G(a,e,t){return l(this,null,function*(){let o=m.getClient();try{let fresh=(yield o.getTorrents()).find(x=>x.hash===e.hash||String(x.externalId)===String(e.externalId));if(fresh)e=fresh}catch(err){}let n=yield o.getFiles(e),r=`${o.url}/downloads/${encodeURI(e.path)}/`;if(n.length<1)throw new Error("No files found in torrent");if(n.length===1&&ge({title:t||e.name,name:n[0].name,url:r+encodeURI(n[0].name),torrent_hash:e.hash}),n.length>1){let g,s=S.getViews(e),c=n.sort((f,A)=>f.name.localeCompare(A.name,void 0,{numeric:!0,sensitivity:"base"})).map((f,A)=>({title:f.name.split(/[\\/]/).pop()||f.name,name:f.name,url:r+encodeURI(f.name),picked:!!s[f.name],selected:s.last===f.name,torrent_hash:e.hash}));Lampa.Select.show({title:Lampa.Lang.translate("actions.select-file"),items:c,onSelect(f){return l(this,null,function*(){S.rememberView(e,f.name),ge({playlist:c,title:t||e.name,name:f.name,url:f.url,torrent_hash:e.hash})})},onBack:function(){Lampa.Controller.toggle(a)}})}})}function tdTimeline(a){try{let id=a.torrent_hash||"";let name=a.name||a.url||"";if(!id||!name||!Lampa.Timeline||!Lampa.Utils.hash)return null;return Lampa.Timeline.view(Lampa.Utils.hash("tdownloader:"+id+":"+name))}catch(e){return null}}
function ge(a){var e;let tm=tdTimeline(a);if(tm)a.timeline=tm;if(a.playlist)a.playlist.forEach(item=>{let itemTm=tdTimeline(Object.assign({},item,{torrent_hash:a.torrent_hash}));if(itemTm)item.timeline=itemTm});h(`Player request ${a.url}`,a),Lampa.Player.play(a),Lampa.Player.playlist((e=a.playlist)!=null?e:[])}function B(a){a.status===p.STOPPED?m.getClient().startTorrent(a):m.getClient().stopTorrent(a)}function tdRun(action,context){Promise.resolve().then(action).catch(err=>{console.error(d.name,err);Lampa.Noty.show("Ошибка загрузки: "+(err&&err.message?err.message:String(err)))}).finally(()=>{if(context==="full_start"&&!Lampa.Select.opened())try{if(Lampa.Controller.enabled().name==="select")Lampa.Controller.toggle("full_start")}catch(err){}})}
function tdGoDownloads(e){j._pendingHash=e.hash||e.externalId;Lampa.Activity.push({url:"",title:Lampa.Lang.translate("downloads"),component:"downloads-tab",page:1})}
function I(a,e,t,o){e=w.ensureMovie(e);let current=()=>w.getByHash(e.hash)||e;Lampa.Select.show({title:Lampa.Lang.translate("actions.title"),items:[{title:Lampa.Lang.translate("actions.open"),onSelect(){tdRun(()=>G(a,current(),t),a)}},...(a==="full_start"?[{title:"Перейти в загрузки",onSelect(){tdGoDownloads(current())}}]:[]),...(a==="downloads-tab"&&e.id?[{title:Lampa.Lang.translate("actions.open-card"),onSelect(){Lampa.Activity.push({component:"full",id:e.id,method:e.type,card:e})}}]:[]),{title:e.status===p.STOPPED?Lampa.Lang.translate("actions.resume"):Lampa.Lang.translate("actions.pause"),onSelect(){tdRun(async()=>{let x=current();await(x.status===p.STOPPED?m.getClient().startTorrent(x):m.getClient().stopTorrent(x));Lampa.Controller.toggle(a)},a)}},{title:Lampa.Lang.translate("actions.hide"),onSelect(){tdRun(async()=>{await m.getClient().hideTorrent(current());if(o)o(e);Lampa.Controller.toggle(a)},a)}},{title:Lampa.Lang.translate("actions.delete"),subtitle:Lampa.Lang.translate("actions.delete-with-file"),onSelect(){tdRun(async()=>{await m.getClient().removeTorrent(current(),!0);if(o)o(e);Lampa.Controller.toggle(a)},a)}},{title:Lampa.Lang.translate("actions.delete-torrent"),subtitle:Lampa.Lang.translate("actions.delete-torrent-keep-file"),onSelect(){tdRun(async()=>{await m.getClient().removeTorrent(current(),!1);if(o)o(e);Lampa.Controller.toggle(a)},a)}}],onBack:function(){Lampa.Controller.toggle(a)}})}
function P(a,e,t,o){var r;e=(r=w.getByHash(e.hash))!=null?r:e;let n=Lampa.Storage.field(W);n==1?e.percentDone===1?G(a,e,t):B(e):n==2?G(a,e,t):n==3?B(e):I(a,e,t,o)}function V(a,e){let t=$(Lampa.Template.get("download-card",v(a)));$(".full-start-new__right").append(t),t.on("hover:enter",()=>{P("full_start",a,(e==null?void 0:e.title)||(e==null?void 0:e.original_title))}),t.on("hover:long",()=>{I("full_start",a,(e==null?void 0:e.title)||(e==null?void 0:e.original_title))})}function we(a){let e=v(a),t=document.getElementById(`download-card-${e.id}`);if(t){for(let o in e){let n=t.querySelector(`[data-key="${o}"]`);n&&(n.textContent=e[o])}t.querySelector(".download-card__progress-bar-progress").setAttribute("style",`width: ${e.percent};`)}}function he(){Lampa.Template.add("download-card",de),$("body").append(`<style>${le}</style>`),Lampa.Listener.follow("full",a=>{if(a.type==="complite"){let e=w.getMovie(a.data.movie.id);e&&V(e,a.data.movie)}})}var _e=`<div class="download-circle d-updatable download-circle-{status}-{id}">\r
    <div class="download-circle__circle">\r
        <svg class="download-circle__circle-svg" xmlns="http://www.w3.org/2000/svg">\r
            <circle\r
                fill="rgba(0, 0, 0, 0.60)"\r
                r="17px"\r
                cx="20"\r
                cy="20"\r
            ></circle>\r
            <circle\r
                class="download-circle__full_{status}"\r
                stroke-width="2px"\r
                r="12px"\r
                cx="20"\r
                cy="20"\r
            ></circle>\r
            <circle\r
                class="download-circle__partial_{status}"\r
                fill="none"\r
                stroke="#fff"\r
                stroke-width="2px"\r
                stroke-dasharray="100"\r
                stroke-dashoffset="{progress}"\r
                transition="stroke-dasharray 0.7s linear 0s"\r
                r="12px"\r
                cx="20"\r
                cy="20"\r
                pathlength="100"\r
            ></circle>\r
        </svg>\r
    </div>\r
    <div class="download-circle__down-arrow">\r
        <svg\r
            class="download-circle__down-arrow-svg_{status}"\r
            xmlns="http://www.w3.org/2000/svg"\r
        >\r
            <path\r
                d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z"\r
            />\r
        </svg>\r
        <svg\r
            class="download-circle__down-arrow-svg-animated_{status}"\r
            fill="white"\r
            xmlns="http://www.w3.org/2000/svg"\r
        >\r
            <path\r
                d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z"\r
            />\r
        </svg>\r
    </div>\r
</div>\r
`;var be=`.download-complete,
.download-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
}
.download-complete__circle,
.download-circle__circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
}
.download-complete__circle-svg,
.download-circle__circle-svg {
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.download-complete__full_in-progress,
.download-circle__full_in-progress {
  fill: none;
  stroke: rgba(255, 255, 255, 0.5);
}
.download-complete__full_complete,
.download-circle__full_complete {
  fill: white;
  stroke: none;
}
.download-complete__partial_complete,
.download-circle__partial_complete {
  display: none;
}
.download-complete__partial_in-progress,
.download-circle__partial_in-progress {
  transition: stroke-dashoffset 0.5s ease;
}
.download-complete__down-arrow,
.download-circle__down-arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.download-complete__down-arrow svg,
.download-circle__down-arrow svg {
  width: 24px;
  height: 24px;
}
.download-complete__down-arrow-svg_in-progress,
.download-circle__down-arrow-svg_in-progress {
  fill: rgba(255, 255, 255, 0.5);
}
.download-complete__down-arrow-svg_complete,
.download-circle__down-arrow-svg_complete {
  fill: "white";
}
.download-complete__down-arrow-svg-animated_in-progress,
.download-circle__down-arrow-svg-animated_in-progress {
  position: absolute;
  clip-path: inset(0 0 100% 0);
  animation: pulseColor 2s ease-out infinite;
}
.download-complete__down-arrow-svg-animated_complete,
.download-circle__down-arrow-svg-animated_complete {
  display: none;
}

@keyframes pulseColor {
  0% {
    clip-path: inset(0 0 100% 0);
  }
  30% {
    clip-path: inset(0 0 0 0);
  }
  70% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
}`;function ve(a,e){var o;let t=$(e);if(!t.find(".download-circle").length){let n=(o=a.percentDone)!=null?o:0,r=Lampa.Template.get("download-circle",{id:a.id,status:n===1?"complete":"in-progress",progress:100*(1-n)});t.find(".card__vote").after(r)}}function Je(a,e){let t=w.getMovie(a);t&&ve(t,e)}function Le(a){var o;let e=document.querySelectorAll(`.download-circle-in-progress-${a.id}`);if(!e.length)return;let t=(o=a.percentDone)!=null?o:0;e.forEach(n=>{if(t===1){let r=n.parentElement;n.remove(),ve(a,r)}else{let r=n.querySelector(".download-circle__partial_in-progress");r==null||r.setAttribute("stroke-dashoffset",`${100*(1-t)}`)}})}function ye(){Lampa.Template.add("download-circle",_e),$("body").append(`<style>${be}</style>`),Lampa.Listener.follow("line",a=>{var e,t;if(a.type==="append")for(let o of a.items)(e=o==null?void 0:o.data)!=null&&e.id&&Je((t=o==null?void 0:o.data)==null?void 0:t.id,o.card)})}var Te=`<div class="downloads-tab__item downloads-tab__item--mini selector {status}" data-id="{id}">
  <div class="downloads-tab__main">
    <div class="downloads-tab__file"><span data-field="torrentName">{torrentName}</span></div>

    <div class="downloads-tab__footer">
      <div class="downloads-tab__meta-top">
        <div class="downloads-tab__meta-left">
          <span class="downloads-tab__meta-text" data-field="percent">{percent}</span>
          <span> \u2022 </span>
          <span class="downloads-tab__meta-text" data-field="seeders">{seeders}</span>
        </div>
        <span class="downloads-tab__speed"><span data-field="speed">{speed}</span></span>
      </div>

      <div class="downloads-tab__progress-wrapper">
        <div class="downloads-tab__progress-fill" style="width: {percent};"></div>
      </div>

      <div class="downloads-tab__meta-bottom">
        <div class="downloads-tab__sizes">
          <span class="downloads-tab__meta-downloaded" data-field="downloadedSize">{downloadedSize}</span>
          <span class="downloads-tab__meta-slash"> / </span>
          <span class="downloads-tab__meta-total" data-field="totalSize">{totalSize}</span>
        </div>
        <span class="downloads-tab__eta" data-field="eta">{eta}</span>
      </div>
    </div>
  </div>
</div>
`;var Se=`<div class="downloads-tab__item selector {status}" data-id="{id}">\r
  <div class="downloads-tab__poster" style="background-image: url('{poster}')"></div>\r
  <div class="downloads-tab__main">\r
    <div class="downloads-tab__movie"><span data-field="title">{title}</span></div>\r
    <div class="downloads-tab__year"><span data-field="year">{year}</span></div>\r
    <div class="downloads-tab__file"><span data-field="fileName">{fileName}</span></div>\r
\r
    <div class="downloads-tab__footer">\r
      <div class="downloads-tab__meta-top">\r
        <div class="downloads-tab__meta-left">\r
          <span class="downloads-tab__meta-text" data-field="percent">{percent}</span>\r
          <span> \u2022 </span>\r
          <span class="downloads-tab__meta-text" data-field="seeders">{seeders}</span>\r
        </div>\r
        <span class="downloads-tab__speed"><span data-field="speed">{speed}</span></span>\r
      </div>\r
\r
      <div class="downloads-tab__progress-wrapper">\r
        <div class="downloads-tab__progress-fill" style="width: {percent};"></div>\r
      </div>\r
\r
      <div class="downloads-tab__meta-bottom">\r
        <div class="downloads-tab__sizes">\r
          <span class="downloads-tab__meta-downloaded" data-field="downloadedSize">{downloadedSize}</span>\r
          <span class="downloads-tab__meta-slash"> / </span>\r
          <span class="downloads-tab__meta-total" data-field="totalSize">{totalSize}</span>\r
        </div>\r
        <span class="downloads-tab__eta" data-field="eta">{eta}</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`;var Ie=`<div class="downloads-tab__list d-updatable">\r
  <div class="downloads-tab__header-title-wrapper">\r
    <div class="downloads-tab__header-title">{server}</div>\r
    <div class="downloads-tab__header-size">{freeSpace}</div>\r
  </div>\r
  <div class="downloads-tab__rows"></div>\r
</div>\r
`;var xe=`@charset "UTF-8";
.downloads-tab__list {
  --color-text-primary: #dbdbdb;
  --color-text-muted: #b1b1b1;
  --fs-header: 1.4em;
  --fs-title: 1.6em;
  --fs-file: 1em;
  --fs-body: 1.2em;
  --sp-after-title: 0.3em;
  --sp-between-text-and-progress: 0.5em;
  --accent-violet: #b67dff;
  --accent-violet-light: #c698ff;
  --card-bg-color: 24, 24, 24;
  --card-bg-alpha: 0.8;
  --card-bg-alpha-hover: 0.6;
  --poster-scale-hover: 1.04;
  color: var(--color-text-muted);
  padding: 1em;
}
.downloads-tab__list .downloads-tab__header-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  font-size: var(--fs-header);
  font-weight: 700;
  color: var(--color-text-primary);
}
.downloads-tab__list .downloads-tab__rows {
  display: flex;
  gap: 1em;
  align-items: flex-start;
}
.downloads-tab__col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.downloads-tab__group {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.downloads-tab__group > .downloads-tab__item:first-child {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.downloads-tab__group > .downloads-tab__item--mini {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.downloads-tab__group > .downloads-tab__item--mini:last-child {
  border-bottom-left-radius: 0.6em;
  border-bottom-right-radius: 0.6em;
}
.downloads-tab__item {
  display: grid;
  grid-template-columns: 9em 1fr;
  gap: 1em;
  padding: 0.8em;
  border-radius: 0.6em;
  background: rgba(var(--card-bg-color), var(--card-bg-alpha));
  box-shadow: 0 0.5em 1.2em rgba(0, 0, 0, 0.5);
  transition: background 0.15s ease, box-shadow 0.15s ease;
  outline: 1px solid rgba(255, 255, 255, 0.062745098);
  /* \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F */
  /* \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \u043F\u043E\u0441\u0442\u0435\u0440\u0430 \u043F\u0440\u0438 hover/focus \u043D\u0430 item */
}
.downloads-tab__item:hover, .downloads-tab__item.focus, .downloads-tab__item:focus, .downloads-tab__item:focus-visible, .downloads-tab__item.td-active {
  outline: 3px solid #fff !important;
  outline-offset: -3px !important;
  box-shadow: inset 0 0 0 3px #fff, 0 0 0 2px #fff, 0 0.5em 1.2em rgba(0,0,0,.5) !important;
  background: rgba(var(--card-bg-color), var(--card-bg-alpha-hover)) !important;
}
.downloads-tab__item.downloading .downloads-tab__meta-left {
  display: inline;
}
.downloads-tab__item.completed .downloads-tab__meta-downloaded,
.downloads-tab__item.completed .downloads-tab__meta-slash {
  display: none;
}
.downloads-tab__item:hover .downloads-tab__poster, .downloads-tab__item.focus .downloads-tab__poster, .downloads-tab__item:focus-visible .downloads-tab__poster {
  transform: scale(var(--poster-scale-hover));
}
.downloads-tab__item--mini {
  grid-template-columns: 1fr;
  padding-left: 10.8em;
}
.downloads-tab__item--mini .downloads-tab__main {
  min-height: unset;
  grid-template-rows: auto auto;
}
.downloads-tab__poster {
  position: relative;
  width: 9em;
  height: 13.5em;
  border-radius: 0.6em;
  overflow: hidden;
  background-color: rgb(35, 35, 35);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.2s ease;
}
.downloads-tab__poster::after {
  content: "POSTER";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  user-select: none;
}
.downloads-tab__main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  min-height: 13.5em;
}
.downloads-tab__movie {
  font-size: var(--fs-title);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: var(--sp-after-title);
  word-break: break-word;
  overflow-wrap: break-word;
}
.downloads-tab__year {
  color: var(--color-text-muted);
  margin-bottom: 0.8em;
  font-weight: bold;
}
.downloads-tab__file {
  font-size: var(--fs-file);
  font-weight: 500;
  color: #727272;
  margin-bottom: var(--sp-between-text-and-progress);
  overflow-wrap: anywhere;
}
.downloads-tab__footer {
  align-self: end;
  display: grid;
  row-gap: var(--sp-between-text-and-progress);
  font-size: var(--fs-body);
  font-weight: 500;
  color: var(--color-text-muted);
}
.downloads-tab__meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8em;
}
.downloads-tab__meta-left {
  display: none;
  white-space: nowrap;
}
.downloads-tab__speed {
  font-weight: 600;
  color: var(--accent-violet);
}
.downloads-tab__progress-wrapper {
  height: 0.5em;
  border-radius: 10px;
  overflow: hidden;
  background: #2a2a2a;
}
.downloads-tab__progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-violet), var(--accent-violet-light));
  will-change: width;
  transition: width 0.25s ease;
}
.downloads-tab__meta-bottom {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 0.8em;
}
.downloads-tab__sizes {
  white-space: nowrap;
}
.downloads-tab__eta {
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
}
.downloads-tab__meta-total {
  color: var(--accent-violet);
}
@media (orientation: portrait) {
  .downloads-tab__list .downloads-tab__rows {
    flex-direction: column;
    align-items: stretch;
  }
  .downloads-tab__list .downloads-tab__header-title-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3em;
  }
}
@media (prefers-reduced-motion: reduce) {
  .downloads-tab__item, .downloads-tab__poster, .downloads-tab__progress-fill {
    transition: none;
  }
}`;var Ee=`<li class="menu__item selector">\r
    <div class="menu__ico">{icon}</div>\r
    <div class="menu__text">{text}</div>\r
</li>\r
`;function tt(a){let e=new Map;return a.forEach((t,o)=>{let n=t.id>0?String(t.id):`solo_${t.externalId}`;e.has(n)||e.set(n,{torrents:[],lastIndex:o});let r=e.get(n);r.torrents.push(t),r.lastIndex=Math.max(r.lastIndex,o)}),[...e.values()].sort((t,o)=>t.lastIndex-o.lastIndex).map(t=>[...t.torrents].sort((o,n)=>n.totalSize-o.totalSize))}var j=class{constructor(){this.html=$("<div></div>");this.lastFocusedElement=null}create(){m.isConnected||_.start(),this.scroll=new Lampa.Scroll({mask:!0,over:!0,step:200});let e=w.getData(),t=m.isConnected?Lampa.Lang.translate("downloads-tab.connected")+" ("+m.getClient().url+")":Lampa.Lang.translate("downloads-tab.disconnected"),o=$(Lampa.Template.get("downloads-tab",{server:t,freeSpace:Lampa.Lang.translate("downloads-tab.freespace")+T(e.info.freeSpace)}));this.$rows=o.find(".downloads-tab__rows");let n=window.innerWidth<=window.innerHeight,r=tt(e.torrents);if(n)r.forEach(s=>this.$rows.append(this.buildElement(s)));else{let s=[$('<div class="downloads-tab__col"></div>'),$('<div class="downloads-tab__col"></div>')];this.$rows.append(s[0]).append(s[1]);let i=[0,0];r.forEach(c=>{let g=i[0]<=i[1]?0:1;i[g]+=c.length,s[g].append(this.buildElement(c))})}this.scroll.minus(),this.scroll.append(o.get(0)),this.html.append(this.scroll.render())}markFocused(e){if(!e)return;this.html.find(".downloads-tab__item").each(function(){this.classList.remove("td-active");this.style.removeProperty("outline");this.style.removeProperty("outline-offset");this.style.removeProperty("box-shadow")});e.classList.add("td-active");e.style.setProperty("outline","3px solid #fff","important");e.style.setProperty("outline-offset","-3px","important");e.style.setProperty("box-shadow","inset 0 0 0 4px #fff, 0 0 0 2px #fff","important");this.lastFocusedElement=e;try{if(Lampa.Storage.field("t-downloader.debug-logs")===true)console.log("Torrent Downloader","Фокус загрузки: "+(e.getAttribute("data-id")||"без ID"))}catch(a){}}buildElement(e){let t=e.map((o,n)=>{let r=v(o);return $(Lampa.Template.get(n===0?"downloads-row":"downloads-mini-row",r)).on("hover:focus",s=>{this.markFocused(s.currentTarget),this.scroll.update(s.currentTarget,!0)}).on("hover:enter",()=>P("downloads-tab",o,void 0,s=>this.removeTorrentFromUI(s))).on("hover:long",()=>I("downloads-tab",o,void 0,s=>this.removeTorrentFromUI(s)))});if(e.length>1){let o=$('<div class="downloads-tab__group"></div>');return t.forEach(n=>o.append(n)),o}return t[0]}removeTorrentFromUI(e){let t=`${e.id}_${e.externalId}`,o=this.html.find(`.downloads-tab__item[data-id="${t}"]`);if(!o.length)return;let n=o.closest(".downloads-tab__group"),r=n.length>0,s=r&&n.find(".downloads-tab__item").first().is(o),i=o.nextAll(".downloads-tab__item").first();if(i.length||(i=o.prevAll(".downloads-tab__item").first()),!i.length){let c=r?n:o;i=c.nextAll(".downloads-tab__item, .downloads-tab__group").first(),i.length||(i=c.prevAll(".downloads-tab__item, .downloads-tab__group").first())}if(o.remove(),r){let c=n.find(".downloads-tab__item");if(c.length===0)n.remove();else if(s){let g=c.first(),f=g.attr("data-id")||"",A=f.substring(f.indexOf("_")+1),ae=w.getData().torrents.find(Y=>String(Y.externalId)===A);if(ae){let Y=v(ae),oe=$(Lampa.Template.get("downloads-row",Y));g.attr("class",oe.attr("class")||""),g.empty().append(oe.contents())}}}if(Lampa.Controller.collectionSet(this.scroll.render()),i!=null&&i.length){let c=i.is(".downloads-tab__item")?i.get(0):i.find(".downloads-tab__item").first().get(0);c&&(Lampa.Controller.collectionFocus(c,this.scroll.render()),this.markFocused(c),this.scroll.update(c,!0))}}render(e=!1){return this.html}start(){j._active=this;if(!j._listenerInstalled&&Lampa.Controller.listener){j._listenerInstalled=!0;Lampa.Controller.listener.follow("toggle",function(e){try{if(e.name==="content"&&(j._fromHead||j._fromMenu)&&j._active&&Lampa.Activity.active().component==="downloads-tab"){j._fromHead=!1;j._fromMenu=!1;Lampa.Controller.toggle("downloads-tab")}}catch(t){}})}Lampa.Controller.add("downloads-tab",{toggle:()=>{var e;Lampa.Controller.collectionSet(this.scroll.render());let t=this.lastFocusedElement&&this.html.get(0).contains(this.lastFocusedElement)?this.lastFocusedElement:this.html.find(".downloads-tab__item").first().get(0);if(j._pendingHash){let found=this.html.find(".downloads-tab__item").filter(function(){return (this.getAttribute("data-id")||"").endsWith("_"+j._pendingHash)}).first().get(0);if(found)t=found;j._pendingHash=null}if(t){Lampa.Controller.collectionFocus(t,this.scroll.render()),this.markFocused(t),this.scroll.update(t,!0)}},left:()=>Navigator.canmove("left")?Navigator.move("left"):(j._fromMenu=!0,Lampa.Controller.toggle("menu")),right:()=>Navigator.move("right"),up:()=>Navigator.canmove("up")?Navigator.move("up"):(j._fromHead=!0,Lampa.Controller.toggle("head")),down:()=>Navigator.canmove("down")&&Navigator.move("down"),back:()=>Lampa.Activity.backward()}),Lampa.Controller.toggle("downloads-tab")}build(e){}bind(e){}empty(){}next(){}append(e,t){}limit(){}refresh(){}pause(){}stop(){}destroy(){if(j._active===this){j._active=null;j._fromHead=!1;j._fromMenu=!1}this.scroll.destroy(),this.html.remove()}};j._active=null;j._fromHead=!1;j._fromMenu=!1;j._listenerInstalled=!1;j._pendingHash=null;function Ae(a){let e=v(a),t=$(document).find(`.downloads-tab__item[data-id="${e.id}"]`);t.length&&(t.removeClass("downloading completed paused").addClass(e.status),t.find(".downloads-tab__progress-fill").css("width",e.percent),t.find(".downloads-tab__poster").css("background-image",`url(${e.poster})`),Object.keys(e).forEach(o=>{t.find(`[data-field="${o}"]`).each(function(){$(this).text(e[o])})}))}function De(){Lampa.Template.add("menu-button",Ee),Lampa.Template.add("downloads-row",Se),Lampa.Template.add("downloads-mini-row",Te),Lampa.Template.add("downloads-tab",Ie),$("body").append(`<style>${xe}</style>`),Lampa.Component.add("downloads-tab",j);let a=Lampa.Lang.translate("downloads"),e=$(Lampa.Template.get("menu-button",{icon:L,text:a}));e.on("hover:enter",function(){Lampa.Activity.push({url:"",title:a,component:"downloads-tab",page:1})}),$(".menu .menu__list").eq(0).append(e)}var at=10,u=class u{static start(){var o;let e=Lampa.Storage.field(J),t=(o=H[e])!=null?o:H[0];u.subscription&&clearInterval(u.subscription),u.consecutiveErrors=0,u.wasConnected=null,u.subscription=setInterval(u.tick,t*1e3)}static tick(){return l(this,null,function*(){try{let e=yield m.getClient().getData();if(w.setData(e),$(".d-updatable").length)for(let o of e.torrents)we(o),Le(o),Ae(o);let t=m.getClient().url;u.consecutiveErrors=0,m.isConnected=!0,u.wasConnected!==!0&&(h("Connected to "+t),Lampa.Noty.show(Lampa.Lang.translate("background-worker.connection-success")+": "+t),u.wasConnected=!0)}catch(e){h("Error:",e),m.isConnected=!1,u.consecutiveErrors++,u.wasConnected!==!1&&(Lampa.Noty.show(Lampa.Lang.translate("background-worker.error-detected")),u.wasConnected=!1),u.consecutiveErrors>at&&(clearInterval(u.subscription),h("Stopping background worker due to too many consecutive errors"))}})}};u.consecutiveErrors=0,u.wasConnected=null;var _=u;var J=`${d.component}.interval`,W=`${d.component}.default-action`,Q=`${d.component}.allow-multiple-marks`,q=`${d.component}.poster-quality`,x=`${d.component}.server.url`,Z=`${d.component}.server.login`,X=`${d.component}.server.password`,ee=`${d.component}.server.type`,te=`${d.component}.jellyfin.separate-movies-tv`,y=`${d.component}.jellyfin.subfolder`,N=`${d.component}.jellyfin.include-year`,k=`${d.component}.jellyfin.include-tmdbid`,H=[2,5,10,30,60,5*60,15*60],K=["w200","w342","w500","w780","w1280"];function Ce(){Lampa.SettingsApi.addComponent({component:d.component,name:d.name+" v6.6",icon:L}),Lampa.SettingsApi.addParam({component:d.component,param:{name:"t-downloader.debug-logs",type:"trigger",default:!1},field:{name:"Подробное логирование",description:"Показывать сетевые запросы в консоли Torrent Downloader"},onChange(){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:J,type:"select",placeholder:"2s",values:["2s","5s","10s","30s","1m","5m","15m"],default:0},field:{name:"Update interval"},onChange(a){Lampa.Settings.update(),_.start()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:W,type:"select",placeholder:"",values:["Open actions menu","Play if done, Resume if in progress","Play","Resume / Pause download"],default:0},field:{name:"Default press action",description:"Long press always opens the actions menu."},onChange(a){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:Q,type:"trigger",default:!1},field:{name:"Keep torrents screen open after download",description:"After selecting a torrent, the app does not return back and keeps the add screen open, allowing you to add multiple torrents in a row."},onChange(a){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:q,type:"select",placeholder:"",values:["Low","Medium","High","Very High","Ultra"],default:1},field:{name:"Poster quality"},onChange(a){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:"transmission-title",type:"title",default:""},field:{name:"Server settings:"}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:ee,type:"select",placeholder:"",values:["Transmission","qBitTorrent"],default:"0"},field:{name:"Torrent Client"},onChange(a){Lampa.Settings.update(),m.reset()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:x,type:"input",placeholder:"",values:"",default:""},field:{name:"Url"},onChange(a){Lampa.Settings.update(),m.reset()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:Z,type:"input",placeholder:"",values:"",default:""},field:{name:"Login"},onChange(a){Lampa.Settings.update(),m.reset()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:X,type:"input",placeholder:"",values:"",default:""},field:{name:"Password"},onChange(a){Lampa.Settings.update(),m.reset()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:"jellyfin-title",type:"title",default:""},field:{name:"Jellyfin / Plex integration:"}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:te,type:"trigger",default:!1},field:{name:"Download movies and TV shows into separate directories"},onChange(){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:y,type:"trigger",default:!1},field:{name:"Download into a subfolder with title"},onChange(){Lampa.Storage.field(y)!==!0&&(Lampa.Storage.set(N,!1),Lampa.Storage.set(k,!1)),Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:N,type:"trigger",default:!1},field:{name:"Add (year) to folder name"},onRender(a){Lampa.Storage.field(y)===!0?a.show():a.hide()},onChange(){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:d.component,param:{name:k,type:"trigger",default:!1},field:{name:"Add [tmdbid-***] to folder name"},onRender(a){Lampa.Storage.field(y)===!0?a.show():a.hide()},onChange(){Lampa.Settings.update()}})}var Pe="lampa:";function Ne(a){return Array.isArray(a)?a:typeof a=="string"?a.split(",").map(e=>e.trim()).filter(Boolean):[]}function O(a){var n;let t=(n=Ne(a).find(r=>r.startsWith(Pe)))==null?void 0:n.split(":")[1];if(!t)return 0;let o=parseInt(t,10);return Number.isFinite(o)&&o>0?o:0}function R(a){return Ne(a).indexOf("tv")!==-1?"tv":"movie"}function E(a){let e=[Pe+a.id];return ke(a)&&e.push("tv"),e}function ot(a){return a.replace(/[\\/:*?"<>|]+/g," ").replace(/\s+/g," ").trim()}function M(a){let e=ot((a.title||a.name).trim()),t=a.release_year||(a.release_date?a.release_date.slice(0,4):"")||(a.first_air_date?a.first_air_date.slice(0,4):""),o="";return Lampa.Storage.field(te)&&(o+=`/${ke(a)?"tv":"movie"}`),Lampa.Storage.field(y)&&(o+=`/${e}`,Lampa.Storage.field(N)&&t&&(o+=` (${t})`),Lampa.Storage.field(k)&&(o+=` [tmdbid-${a.id}]`)),o}function ke(a){return Array.isArray(a.seasons)||a.season!==void 0||a.episode_number!==void 0}var U=class{constructor(e,t,o,n){this.url=e;this.login=t;this.password=o;this.cookie=n}fetchWithAuth(o){return l(this,arguments,function*(e,t={}){var r;let n=yield fetch(this.url+e,C(D({},t),{credentials:"include"}));if(!n.ok&&n.status===403&&(yield this.authorize(),n=yield fetch(this.url+e,C(D({},t),{credentials:"include"}))),!n.ok)throw new Error("HTTP "+n.status+" "+n.statusText+" "+e);return(r=n.headers.get("content-type"))!=null&&r.includes("application/json")?yield n.json():yield n.text()})}authorize(){return l(this,null,function*(){let e=new URLSearchParams;e.append("username",this.login),e.append("password",this.password);let t=yield fetch(this.url+"/api/v2/auth/login",{method:"POST",body:e,credentials:"include"});if(!t.ok)throw new Error("qBittorrent login: HTTP "+t.status);this.cookie=t.headers.get("set-cookie")||void 0})}getTorrents(){return l(this,null,function*(){let e=yield this.fetchWithAuth("/api/v2/torrents/info"),t=yield this.fetchWithAuth("/api/v2/app/preferences");return this.formatTorrents(e,t)})}getData(){return l(this,null,function*(){var n;let e=yield this.fetchWithAuth("/api/v2/sync/maindata"),t=(n=e.torrents)!=null?n:[];t=Array.isArray(t)?t:Object.keys(t).map(r=>C(D({},t[r]),{hash:r}));let o=yield this.fetchWithAuth("/api/v2/app/preferences");return{torrents:this.formatTorrents(t,o),info:{freeSpace:e.server_state.free_space_on_disk}}})}addTorrent(e,t){return l(this,null,function*(){let o=new FormData,n=new URL(t.MagnetUri||t.Link);n.searchParams.delete("dn"),o.append("urls",n.toString()),o.append("tags",E(e).join(",")),o.append("sequentialDownload","true");let r=M(e);if(r){let s=yield this.fetchWithAuth("/api/v2/app/preferences"),i=s==null?void 0:s.save_path;if(i){let c=i.replace(/[\\/]+$/g,"")+r;o.append("savepath",c)}}yield this.fetchWithAuth("/api/v2/torrents/add",{method:"POST",body:o})})}startTorrent(e){return l(this,null,function*(){let t=new URLSearchParams;t.append("hashes",String(e.externalId)),yield this.fetchWithAuth("/api/v2/torrents/start",{method:"POST",body:t})})}stopTorrent(e){return l(this,null,function*(){let t=new URLSearchParams;t.append("hashes",String(e.externalId)),yield this.fetchWithAuth("/api/v2/torrents/stop",{method:"POST",body:t})})}hideTorrent(e){return l(this,null,function*(){let t=new URLSearchParams;t.append("hashes",String(e.externalId)),t.append("tags","hide"),yield this.fetchWithAuth("/api/v2/torrents/addTags",{method:"POST",body:t})})}removeTorrent(e,t=!1){return l(this,null,function*(){let o=new URLSearchParams;o.append("hashes",String(e.externalId)),o.append("deleteFiles",t?"true":"false"),yield this.fetchWithAuth("/api/v2/torrents/delete",{method:"POST",body:o})})}getFiles(e){return l(this,null,function*(){let t=new URLSearchParams;return t.append("hash",String(e.externalId)),(yield this.fetchWithAuth(`/api/v2/torrents/files?${t.toString()}`)).map(n=>{var r,s;return{bytesCompleted:Math.floor(n.progress*n.size),length:n.size,name:n.name,begin_piece:(r=n.piece_range)==null?void 0:r[0],end_piece:(s=n.piece_range)==null?void 0:s[1]}})})}formatTorrents(e,t){return e.sort((o,n)=>n.added_on-o.added_on).filter(o=>!o.tags.includes("hide")).map(o=>({id:O(o.tags),type:R(o.tags),externalId:o.hash,name:o.name,status:ue(o.state),percentDone:o.progress,totalSize:o.size,eta:o.eta,speed:o.dlspeed,files:[],seeders:o.num_seeds,activeSeeders:o.num_complete,hash:o.hash,path:o.save_path.replace(t.save_path,"")}))}};var z=class{constructor(e,t,o,n){this.url=e;this.login=t;this.password=o;this.sessionId=n}POST(e){return l(this,null,function*(){let t=yield fetch(this.url,{method:"POST",headers:{Authorization:`Basic ${btoa(this.login+":"+this.password)}`,"Content-Type":"application/json","X-Transmission-Session-Id":this.sessionId||""},body:JSON.stringify(e)});if(t.status===409){if(this.sessionId=t.headers.get("X-Transmission-Session-Id"),this.sessionId==null)throw new Error("Can`t authorize to Transmission RPC");return this.POST(e)}if(!t.ok)throw{message:`Transmission RPC error: ${t.statusText}`,status:t.status};return yield t.json()})}getSession(){let e={method:"session-get"};return this.POST(e)}addTorrent(e){let t={method:"torrent-add",arguments:e};return this.POST(t)}getTorrents(e){let t={method:"torrent-get",arguments:e};return this.POST(t)}setTorrent(e){let t={method:"torrent-set",arguments:e};return this.POST(t)}startTorrent(e){let t={method:"torrent-start",arguments:e};return this.POST(t)}stopTorrent(e){let t={method:"torrent-stop",arguments:e};return this.POST(t)}removeTorrent(e){let t={method:"torrent-remove",arguments:e};return this.POST(t)}};var F=class{constructor(e,t,o){this.url=e;this.login=t;this.password=o;this.client=new z(e+"/transmission/rpc",t,o)}getTorrents(){return l(this,null,function*(){var n,r;let e=yield this.client.getSession(),t=((n=e==null?void 0:e.arguments)==null?void 0:n["download-dir"])||"";return((r=(yield this.client.getTorrents({fields:["id","name","status","percentDone","sizeWhenDone","rateDownload","eta","labels","files","peersConnected","peersSendingToUs","trackerStats","hashString","downloadDir"]})).arguments)==null?void 0:r.torrents.filter(s=>!Array.isArray(s.labels)||s.labels.indexOf("hide")===-1).map(s=>{var g;let i=0,c=0;return Array.isArray(s.trackerStats)&&(i=Math.max(...s.trackerStats.map(f=>f.seederCount||0),0)),c=s.peersSendingToUs||0,{id:O(s.labels),type:R(s.labels),externalId:s.id,name:s.name,status:me(s.status),percentDone:s.percentDone,totalSize:s.sizeWhenDone,eta:s.eta,speed:s.rateDownload,files:s.files,seeders:i,activeSeeders:c,hash:s.hashString,path:((g=s.downloadDir)==null?void 0:g.replace(t,""))||""}}).filter(s=>s.id))||[]})}addTorrent(e,t){return l(this,null,function*(){var s,i;let o={paused:!1,sequential_download:!0,filename:t.MagnetUri||t.Link,labels:E(e)},n=M(e);if(n){let c=yield this.client.getSession(),g=(s=c==null?void 0:c.arguments)==null?void 0:s["download-dir"];g&&(o["download-dir"]=g.replace(/[\\/]+$/g,"")+n)}let r=yield this.client.addTorrent(o);(i=r.arguments)!=null&&i["torrent-added"]&&(yield this.client.setTorrent({ids:[r.arguments["torrent-added"].id],labels:E(e)}))})}startTorrent(e){return l(this,null,function*(){yield this.client.startTorrent({ids:[e.externalId]})})}stopTorrent(e){return l(this,null,function*(){yield this.client.stopTorrent({ids:[e.externalId]})})}hideTorrent(e){return l(this,null,function*(){var n,r;let o=((r=(n=(yield this.client.getTorrents({ids:[e.externalId],fields:["labels"]})).arguments)==null?void 0:n.torrents[0])==null?void 0:r.labels)||[];yield this.client.setTorrent({ids:[e.externalId],labels:[...o,"hide"]})})}removeTorrent(e,t=!1){return l(this,null,function*(){yield this.client.removeTorrent({ids:[e.externalId],"delete-local-data":t})})}getFiles(e){return l(this,null,function*(){return e.files})}getData(){return l(this,null,function*(){return{torrents:yield this.getTorrents(),info:{freeSpace:0}}})}};var m=class{static getClient(){if(!this.client){let t=(Lampa.Storage.field(x)||"").split(";").map(o=>o.trim()).filter(Boolean);this.buildClient(t[0]||""),t.length>1&&this.selectUrl(t)}return this.client}static reset(){this.client=void 0,this.selectionInFlight=!1}static buildClient(e){let t=Lampa.Storage.field(ee)===1,o=Lampa.Storage.field(Z),n=Lampa.Storage.field(X);this.client=t?new U(e,o,n):new F(e,o,n)}static selectUrl(e){if(this.selectionInFlight)return;this.selectionInFlight=!0;let t=e.map(r=>fetch(r+"/ping",{cache:"no-cache"}).then(s=>s.ok?r:Promise.reject())),o=0,n=!1;t.forEach(r=>r.then(s=>{n||(n=!0,this.selectionInFlight=!1,(!this.client||this.client.url!==s)&&this.buildClient(s))}).catch(()=>{++o===t.length&&!n&&(n=!0,this.selectionInFlight=!1)}))}};m.selectionInFlight=!1,m.isConnected=!1;var $e=`<div class="full-start__button selector button--download">\r
    {icon}\r
    <span>{text}</span>\r
</div>`;function st(a){if(!a||!a.movie)return;let e=$(".full-start-new__buttons").filter(function(){return $(this).is(":visible")}).last();if(!e.length){console.log(d.name,"Кнопка Скачать: контейнер карточки пока не найден");return}let t=e.find(".button--download").first();if(!t.length){t=$(Lampa.Template.get("download-button",{icon:L,text:Lampa.Lang.translate("download")}));let o=e.children().first();o.length?o.after(t):e.append(t)}t.off("hover:enter.tdownloader").on("hover:enter.tdownloader",()=>{Lampa.Activity.push({url:"",title:Lampa.Lang.translate("download"),component:"torrents-download",search_one:a.movie.title,search_two:a.movie.original_title,movie:a.movie,page:1})})}function Oe(){Lampa.Template.add("download-button",$e),Lampa.Component.add("torrents-download",Lampa.Component.get("torrents")),Lampa.Listener.follow("full",a=>{if(a.type==="complite"){let e=a.data;st(e);[150,450,1000].forEach(t=>setTimeout(()=>{try{let n=Lampa.Activity.active();n&&n.component==="full"&&st(e)}catch(o){}},t))}}),Lampa.Listener.follow("torrent",a=>{let e=Lampa.Activity.active();a.type==="render"&&e.component==="torrents-download"&&($(a.item).off("hover:enter"),$(a.item).on("hover:enter",t=>l(this,null,function*(){if(yield m.getClient().addTorrent(e.movie,a.element),Lampa.Noty.show(Lampa.Lang.translate("download-button.added")),e.activity.component.mark(a.element,a.item,!0),!Lampa.Storage.get(Q,!1)){Lampa.Activity.back();let r=(yield m.getClient().getTorrents()).find(s=>s.id===e.movie.id);r&&V(r,e.movie)}})))})}function tdRestart(){Lampa.Modal.open({title:"Перезапустить Lampa?",html:$("<div>Перезапустить приложение? Настройки и плагины сохранятся.</div>"),size:"small",buttons:[{name:"Отмена",onSelect:()=>Lampa.Modal.close()},{name:"Перезапустить",onSelect:()=>{Lampa.Modal.close();window.location.reload()}}]})}
function tdRestartSettings(){if(!Lampa.Settings||!Lampa.Settings.listener)return;Lampa.Settings.listener.follow("open",a=>{if(a.name!=="main"||!a.body)return;let item=$('<div class="settings-folder selector" data-component="td-restart"><div class="settings-folder__icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20 11a8 8 0 1 1-2.3-5.7"/><path d="M20 3v6h-6"/></svg></div><div class="settings-folder__name">Перезапустить</div></div>');a.body.find('[data-component="td-restart"]').remove();let anchor=a.body.find('[data-component="t-downloader"]').first();if(anchor.length)anchor.after(item);else a.body.find(".settings-folder").last().after(item);item.on("hover:enter",tdRestart)})}
function Re(){window.plugin_transmission_ready=!0,Lampa.Manifest.plugins=d,Lampa.Lang.add(re),Ce(),Oe(),he(),De(),ye(),tdRestartSettings(),Lampa.Storage.field(x)&&_.start()}window.plugin_transmission_ready||(window.appready?Re():Lampa.Listener.follow("app",function(a){a.type==="ready"&&Re()}));})();
