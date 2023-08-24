import{u as r,a as e,j as s,F as c,h as t,f as d,g as o}from"./index.97030707.js";const m=l=>{const{t:a}=r();return e("div",{className:"box-shadow rounded m-4 p-3",children:s("div",{className:"row",children:[s("div",{className:"col-lg-4",children:[s("p",{className:"fw-bold fs-5 text-primary",children:[l.start," - ",l.end||a("pages.resume.experience_present")]}),e("p",{className:"fw-bold",children:a(`pages.resume.experience.${l.slug}.job_title`)}),e("p",{children:l.employer}),s("p",{children:[e(c,{icon:t,className:"text-success"}),"\xA0",l.employer_location]}),l.employer_linkedin?e("p",{children:e("a",{href:l.employer_linkedin,className:"btn btn-link p-0","aria-label":"linkedin profile link",children:e(c,{icon:d})})}):""]}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:Array.from({length:l.tasks_num},(i,n)=>e("li",{children:a(`pages.resume.experience.${l.slug}.tasks.${n+1}`)},n))})})]})})},h=l=>{const{t:a}=r();return e("div",{className:"box-shadow rounded m-4 p-3",children:s("div",{className:"row",children:[s("div",{className:"col-lg-4",children:[s("p",{className:"fw-bold fs-5 text-primary",children:[l.start," - ",l.end||"Pr\xE9sent"]}),e("p",{className:"fw-bold",children:a(`pages.resume.education.${l.slug}.degree`)}),e("p",{children:l.school}),s("p",{children:[e(c,{icon:t,className:"text-success"}),"\xA0",l.school_location]})]}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:Array.from({length:l.course_details_num},(i,n)=>e("li",{children:a(`pages.resume.education.${l.slug}.course_details.${n+1}`)},n))})})]})})};var u=[{slug:"apprenti_ingenieur_ign",employer:"Institut national de l'information G\xE9ographique et Foresti\xE8re (IGNF)",employer_location:"Saint-Mand\xE9",employer_linkedin:"https://www.linkedin.com/company/ignfrance",start:"2019",tasks_num:2},{slug:"apprenti_developpeur_tti",employer:"Transport Tertiaire Industrie (TTI)",employer_location:"Noise-le-Sec",employer_linkedin:"https://www.linkedin.com/company/transporttertiaireindustriel",start:"2018",end:"2019",tasks_num:2}],g=[{slug:"diplome_ingenieur_esiea",start:"2019",end:"2022",school:"ESIEA",school_location:"Ivry-sur-Seine",course_details_num:5},{slug:"dut_informatique",start:"2017",end:"2019",school:"IUT de Montreuil (Universit\xE9 Paris-8)",school_location:"Montreuil",course_details_num:3},{slug:"bac_s",start:"2014",end:"2017",school:"Lyc\xE9e Marcel Cachin",school_location:"Saint-Ouen",course_details_num:1}];const p=["Java (spring, hibernate, swing, JavaFx)","C","Python","Bash"],f=["HTML","CSS (Bootstrap, bulma)","JavaScript (react, vue.js)","PHP (Symfony)"],_=["SQL (PostgreSQL, MySQL, SQLite)"],v=["Git","Docker","CI (CircleCI, Travis CI)","Trello"],N=["IPv4 & IPv6","Routing","DNS","NFS","DHCP"],w=["lang_english","lang_french","lang_bengali"];var x={software_development:p,web_development:f,database_administration:_,dev_tools:v,computer_networking:N,languages:w};const b=({skills:l})=>{const{t:a}=r();return s("div",{className:"box-shadow rounded m-4 p-3",children:[s("div",{className:"row",children:[e("div",{className:"col-lg-4 d-flex align-items-center",children:e("p",{className:"fw-bold fs-5 text-primary",children:a("pages.resume.skills.software_development")})}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:l.software_development.map((i,n)=>e("li",{children:i},n))})})]}),e("hr",{}),s("div",{className:"row",children:[e("div",{className:"col-lg-4 d-flex align-items-center",children:e("p",{className:"fw-bold fs-5 text-primary",children:a("pages.resume.skills.web_development")})}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:l.web_development.map((i,n)=>e("li",{children:i},n))})})]}),e("hr",{}),s("div",{className:"row",children:[e("div",{className:"col-lg-4 d-flex align-items-center",children:e("p",{className:"fw-bold fs-5 text-primary",children:a("pages.resume.skills.database_administration")})}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:l.database_administration.map((i,n)=>e("li",{children:i},n))})})]}),e("hr",{}),s("div",{className:"row",children:[e("div",{className:"col-lg-4 d-flex align-items-center",children:e("p",{className:"fw-bold fs-5 text-primary",children:a("pages.resume.skills.dev_tools")})}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:l.dev_tools.map((i,n)=>e("li",{children:i},n))})})]}),e("hr",{}),s("div",{className:"row",children:[e("div",{className:"col-lg-4 d-flex align-items-center",children:e("p",{className:"fw-bold fs-5 text-primary",children:a("pages.resume.skills.computer_networking")})}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:l.computer_networking.map((i,n)=>e("li",{children:i},n))})})]}),e("hr",{}),s("div",{className:"row",children:[e("div",{className:"col-lg-4 d-flex align-items-center",children:e("p",{className:"fw-bold fs-5 text-primary",children:a("pages.resume.skills.languages")})}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("ul",{children:l.languages.map((i,n)=>e("li",{children:a(`pages.resume.skills.${i}`)},n))})})]})]})},k=()=>{const{t:l}=r();return s(o,{children:[e("div",{className:"row px-4",children:e("h1",{className:"ff-poppins fw-bold",children:l("pages.resume.title")})}),e("div",{className:"row",children:s("section",{children:[e("h2",{className:"ff-poppins text-center",children:l("pages.resume.title_experience")}),u.map((a,i)=>e(m,{...a},i))]})}),e("div",{className:"row",children:s("section",{children:[e("h2",{className:"ff-poppins text-center",children:l("pages.resume.title_education")}),g.map((a,i)=>e(h,{...a},i))]})}),e("div",{className:"row",children:s("section",{children:[e("h2",{className:"ff-poppins text-center",children:l("pages.resume.title_skillset")}),e(b,{skills:x})]})})]})};export{k as default};