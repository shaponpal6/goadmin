(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BM80:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var i=n("4dxh"),s=n("x9vV"),o=n.n(s),r=(n("E0vE"),n("NWYn")),c=n.n(r);class u extends i.Component{constructor(...t){super(...t),this.state={time:Date.now(),count:10},this.updateTime=()=>{this.setState({time:Date.now()})},this.increment=()=>{this.setState({count:this.state.count+1})}}componentDidMount(){this.timer=setInterval(this.updateTime,1e3)}componentWillUnmount(){clearInterval(this.timer)}render({user:t},{time:e,count:n}){return Object(i.h)("div",{class:c.a.profile+" page"},Object(i.h)("h1",null,"Profile: ",t),Object(i.h)("p",null,"This is the user profile for a user named ",t,"."),Object(i.h)("div",null,"Current time: ",new Date(e).toLocaleString()),Object(i.h)("p",null,Object(i.h)(o.a,{raised:!0,ripple:!0,onClick:this.increment},"Click Me")," ","Clicked ",n," times."))}}},E0vE:function(){},NWYn:function(t){t.exports={profile:"profile__t2Dqz"}}}]);
//# sourceMappingURL=4.chunk.546f9.esm.js.map