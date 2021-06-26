(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(13),c=a.n(r),s=(a(18),a(6));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=a.p+"static/media/portfolio-header-best.f8ead766.jpg",d=a(0);var h=function(e){var t=e.tabs,a=void 0===t?[]:t,i=e.setCurrentTab,r=e.currentTab;return Object(n.useEffect)((function(){document.title=o(r.name)}),[r]),Object(d.jsxs)("header",{className:"flex-row px-1",children:[Object(d.jsx)("img",{src:l,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"flex-row",children:[Object(d.jsx)("li",{className:"mx-2"}),a.map((function(e){return Object(d.jsx)("li",{className:"mx-1 ".concat(r.name===e.name&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){i(e)},children:o(e.name)})},e.name)}))]})})]})},j=a.p+"static/media/headshot.38d91467.jpg",b=a(23),m=a(24),u=a(25),p=a(26);a(12);var x=function(){return Object(d.jsx)("section",{id:"about-me",className:"about-me",children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(u.a,{xs:6,children:Object(d.jsxs)("div",{className:"bio",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:"Welcome! My name is Krista McPherson."}),Object(d.jsx)("p",{children:"Full Stack Web Developer with an extensive background in social media marketing and digital strategy looking to combine two unique but complementary skill sets to create a seamless, efficient user and team experience. These two backgrounds give me a special perspective on the user experience from both the front-end and back-end which can be utilized to move customers down the purchase funnel towards conversions. I have a Certificate in Social Media Marketing from Scottsdale Community College, a B.S. in Communications with a minor in Digital Audiences from Arizona State University, and a Certificate in Full-Stack Development from the University of Arizona Coding Bootcamp. These accreditations have sharpened my time management, collaboration, and effective communication skills all while learning the platforms, software, and languages needed to run social campaigns and build applications. I have a passion for content creation and can find numerous ways of connecting with your audience either by social media, website, or app."})]})}),Object(d.jsx)(u.a,{children:Object(d.jsx)("div",{className:"headshot",children:Object(d.jsx)(p.a,{width:500,height:500,src:j,rounded:!0,alt:""})})})]})})})},O=a(8),f=a(10);var g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),o=c[0],l=c[1],h=a.name,j=a.email,b=a.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));o||(i(Object(f.a)(Object(f.a)({},a),{},Object(O.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(d.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",a)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",defaultValue:h,onBlur:m})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(d.jsx)("input",{type:"email",name:"email",defaultValue:j,onBlur:m})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(d.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:m})]}),o&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:o})}),Object(d.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},v=a(27);var k=function(){var e=Object(n.useState)([{image:"https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/0.jpg",name:"Planetarium Party",description:"This project is an app that allows users to search for their favorite planet and in return they'll get an image from the NASA API and a portion of the Wikipedia article about that planet. It features continuous dark mode to enhance the feel of being in space.",deployed:"https://emistew14.github.io/Planetarium-Party/",repo:"https://github.com/kmcpherson49/Planetarium-Party"},{image:"/screenshots/1.jpg",name:"Weather Dashboard",description:"This project is a weather app that will give users the forecast for the day plus a 5-day forecast",deployed:"https://kmcpherson49.github.io/weather-dashboard/",repo:"https://github.com/kmcpherson49/weather-dashboard"},{image:"/screenshots/2.jpg",name:"Day Planner",description:"This project is an electronic day planner used to add tasks to time slots in order to stay organized.",deployed:"https://kmcpherson49.github.io/work-scheduler/",repo:"https://github.com/kmcpherson49/work-scheduler"},{image:"/screenshots/3.jpg",name:"Password Generator",description:"This project is a password generator that will give users a secure, random password after a series of prompts.",deployed:"https://kmcpherson49.github.io/password-generator/",repo:"https://github.com/kmcpherson49/password-generator"},{image:"/screenshots/4.jpg",name:"Food Truck App",description:"This project is an app that allows users to search for a local food truck to read reviews, leave ratings, post about the food trucks, and find contact information for the trucks.",deployed:"https://local-food-truck-finder.herokuapp.com/",repo:"https://github.com/kmcpherson49/food-truck-rating"},{image:"/screenshots/5.jpg",name:"Budget Tracker",description:"This project is an app that allows users to track their spending while traveling or in everyday life. This app showcases the features of a Progessive Web Applications with a cache and offline capabilites.",deployed:"https://frozen-sierra-56639.herokuapp.com/",repo:"https://github.com/kmcpherson49/budget-tracker"}]),t=Object(s.a)(e,1)[0];return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsxs)(v.a,{children:[Object(d.jsx)(v.a.Img,{variant:"top",src:e.image}),Object(d.jsxs)(v.a.Body,{children:[Object(d.jsx)(v.a.Title,{children:e.name}),Object(d.jsx)(v.a.Text,{children:e.description})]}),Object(d.jsxs)(v.a.Body,{children:[Object(d.jsx)(v.a.Link,{href:e.deployed,children:"Deployed"}),Object(d.jsx)(v.a.Link,{href:e.repo,children:"Repo"})]})]})}))})};var w=function(){return Object(d.jsx)("section",{children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(v.a,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Krista McPherson"}),Object(d.jsxs)(v.a.Body,{children:[Object(d.jsx)(v.a.Text,{children:"Scottsdale, AZ 85250"}),Object(d.jsx)(v.a.Text,{children:"602.478.0038"}),Object(d.jsx)(v.a.Text,{children:"kmcpherson49@gmail.com"}),Object(d.jsx)(v.a.Link,{href:"https://www.linkedin.com/in/kristamcpherson",children:"LinkedIn"}),Object(d.jsx)(v.a.Link,{href:"https://github.com/kmcpherson49",children:"Github"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(v.a.Title,{children:"Summary"}),Object(d.jsx)("p",{children:"Full Stack Web Developer with a background in Social Media Marketing and passion for learning. Known for providing consistent work and finding creative, resourceful solutions."})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(v.a.Title,{children:"Technical Skills"}),Object(d.jsx)("p",{children:"Node.Js | Express | JavaScript | jQuery | React.js | React | JSX | GIT | GitHub | MongoDB | MySQL | Mongoose | Handlebars | HTML5 | CSS3 | Bootstrap | Materialize | APIs | Heroku | Terminal | AJAX | Restful API | ES6 | React Hooks | JSON | Sequelize"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(v.a.Title,{children:"Education"}),Object(d.jsx)(v.a.Title,{children:"Full Stack Web Development Certificate"}),Object(d.jsx)(v.a.Text,{children:"University of Arizona"})," ",Object(d.jsx)(v.a.Text,{children:"2021"}),Object(d.jsx)(v.a.Title,{children:"Bachelor of Science in Communication (Minor in Digital Audiences)"}),Object(d.jsx)(v.a.Text,{children:"Arizona State University"})," ",Object(d.jsx)(v.a.Text,{children:"2020"}),Object(d.jsx)(v.a.Title,{children:"Certificate in Social Media Marketing "}),Object(d.jsx)(v.a.Text,{children:"Scottsdale Community College"})," ",Object(d.jsx)(v.a.Text,{children:"2019"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(v.a.Title,{children:"Experience"}),Object(d.jsx)(v.a.Title,{children:"Marketing Associate "}),Object(d.jsx)(v.a.Title,{children:"Emerald Wealth"}),Object(d.jsx)(v.a.Text,{children:"2020 - Present"}),Object(d.jsx)(v.a.Text,{children:"Redesigned and maintain current website for a user-friendly experience. Create content for Facebook and Linkedin. Serve as a FINRA approved manager of account records. Edit and film marketing videos and prepare scripts, and create copy and assets for email newsletters and invitations."}),Object(d.jsx)(v.a.Title,{children:"Social Media Marketing Specialist"}),Object(d.jsx)(v.a.Title,{children:"Scottsdale Pavilion Entertainment Complex"}),Object(d.jsx)(v.a.Text,{children:"2018 - 2020"}),Object(d.jsx)("p",{children:"Managed all social platforms. Created content for instagram, email newsletters, and Facebook. Enhanced sales growth by planning and executing social media campaigns and cultivating client relations."})]})]})})})};var y=function(e){return Object(d.jsx)("div",{children:e.children})};var T=function(e){var t=e.currentTab;return Object(d.jsx)(y,{children:function(){switch(t.name){default:return Object(d.jsx)(x,{});case"contact":return Object(d.jsx)(g,{});case"portfolio":return Object(d.jsx)(k,{});case"resume":return Object(d.jsx)(w,{})}}()})};var S=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"resume"},{name:"contact"}]),t=Object(s.a)(e,1)[0],a=Object(n.useState)(t[0]),i=Object(s.a)(a,2),r=i[0],c=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{tabs:t,setCurrentTab:c,currentTab:r}),Object(d.jsx)("main",{children:Object(d.jsx)(T,{currentTab:r})}),Object(d.jsx)("footer",{children:Object(d.jsx)("h2",{children:"Made by KLM"})})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),C()}},[[22,1,2]]]);
//# sourceMappingURL=main.183847f5.chunk.js.map