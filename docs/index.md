<script setup>
import About from "./.vitepress/components/About.vue"
import Feature from "./.vitepress/components/Feature.vue"
import Title from "./.vitepress/components/Title.vue"
import Timeline from "./.vitepress/components/Timeline.vue"
import Member from "./.vitepress/components/Member.vue"

import Needfinding from './contents/modal/needfinding.html?raw'
import Pov from './contents/modal/pov.html?raw'
import ConceptVideo from './contents/modal/concept-video.html?raw'
import LowFi from './contents/modal/low-fi.html?raw'
import MedFi from './contents/modal/med-fi.html?raw'
import Heuristic from './contents/modal/heuristic.html?raw'
import Hifi from './contents/modal/hi-fi.html?raw'
import Pitch from './contents/modal/pitch.html?raw'
import ComingSoon from './contents/modal/coming-soon.html?raw'

import yogaImg from './assets/yoga.png'
import hilalImg from './assets/hilal.png'
import andriImg from './assets/andrian.png'
import logoImg from './assets/logo.png'
const members=[
    {
        name:"Yoga Cahya Romadhon",
        subtitle:"05211940000001",
        imgPath:yogaImg,
    },
    {
        name:"M. Dwiki Andrian",
        subtitle:"05211940000012",
        imgPath:andriImg,
    },
    {
        name:"Ahmad Hilal M.",
        subtitle:"05211940000041",
        imgPath:hilalImg,
    },
]

const timelineDatas=[
    {
        title:"Needfinding",
        imgPath:logoImg,
        modalBody:Needfinding
    },{
        title:"Point of View & Experience Prototypes",
        imgPath:logoImg,
        modalBody:Pov
    },{
        title:"Video Konsep",
        imgPath:logoImg,
        modalBody:ConceptVideo
    },{
        title:"Low-fidelity Prototype & Test",
        imgPath:logoImg,
        modalBody:LowFi
    },{
        title:"Medium-fidelity Prototype",
        imgPath:logoImg,
        modalBody:MedFi
    },{
        title:"Group Heuristic Evaluation",
        imgPath:logoImg,
        modalBody:Heuristic
    },{
        title:"Hi-fidelity Prototype",
        imgPath:logoImg,
        modalBody:Hifi
    },{
        title:"Poster & Pitch Slide",
        imgPath:logoImg,
        modalBody:Pitch
    }
]
</script>

<About id-element="about" title="Apa itu Thriftbooks?"
subtitle="Thriftbooks adalah aplikasi yang memfasilitasi pengguna untuk mencari buku (sewa atau jual beli) serta pengguna dapat meminta rekomendasi terkait buku.

Kami berusaha mengatasi masalah pengguna (mis. mahasiswa) dalam mencari buku yang dibutuhkan."
:img-path="logoImg"/>


<Title id-element="features" title="Fitur" subtitle="Apa saja yang bisa dilakukan di Thriftbooks?" customClass="pt-16"/>
<Feature/>

<Title id-element="process" title="Proses" subtitle="Simak perjalanan kami dari menggali kebutuhan hingga menjadi
      produk jadi" customClass="pt-16"/>
<Timeline :timelineDatas="timelineDatas"/>

<Title id-element="members" title="Anggota" subtitle="Berikut adalah anggota yang berpartisipasi dalam pengembangan Thriftbooks" customClass="pt-16"/>
<Member :datas="members"/>
