if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-5490a1bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"67661826bb11c22cb853176b42fdb8c0"},{url:"js/extensions.min.js",revision:"1d10176ba644b98ab90174cb6eaf7adb"},{url:"js/stencils.min.js",revision:"f60696dbb40b1bea695ca6991ec7597e"},{url:"js/shapes-14-6-5.min.js",revision:"e7064eae84696b8f0e8d43a130ae1b70"},{url:"js/math-print.js",revision:"0611491c663261a732ff18224906184d"},{url:"index.html",revision:"8b5b1cf07fc74454cf354717e9d18534"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"4f2c07c4585347249c95cd9158872fb2"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"16bd1876fce5bbb7f526d65871bc2ab3"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6d5a85e70c7b82ba685782ca6df2b9d5"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"457882d550c83a203d29dfc3ada413d4"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"d51b5a23fda9b82736e65b4580077c7e"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"d089f12446d443ca01752a5115456fcc"},{url:"connect/confluence/viewer-init.js",revision:"2bd677096ebffd3aa5cab0c347851e3f"},{url:"connect/confluence/viewer.js",revision:"6250067ec713122c8fe198ecf7399b50"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4c58f3a1a4c99b1c4264593b6e05100b"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"4c7730a67df6bacf5ca6d8a40cfd6e87"},{url:"connect/confluence/includeDiagram.html",revision:"c03c89622d22227313645900af4e3c3d"},{url:"connect/confluence/macro-editor.js",revision:"e273a48b8e81faac4530bf1a68d75aa0"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"97460e57f41f6f88232d5dc99a6eb3eb"},{url:"resources/dia_am.txt",revision:"a5e842ccc0c0a2aec4668e3068a93e85"},{url:"resources/dia_ar.txt",revision:"e08563693b989557b14380927c0d53ec"},{url:"resources/dia_bg.txt",revision:"b1dbc906a6e31075ae8959a7d51d7466"},{url:"resources/dia_bn.txt",revision:"f1e8da90e1b7179c8da80dd3122dffd8"},{url:"resources/dia_bs.txt",revision:"271e895cb4a5bc15f6e94419da589952"},{url:"resources/dia_ca.txt",revision:"1c496be9d97a6a85e2944ea5ab2f715e"},{url:"resources/dia_cs.txt",revision:"5f0c4aa4dad255c94dfa5b9eee3fec64"},{url:"resources/dia_da.txt",revision:"db7c52e89f1256e9d4165994042ced90"},{url:"resources/dia_de.txt",revision:"c81d3d5762058e475866ecd3a03d9076"},{url:"resources/dia_el.txt",revision:"38251ac912e11bbcd30f281823bb7752"},{url:"resources/dia_eo.txt",revision:"6eb2dfcdfc1bc389252b9122fc82e8ab"},{url:"resources/dia_es.txt",revision:"9367226bb4cb0dadae75629fa42dc2b4"},{url:"resources/dia_et.txt",revision:"ddd1793b0a9637384cf37a6f16d13042"},{url:"resources/dia_eu.txt",revision:"7c9eba4ff201a5c1cb431b4086aeff46"},{url:"resources/dia_fa.txt",revision:"e229143767ea93cc6c526ed895cd9181"},{url:"resources/dia_fi.txt",revision:"9797c90525b31b6f0d26791a857c450b"},{url:"resources/dia_fil.txt",revision:"1ca1317655214fa3289cf1bc04896386"},{url:"resources/dia_fr.txt",revision:"15a23a45fc8a2f2ea50cd363191cd22b"},{url:"resources/dia_gl.txt",revision:"da1033834dca8a4da9a7204e18d93827"},{url:"resources/dia_gu.txt",revision:"5bf6e1df052106e1f223222f17ec8565"},{url:"resources/dia_he.txt",revision:"271d37ec7c9da8b719e06d1b6dca76d9"},{url:"resources/dia_hi.txt",revision:"77afeabd23b8cf504c794798a9d9cb34"},{url:"resources/dia_hr.txt",revision:"c709af584b472fde2a342139543590bc"},{url:"resources/dia_hu.txt",revision:"c392e59fde0f3a453d3efc0c6b3d335f"},{url:"resources/dia_id.txt",revision:"db55092154bd3dc394b76d91feb9b02f"},{url:"resources/dia_it.txt",revision:"bc760647e0dcd478637b3fc0b2db1ff1"},{url:"resources/dia_ja.txt",revision:"4ed6ebb64fb3dde878651d30fb16c546"},{url:"resources/dia_kn.txt",revision:"b828b8a9f90eade05823c845063378a8"},{url:"resources/dia_ko.txt",revision:"726ae7d3e7749e325dd26cd12315229c"},{url:"resources/dia_lt.txt",revision:"321856df5d63271e517e587c6f7f9f00"},{url:"resources/dia_lv.txt",revision:"6a9b6d4f78e68185a613faf9b860142a"},{url:"resources/dia_ml.txt",revision:"a8b6aea101345516bd47d45cb1a06778"},{url:"resources/dia_mr.txt",revision:"2e1b5ad18eb128544f201b56f0c7defe"},{url:"resources/dia_ms.txt",revision:"1af2ae1cb4d5c65bc698fb2c5c8be202"},{url:"resources/dia_my.txt",revision:"97460e57f41f6f88232d5dc99a6eb3eb"},{url:"resources/dia_nl.txt",revision:"c4991c42579f22f2dfd2da3da54574bb"},{url:"resources/dia_no.txt",revision:"5ac60f4b3aa259e7029301ac308eebf7"},{url:"resources/dia_pl.txt",revision:"ac56f3bc965462190d7ecf420f16d252"},{url:"resources/dia_pt-br.txt",revision:"6126148b43ae5167d72b2b301e9442a4"},{url:"resources/dia_pt.txt",revision:"5ee4942941f53f0f9dbc5030bde49600"},{url:"resources/dia_ro.txt",revision:"9f608314999fe1f766c5fcbc1b3c2275"},{url:"resources/dia_ru.txt",revision:"7bf56abb74fdfdc3da2a5cc693da7fd2"},{url:"resources/dia_si.txt",revision:"97460e57f41f6f88232d5dc99a6eb3eb"},{url:"resources/dia_sk.txt",revision:"89aa5664f2f99c7e9db29f4c33466742"},{url:"resources/dia_sl.txt",revision:"73394ce42015875f7d310ed8d8435745"},{url:"resources/dia_sr.txt",revision:"efb0f81b562b2a3508133dcbfc7f0513"},{url:"resources/dia_sv.txt",revision:"63a01b5ca59c4f827448ce67a12e6f77"},{url:"resources/dia_sw.txt",revision:"f286f34178c5ef9160aa195e52e74f03"},{url:"resources/dia_ta.txt",revision:"8486a5514e329066443e50c4a5b1ce85"},{url:"resources/dia_te.txt",revision:"432dee8cc9bca4081bdf89bfc534c28e"},{url:"resources/dia_th.txt",revision:"cc1afa8f5ad00191e1ba74a04b74c305"},{url:"resources/dia_tr.txt",revision:"559ff9ab0eb494851a798468cb8170f2"},{url:"resources/dia_uk.txt",revision:"175deb4a44e9aeaefad09e85c2641779"},{url:"resources/dia_vi.txt",revision:"79773d6761bbadf10a6fb1879ecf68d4"},{url:"resources/dia_zh-tw.txt",revision:"464a47ae356ffe4473aaffa6b910f479"},{url:"resources/dia_zh.txt",revision:"ed6fae497653dee47c82934da14e9e77"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
