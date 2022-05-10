import{_ as u,o as a,c as i,a as e,t as o,b as k,n as w,F as p,M as P,r as _,d as y,e as l,w as $,u as C}from"./app.00133553.js";const B={name:"About",props:["imgPath","title","subtitle","idElement"]},M=["id"],j={class:"flex items-center justify-center"},S=["src"],A={class:"flex flex-col justify-center"},D={class:"text-3xl font-bold"},T={class:"mt-4 text-md md:text-lg font-normal whitespace-pre-wrap"};function I(s,d,t,c,r,h){return a(),i("div",{class:"grid grid-cols-1 pt-8 md:grid-cols-2 gap-4",id:t.idElement},[e("div",j,[e("img",{class:"object-scale-down h-90 w-96",src:t.imgPath,alt:"Logo"},null,8,S)]),e("div",A,[e("h1",D,o(t.title),1),e("h4",T,o(t.subtitle),1)])],8,M)}var z=u(B,[["render",I]]),E="/assets/prototype.bbd3b240.png";const F={name:"Feature",props:["idElement"]},G=["id"],N=k('<div class="absolute inset-0 -z-50" data-v-1fb50cc6><div class="loading hidden md:flex relative m-auto" data-v-1fb50cc6><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span><span data-v-1fb50cc6></span></div></div><div class="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 mt-8 grid-flow-col gap-4" data-v-1fb50cc6><div class="col-span-1" data-v-1fb50cc6><h3 class="md:text-right mt-8 text-xl font-extrabold" data-v-1fb50cc6>Rekomendasi Buku</h3><h6 class="md:text-right text-gray-500 text-md" data-v-1fb50cc6>Bingung mencari buku? Komunitas pengguna kami akan memberikan rekomendasi buku untuk anda.</h6></div><div class="hidden md:block row-span-2 col-span-1 flex items-center justify-center" data-v-1fb50cc6><img class="object-scale-down" src="'+E+'" alt="Contoh Prototype" data-v-1fb50cc6></div><div class="col-span-1" data-v-1fb50cc6><h3 class="mt-8 text-xl font-extrabold" data-v-1fb50cc6>Jual Beli Buku</h3><h6 class="text-gray-500 text-md" data-v-1fb50cc6>Jual buku anda apabila sudah tidak digunakan. Selain itu anda juga dapat membeli buku di sini.</h6></div><div data-v-1fb50cc6><h3 class="mt-8 text-xl font-extrabold" data-v-1fb50cc6>Sewa Buku</h3><h6 class="text-gray-500 text-md" data-v-1fb50cc6>Tidak ingin membeli buku tetapi tetap ingin membaca buku tersebut? Anda bisa menyewanya dengan durasi waktu tertentu.</h6></div></div>',2),H=[N];function V(s,d,t,c,r,h){return a(),i("div",{class:"relative",id:t.idElement},H,8,G)}var R=u(F,[["render",V],["__scopeId","data-v-1fb50cc6"]]);const U={name:"Title",props:{title:{type:String},subtitle:{type:String},customClass:{type:String,default:""},idElement:{type:String}}},Q=["id"],Y={class:"text-center mt-4 text-lg text-gray-500"};function q(s,d,t,c,r,h){return a(),i(p,null,[e("h1",{id:t.idElement,class:w([t.customClass,"text-center text-5xl uppercase font-extrabold"])},o(t.title),11,Q),e("h4",Y,o(t.subtitle),1)],64)}var g=u(U,[["render",q]]);const X={name:"Card",props:["imgPath","title"]},Z={class:"order-1 rounded-xl hover:shadow-lg transition-all hover:scale-110 ease-in-out cursor-pointer w-full md:w-5/12 px-6 py-4"},J=["src"],L={class:"mb-3 text-center font-bold text-xl"};function K(s,d,t,c,r,h){return a(),i("div",Z,[e("img",{class:"object-scale-down h-64 w-96",src:t.imgPath,alt:""},null,8,J),e("h3",L,o(t.title),1)])}var O=u(X,[["render",K]]);const W={name:"Timeline",components:{CardTimeline:O,Modal:P},props:{timelineDatas:{type:Array},idElement:{type:String}},data(){return{titleModal:"",bodyModal:""}},methods:{openModal(s){this.bodyModal=this.timelineDatas[s].modalBody,this.titleModal=this.timelineDatas[s].title,this.$refs["modal-card"].open()}}},tt=["id"],et=e("div",{class:"border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block",style:{left:"50%"}},null,-1),at=e("div",{class:"order-1 w-5/12 hidden md:flex"},null,-1),it={class:"z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:flex"},st={class:"mx-auto font-semibold text-lg text-white"};function nt(s,d,t,c,r,h){const m=_("CardTimeline"),x=_("Modal");return a(),i(p,null,[e("div",{class:"relative wrap overflow-hidden pt-10 md:p-10 h-full",id:t.idElement},[et,(a(!0),i(p,null,y(t.timelineDatas,(b,f)=>(a(),i("div",{class:w([[f%2===0?"":"flex-row-reverse"],"mb-8 flex justify-between items-center w-full"])},[at,e("div",it,[e("h1",st,o(f+1),1)]),l(m,{onClick:$t=>this.openModal(f),"img-path":b.imgPath,title:b.title},null,8,["onClick","img-path","title"])],2))),256))],8,tt),l(x,{ref:"modal-card","body-modal":r.bodyModal},{header:$(()=>[e("b",null,o(r.titleModal),1)]),_:1},8,["body-modal"])],64)}var lt=u(W,[["render",nt]]);const ot={name:"Member",props:{datas:{type:Array}}},rt={class:"grid grid-cols-1 md:grid-cols-3 gap-12 mt-8"},dt={class:"flex flex-col items-center justify-center"},ct=["src","alt"],mt={class:"mt-4 text-2xl text-center font-extrabold"},ut={class:"text-gray-500 text-center text-lg"};function ht(s,d,t,c,r,h){return a(),i("div",rt,[(a(!0),i(p,null,y(t.datas,m=>(a(),i("div",dt,[e("img",{class:"object-scale-down rounded-full",src:m.imgPath,alt:m.name},null,8,ct),e("h3",mt,o(m.name),1),e("h5",ut,o(m.subtitle),1)]))),256))])}var pt=u(ot,[["render",ht]]),ft=`<div style="position: relative;\r
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
</div>\r
`,gt=`<div style="position: relative;\r
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
`,bt=`<div style="position: relative;\r
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
\r
`,_t=`<div style="position: relative;\r
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
`,vt=`<div style="position: relative;\r
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
`,wt=`<div style="position: relative;\r
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
`,v=`<div class="w-full h-full">\r
    <h1 class="text-center text-5xl font-bold text-gray-500">Coming Soon</h1>\r
    <h6 class="text-center text-md mt-4 text-gray-500">Please wait patiently</h6>\r
</div>\r
`,yt="/assets/yoga.4944f83d.png",xt="/assets/hilal.b65761fe.png",kt="/assets/andrian.893347a9.png",n="/assets/logo.51a6829c.png";const Bt='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}',Pt={},Mt=Object.assign(Pt,{setup(s){const d=[{name:"Yoga Cahya Romadhon",subtitle:"05211940000001",imgPath:yt},{name:"M. Dwiki Andrian",subtitle:"05211940000012",imgPath:kt},{name:"Ahmad Hilal M.",subtitle:"05211940000041",imgPath:xt}],t=[{title:"Needfinding",imgPath:n,modalBody:ft},{title:"Point of View & Experience Prototypes",imgPath:n,modalBody:gt},{title:"Video Konsep",imgPath:n,modalBody:bt},{title:"Low-fidelity Prototype & Test",imgPath:n,modalBody:_t},{title:"Medium-fidelity Prototype",imgPath:n,modalBody:vt},{title:"Group Heuristic Evaluation",imgPath:n,modalBody:wt},{title:"Hi-fidelity Prototype",imgPath:n,modalBody:v},{title:"Poster & Pitch Slide",imgPath:n,modalBody:v}];return(c,r)=>(a(),i("div",null,[l(z,{"id-element":"about",title:"Apa itu Thriftbooks?",subtitle:`Thriftbooks adalah aplikasi yang memfasilitasi pengguna untuk mencari buku (sewa atau jual beli) serta pengguna dapat meminta rekomendasi terkait buku.

Kami berusaha mengatasi masalah pengguna (mis. mahasiswa) dalam mencari buku yang dibutuhkan.`,"img-path":C(n)},null,8,["img-path"]),l(g,{"id-element":"features",title:"Fitur",subtitle:"Apa saja yang bisa dilakukan di Thriftbooks?",customClass:"pt-16"}),l(R),l(g,{"id-element":"process",title:"Proses",subtitle:`Simak perjalanan kami dari menggali kebutuhan hingga menjadi
      produk jadi`,customClass:"pt-16"}),l(lt,{timelineDatas:t}),l(g,{"id-element":"members",title:"Anggota",subtitle:"Berikut adalah anggota yang berpartisipasi dalam pengembangan Thriftbooks",customClass:"pt-16"}),l(pt,{datas:d})]))}});export{Bt as __pageData,Mt as default};
