if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-bed83ea8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"5df253a5cf68431e236fa0b6f97d4307"},{url:"js/extensions.min.js",revision:"8f6625690fa713232aedd263ba09d115"},{url:"js/stencils.min.js",revision:"61006768fc3d04dc75dcf02bfb9081d9"},{url:"js/shapes-14-6-5.min.js",revision:"966d6d7fd2b6a3ddf7098a12982e31f7"},{url:"js/math-print.js",revision:"9d98c920695f6c3395da4b68f723e60a"},{url:"index.html",revision:"28ab148081b0ccd22ad2db634d538b6b"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/grapheditor.css",revision:"00339c600732790e04874fb33825899c"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/croppie/croppie.min.css",revision:"fc297c9002c79c15a132f13ee3ec427e"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"765c59e857acb60fac4e9830e71216e2"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"2ce6e99d95113e9ca6b24343cea202e0"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6e9412c359a21b86dc7c5128bf6208d4"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"197ed5837ed27992688fc424699a9a78"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"ff6d6e41b861a30d0b39ac80bd34afa7"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"7a37d0c45339d8a2b6239c10e5faa7c6"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"887d3ac605a7bb297067537e7c1f5686"},{url:"connect/confluence/viewer-init.js",revision:"4a60c6c805cab7bc782f1e52f7818d9f"},{url:"connect/confluence/viewer.js",revision:"2c2497f5cadbfc653d9081a29f262c5b"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c7b38b3af4eb7a58ab6dc4791216530e"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"8b670f4b6ccde55358851da705ae884f"},{url:"connect/confluence/includeDiagram.html",revision:"c03c89622d22227313645900af4e3c3d"},{url:"connect/confluence/macro-editor.js",revision:"e273a48b8e81faac4530bf1a68d75aa0"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"e2a61cf10ed871219fdfdad658b6fa5c"},{url:"resources/dia_am.txt",revision:"b05a83cf96d7637d3a863adeab6d572f"},{url:"resources/dia_ar.txt",revision:"42145856c1d564a5ecccd4ffaa9695d8"},{url:"resources/dia_bg.txt",revision:"2199b9d1d54574363178fceb0fb94ba9"},{url:"resources/dia_bn.txt",revision:"3e536299d08c969f51c0259dc389be9a"},{url:"resources/dia_bs.txt",revision:"57299ba0e7cbc07d499c029d323a469a"},{url:"resources/dia_ca.txt",revision:"30845caf0680663b016949e8e83f0921"},{url:"resources/dia_cs.txt",revision:"8aaa2600880ea57c829d8d762e578e9f"},{url:"resources/dia_da.txt",revision:"2880e938dbff2d9d9d08b4d7268f08e4"},{url:"resources/dia_de.txt",revision:"984c046491b9d5bee5e2d6044cfce7a7"},{url:"resources/dia_el.txt",revision:"ea4b07a0d6de499b2bd857220ec310c3"},{url:"resources/dia_eo.txt",revision:"4a533aed6ce84fbf2a7ed37adee78eb0"},{url:"resources/dia_es.txt",revision:"e62fc668c8f394fc85983e2f632e7f41"},{url:"resources/dia_et.txt",revision:"90e169c40ed260afd33a2aeb72a603cf"},{url:"resources/dia_eu.txt",revision:"e8a54dd0c7693bf4a448ee6650c93d8d"},{url:"resources/dia_fa.txt",revision:"8ee88785ef25f7ff64980499112628f8"},{url:"resources/dia_fi.txt",revision:"a0673455ac82f97b6ac1b02a05222199"},{url:"resources/dia_fil.txt",revision:"a3856e3a849749cfc4afe7326dad87f1"},{url:"resources/dia_fr.txt",revision:"7ff7768b79fbe186c52cb34e6c3e10c0"},{url:"resources/dia_gl.txt",revision:"a0c0303acfefd1dca9b70d213ff62862"},{url:"resources/dia_gu.txt",revision:"5a98b68ab709eaa931d314e3acc993b2"},{url:"resources/dia_he.txt",revision:"6fe1151c96b8e2ba5590aa99b8de6bd5"},{url:"resources/dia_hi.txt",revision:"e917f561016dba1b5a16a401ff7f9fad"},{url:"resources/dia_hr.txt",revision:"34c38bd34aa5a5bbd9050c81c0e3fc53"},{url:"resources/dia_hu.txt",revision:"8ba0b7f9e39a0f6b1ff9e2947e5723f2"},{url:"resources/dia_id.txt",revision:"48e53bc0c77337c50fa6c2856f43ac69"},{url:"resources/dia_it.txt",revision:"5c99745696c32868de00908d06f4536f"},{url:"resources/dia_ja.txt",revision:"667a8e38b6eebeade2017c0e502c9815"},{url:"resources/dia_kn.txt",revision:"736406df5dc88c79b13333df8ed5e69f"},{url:"resources/dia_ko.txt",revision:"7c0cced76f947761c5e5247e08fffcda"},{url:"resources/dia_lt.txt",revision:"5a0fe3d60dc5fb01578f32e18df3558e"},{url:"resources/dia_lv.txt",revision:"e167aa4d4d11e82669f292ae4921ebf1"},{url:"resources/dia_ml.txt",revision:"a5211dcbf4b1afb05ccfdce86294cd4a"},{url:"resources/dia_mr.txt",revision:"5eea065897cf31a50347a886dc22bcab"},{url:"resources/dia_ms.txt",revision:"a38a6c0f2084b01cf7034c9c0f4769fc"},{url:"resources/dia_my.txt",revision:"e2a61cf10ed871219fdfdad658b6fa5c"},{url:"resources/dia_nl.txt",revision:"e213e36351253ce777330b74ead7a325"},{url:"resources/dia_no.txt",revision:"9a899cac83111a2b32cd76fac9f0572c"},{url:"resources/dia_pl.txt",revision:"c09e66ff906444c27b87c2b998ba3955"},{url:"resources/dia_pt-br.txt",revision:"ebb9b873b6d0f12a4352a890fc6ae2ac"},{url:"resources/dia_pt.txt",revision:"f9000a402791ee386c19ff0e7139e91a"},{url:"resources/dia_ro.txt",revision:"4df4a9df7334b0aff937cd28738e335e"},{url:"resources/dia_ru.txt",revision:"98bbaa943f56696159400282a6058c4f"},{url:"resources/dia_si.txt",revision:"e2a61cf10ed871219fdfdad658b6fa5c"},{url:"resources/dia_sk.txt",revision:"5d920fb3fbf131174d05b5030eda19ff"},{url:"resources/dia_sl.txt",revision:"34fa15b3041a9668b8a95727cb172d51"},{url:"resources/dia_sr.txt",revision:"1548012b4cb3e45968d88a47727eca40"},{url:"resources/dia_sv.txt",revision:"27d5c830130e32419428b2894caa8e0e"},{url:"resources/dia_sw.txt",revision:"428f042e164ae345bd8f582f26e6cc60"},{url:"resources/dia_ta.txt",revision:"86779cd767f8f2bd0e584da4448e649c"},{url:"resources/dia_te.txt",revision:"36b81b29ca2a6afd35c50281b4fd56fc"},{url:"resources/dia_th.txt",revision:"0934bf30ce61bde4798b853647895ca3"},{url:"resources/dia_tr.txt",revision:"d49aa135ade7a92c02ef50c2d6ea830c"},{url:"resources/dia_uk.txt",revision:"55d9f2a5830fa5d73449541144088b0d"},{url:"resources/dia_vi.txt",revision:"f20bd7deb75b76ea296039d2ca61e545"},{url:"resources/dia_zh-tw.txt",revision:"c2f32b4e7bf836a82f4e65e78bd78dbe"},{url:"resources/dia_zh.txt",revision:"56bcd3abb6dcd89c5c88890248a158ae"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
