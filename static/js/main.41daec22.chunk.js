(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(13),c=a.n(s),i=(a(18),a(6));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=a.p+"static/media/portfolio-header-best.f8ead766.jpg",h=a(0);var d=function(e){var t=e.tabs,a=void 0===t?[]:t,n=e.setCurrentTab,s=e.currentTab;return Object(r.useEffect)((function(){document.title=o(s.name)}),[s]),Object(h.jsxs)("header",{className:"flex-row px-1",children:[Object(h.jsx)("img",{src:l,className:"my-2, slide-in-right",style:{width:"100%"},alt:"cover"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"flex-row",children:[Object(h.jsx)("li",{className:"mx-2"}),a.map((function(e){return Object(h.jsx)("li",{className:"mx-1 ".concat(s.name===e.name&&"navActive"),children:Object(h.jsx)("span",{onClick:function(){n(e)},children:o(e.name)})},e.name)}))]})})]})},m=a.p+"static/media/headshot.38d91467.jpg",p=a(23),u=a(24),j=a(25),b=a(27),g=a(26);a(12);var f=function(){return Object(h.jsx)("section",{id:"about-me",className:"about-me",children:Object(h.jsx)(p.a,{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(j.a,{xs:6,children:Object(h.jsx)("div",{className:"bio",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(b.a.Title,{children:"About Me"}),Object(h.jsx)(b.a.Body,{children:"Welcome! My name is Krista McPherson."}),Object(h.jsx)(b.a.Body,{children:"Full Stack Web Developer with an extensive background in social media marketing and digital strategy looking to combine two unique but complementary skill sets to create a seamless, efficient user and team experience. These two backgrounds give me a special perspective on the user experience from both the front-end and back-end which can be utilized to move customers down the purchase funnel towards conversions. I have a Certificate in Social Media Marketing from Scottsdale Community College, a B.S. in Communications with a minor in Digital Audiences from Arizona State University, and a Certificate in Full-Stack Development from the University of Arizona Coding Bootcamp. These accreditations have sharpened my time management, collaboration, and effective communication skills all while learning the platforms, software, and languages needed to run social campaigns and build applications. I have a passion for content creation and can find numerous ways of connecting with your audience either by social media, website, or app."})]})})}),Object(h.jsx)(j.a,{children:Object(h.jsx)("div",{className:"headshot",children:Object(h.jsx)(g.a,{width:500,height:500,src:m,rounded:!0,alt:""})})})]})})})},x=a(8),O=a(10);var v=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(""),c=Object(i.a)(s,2),o=c[0],l=c[1],d=a.name,m=a.email,p=a.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));o||(n(Object(O.a)(Object(O.a)({},a),{},Object(x.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(h.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",a)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:u})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(h.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:u})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(h.jsx)("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:u})]}),o&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:o})}),Object(h.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var k=function(){var e=Object(r.useState)([{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/6.jpg",name:"FATE",description:"This project is a Full Stack MERN application that allows users to explore the world of astrology. Explore your fate by getting a Tarot Readings and Daily Horoscopes.",deployed:"https://fate-readings.herokuapp.com/",repo:"https://github.com/sstevens22/Interactive-Project"},{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/0.jpg",name:"Planetarium Party",description:"This project is an app that allows users to search for their favorite planet and in return they'll get an image from the NASA API and a portion of the Wikipedia article about that planet. It features continuous dark mode to enhance the feel of being in space.",deployed:"https://emistew14.github.io/Planetarium-Party/",repo:"https://github.com/kmcpherson49/Planetarium-Party"},{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/1.jpg",name:"Weather Dashboard",description:"This project is a weather app that will give users the forecast for the day plus a 5-day forecast",deployed:"https://kmcpherson49.github.io/weather-dashboard/",repo:"https://github.com/kmcpherson49/weather-dashboard"},{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/2.jpg",name:"Day Planner",description:"This project is an electronic day planner used to add tasks to time slots in order to stay organized.",deployed:"https://kmcpherson49.github.io/work-scheduler/",repo:"https://github.com/kmcpherson49/work-scheduler"},{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/3.jpg",name:"Password Generator",description:"This project is a password generator that will give users a secure, random password after a series of prompts.",deployed:"https://kmcpherson49.github.io/password-generator/",repo:"https://github.com/kmcpherson49/password-generator"},{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/4.jpg",name:"Food Truck App",description:"This project is an app that allows users to search for a local food truck to read reviews, leave ratings, post about the food trucks, and find contact information for the trucks.",deployed:"https://local-food-truck-finder.herokuapp.com/",repo:"https://github.com/kmcpherson49/food-truck-rating"},{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/5.jpg",name:"Budget Tracker",description:"This project is an app that allows users to track their spending while traveling or in everyday life. This app showcases the features of a Progessive Web Applications with a cache and offline capabilites.",deployed:"https://frozen-sierra-56639.herokuapp.com/",repo:"https://github.com/kmcpherson49/budget-tracker"}]),t=Object(i.a)(e,1)[0];return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(b.a.Img,{variant:"top",src:e.image}),Object(h.jsxs)(b.a.Body,{children:[Object(h.jsx)(b.a.Title,{children:e.name}),Object(h.jsx)(b.a.Text,{children:e.description})]}),Object(h.jsxs)(b.a.Body,{children:[Object(h.jsx)(b.a.Link,{href:e.deployed,target:"_blank",children:"Deployed"}),Object(h.jsx)(b.a.Link,{href:e.repo,target:"_blank",children:"Repo"})]})]})}))})};var w=function(){return Object(h.jsx)("section",{children:Object(h.jsx)(p.a,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{children:"Krista McPherson"}),Object(h.jsxs)(b.a.Body,{children:[Object(h.jsx)(b.a.Text,{children:"Scottsdale, AZ 85250"}),Object(h.jsx)(b.a.Text,{children:"602.478.0038"}),Object(h.jsx)(b.a.Text,{children:"kmcpherson49@gmail.com"}),Object(h.jsx)(b.a.Link,{href:"https://www.linkedin.com/in/kristamcpherson",children:"LinkedIn"}),Object(h.jsx)(b.a.Link,{href:"https://github.com/kmcpherson49",children:"Github"}),Object(h.jsx)(b.a.Link,{href:"https://docs.google.com/document/d/1OV7mQpOCNDQKPGSOmb33fNhzGmDh09cAG6Q8X97SVlk/edit?usp=sharing",target:"_blank",children:"Download my Resume"})]})]}),Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/kmcpherson49/portfolio/develop/public/resume/Krista%20McPherson%20Resume.png",width:"1000"})}),Object(h.jsx)("div",{})]})})})};var y=function(e){return Object(h.jsx)("div",{children:e.children})};var T=function(e){var t=e.currentTab;return Object(h.jsx)(y,{children:function(){switch(t.name){default:return Object(h.jsx)(f,{});case"contact":return Object(h.jsx)(v,{});case"portfolio":return Object(h.jsx)(k,{});case"resume":return Object(h.jsx)(w,{})}}()})};var S=function(){var e=Object(r.useState)([{name:"about me"},{name:"portfolio"},{name:"resume"},{name:"contact"}]),t=Object(i.a)(e,1)[0],a=Object(r.useState)(t[0]),n=Object(i.a)(a,2),s=n[0],c=n[1];return Object(h.jsxs)("div",{className:"color-change-2x",children:[Object(h.jsx)(d,{tabs:t,setCurrentTab:c,currentTab:s}),Object(h.jsx)("main",{children:Object(h.jsx)(T,{currentTab:s})}),Object(h.jsx)("footer",{children:Object(h.jsx)("h2",{children:"Made by KLM"})})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.41daec22.chunk.js.map