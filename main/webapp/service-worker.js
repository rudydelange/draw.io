if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"d0668c5b57af3b7c6a91d695547c6efd"},{url:"js/extensions.min.js",revision:"422b0b4c0dcd8edcbece721088280e83"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"032c895c801a1442b9bd93e838b5d616"},{url:"js/shapes-14-6-5.min.js",revision:"95f54e7999c9fba2a1d65b4fe4f634f3"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"d29a8e0ad73c5cfd3dc1e35361bf558b"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"9ef237732b381ca42443073a0a03730f"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"e01f048ea775be6d6d4f0a49ca1e5ab2"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"75da978f7278f54d6c93c80891c9de60"},{url:"connect/jira/editor-1-3-3.html",revision:"6ec59ca5f689067e52cdda13f22ed89f"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"ff2e0198719b4c0824bb2ee817605476"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b97742df8b77cd516251645afcce930a"},{url:"connect/jira/viewerPanel.js",revision:"0b8e07ff825c61fa2d6d10d1d6d13edb"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"d1c80a7301cd26c6dc31b1fdce9e37e5"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"d5748a4fe01b7e747914ebd3e37c9de2"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"91c04e236ba9dbdb26d8565b3354e00a"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"9b93b748a41a6f9444ff92810b7908b8"},{url:"connect/new_common/cac.js",revision:"6d666b6789b51dabc5a1af53a9db5d3d"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"d10d4603e86da7c9af277dac832e8e06"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"8f66d9ae8a8941fd230fbafbbc9eccd4"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"ed9daba2190b293a1c7ba13b649f5149"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"0bd745f0c23bba15ad1ff8e7b8e14987"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"070e99e620b678d6efebce77a4f78f22"},{url:"resources/dia_am.txt",revision:"24490041dc0894101a9b8591ff857f27"},{url:"resources/dia_ar.txt",revision:"3b3af114a9176b766911ba777ab9dfe5"},{url:"resources/dia_bg.txt",revision:"8d8e4f730161bb04f50a46ecafedd843"},{url:"resources/dia_bn.txt",revision:"d633c8ed9bc728d3dcf95c7794e7faa2"},{url:"resources/dia_bs.txt",revision:"37a27a661006878596314fe2941328bc"},{url:"resources/dia_ca.txt",revision:"2ad8d0e087f22b51ebd2e37172164b74"},{url:"resources/dia_cs.txt",revision:"4ce02dafa392719ff1de8c87cc52c671"},{url:"resources/dia_da.txt",revision:"5a5f4f660dd914feccacbb0cb1f477ba"},{url:"resources/dia_de.txt",revision:"6cbfac1e7e7389574136f0d6850325d9"},{url:"resources/dia_el.txt",revision:"4db0fad8e6b18cb4dad60675a9d9e6c1"},{url:"resources/dia_eo.txt",revision:"12d3e6e93626859d7f1fe0415b508ec2"},{url:"resources/dia_es.txt",revision:"f7186238aa7dd9ac210feb9ff9b884c8"},{url:"resources/dia_et.txt",revision:"1f41cee18f340ad3d058ad583e1968dc"},{url:"resources/dia_eu.txt",revision:"7077ebc436cf486b8dbb58a50c78a929"},{url:"resources/dia_fa.txt",revision:"c4e691b90109e399a4916dd858997ad1"},{url:"resources/dia_fi.txt",revision:"ec22566aa2aa48802c2e0d0e282089a0"},{url:"resources/dia_fil.txt",revision:"50c50d6fd55165344c5bac76d0a7b163"},{url:"resources/dia_fr.txt",revision:"bdde1f332647bcc1f7e442192149c2f6"},{url:"resources/dia_gl.txt",revision:"b2511dfa377ed0c4f4aef554b0cdd48a"},{url:"resources/dia_gu.txt",revision:"f2e237fae11c6d5d9c14c6a90526b7c4"},{url:"resources/dia_he.txt",revision:"316568ef9660c8faff3acbbff4bb1d5d"},{url:"resources/dia_hi.txt",revision:"90a9db5a1781eee9f09b9e01dff4672b"},{url:"resources/dia_hr.txt",revision:"1c36344956001e327a563b697bb777e8"},{url:"resources/dia_hu.txt",revision:"8f3f05139ddb0faf2dc9e65ff2739bee"},{url:"resources/dia_id.txt",revision:"15028adb2a38c12911c2cfb527a6673a"},{url:"resources/dia_it.txt",revision:"20fe98f5e74fdd93428139a2755dfeb2"},{url:"resources/dia_ja.txt",revision:"86c5ab25c3ed29509d50c09ef6daf8d4"},{url:"resources/dia_kn.txt",revision:"9f895e516c96aef05ad7bbf62e0a6d0f"},{url:"resources/dia_ko.txt",revision:"454b3f239e3ea2527c296f319b25aa15"},{url:"resources/dia_lt.txt",revision:"423e99457a2e3c19b8139df72b779e57"},{url:"resources/dia_lv.txt",revision:"66139e41b90a0e3f7841f6022ec8c4ac"},{url:"resources/dia_ml.txt",revision:"a04f0a3a9a44e7a47acd6c8dfee48cde"},{url:"resources/dia_mr.txt",revision:"5ecae95143f9ddd8ea47b89fc4a32779"},{url:"resources/dia_ms.txt",revision:"33edd41052e9978263ddef6edce046a0"},{url:"resources/dia_my.txt",revision:"070e99e620b678d6efebce77a4f78f22"},{url:"resources/dia_nl.txt",revision:"fbbeafc95e4713743b2c5d1c578815c5"},{url:"resources/dia_no.txt",revision:"8c27b73d22827c38d5a3f0abcddf38b9"},{url:"resources/dia_pl.txt",revision:"a61057ccce1c943ee529a80c3572414a"},{url:"resources/dia_pt-br.txt",revision:"c7ad6374f86e3a7a82e163df81fa4f46"},{url:"resources/dia_pt.txt",revision:"11f18646f93aea3a125cf86afa7ed0b9"},{url:"resources/dia_ro.txt",revision:"4ea38fe9313df43ae827a7b56ddf407a"},{url:"resources/dia_ru.txt",revision:"fd2f0eb15bffe3d931f1265f3f7b5e18"},{url:"resources/dia_si.txt",revision:"070e99e620b678d6efebce77a4f78f22"},{url:"resources/dia_sk.txt",revision:"34cc4e6486b2f60f040da88f93fe93e6"},{url:"resources/dia_sl.txt",revision:"06a69daf3b2dbc5ed5c0a37ebd337bb6"},{url:"resources/dia_sr.txt",revision:"8a143e1230a6681bd24f0c5f28e5aade"},{url:"resources/dia_sv.txt",revision:"562ddf8fb3b86def0cd652b3c8526560"},{url:"resources/dia_sw.txt",revision:"b09b88a0dcf41e07dbbad5a217f4b039"},{url:"resources/dia_ta.txt",revision:"951784d11df6d9379a0ac67b66093a41"},{url:"resources/dia_te.txt",revision:"8eaa7eeacd4dac3c144bbc77f9da6041"},{url:"resources/dia_th.txt",revision:"7882c1b3a63b81c1b7855fe914c820a3"},{url:"resources/dia_tr.txt",revision:"659bd72b2d3cfe48c7aa55fad1cffdd5"},{url:"resources/dia_uk.txt",revision:"dd7945dee90ea3eee794a2b19d40f656"},{url:"resources/dia_vi.txt",revision:"4f79d38f2c9089a5b3e9fd6e477ac2f3"},{url:"resources/dia_zh-tw.txt",revision:"51b5d3b75dfa4a8a4b8b66752a0e97aa"},{url:"resources/dia_zh.txt",revision:"3dcb691f4b2abf2b91da630dba0082af"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"389fa448cb99794bece27ffcb216abee"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
