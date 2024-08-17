'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1e0f75ee5c23c6cd28142b478fb6e51f",
".git/config": "83e0f1689bb589db8eb372ead4556784",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f3168bc614782038977433567fed525a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3501bbd1d3b7dfd1de85e6ae4a16aa1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58095925e3efa16a869fd21362affa1f",
".git/logs/refs/heads/main": "f63bc54d1a7c92253772db8c9ee65f77",
".git/logs/refs/remotes/origin/main": "b454537c2abbed6f51e0fa54f95977b0",
".git/objects/00/a331f13ad4f57cb0cf3dc969ed0ddbcb2f10df": "92e591bea60c66251da03005ffda7106",
".git/objects/02/ecc0e439adadd64c1de13d4fca71f9bff528a9": "c987ca195b76474d9435663bfd79891c",
".git/objects/04/5728b12d732000c6f80a2f0babe314560cb600": "668d0fc20d890cb8b6f19171d75d76ed",
".git/objects/08/bf2cf4bdf51710044c021c8baa3cc2e13ba00b": "a834306680bd16feaffd31ae1c78562c",
".git/objects/0b/ebd2d03e410d234d33df3db9e0ef4d8580e207": "d91facc923678ca74020904c55414d53",
".git/objects/0f/38ef0560618ef6b4ffc03dd3c69d8023586278": "6f32862a946a267d1875c7dd0e8ae4a1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/d3c53835703a5700694895db44b387c0afeb30": "06be320c1cfcaf83273d8b9faa725623",
".git/objects/10/b8fba1ed971481a7ec7627ba70e1deb2cc3c65": "99298b77e3ad018e6be744d68a597703",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/17b1eedb855262fdf9c7b5e97c310c689fbe54": "4bbb8f89d0eee3ee8a973c65d035d6e3",
".git/objects/1a/9bb1c1b3751b6b8f28ed283c83a2dd74af3d0e": "dc05f83699ec7f3b2c59a7c2cd817215",
".git/objects/1e/ae9a722412030e4b7490e41c8a14957b6817e3": "454e45ae1d9107706fc0c200e48c196a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/70e3e8922193b36f1448beb2f025560cddb45d": "0e448e93ae89e2693eef9491a40e6a2e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/18dc232a58813dd737e1b0e378c3d79b0be60f": "193df4eff5e83fc39493f60eca75fe9a",
".git/objects/28/b62d54ecf0b3ff64d4f4d0f508c4bf89828d3d": "f8242459919dbbd381b58555742a1d2c",
".git/objects/2a/a1eca34b84a0ab79fa7a3ff593b02f39920629": "b469814dafbfc0dc99c92559a80c94fc",
".git/objects/2a/c7f4d8cd6771810217fc3d4f10c8cbd0678600": "13831bba3b6d694eb7389cb30bed92f4",
".git/objects/37/96f8c897d6660b25ac54d8c5e1be276e88350e": "323248a2366a1994fac9b295799ae2be",
".git/objects/38/d17d23d7efe007d7cf3fc51ec4ff5112ba9bae": "cff4a754e85ab570097b94e52be51deb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/43/4ad349fe2e80b67687a9b040eb894a4d91fd3a": "21759f373a450c7bfdb862cc84c1bbfd",
".git/objects/43/8bb77b9b26754f89fecb94e1fb6cf797cbad99": "9107d607df86f991ad7751f335cdd10a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9bf8acd195566fda493ea1eb4a9f53d90a3c4d": "115f6ec2619b0e9314604f22fdc0feb7",
".git/objects/48/ab9dec41064c695d89b0c30049c6e4cb4332b3": "e5ef52dd50f164b8c8b5b9f395f2c041",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/95cd78d282f2b4bc4913aedcab8515a217869f": "1891c17f8c7d076dbbada4bdf7e9080f",
".git/objects/4a/95dba5fdfb641623d311a069949efd943da7e6": "2a62e1dbdca274bc54f4103477dce054",
".git/objects/4e/e5dccf314953ca3c29339bcbe0df62633ad0dc": "9141d505651ab9811eb205dbd694022b",
".git/objects/4f/109f2906ce1b1c575b3a535be9d5536d6e13ca": "1217d9d841763871cc3dd12e532011d2",
".git/objects/4f/727eea6b50712ab300382dc216d2b0c49dd9f6": "75d647ac098ddb1cc9342bc6622e24ef",
".git/objects/4f/d815c3ac109a0b4e7750ed14c4c2c4205cd570": "4da10312e51fdd9754547e397e3f31dc",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/4589f158784465a5656772721c2a074d1f9d3b": "f026aa43ebe87ffd1ddde10bd4701daa",
".git/objects/5b/ac753bb60581059a1ff371ee2b7c268aca5cbf": "10d6efb9cd09eae09a91461fe69bd478",
".git/objects/5f/cae7b1d0b35da009ca585e2251ca4f69e895cd": "05e09a5c2d671404506ba8573195a8b0",
".git/objects/5f/dc81ca13de447652a6002249a72dbd02fd95db": "91fce5a01da8a32093eb3d84624d9017",
".git/objects/62/01c68889b70a5339a226e256a14728f3f33b36": "585374baef01bb662f41a52db43ed6df",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/cb5e057e78081aa80a0988ac41a8dca9097d13": "21677a13e29939460d491739b342640d",
".git/objects/6a/dbc5246fbec88155b97d32117d095b5fbf1257": "e4b937f3245bf274cf6b87ec077e5427",
".git/objects/6e/489f844ddd801560ac9f819e5e3499a31a75d3": "5a8b7381aac33e973ae04cc80a673dd7",
".git/objects/6e/5dec2e6aff0ee96bdbafb11278a8fcf9ef416f": "b479fd3f1f3c93302066d0680d9add80",
".git/objects/6f/16cab4da8065f45484a7746f8d05d5a578315b": "60be2305beeff50b26891c979e77e17e",
".git/objects/6f/cbdcacdb5ed53158a0dcbb1e47d5f93ace308b": "4ae2f37dcc59785dc093b5ad9456a26c",
".git/objects/71/1aef11a7e7f8300e03a775e7131fa82eefe49e": "eb2321b708479195a4cdb52efbd277f1",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/35fd1019250d40123fb1df03ab249e613041f5": "58e5fc822b521fb669a6c32b62c63541",
".git/objects/72/3fefb49456f61ede2895a247ca63b10d712cae": "4286d1ea3bbf0d17133f32c3c77a57b3",
".git/objects/73/a16f0eb2316347010113d76893816d1790af9e": "eb32ad5893046435ed403f54fecf43d5",
".git/objects/74/0490bf6e28c1f4af5fbc8de7029718619b661f": "731f6fafcffaa1e482223a011e3da3ea",
".git/objects/7c/10febd0cec5a45801ab8acd5c30c1d03d9a6f2": "acaa0f15354eff7c8158c6d8a0d8de39",
".git/objects/7c/89095b5dc0093ada1583d18c8198027a5aff35": "c4ef5ac6ffe505a7f5b4549d4ee2a692",
".git/objects/7c/f3655cd7202c0c9dea1af0284dc6774d7c1a48": "963e838dcff16b8fc03c28581ca86b1a",
".git/objects/7e/12d74ee75d3a5c368b84ad744bfbcdc220d473": "e488c3361641a8ececa2c12dc001c513",
".git/objects/7e/a0337e920d2abd36c9ad47d82ac04fd3e676e9": "888f433323c4ff33863074072920e3f5",
".git/objects/84/5af9e8475b28f0aa5956ad5803850334e9fc74": "b84773d8afd381c94c01c949bbb4d201",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d205be89663a5bbf7fe7608dbfa4b384835546": "2c797fb8f0720576dce2c70e8e4b9d19",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/dfe5eddc52bae320875869fb074c22253ce0fd": "cef1781dccaaecc3e78bde9fda11a431",
".git/objects/90/bcc96c82e14b2cbca29b8d1464ee5397284cf7": "466096c36058a988464f37fa8bba40ee",
".git/objects/91/ab28213817a7891d37fcb45c491f2e12acd368": "c11a2489a0e820f704814c9cf22b0b57",
".git/objects/92/20f7fa4e709d91461d750d452d002cb1dca777": "364335d74fecb3e28a50a7f6c73e7bce",
".git/objects/93/0bb8ef8aad4cad638bead81f00eca5c58bce07": "52df1c0df060782da40c69e4a03cc9ea",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/e38a22d8e0750737b384afd4944f8e636d7838": "eb3e3292ce142f5a18c2795a739e402a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/a6060ac7cd2efcc96fe697ef2b1874e3dedf82": "f2c8a8818a51994b72db1c2b00a3f5ec",
".git/objects/98/0cbc04f596a2904930fb52b628dc1136110e2a": "80917fd6b3abe8a0842ee2d398b6de55",
".git/objects/99/0ca848f5ba761227c1444a3f07ff56a1de6932": "25d931a7482f11463cc4397b31d4f5e8",
".git/objects/9a/f6edf4f9ad230f686105fef76238aba942bf75": "ffe8b5ba6727f21acb395772d2b2d555",
".git/objects/9b/4d59ed0ccb83a76a694420c5c30b7092ea656b": "f631fde7c82801ef1f2a861e653d97bf",
".git/objects/9c/5c9592995d818ce6efc51fe911ffce9b035b64": "de48c6149b512ee70f937591ec9dce48",
".git/objects/9c/ad95f231c22bb2136122113b3fcba8f1a66f6a": "f3731bbdf25fffc29453bdc17477d7bd",
".git/objects/a4/a8700abddf78ccfae5679811fb579885406cf8": "880a4debe88493ec4c7b8ca94c2f4cde",
".git/objects/aa/615219f1238c813868ec0aec9aac833f461b50": "76aef787abf8dc0960cabd027f4b673d",
".git/objects/aa/61befffead40b6f0c5b88b8093089b2c769d19": "5aec6f2c30e914d72e358a4a8b141567",
".git/objects/ac/c85c878c5787b8e7bafcca4e6f51e452caa29d": "64ecbebbdd39b9e4589642476aaac3bd",
".git/objects/ae/3e4423e4b15625f813d0ac347be379f0e35450": "3f3b8bcb02afa57af8cb4560908c8f1b",
".git/objects/af/450b1a0664765d01e681c9cac3fb0f96267e49": "0d7a974d85a7c583419150d36a5cf32a",
".git/objects/b0/03989420fbb40a30baa2798fd5e08852442b27": "952eaa56094b1c8ffe0ca8018429d574",
".git/objects/b3/445ae6a1addac264e1abe0cd4f20498f76c899": "813631c3a5bfb2c30a2c3f46741a9825",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/434c85233ae5a5f45c73e40367a2a0407b55db": "2e11a01b58fa4298038514f04527d6d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/194ad4389a226c3588be1840baac39c60e4215": "6890a161e3382caf7d4a60ab9de563c1",
".git/objects/be/6034c981725546798dbb03446f7147d57de450": "5cbefed063fcbdde5793642647e85bd8",
".git/objects/bf/2a1fb1579a84d0d4cb9f0d7bdbd5d260488fe1": "32800f25a30727fe16fc1631352f05cb",
".git/objects/c0/dbb313e73d3306a4ee21ff9cab86a0df951579": "1d9aee489e8f8cca68d6cec74ff9553b",
".git/objects/c0/fd8f876f21779078df03e1b9cfb86ee45a0c93": "77ec3f20224c5c5d1830686df073fc58",
".git/objects/c2/3b511c5f1304b44af3bef9048d7187440791c7": "fbf187fb7fc899b553438794ad4839e8",
".git/objects/c2/401d39accc702fd40b90768e675beead008764": "0d2231c14335152bea5f8a07e55891c0",
".git/objects/c3/20b6c0d277c1e9925ae6747253c1f5bdb37c7e": "4d8cea18c39002c7b7e10115d77847fd",
".git/objects/c4/edfe3bf3fea0365f3c0929e0bc7e59992ea016": "81e9e4bc996854a24a325d6ba52d736d",
".git/objects/c5/427489abeb4cb28ee589cfe599362bbb49627f": "427e2ff39a1e2ab221c34010bf029315",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/14f73244b57f51fa706a50d62d1250c9e5af3c": "22d2a01fa6884a0754c7ff5d9ea1d237",
".git/objects/d1/66f8b7b0cdbf6515af8844035eec2e26e0df6c": "61fc368354dd9932578ad4f5aff96607",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b82ea4192eb82dac45e9d4c59ef6da779171f5": "3d7738d094f9a403d1ced690259d5afd",
".git/objects/da/5b806fcc2c2da32806ecfe6b3f42cc8ab1f34a": "0947acf19afb9b2ac52415371ea63910",
".git/objects/db/cca07e12b584a7945d70289e4bddceef02d1c4": "1adb6e2fae23ac79e0e56b5ae629b453",
".git/objects/df/6537cacf27239631ee343c3cbe04a3349c4a79": "c3fda4a43369525ee52265018ecb17aa",
".git/objects/df/a0614050fa507f30765d33862f60e51ed58ce2": "106a9bfc74c19bccf46e238a55c1cb4c",
".git/objects/e4/fb0472b111fe8c981dcd912cf56cd1dc2f354c": "0e24bb396f496e62f31b502aed320e33",
".git/objects/e8/d5f1c58e45ae710a4e729446a9f25da8aeff25": "bc5f75c79abce8656bade1610fb4980a",
".git/objects/e9/8048caab1cbec4ab8c1b199da4401c66771d01": "708f5c81f71655e29609efa7bbbeed16",
".git/objects/e9/cc99dd0a927c47d3367ac3b7f5a0edaaf458e0": "1b6cca266c7586e1eefbb3d14a8b2d9e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/947b50edd970d9a3ab59403a018f82a571ebf7": "0d0b68705acd3b55b510ac8498cbcdc1",
".git/objects/ef/86d8439ebd15c3c7c843d558c3fc4b44af4071": "b3a4f05a746a94fa5eb42aebad858259",
".git/objects/ef/fba3b11f4577d903ce75c8a69ce9ad94de7cc4": "6407ce4bb0cbdd2718fcd9fbce7a0d0f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/0ce3d4a1a8c35a29ad339ab6fea9a16e69b030": "d4e2dc701ddbba8ecd802a33e89ea857",
".git/ORIG_HEAD": "d48f0eabecfbacccd9bb5314c623499c",
".git/refs/heads/main": "d48f0eabecfbacccd9bb5314c623499c",
".git/refs/remotes/origin/main": "d48f0eabecfbacccd9bb5314c623499c",
"assets/AssetManifest.bin": "ef95b56d67e057d48ce022b9f67f0ac7",
"assets/AssetManifest.bin.json": "2fa15622d0169845180594af535bea43",
"assets/AssetManifest.json": "76c1d7a6223d169b83d7ef9690167253",
"assets/assets/animations/loading_animation.mp4": "63327e435af65d22f279f2c9edcb5323",
"assets/assets/images/00-00-clear.png": "38d8bfd808622b0dd3a3d27f71628429",
"assets/assets/images/00-01-partlycloudy.png": "3cef6b926ad85d6ccd57025e8b9328f1",
"assets/assets/images/00-02-mist.png": "7b4ae870a5e98eeeaeb5b3f305397f28",
"assets/assets/images/00-03-cloudy.png": "e2b4de307725cc4149aadd054d045ae8",
"assets/assets/images/00-04-overcast.png": "fd230997c5e94ab40285448cd801312d",
"assets/assets/images/00-05-patchyrain.png": "496ba427f5ddaff65047c94a2f952056",
"assets/assets/images/00-06-patchsnow.png": "d2e95037b8180a6832b0b5eea805eb61",
"assets/assets/images/00-07-patchsnow.png": "d2e95037b8180a6832b0b5eea805eb61",
"assets/assets/images/00-08-thunder.png": "08ce6f378012eda70ad7f69c2e3df18a",
"assets/assets/images/00-09-fog.png": "7b4ae870a5e98eeeaeb5b3f305397f28",
"assets/assets/images/00-10-lightrain.png": "42d70b5a2d7a89c3c60fff21b524fc5d",
"assets/assets/images/00-11-heavyrain.png": "99b0b2d3f75b828c373dcd8207489b6f",
"assets/assets/images/00-12-lightsnow.png": "be2864bf36baf66e5fe3b6cbcc2cda0f",
"assets/assets/images/00-13-heavysnow.png": "aa0f83ebb5d1a92dbf8a33260e772baf",
"assets/assets/images/00-14-lightrainshower.png": "496ba427f5ddaff65047c94a2f952056",
"assets/assets/images/00-15-heavyrainshower.png": "7371371e7c17ca05a5b659f2199216ed",
"assets/assets/images/00-16-lightsnowshower.png": "e70d22b83dc2e8726ab5a2d3875caae8",
"assets/assets/images/00-17-heavysnowshawer.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/00-18-%2520heavysleet.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/00-19-lightrainwiththunder.png": "1185d7246e5879ff16fc95bae14c5206",
"assets/assets/images/00-20-heavyrainwiththunder.png": "67618b8968a2511bbe905426693ff511",
"assets/assets/images/00-21-snowwiththender.png": "e62c458964bfe95ae8a158dd60e98fef",
"assets/assets/images/01-00-clear.png": "af3a20d2d8cc46b0e64d6200fb06c002",
"assets/assets/images/01-01-partlycloudy.png": "c01ba88ea1edfd13108c4ae891a0fb8c",
"assets/assets/images/01-02-mist.png": "7718a8bf4ea3b847867094d218b04183",
"assets/assets/images/01-03-cloudy.png": "6b045b6812a46fb7520699b6e053a5a4",
"assets/assets/images/01-04-overcast.png": "814890439d9143227f8a291f911ae24d",
"assets/assets/images/01-05-patchyrain.png": "dfa0a621c6bd5955eb9715e188411eed",
"assets/assets/images/01-06-patchsnow.png": "be2864bf36baf66e5fe3b6cbcc2cda0f",
"assets/assets/images/01-07-patchysleet.png": "35b8d70e4f792bfdf9d4491e55bc5504",
"assets/assets/images/01-08-thunder.png": "08ce6f378012eda70ad7f69c2e3df18a",
"assets/assets/images/01-09-fog.png": "ae386303ce687ee4aefcaeb5212cbb42",
"assets/assets/images/01-10-lightrain.png": "42d70b5a2d7a89c3c60fff21b524fc5d",
"assets/assets/images/01-11-heavyrain.png": "99b0b2d3f75b828c373dcd8207489b6f",
"assets/assets/images/01-12-lightsnow.png": "be2864bf36baf66e5fe3b6cbcc2cda0f",
"assets/assets/images/01-13-heavysnow.png": "aa0f83ebb5d1a92dbf8a33260e772baf",
"assets/assets/images/01-14-lightrainshower.png": "6e29fbff1de30222983092a75c49d25e",
"assets/assets/images/01-15-heavyrainshower.png": "2954fe0530c9c0a402be5229e56c13e3",
"assets/assets/images/01-16-lightsnowshower.png": "db331749fe696dbcc5737820bcd429fd",
"assets/assets/images/01-17-heavysnowshawer.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/01-18-%2520heavysleet.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/01-19-lightrainwiththunder.png": "1185d7246e5879ff16fc95bae14c5206",
"assets/assets/images/01-20-heavyrainwiththunder.png": "67618b8968a2511bbe905426693ff511",
"assets/assets/images/01-21-snowwiththender.png": "e62c458964bfe95ae8a158dd60e98fef",
"assets/assets/images/cloud1.png": "8c80cdf6014ca49938b3a619f951eaf3",
"assets/assets/images/insta_logo.jpg": "f585a237580fe1f7f93f1f1cbbfebb09",
"assets/assets/images/linkdin_logo.png": "8af35c8b906cc283d2a607f4013c1667",
"assets/assets/images/moon.jpg": "cef75f23537d8b1a533e8d655582602c",
"assets/assets/images/moon.png": "636702ba9bccefeb2525c84c295309e0",
"assets/assets/images/yt_logo.png": "347d6e319a839e443c128abb55c81d47",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9495ad453429d3615711b8001c8d47f3",
"assets/NOTICES": "a4e5d10526e4bff072dc05c92d7cd58d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7d4f8b0d68b3ae38394d501090ddce23",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ba8a378c19f4e869574cf116ee7478b",
"/": "5ba8a378c19f4e869574cf116ee7478b",
"main.dart.js": "817b18d758f813d59c85e8a1f3fc245e",
"manifest.json": "1fe8fa32a09896476b36870c31150305",
"version.json": "e54c81c6d2940acb113ad7232f4c8fd8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
