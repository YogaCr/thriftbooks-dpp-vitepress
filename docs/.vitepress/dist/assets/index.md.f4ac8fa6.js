import{_ as u,o as a,c as i,a as t,t as l,b as k,n as y,F as p,M as P,r as v,d as w,e as r,w as C,u as $}from"./app.b393f988.js";const M={name:"About",props:["imgPath","title","subtitle","idElement"]},j=["id"],B={class:"flex items-center justify-center"},F=["src"],D={class:"flex flex-col justify-center"},U={class:"text-3xl font-bold"},E={class:"mt-4 text-md md:text-lg font-normal whitespace-pre-wrap"};function I(s,d,e,c,o,h){return a(),i("div",{class:"grid grid-cols-1 pt-8 md:grid-cols-2 gap-4",id:e.idElement},[t("div",B,[t("img",{class:"object-scale-down h-90 w-96",src:e.imgPath,alt:"Logo"},null,8,F)]),t("div",D,[t("h1",U,l(e.title),1),t("h4",E,l(e.subtitle),1)])],8,j)}var S=u(M,[["render",I]]),T="/assets/prototype.bbd3b240.png";const H={name:"Feature",props:["idElement"]},A=["id"],z=k('<div class="absolute inset-0 -z-50" data-v-1fb50cc6><div class="loading hidden md:flex relative m-auto" data-v-1fb50cc6><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span></div></div><div class="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 mt-8 grid-flow-col gap-4" data-v-1fb50cc6><div class="col-span-1" data-v-1fb50cc6><h3 class="md:text-right mt-8 text-xl font-extrabold" data-v-1fb50cc6>Rekomendasi Buku</h3><h6 class="md:text-right text-gray-500 text-md" data-v-1fb50cc6>Bingung mencari buku? Komunitas pengguna kami akan memberikan rekomendasi buku untuk anda.</h6></div><div class="hidden md:block row-span-2 col-span-1 flex items-center justify-center" data-v-1fb50cc6><img class="object-scale-down" src="'+T+'" alt="Contoh Prototype" data-v-1fb50cc6></div><div class="col-span-1" data-v-1fb50cc6><h3 class="mt-8 text-xl font-extrabold" data-v-1fb50cc6>Jual Beli Buku</h3><h6 class="text-gray-500 text-md" data-v-1fb50cc6>Jual buku anda apabila sudah tidak digunakan. Selain itu anda juga dapat membeli buku di sini.</h6></div><div data-v-1fb50cc6><h3 class="mt-8 text-xl font-extrabold" data-v-1fb50cc6>Sewa Buku</h3><h6 class="text-gray-500 text-md" data-v-1fb50cc6>Tidak ingin membeli buku tetapi tetap ingin membaca buku tersebut? Anda bisa menyewanya dengan durasi waktu tertentu.</h6></div></div>',2),V=[z];function G(s,d,e,c,o,h){return a(),i("div",{class:"relative",id:e.idElement},V,8,A)}var N=u(H,[["render",G],["__scopeId","data-v-1fb50cc6"]]);const Y={name:"Title",props:{title:{type:String},subtitle:{type:String},customClass:{type:String,default:""},idElement:{type:String}}},X=["id"],K={class:"text-center mt-4 text-lg text-gray-500"};function Q(s,d,e,c,o,h){return a(),i(p,null,[t("h1",{id:e.idElement,class:y([e.customClass,"text-center text-5xl uppercase font-extrabold"])},l(e.title),11,X),t("h4",K,l(e.subtitle),1)],64)}var g=u(Y,[["render",Q]]);const R={name:"Card",props:["imgPath","title"]},Z={class:"order-1 rounded-xl hover:shadow-lg transition-all hover:scale-110 ease-in-out cursor-pointer w-full md:w-5/12 px-6 py-4"},q=["src"],L={class:"mb-3 text-center font-bold text-xl"};function J(s,d,e,c,o,h){return a(),i("div",Z,[t("img",{class:"object-scale-down h-64 w-96",src:e.imgPath,alt:""},null,8,q),t("h3",L,l(e.title),1)])}var O=u(R,[["render",J]]);const W={name:"Timeline",components:{CardTimeline:O,Modal:P},props:{timelineDatas:{type:Array},idElement:{type:String}},data(){return{titleModal:"",bodyModal:""}},methods:{openModal(s){this.bodyModal=this.timelineDatas[s].modalBody,this.titleModal=this.timelineDatas[s].title,this.$refs["modal-card"].open()}}},ee=["id"],te=t("div",{class:"border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block",style:{left:"50%"}},null,-1),ae=t("div",{class:"order-1 w-5/12 hidden md:flex"},null,-1),ie={class:"z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:flex"},se={class:"mx-auto font-semibold text-lg text-white"};function ne(s,d,e,c,o,h){const m=v("CardTimeline"),x=v("Modal");return a(),i(p,null,[t("div",{class:"relative wrap overflow-hidden pt-10 md:p-10 h-full",id:e.idElement},[te,(a(!0),i(p,null,w(e.timelineDatas,(b,f)=>(a(),i("div",{class:y([[f%2===0?"":"flex-row-reverse"],"mb-8 flex justify-between items-center w-full"])},[ae,t("div",ie,[t("h1",se,l(f+1),1)]),r(m,{onClick:Ce=>this.openModal(f),"img-path":b.imgPath,title:b.title},null,8,["onClick","img-path","title"])],2))),256))],8,ee),r(x,{ref:"modal-card","body-modal":o.bodyModal},{header:C(()=>[t("b",null,l(o.titleModal),1)]),_:1},8,["body-modal"])],64)}var re=u(W,[["render",ne]]);const le={name:"Member",props:{datas:{type:Array}}},oe={class:"grid grid-cols-1 md:grid-cols-3 gap-12 mt-8"},de={class:"flex flex-col items-center justify-center"},ce=["src","alt"],me={class:"mt-4 text-2xl text-center font-extrabold"},ue={class:"text-gray-500 text-center text-lg"};function he(s,d,e,c,o,h){return a(),i("div",oe,[(a(!0),i(p,null,w(e.datas,m=>(a(),i("div",de,[t("img",{class:"object-scale-down rounded-full",src:m.imgPath,alt:m.name},null,8,ce),t("h3",me,l(m.name),1),t("h5",ue,l(m.subtitle),1)]))),256))])}var pe=u(le,[["render",he]]),fe=`<div style="position: relative;\r
    width: 100%;\r
    padding-top: 60%;\r
    overflow: hidden;">\r
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ6HQ9zwh_HItiev-U5y4H7H0ZD-DCeWh8StbuBCBzm61AcGpcGmRI2QaUEQ81Ja0No-o82xRI1IcqR/embed?start=false&loop=false&delayms=3000"\r
            frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"\r
            webkitallowfullscreen="true" style="position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;"></iframe>\r
\r
</div>\r
<div class="flex flex-col items-center justify-center">\r
    <a style="color:#2980b9" class="mt-4" href="https://docs.google.com/presentation/d/1UG6xIigX8hUr1q0QDCHg1MaJKB4KEJLE/edit?usp=sharing&ouid=101925499861947879617&rtpof=true&sd=true" target="_blank">\r
        Unduh File Presentasi\r
    </a>\r
</div>\r
`,ge=`<div style="position: relative;\r
    width: 100%;\r
    padding-top: 60%;\r
    overflow: hidden;">\r
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRU3Y_ByU_fdtnI_j61TUaNmQGM0J-VSxCoo2YSbQn5j58nqgNLk2V7McQZOZc4ezP4dp6FNIDWzkPi/embed?start=false&loop=false&delayms=3000"\r
            frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"\r
            webkitallowfullscreen="true"\r
    style="position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;"></iframe>\r
</div>\r
<div class="flex flex-col items-center justify-center">\r
    <a style="color:#2980b9" class="mt-4" href="https://drive.google.com/file/d/1JF8Skn12qZtBdhW5ztFMKDfY_bhHDa81/view?usp=sharing" target="_blank">\r
        Unduh File Presentasi\r
    </a>\r
</div>\r
`,be=`<div style="position: relative;\r
    width: 100%;\r
    padding-top: 60%;\r
    overflow: hidden;">\r
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Zl5IZ66w4qY" title="YouTube video player"\r
            frameborder="0"\r
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\r
            allowfullscreen\r
    style="position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;"></iframe>\r
</div>\r
<div class="flex flex-col items-center justify-center">\r
    <a style="color:#2980b9" class="mt-4" href="https://docs.google.com/presentation/d/1v7CO7KC8dH_dHUV8vDo8fLx4rlXMIE7_/edit?usp=sharing&ouid=101925499861947879617&rtpof=true&sd=true" target="_blank">\r
        Unduh File Presentasi\r
    </a>\r
</div>\r
`,ve=`<div style="position: relative;\r
    width: 100%;\r
    padding-top: 60%;\r
    overflow: hidden;">\r
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSIv8iZpsC0GwiCv8oqPXdVo2_Q8Dy4-GyBVFPiY9pcChEumPRHSsGpv9ZxXIm5W_YWs2PvNGustUgY/embed?start=false&loop=false&delayms=3000"\r
            frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"\r
            webkitallowfullscreen="true" style="position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;"></iframe>\r
</div>\r
<div class="flex flex-col items-center justify-center">\r
    <a style="color:#2980b9" class="mt-4" href="https://drive.google.com/file/d/1xVhY923y3ODtvTarqI5bpeMUVgzcyXcG/view?usp=sharing" target="_blank">\r
        Unduh File Presentasi\r
    </a>\r
    <a style="color:#2980b9" class="mt-4" href="https://drive.google.com/file/d/1OdvjQ81_-xsTUHCmEu-ij9dEyHnMw3OD/view?usp=sharing" target="_blank">\r
        Unduh File Laporan\r
    </a>\r
</div>\r
`,_e=`<div style="position: relative;\r
    width: 100%;\r
    padding-top: 60%;\r
    overflow: hidden;">\r
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRG3qJDtRo7QHSsxOJ815pgr1__2sC2cNmGjOzG-rc9M62knNV_m50xa28D0Gqspl3KFICXUxsLC6w9/embed?start=false&loop=false&delayms=3000"\r
            frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"\r
            webkitallowfullscreen="true" style="position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;"></iframe>\r
</div>\r
<div class="flex flex-col items-center justify-center">\r
    <a style="color:#2980b9" class="mt-4" href="https://drive.google.com/file/d/1lTiOTU2XBm8Feil8ZLVKoP5I0xiIZa-d/view?usp=sharing" target="_blank">\r
        Unduh File Presentasi\r
    </a>\r
    <a style="color:#2980b9" class="mt-4" href="https://drive.google.com/file/d/1cvuYkZurXWyhglwhcKcnaH_s_HY6VubN/view?usp=sharing" target="_blank">\r
        Unduh File README\r
    </a>\r
    <a style="color:#2980b9" class="mt-4" href="intip.in/MedFiC7" target="_blank">\r
        Coba Med-Fi Prototipe\r
    </a>\r
</div>\r
`,ye=`<div style="position: relative;\r
    width: 100%;\r
    padding-top: 60%;\r
    overflow: hidden;">\r
    <iframe src="https://docs.google.com/document/d/19b3UfarkbAP01UzgiHKxopDc8olRUCgFwfYxoyTAq9g/edit"\r
            frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"\r
            webkitallowfullscreen="true" style="position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;"></iframe>\r
</div>\r
`,_=`<div class="w-full h-full">\r
    <h1 class="text-center text-5xl font-bold text-gray-500">Coming Soon</h1>\r
    <h6 class="text-center text-md mt-4 text-gray-500">Please wait patiently</h6>\r
</div>\r
`,we="/assets/yoga.4944f83d.png",xe="/assets/hilal.b65761fe.png",ke="/assets/andrian.893347a9.png",n="/assets/logo.51a6829c.png";const Me='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}',Pe={},je=Object.assign(Pe,{setup(s){const d=[{name:"Yoga Cahya Romadhon",subtitle:"05211940000001",imgPath:we},{name:"M. Dwiki Andrian",subtitle:"05211940000012",imgPath:ke},{name:"Ahmad Hilal M.",subtitle:"05211940000041",imgPath:xe}],e=[{title:"Needfinding",imgPath:n,modalBody:fe},{title:"Point of View & Experience Prototypes",imgPath:n,modalBody:ge},{title:"Video Konsep",imgPath:n,modalBody:be},{title:"Low-fidelity Prototype & Test",imgPath:n,modalBody:ve},{title:"Medium-fidelity Prototype",imgPath:n,modalBody:_e},{title:"Group Heuristic Evaluation",imgPath:n,modalBody:ye},{title:"Hi-fidelity Prototype",imgPath:n,modalBody:_},{title:"Poster & Pitch Slide",imgPath:n,modalBody:_}];return(c,o)=>(a(),i("div",null,[r(S,{"id-element":"about",title:"Apa itu Thriftbooks?",subtitle:`Thriftbooks adalah aplikasi yang memfasilitasi pengguna untuk mencari buku (sewa atau jual beli) serta pengguna dapat meminta rekomendasi terkait buku.

Kami berusaha mengatasi masalah pengguna (mis. mahasiswa) dalam mencari buku yang dibutuhkan.`,"img-path":$(n)},null,8,["img-path"]),r(g,{"id-element":"features",title:"Fitur",subtitle:"Apa saja yang bisa dilakukan di Thriftbooks?",customClass:"pt-16"}),r(N),r(g,{"id-element":"process",title:"Proses",subtitle:`Simak perjalanan kami dari menggali kebutuhan hingga menjadi
      produk jadi`,customClass:"pt-16"}),r(re,{timelineDatas:e}),r(g,{"id-element":"members",title:"Anggota",subtitle:"Berikut adalah anggota yang berpartisipasi dalam pengembangan Thriftbooks",customClass:"pt-16"}),r(pe,{datas:d})]))}});export{Me as __pageData,je as default};
