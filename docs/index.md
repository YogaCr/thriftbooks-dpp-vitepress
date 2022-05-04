<script setup>
import About from "./.vitepress/components/About.vue"
import Feature from "./.vitepress/components/Feature.vue"
import Title from "./.vitepress/components/Title.vue"
import Timeline from "./.vitepress/components/Timeline.vue"
import Member from "./.vitepress/components/Member.vue"

import needfinding from './contents/modal/needfinding.html?raw'
import pov from './contents/modal/pov.html?raw'
import conceptVideo from './contents/modal/concept-video.html?raw'
import lowFi from './contents/modal/low-fi.html?raw'
import medFi from './contents/modal/med-fi.html?raw'
import heuristic from './contents/modal/heuristic.html?raw'
import comingSoon from './contents/modal/coming-soon.html?raw'

const members=[
    {
        name:"Yoga Cahya Romadhon",
        subtitle:"05211940000001",
        imgPath:"../../assets/yoga.png",
    },
    {
        name:"M. Dwiki Andrian",
        subtitle:"05211940000012",
        imgPath:"../../assets/andrian.png",
    },
    {
        name:"Ahmad Hilal M.",
        subtitle:"05211940000041",
        imgPath:"../../assets/hilal.png",
    },
]

const timelineDatas=[
    {
        title:"Needfinding",
        imgPath:"../../assets/logo.png",
        modalBody:needfinding
    },{
        title:"Point of View & Experience Prototypes",
        imgPath:"../../assets/logo.png",
        modalBody:pov
    },{
        title:"Video Konsep",
        imgPath:"../../assets/logo.png",
        modalBody:conceptVideo
    },{
        title:"Low-fidelity Prototype & Test",
        imgPath:"../../assets/logo.png",
        modalBody:lowFi
    },{
        title:"Medium-fidelity Prototype",
        imgPath:"../../assets/logo.png",
        modalBody:medFi
    },{
        title:"Group Heuristic Evaluation",
        imgPath:"../../assets/logo.png",
        modalBody:heuristic
    },{
        title:"Hi-fidelity Prototype",
        imgPath:"../../assets/logo.png",
        modalBody:comingSoon
    },{
        title:"Poster & Pitch Slide",
        imgPath:"../../assets/logo.png",
        modalBody:comingSoon
    }
]
</script>

<About id-element="about" title="Apa itu Thriftbooks?"
subtitle="Thriftbooks adalah aplikasi yang memfasilitasi pengguna untuk mencari buku (sewa atau jual beli) serta pengguna dapat meminta rekomendasi terkait buku.

Kami berusaha mengatasi masalah pengguna (mis. mahasiswa) dalam mencari buku yang dibutuhkan."
img-path="../../assets/logo.png"/>


<Title id-element="features" title="Fitur" subtitle="Apa saja yang bisa dilakukan di Thriftbooks?" customClass="pt-16"/>
<Feature/>

<Title id-element="process" title="Proses" subtitle="Simak perjalanan kami dari menggali kebutuhan hingga menjadi
      produk jadi" customClass="pt-16"/>
<Timeline :timelineDatas="timelineDatas"/>

<Title id-element="members" title="Anggota" subtitle="Berikut adalah anggota yang berpartisipasi dalam pengembangan Thriftbooks" customClass="pt-16"/>
<Member :datas="this.members"/>
