(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(12),s=a.n(l),o=(a(95),a(96),a(97),a(98),a(13)),c=a(14),m=a(15),i=a(16),u=a(2),d=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},E="http://localhost:3001/",h=a(23);function f(e){var t=e.item,a=void 0===t?{}:t,n=e.isLoading,l=e.errMess;return n?r.a.createElement(d,null):l?r.a.createElement("h4",null,l):r.a.createElement(h.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:E+a.image,alt:a.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,a.name),a.designation?r.a.createElement(u.i,null,a.designation):null,r.a.createElement(u.j,null,a.description))))}var p=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(f,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(f,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(f,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},g=a(22),b=a(6),N=a(4),v=function(e){return e&&e.length},y=function(e){return function(t){return!t||t.length<=e}},w=function(e){return function(t){return t&&t.length>=e}},O=function(e){return!isNaN(Number(e))},M=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(N.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",href:"tel:+85212345678",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(b.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(u.l,{md:10},r.a.createElement(b.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:v,minLength:w(3),maxLength:y(15)}}),r.a.createElement(b.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(u.l,{md:10},r.a.createElement(b.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:v,minLength:w(3),maxLength:y(15)}}),r.a.createElement(b.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(u.l,{md:10},r.a.createElement(b.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:v,minLength:w(3),maxLength:y(15),isNumber:O}}),r.a.createElement(b.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(b.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:v,validEmail:M}}),r.a.createElement(b.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(u.r,{check:!0},r.a.createElement(b.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(b.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(b.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component);var k=function(e){function t(e){var t=e.leader,a=t.image,n=t.name,l=t.designation,s=t.description;return r.a.createElement(u.s,{tag:"li"},r.a.createElement(u.s,{left:!0,middle:!0},r.a.createElement(u.s,{object:!0,src:E+a,alt:n})),r.a.createElement(u.s,{body:!0,className:"ml-5"},r.a.createElement(u.s,{heading:!0},n),r.a.createElement("p",null,l),r.a.createElement("p",null,s)))}console.log("Leaders",e.leaders);var a=e.leaders.map((function(e){return r.a.createElement(h.Fade,{in:!0}," ",r.a.createElement(t,{leader:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(N.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.s,{list:!0},r.a.createElement(h.Stagger,{in:!0},a)))))};function S(e){var t=e.dish;return r.a.createElement(u.d,null,r.a.createElement(N.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{width:"100%",src:E+t.image,alt:t.name}),r.a.createElement(u.h,null,r.a.createElement(u.k,null,t.name))))}var j=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(S,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(N.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},C=function(e){return e&&e.length},D=function(e){return function(t){return!t||t.length<=e}},F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleToggle=function(){return n.setState({modalOpen:!n.state.modalOpen})},n.submitHandle=function(e){n.handleToggle(),n.props.postComment(n.props.dishId,e.rating,e.author,e.comment)},n.state={modalOpen:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,{className:"bg-white text-dark",onClick:this.handleToggle},r.a.createElement("i",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(u.t,{isOpen:this.state.modalOpen,toggle:this.handleToggle},r.a.createElement(u.v,{toggle:this.handleToggle},"Submit Comment"),r.a.createElement(u.u,null,r.a.createElement(b.LocalForm,{onSubmit:function(e){return t.submitHandle(e)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"rating",md:4},"Rating"),r.a.createElement(u.l,{md:12},r.a.createElement(b.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control",defaultValue:"1"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"author",md:4},"Your Name"),r.a.createElement(u.l,{md:12},r.a.createElement(b.Control.text,{model:".author",id:"author",name:"author",className:"form-control",placeholder:"Your Name",validators:{minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:D(15)}}),r.a.createElement(b.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"comment",md:4},"Comment"),r.a.createElement(u.l,{md:12},r.a.createElement(b.Control.textarea,{model:".comment",id:"comment",name:"comment",className:"form-control",validators:{required:C},rows:"6"}),r.a.createElement(b.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Comment Required"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,null,r.a.createElement(u.c,{type:"submit",color:"primary"},"Submit")))))))}}]),a}(n.Component);function x(e){var t=e.dish,a=t.image,n=t.name,l=t.description;return r.a.createElement(h.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{top:!0,src:E+a,alt:n}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,n),r.a.createElement(u.j,null,l))))}function A(e){var t=e.comments,a=e.postComment,n=e.dishId;if(console.log(t),null!=t){var l=r.a.createElement(h.Stagger,{in:!0},t.map((function(e){var t=e.id,a=e.comment,n=e.author,l=e.date;return r.a.createElement("div",{key:t},r.a.createElement("li",null,a),r.a.createElement("br",null),r.a.createElement("li",null,"-- ",n,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(l)))),r.a.createElement("br",null))})));return r.a.createElement("ul",{className:"list-unstyled"},l,r.a.createElement(F,{dishId:n,postComment:a}))}return r.a.createElement("div",null)}var T=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(N.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(x,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(A,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(g.a)(n)),n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleLogin=n.handleLogin.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.A,{onClick:this.toggleNav}),r.a.createElement(u.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.w,{navbar:!0},r.a.createElement(u.x,null,r.a.createElement(N.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(u.x,null,r.a.createElement(N.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(u.x,null,r.a.createElement(N.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(u.x,null,r.a.createElement(N.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(u.w,{className:"ml-auto",navbar:!0},r.a.createElement(u.x,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(u.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Login"),r.a.createElement(u.u,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"username"},"Username"),r.a.createElement(u.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"password"},"Password"),r.a.createElement(u.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.r,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(u.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var R=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(N.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},_=a(18),q=a(8),P=function(){return{type:"DISHES_LOADING"}},B=function(e){return{type:"DISHES_FAILED",payload:e}},H=function(e){return{type:"ADD_DISHES",payload:e}},G=function(e){return{type:"COMMENTS_FAILED",payload:e}},U=function(e){return{type:"ADD_COMMENTS",payload:e}},W=function(){return{type:"PROMOS_LOADING"}},Y=function(e){return{type:"PROMOS_FAILED",payload:e}},K=function(e){return{type:"ADD_PROMOS",payload:e}},z=function(){return{type:"LEADERS_LOADING"}},J=function(e){return{type:"LEADERS_FAILED",payload:e}},Z=function(e){return{type:"ADD_LEADERS",payload:e}},$=a(44),V=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement($.TransitionGroup,null,r.a.createElement($.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(N.f,{location:this.props.location},r.a.createElement(N.e,{path:"/home",component:function(){return r.a.createElement(p,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(N.e,{path:"/aboutus",component:function(){return r.a.createElement(k,{leaders:e.props.leaders.leaders})}}),r.a.createElement(N.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(j,{dishes:e.props.dishes})}}),r.a.createElement(N.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(T,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(N.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(L,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(N.d,{to:"/home"})))),r.a.createElement(R,null))}}]),a}(n.Component),Q=Object(N.g)(Object(_.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(E+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(P(!0)),fetch(E+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(H(t))})).catch((function(t){return e(B(t.message))}))}))},resetFeedbackForm:function(){e(b.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(E+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(U(t))})).catch((function(t){return e(G(t.message))}))}))},fetchPromos:function(){return e((function(e){return e(W()),fetch(E+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(K(t))})).catch((function(t){return e(Y(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(z(!0)),fetch(E+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Z(t))})).catch((function(t){return e(J(t.message))}))}))},postFeedback:function(e){return function(e){var t=Object(q.a)({},e);return t.date=(new Date).toISOString(),fetch(E+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert(JSON.stringify(e))})).catch((function(e){console.log("Post comments ",e.message),alert("Your Feedback could not be submitted\nError: "+e.message)}))}(e)}}}))(V)),X=(a(151),a(19)),ee={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(q.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(q.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(q.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(q.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(q.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(q.a)({},e,{comments:e.comments.concat(a)});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(q.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(q.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(q.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(q.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(q.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(q.a)({},e,{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},le=a(88),se=a.n(le),oe=a(89),ce=a.n(oe),me=Object(X.createStore)(Object(X.combineReducers)(Object(q.a)({dishes:te,comments:ae,promotions:ne,leaders:re},Object(b.createForms)({feedback:ee}))),Object(X.applyMiddleware)(se.a,ce.a)),ie=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(_.Provider,{store:me},r.a.createElement(N.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Q,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(152)},98:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.16ac5215.chunk.js.map