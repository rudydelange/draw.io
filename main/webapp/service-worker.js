if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f163abaa"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"5726624002aeb96e042addcba5345af4"},{url:"js/extensions.min.js",revision:"cb7b81b25eaa0a0a287c6ca35dd459e6"},{url:"js/stencils.min.js",revision:"8ada746d21157d3d47e6ad3abbbcc3ab"},{url:"js/shapes-14-6-5.min.js",revision:"2a45abd06dfe78e69135e9f87f9b78d3"},{url:"js/math-print.js",revision:"9d98c920695f6c3395da4b68f723e60a"},{url:"index.html",revision:"28ab148081b0ccd22ad2db634d538b6b"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/grapheditor.css",revision:"00339c600732790e04874fb33825899c"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"87d5d01385c5d0f0c4c4f5d0f3532826"},{url:"js/croppie/croppie.min.css",revision:"fc297c9002c79c15a132f13ee3ec427e"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"9b23ec3d620099c9c990ba17abc65e2d"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"2ce6e99d95113e9ca6b24343cea202e0"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6e9412c359a21b86dc7c5128bf6208d4"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"197ed5837ed27992688fc424699a9a78"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"ff6d6e41b861a30d0b39ac80bd34afa7"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"c0c8dc057fd346abf2993d2c7b09adf5"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"293aa21acaf0a3349686f420b2be874a"},{url:"connect/confluence/viewer-init.js",revision:"4a60c6c805cab7bc782f1e52f7818d9f"},{url:"connect/confluence/viewer.js",revision:"5bf047c67091006edf94a8a7d779374d"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c7b38b3af4eb7a58ab6dc4791216530e"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"8b670f4b6ccde55358851da705ae884f"},{url:"connect/confluence/includeDiagram.html",revision:"c03c89622d22227313645900af4e3c3d"},{url:"connect/confluence/macro-editor.js",revision:"e273a48b8e81faac4530bf1a68d75aa0"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"d678bee3fea019155fefac8b4f97dfe4"},{url:"resources/dia_am.txt",revision:"1c7930ba902dacdc21490993123b5735"},{url:"resources/dia_ar.txt",revision:"069f620407207a3356d29d936a7d3b96"},{url:"resources/dia_bg.txt",revision:"fabd7c6aeae66de593bf101d04f4c028"},{url:"resources/dia_bn.txt",revision:"f3c16e3f1f602c60544e0446b9779468"},{url:"resources/dia_bs.txt",revision:"c96fabf73e8046b8c732d5c9c834ef90"},{url:"resources/dia_ca.txt",revision:"f493476f40d89b7b4dfa01c6ac6e88ba"},{url:"resources/dia_cs.txt",revision:"efe05b9b80f062efbe7491bcad40055a"},{url:"resources/dia_da.txt",revision:"3e169ad8d898e0301ff1cec5d21c6e94"},{url:"resources/dia_de.txt",revision:"2477cb0114ccfcaad944ce970729ae00"},{url:"resources/dia_el.txt",revision:"1e31e96f5d29e8906d3308ad072d7fda"},{url:"resources/dia_eo.txt",revision:"cf64be69067949afc404e943a2d674ba"},{url:"resources/dia_es.txt",revision:"73eb1140707734d7bcbdac26118bbcd1"},{url:"resources/dia_et.txt",revision:"4043018e9c18145e90948333703072c1"},{url:"resources/dia_eu.txt",revision:"39370b532b91771e37049418a0fa1cea"},{url:"resources/dia_fa.txt",revision:"e0ac0d32a69df2f6b8e1c4556d581b01"},{url:"resources/dia_fi.txt",revision:"dc26d26989bd2cf5f5bd1c720d388685"},{url:"resources/dia_fil.txt",revision:"df178d16a40298c36eaa01b5135d6eff"},{url:"resources/dia_fr.txt",revision:"3dac2685f54d5a170658fa8dce53300d"},{url:"resources/dia_gl.txt",revision:"b709352f1ca5749fdda7475332792fc5"},{url:"resources/dia_gu.txt",revision:"4f0c6657d4a97ff29a06c3b02091b8b8"},{url:"resources/dia_he.txt",revision:"a6becdc069c53aa410650767920a383f"},{url:"resources/dia_hi.txt",revision:"16e2e4dfb212995a4167df9e27388a92"},{url:"resources/dia_hr.txt",revision:"e637f674e3621964d38ab899c06a4bcc"},{url:"resources/dia_hu.txt",revision:"1fbcc8c79c36a92e3f037c8c4adc9f02"},{url:"resources/dia_id.txt",revision:"8c7e4f669a32133219b5b2113a3a7cc8"},{url:"resources/dia_it.txt",revision:"dd3f38ea3c6ea06bee8183bc9077375a"},{url:"resources/dia_ja.txt",revision:"83bd2e2ac8a3246ace65cd54be6dd29d"},{url:"resources/dia_kn.txt",revision:"81ae35ff84e421409e4dd46b02447bbc"},{url:"resources/dia_ko.txt",revision:"189961a282fa3291b849ff581278eaf0"},{url:"resources/dia_lt.txt",revision:"8708e991a429ceae603496cc5344c990"},{url:"resources/dia_lv.txt",revision:"ea7aef73a87b89da65ef02fd4e03ef6c"},{url:"resources/dia_ml.txt",revision:"a932c2e823f4b02c0ed0cb616d587c0a"},{url:"resources/dia_mr.txt",revision:"404aad97eb7031401cbdc2fd5b9cc356"},{url:"resources/dia_ms.txt",revision:"ab53be5369ecb5e35cbac5ce013e2bfd"},{url:"resources/dia_my.txt",revision:"d678bee3fea019155fefac8b4f97dfe4"},{url:"resources/dia_nl.txt",revision:"b7d16b0fb9cfd99ae19789a50acdb86d"},{url:"resources/dia_no.txt",revision:"1f5384aa57f5bc688ad06213a197ecdd"},{url:"resources/dia_pl.txt",revision:"720978bce51fe6b74689d49bc290a2bc"},{url:"resources/dia_pt-br.txt",revision:"111fcb83d9be85f51ae1761ba9a8504c"},{url:"resources/dia_pt.txt",revision:"79d71f913ba4f915413d57ab341bd1db"},{url:"resources/dia_ro.txt",revision:"478172420a2795862c9f5cc550c02525"},{url:"resources/dia_ru.txt",revision:"bdf79a23e38873ec68728b545c41f62c"},{url:"resources/dia_si.txt",revision:"d678bee3fea019155fefac8b4f97dfe4"},{url:"resources/dia_sk.txt",revision:"e1f64c52412866f084df2a56cd2c57d0"},{url:"resources/dia_sl.txt",revision:"4afdc759b96331b8e51015bf56660f62"},{url:"resources/dia_sr.txt",revision:"ea0768a1ba7aa25f8425078a8dc32aaa"},{url:"resources/dia_sv.txt",revision:"212da80f19a92f22d041af261ee86384"},{url:"resources/dia_sw.txt",revision:"f661f0b9f31809fc6a88779938525524"},{url:"resources/dia_ta.txt",revision:"4dde1d0bbc5f5614f1f8833be0be8963"},{url:"resources/dia_te.txt",revision:"1d8a5779d53b8fad84e95efd78870cd7"},{url:"resources/dia_th.txt",revision:"0475d738a0eb50b14f17d661f7407c20"},{url:"resources/dia_tr.txt",revision:"3d65b1d618deb374e2d03ba039c8aadb"},{url:"resources/dia_uk.txt",revision:"c054b4c8f782dbf1f1baa2fe4f4fcc86"},{url:"resources/dia_vi.txt",revision:"df6c2d9fb921c551beffb8fd6ef904df"},{url:"resources/dia_zh-tw.txt",revision:"4ceccaed5cc2ee7e3540c9f3d532d208"},{url:"resources/dia_zh.txt",revision:"0831ef7eb9f51b13565c202747fe45dc"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
