(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/hp-logo.17325e98.svg"},26:function(e,a,t){e.exports=t(47)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(21),i=t.n(n),l=(t(31),t(11)),o=t(14),s=t(25),h=t(2),d=t(3),u=t(5),m=t(4),f=t(10),v=t(6),_=(t(32),t(33),t(34),function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.character,a=e.id,t=e.image,r=e.name,n=e.house,i=this.props,o=i.handleFavorites,s=i.favoriteCharacters;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"character__photo",style:{backgroundImage:"url(".concat(t,")")}},c.a.createElement("div",{className:"character__more",id:a},c.a.createElement(l.b,{to:"/detail/".concat(a),className:"characters__link"},c.a.createElement("i",{className:"fas fa-info-circle characters__icon"})),c.a.createElement("i",{className:"fas fa-heart characters__icon ".concat(s.findIndex(function(e){return a===e.id})>=0?"favorite":"favorite--icon"),onClick:o}))),c.a.createElement("div",{className:"character__info"},""!==n?c.a.createElement("div",{className:"".concat(n.toLowerCase(),"__logo"),title:n}):c.a.createElement("i",{className:"far fa-times-circle no-house__icon",title:"No estudi\xf3 en Hogwarts"}),c.a.createElement("h2",{className:"character__title"},r)),c.a.createElement("div",{className:"character__info--detail"}))}}]),a}(c.a.Component)),p=(t(43),function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.characters,t=e.filterValue,r=e.sortedCharacters,n=e.handleFavorites,i=e.favoriteCharacters,l=(null===r?a:r).filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return c.a.createElement("li",{key:e.id,id:a.id,className:"character__container"},c.a.createElement(_,{character:e,handleFavorites:n,favoriteCharacters:i}))});return c.a.createElement("section",{className:"search__result"},c.a.createElement("ul",{className:"character__list"},0===l.length&&t?c.a.createElement("p",{className:"no-results__paragraph"},"No hay resultados"):l))}}]),a}(c.a.Component)),C=(t(44),function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.filterValue,t=e.handleFilter,r=e.searchClicked,n=e.handleSort;return c.a.createElement("div",{className:"filter__container ".concat(r?"":"hidden__filter")},c.a.createElement("div",{className:"filter__input--container"},c.a.createElement("label",{className:"filter__form filter__label",htmlFor:"filter__form"},"Filtrar por nombre"),c.a.createElement("input",{className:"filter__form filter__input",onChange:t,value:a,type:"text",name:"filter__form",placeholder:"Introduce el nombre"})),c.a.createElement("div",{className:"order__container"},c.a.createElement("label",{htmlFor:"order__form",className:"filter__form filter__label"},"Ordenar por"),c.a.createElement("select",{name:"order__form",className:"filter__form filter__input",onChange:n},c.a.createElement("option",{value:"-"},"Ordenar por:"),c.a.createElement("option",{value:"no-filter"},"Por defecto"),c.a.createElement("option",{value:"alphabetical"},"Orden alfab\xe9tico"),c.a.createElement("option",{value:"age"},"Por a\xf1o de nacimiento"))))}}]),a}(c.a.Component)),E=t(24),b=t.n(E),k=(t(45),function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.favoriteCharacters,t=e.favClicked,r=e.handleFavorites,n=a.map(function(e){return c.a.createElement("li",{className:"favorite__item",key:"fav-".concat(e.id),id:e.id,onClick:r},c.a.createElement("div",{className:"favorite__more"},c.a.createElement("i",{className:"fas fa-trash-alt favorite__icon"})),c.a.createElement("div",{className:"favorite__photo",style:{backgroundImage:"url(".concat(e.image,")")}}," "))});return c.a.createElement("div",{className:"favorite__container--shadow ".concat(t?"":"hidden")},c.a.createElement("div",{className:"favorite__container ".concat(t?"":"hiddden__favorites")},c.a.createElement("h2",{className:"favorite__title"},"Mis Favoritos"),c.a.createElement("ul",{className:"favorite__list"},n)))}}]),a}(c.a.Component)),O=function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.filterValue,t=e.characters,r=e.handleFilter,n=e.handleClickSearch,i=e.searchClicked,l=e.handleSort,o=e.sortedCharacters,s=e.handleFavorites,h=e.favoriteCharacters,d=e.favClicked,u=e.handleClickFav;return c.a.createElement("div",{className:"app__container"},c.a.createElement("header",{className:"app__header"},c.a.createElement("div",{className:"header__container"},c.a.createElement("img",{className:"header__logo",src:b.a,alt:"Logo de Harry Potter"}),c.a.createElement("h1",{className:"header__title"},"Buscador de personajes")),c.a.createElement("div",{className:"header__icons"},c.a.createElement("i",{className:"fas fa-heart filter__icon ".concat(d?"clicked":""),title:"Ver favoritos",onClick:u}),c.a.createElement("i",{className:"fas fa-search filter__icon ".concat(i?"clicked":""),title:"Mostrar filtros",onClick:n}))),c.a.createElement("main",null,c.a.createElement(C,{handleFilter:r,filterValue:a,searchClicked:i,handleSort:l,sortedCharacters:o}),c.a.createElement(p,{characters:t,filterValue:a,sortedCharacters:o,handleFavorites:s,favoriteCharacters:h}),c.a.createElement(k,{favoriteCharacters:h,characters:t,favClicked:d,handleFavorites:s})))}}]),a}(c.a.Component),N=t(12),j=(t(46),function(e){function a(){return Object(h.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.characters,a=this.props.match.params.id,t=e.find(function(e){return a===e.id});return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",{className:"detail__container ".concat(""!==t.house?t.house.toLowerCase():"no--house","__background")},c.a.createElement("div",{className:"detail__card--container"},c.a.createElement("div",{className:"detail__photo",style:{backgroundImage:"url(".concat(t.image,")")}}),c.a.createElement("div",{className:"detail__info--container"},c.a.createElement("h2",{className:"detail__name"},t.name),c.a.createElement("p",{className:"detail__house"},"Casa: ".concat(t.house)),c.a.createElement("p",{className:"detail__year"},"A\xf1o de nacimiento: ".concat(t.yearOfBirth)),c.a.createElement("p",{className:"detail__patronus"},"Patronus: ".concat(t.patronus)),c.a.createElement("p",{className:"detail__alive"},"Estado: ".concat(t.alive?"Vivo":"Muerto")),c.a.createElement(l.b,{to:"/"},c.a.createElement("i",{className:"fas fa-arrow-circle-left detail__icon",title:"Volver atr\xe1s"}))))):c.a.createElement("p",null,"Cargando..."))}}]),a}(c.a.Component)),y=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={characters:[],favoriteCharacters:[],sortedCharacters:null,filterValue:"",searchClicked:!1,favClicked:!1},t.handleFilter=t.handleFilter.bind(Object(f.a)(t)),t.handleClickSearch=t.handleClickSearch.bind(Object(f.a)(t)),t.handleSort=t.handleSort.bind(Object(f.a)(t)),t.handleFavorites=t.handleFavorites.bind(Object(f.a)(t)),t.handleClickFav=t.handleClickFav.bind(Object(f.a)(t)),t}return Object(v.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchCharacters();var e=JSON.parse(localStorage.getItem("favCharacters"));null!==e&&this.setState({favoriteCharacters:e})}},{key:"componentDidUpdate",value:function(){this.state.favoriteCharacters!==[]&&localStorage.setItem("favCharacters",JSON.stringify(this.state.favoriteCharacters))}},{key:"fetchCharacters",value:function(){var e=this;fetch("https://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e,a){return Object(s.a)({},e,{id:"hp-".concat(a)})});e.setState({characters:t})})}},{key:"handleFilter",value:function(e){this.setState({filterValue:e.currentTarget.value})}},{key:"handleClickSearch",value:function(){this.setState(function(e){return{searchClicked:!e.searchClicked}})}},{key:"handleClickFav",value:function(){this.setState(function(e){return{favClicked:!e.favClicked}})}},{key:"sortAlphabetical",value:function(){var e=Object(o.a)(this.state.characters).sort(function(e,a){return e.name>a.name?1:e.name<a.name?-1:0});this.setState({sortedCharacters:e})}},{key:"sortAge",value:function(){var e=Object(o.a)(this.state.characters).sort(function(e,a){return a.yearOfBirth>e.yearOfBirth?1:a.yearOfBirth<e.yearOfBirth?-1:0});this.setState({sortedCharacters:e})}},{key:"handleSort",value:function(e){var a=e.currentTarget.value;"no-filter"===a?this.setState({sortedCharacters:null}):"alphabetical"===a?this.sortAlphabetical():this.sortAge()}},{key:"handleFavorites",value:function(e){var a=""===e.currentTarget.parentElement.id?e.currentTarget.id:e.currentTarget.parentElement.id,t=this.state.characters.find(function(e){return a===e.id});this.setState(function(e){var r;return e.favoriteCharacters.findIndex(function(e){return t.id===e.id})>=0?(r=e.favoriteCharacters.filter(function(e){return e.id!==a}),console.log(r)):r=[].concat(Object(o.a)(e.favoriteCharacters),[t]),{favoriteCharacters:r}})}},{key:"render",value:function(){var e=this,a=this.state,t=a.filterValue,r=a.characters,n=a.searchClicked,i=a.sortedCharacters,l=a.favoriteCharacters,o=a.favClicked;return c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/",render:function(){return c.a.createElement(O,{filterValue:t,characters:r,handleFilter:e.handleFilter,handleClickSearch:e.handleClickSearch,searchClicked:n,handleSort:e.handleSort,sortedCharacters:i,handleFavorites:e.handleFavorites,favoriteCharacters:l,favClicked:o,handleClickFav:e.handleClickFav})}}),c.a.createElement(N.a,{path:"/detail/:id",render:function(e){return c.a.createElement(j,{match:e.match,characters:r})}}))}}]),a}(c.a.Component);i.a.render(c.a.createElement(l.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bb88d6eb.chunk.js.map