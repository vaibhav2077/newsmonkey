(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[0],{46:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(15),r=a.n(c),i=(a(46),a(12)),l=a(13),o=a(19),d=a(18),p=(a(39),a(59)),j=a(56),h=a(60),u=a(1),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(p.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(p.a.Brand,{href:"#home",children:"News Monkey"}),Object(u.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(h.a,{className:"me-auto",children:[Object(u.jsx)(h.a.Link,{href:"/home",children:"Home"}),Object(u.jsx)(h.a.Link,{href:"/link",children:"About"})]})})]})})})}}]),a}(n.Component),x=a(22),O=a.n(x),g=a(35),f=a(61),v=a(57),m=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.image_url,s=e.news_url;return Object(u.jsxs)("div",{children:[Object(u.jsxs)(f.a,{style:{width:"18rem"},children:[Object(u.jsx)(f.a.Img,{variant:"top",src:n}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{children:t}),Object(u.jsxs)(f.a.Text,{children:[a,"..."]}),Object(u.jsx)(v.a,{href:s,target:"_blank",variant:"primary",children:"Read More"})]})]}),"."]})}}]),a}(n.Component),k=a(58),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).articles=[],e.handleNextClick=Object(g.a)(O.a.mark((function t(){var a,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.state.page+1<Math.ceil(e.state.totalArticles/e.props.pagesize))){t.next=10;break}return a="https://newsapi.org/v2/top-headlines?country=in&apiKey=03dba794f9a944fdafe029e17741bcee&pageSize=".concat(e.props.pagesize,"&page=").concat(e.state.page+1),e.setState({loading:!0}),t.next=5,fetch(a);case 5:return n=t.sent,t.next=8,n.json();case 8:s=t.sent,e.setState({page:e.state.page+1,articles:s.articles,loading:!1});case 10:case"end":return t.stop()}}),t)}))),e.handlePreviousClick=Object(g.a)(O.a.mark((function t(){var a,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=in&apiKey=03dba794f9a944fdafe029e17741bcee&pageSize=".concat(e.props.pagesize,"&page=").concat(e.state.page-1),t.next=3,fetch(a);case 3:return n=t.sent,t.next=6,n.json();case 6:s=t.sent,e.setState({page:e.state.page-1,articles:s.articles});case 8:case"end":return t.stop()}}),t)}))),e.state={articles:e.articles,loading:!1,page:1,totalArticles:0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=in&apiKey=03dba794f9a944fdafe029e17741bcee&page=1&pageSize=".concat(this.props.pagesize),e.next=3,fetch(t);case 3:return a=e.sent,this.setState({loading:!0}),e.next=7,a.json();case 7:n=e.sent,this.setState({articles:n.articles,totalArticles:n.totalResults,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"container my-3",children:[Object(u.jsx)("h1",{className:"text-center",children:"News Monkey Top Headlines."}),this.state.loading&&Object(u.jsx)(k.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:" Loading..."})}),Object(u.jsx)("div",{className:"row",children:this.state.articles.map((function(e){return Object(u.jsx)("div",{className:"col-md-4 my-2",children:Object(u.jsx)(m,{title:e.title?e.title:"",description:e.description?e.description:"",image_url:e.urlToImage?e.urlToImage:"https://images.cnbctv18.com/wp-content/uploads/2018/06/2018-06-13T213137Z_1_LYNXMPEE5C26H_RTROPTP_4_SPACE-MARS-1019x573.jpg",news_url:e.url},e.url)})}))})]}),Object(u.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(u.jsx)(v.a,{variant:"dark",disabled:this.state.page<=1,onClick:this.handlePreviousClick,children:"\u2190 Previous"}),Object(u.jsx)(v.a,{disabled:this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pagesize),variant:"dark",onClick:this.handleNextClick,children:"Next \u2192"})]})]})}}]),a}(n.Component);var w=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)(y,{pagesize:10})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.10acf5f3.chunk.js.map