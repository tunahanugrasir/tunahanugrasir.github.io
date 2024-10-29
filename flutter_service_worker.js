'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a49783253d8b446e73a003c49b3c6638",
"version.json": "8cfc08a0f27cb8552b9d857971bf1fa1",
"index.html": "82749a6a289124d748e4e211bc42e5e4",
"/": "82749a6a289124d748e4e211bc42e5e4",
"main.dart.js": "21ea17a56390b8d3e6577070bd0002d1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2aa2ffa9771bffc62d2665d0bf0c5bb",
".git/config": "35b0e6f5adb79258596090d77a31460c",
".git/objects/0c/d1c172cde20cea01d23a3a6f780ba72f9bb88d": "5034061786c9557146a40f0cec0310bf",
".git/objects/0c/1e940ebf1d32ae243b9b83cc67ccc4377466c4": "777afdf865b4f4274a053cf1ce05afc0",
".git/objects/3e/95a908b373ddf096546f004b655a2439a4761b": "659d1b67f01bfe18b67c2539367bceea",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/93/d61141e90ca7283a75cf4525ac6bb61bf556b2": "31070e9473bf4b1c1dd86c4e7e36ee92",
".git/objects/94/91fb60e60b4a21b5cf3eb5262d955d73f189f5": "b45775ea7af5c54c9f08eb7968c86e8c",
".git/objects/a3/28f3759550fb952e56d0cf5a06f801a5dcf665": "488b68897acd92bf5e28f270aa071091",
".git/objects/ad/b864b062f648e52547ebc0d48a4eacab334378": "01a773a9aa6b1a4fd469ac0e9492f109",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/7df5963fcf969b1f82bfa8555d5e94cfe67e43": "e74d12dbe0637aa2e1bb8a9efd4f127a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/1bda2fad219899bb223b8a0e46c02e43ad5771": "9de123417d8e1d0b489dfe5911a2147c",
".git/objects/e2/5866927b18bcc3a10606b322ac6346ce07570b": "32c2d1b851095584a23b08ed89d2f6fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/806ba2a0cc45eef6a5e9bea9a5e52088aeaa33": "a0430e83c00a865331311d24d7183c0a",
".git/objects/c9/6693731fc00c44556649763640ee3ae5606c6a": "9162a7c0f2d011e7840a06dbd3236fa3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/44c772f90775d56a4e347827207b901ece8855": "c9194c71d64905cec9a3029acbb16884",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/e53a3c042dcf9eea15e125cb37d75087a04cc2": "8f7ecfa33c2952a04d17057f684fa77e",
".git/objects/89/43447f376060a69d429c41c13ef2f9bc2f2274": "7454a7a7d2fee2dd40a4020af8a107e9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/2080ffc8878dbf28f90b480350f0bf9a328030": "67b536ee5eb960071d60fa54fd041b8c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/45f8902479c8a01ce400ab14997541c1f86a5f": "5f56802e1013be6c2e46e5dd521a7bea",
".git/objects/86/15a4fcf5573ca8b56a0a3e0f13147db248f77c": "27d6cf9bd3316b871b8d28fc6f673dc8",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/950edf8bc3efed0cdb5699090ccecfbe6b3067": "9eeab8808968a934c65561789eb01a05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/2a85ff3bbb11a5b855d34b02a438425e763b85": "9eb07ddd9989135355aee24629e9a35b",
".git/objects/65/7917a34a5749922942fb9acd270cd6611340d5": "69976ac3cffb884f2c97b6390efb23ba",
".git/objects/62/1d8589d17c928441b1881c93ebae534884ce7b": "41f5fc5eb08d77d279049cac17325e57",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/99/3013cb98137a8cdc5add6be20fb83c01622fe4": "2ad470eec9470b7dcb5cffe1d41b346c",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/b989e1c8e2fa391bee06e017fde41333efc7da": "03675a025c0648c71fd727f994f1ba28",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0fd16d4882ae6ab20595ee3aa9752ab153edeb": "fe3a19022b15c9e7eaac275968f691c6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/4e0084c8608c61279b066fa7822b3cf211f2c3": "42109e7029b0c9f2f968ebaaf627c765",
".git/objects/c3/827dcf683e3c0205a5119514588a03452166f1": "bd32f56d0c9d033a94221d3985bcf321",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/2e6e635faf8c7cc8af158d6726391d39581db9": "0352a875eccb564921973e80c1f5a0b9",
".git/objects/77/2a99270247dc87a98807e831f0310f0be80a01": "e961e77ada03c83b0ac61ecf4d01cf2f",
".git/objects/70/bd34842278f2e5cc44494a3a43a983ea73df72": "8b1c1992adda63311c24850c4a219636",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/c5310bfc62a16a34b287a2a49d7f9bcc843c48": "f24fb19fa524883f6e83805ca695c574",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/c442a480a7bd302dad1c53e2a24ba85697ce86": "590997ae7d5d6d735aa65e415d816bd1",
".git/objects/76/c4e26fc29c725e1d3f92411bd9dc742b1aef5a": "72ba71ca20a8cc29d8bcb1d05bd1b20f",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/22/5cc002bcefc75be6ed94fc8866d983969f1280": "65932887e0df83bc267d4405a4ace85c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/dbfce9a1b4c0970c7fe2060a4a0d07b740ec06": "7b31c1501610eb50c6f736272e3c672d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b884372e98faa78afdd2c08ae9bec886",
".git/logs/refs/heads/main": "b884372e98faa78afdd2c08ae9bec886",
".git/logs/refs/remotes/origin/main": "1b20686cfe3971c7cde4280db9c17aeb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "99b124360140c1bd9e368595aaf1a9db",
".git/refs/remotes/origin/main": "99b124360140c1bd9e368595aaf1a9db",
".git/index": "c8d15f901bd8bb01eca38c51741e31aa",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "2489c015b7221f3b876038e8ba994e70",
"assets/NOTICES": "e9a8564e309ddfa30245b0d9c11d6a58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d46be7de03a0c9921d685ebbaa83fbec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "63e34bc2ebc87c4a36ed80e5d6c5dd2b",
"assets/fonts/MaterialIcons-Regular.otf": "6ffa6efafada8ebc3c5138354d623ae5",
"assets/assets/images/home/santral-1.webp": "3ebab2f1c20d1d468337d9f41a6e2b48",
"assets/assets/images/home/hafriyat-1.webp": "b4e6d64d5fe65e19bff75c9484da2121",
"assets/assets/images/home/7.webp": "48818f1a1ba42b769e9663d50bd3b9d3",
"assets/assets/images/home/10_50.webp": "461952b3641d96f1dc0ff36b9dfb236a",
"assets/assets/images/home/balci-beton-tesis-2.webp": "fdcc54bd0b0475da702c5a565af1e95c",
"assets/assets/images/design/8.png": "9255bc334984fd3c4c9c9281faa22fc4",
"assets/assets/images/design/12.png": "d19e8fdb08f2dc833a503f140f880670",
"assets/assets/images/design/betonlar-2.png": "09abf4ecfc735896da169ab61d2bd67f",
"assets/assets/images/design/21.png": "48be84234d9b18aef231ebee4148aece",
"assets/assets/images/design/36.png": "a9cf3cdc4750a83d47a0487ad9575343",
"assets/assets/images/design/32.png": "7673c76bade7fee7b688dcef89ff73a7",
"assets/assets/images/design/26.png": "83245580d2026bcf68533ac791823a35",
"assets/assets/images/design/30.png": "54313d84ca862e71fdd45a8e6fd9f111",
"assets/assets/images/design/31.png": "0c26fe7ca54a7e384305f900ee0e8c53",
"assets/assets/images/design/landscape-2.webp": "bbc859d3b899c08504a53cf0e8a27bad",
"assets/assets/images/design/fethiye-2.jpg": "3d8ee1c79d985fdcb912698c114edc81",
"assets/assets/images/design/excavator-8.jpg": "af9c265f219f1fd4ffb2f769523bd4e8",
"assets/assets/images/who_are_we/1.jpg": "6fafbb9c1ae75a5d05e777cabe18cca2",
"assets/assets/images/who_are_we/ceo.jpg": "869b5737d2aab700cbfa231d6fb3e424",
"assets/assets/images/logos/nara.webp": "2b40ce0ac9e7e36187d81bd676ebabd3",
"assets/assets/images/logos/yacht.webp": "a1b234fe97706a8ca0f7d6370d5863c9",
"assets/assets/images/logos/letoonia.webp": "b59cf1a69008a6d476e7c8e626685b25",
"assets/assets/images/logos/pasa.webp": "a6a2423ac87cdca98ccd270ed456d839",
"assets/assets/images/logos/harbour.webp": "6789edc61eb1afb5a41448d4c3aeba5e",
"assets/assets/images/logos/sofia.webp": "33d06bfb24336b357387023476c35865",
"assets/assets/images/logos/nomades.webp": "e50cbe5d07be5f4302b8c82d58d00909",
"assets/assets/images/logos/fethiye.webp": "5266a1e6898f578bfd7d9145023b5bd1",
"assets/assets/images/logos/mugla.webp": "ff3a3852069ce37b3e38003160791f77",
"assets/assets/images/logos/erasta.webp": "38851bb906c07aa4f123285b94aca4b4",
"assets/assets/images/logos/tuana.jpg": "ebd210c3426d0b4214c71d7c39e75c8a",
"assets/assets/images/logos/tck.webp": "82048205e953ed8d86fc945194ac1276",
"assets/assets/images/logos/zos.webp": "e83b2ba61b4adc4bcec250c1534c9073",
"assets/assets/images/logos/arwen.webp": "ef8a0d3eda07b65db2999cae6c7d9ba3",
"assets/assets/images/logos/4.png": "fa10f12c7e386725a214113e2c0f92cb",
"assets/assets/images/logos/dalaman.webp": "8d7e43c049610a9a46c895e136515172",
"assets/assets/images/logos/5.png": "124f5f63047d9ded7b9e88ad0716e450",
"assets/assets/images/logos/sundia.webp": "40e0532f7c86625a76e74b384b12bdb5",
"assets/assets/images/logos/seydikemer.webp": "4564bcb2fac96643bc34e13218e0be5b",
"assets/assets/images/logos/2.png": "ae1f92f95f85095a6d68b16352146e6c",
"assets/assets/images/logos/3.png": "f4c2aa51322beba0e4eb73d49cd3506c",
"assets/assets/images/logos/loft.webp": "02cd92bf525a4d162c1b58ec109de9de",
"assets/assets/images/logos/kgm.webp": "4dfe958358ca61cb5c2702eaf24c8894",
"assets/assets/images/logos/liberty.webp": "3ce5c7518216094675b4068377897287",
"assets/assets/images/logos/1.png": "8149ec7ee18f38a595ac078728289f6c",
"assets/assets/images/logos/letoon.webp": "e5f0ad31caa87c751022c55db4b7d66b",
"assets/assets/images/objects/excavator-3d-3.png": "5580fe05cb638750294e0d29808a7708",
"assets/assets/images/objects/endustriyel-saha-betonlar%25C4%25B1-3.png": "c5b5c46adc14a7de1ca671f9f2057aec",
"assets/assets/images/objects/excavator-3d-2.png": "aea660be7d8ac7ddc285a5e50c976f22",
"assets/assets/images/objects/ozel.png": "c7402f5273c3a651a5a749fbfe93fec4",
"assets/assets/images/objects/gecirimsiz-beton.webp": "9e5630c32c30fa379888787f27227920",
"assets/assets/images/objects/standart.png": "cb42889c3ed83c9cb2dd4e4c22b0366f",
"assets/assets/images/objects/c.webp": "bcfcbdba25f2ac72c671ece7bc362083",
"assets/assets/images/objects/c1.webp": "077a587c0fb5996f5a9e45c2ba6867c5",
"assets/assets/images/objects/ultra-yuksek-performansl%25C4%25B1-betonlar-2.png": "53401f081ef7e289f71251a831339041",
"assets/assets/images/objects/kendiliginden-yerlesen.webp": "6c35acef21e39bdf83ae4aded49864b6",
"assets/assets/images/objects/c6.webp": "2aeae92abacb2fcef110ede72a50b1c6",
"assets/assets/images/objects/butik.png": "e179ab808d0887a558caf84919ffeeb9",
"assets/assets/images/objects/polimer-beton.webp": "1c0eb7d253eb9cfa85b8703dee354f97",
"assets/assets/images/objects/building.png": "03b2efe9d7cba09534c4db5efed37439",
"assets/assets/images/objects/durabil-betonlar.png": "e77768c6c00301d415eeead32bcd9bca",
"assets/assets/images/objects/c4.webp": "1cfc7d27663fc4374fa9831d5a2a3421",
"assets/assets/images/objects/hafif-beton-2.webp": "a8f8b1e5a90e188bf4dbfda8759c32ed",
"assets/assets/images/objects/bas%25C4%25B1nca-dayan%25C4%25B1kl%25C4%25B1-beton.png": "738e7f80b7dc637a7506aca76892a53b",
"assets/assets/images/objects/fiber-beton.png": "134bc0c214693b6f2d82c540651545a1",
"assets/assets/images/objects/deniz-yap%25C4%25B1lar%25C4%25B1-icin-%25C3%25B6zel-betonlar.webp": "f5de5a28739b03deb2ec95d39debdf5a",
"assets/assets/images/objects/c5.webp": "a0c722cf268358c209d2cd2f69fadfc2",
"assets/assets/images/objects/renkli-beton-1.png": "c739f22b56b23ec3e7b71178ad497e93",
"assets/assets/images/objects/baski-beton.webp": "65ec305373dcd7e51fecac4178e7c2d4",
"assets/assets/images/objects/lifli-beton-3.webp": "19b588725902810c1d6b44b4290048c8",
"assets/assets/images/objects/c2.webp": "9774f38a041b4b3019fdb9f5c653f4ac",
"assets/assets/images/objects/geopolymer-beton.png": "2f44c9f8656c83239d38c8c854e3a9af",
"assets/assets/images/objects/cizilmeye-dayan%25C4%25B1kl%25C4%25B1-beton.png": "3ca67f01f7ab3d7b94b15503421fbff6",
"assets/assets/images/objects/yuksek-mukavemet.webp": "3eba81a2ff233d1249126b1ee61b6246",
"assets/assets/images/objects/dekoratif-beton.webp": "d00b858e7e4c6558b3e4d54ee0f7d7d1",
"assets/assets/images/objects/c3.webp": "d1ba485dd248017ba341c53825f1458d",
"assets/assets/images/objects/seffaf-beton.webp": "5bd9c05f7ebecd76d500c8846000376d",
"assets/assets/images/objects/ultra-y%25C3%25BCksek-performansl%25C4%25B1-betonlar-3.webp": "151d28e6ab366206b9f5118e76dfbf3c",
"assets/assets/images/sponsors/4.png": "73418f1faef42ac9ea7b5d9ebec54fa6",
"assets/assets/images/sponsors/5.png": "b95b116ad3a96cf446acfaae1ca2447b",
"assets/assets/images/sponsors/6.png": "aecdb723edfa1356ba70974846cb2228",
"assets/assets/images/sponsors/2.png": "f3ad5f9521a7609ae3caed7493e25279",
"assets/assets/images/sponsors/3.png": "cbe12719b67122667bff1642d0d85823",
"assets/assets/images/sponsors/1.png": "ae207c9316510500dcde8ca7ff0a41bd",
"assets/assets/images/balci/balci-logo-transparent-logo.png": "1e1623459e221ef578978c3d0cfd19d8",
"assets/assets/images/balci/beton-santral.PNG": "26f614aa27c0ec57a6bd859f7a8f3582",
"assets/assets/images/eldirekspor/eldirek-spor-2.jpeg": "98448bcb6a7753eeafda1ad9efabc328",
"assets/assets/images/eldirekspor/kutlama.jpg": "fd2cf3eebd88a85802834406d78e55a4",
"assets/assets/images/eldirekspor/8.jpg": "24f424fdc9e098e9f21447261ce7818e",
"assets/assets/images/eldirekspor/taraftar.jpg": "dfb433e63e9ba155cba3c0d2c0a682d3",
"assets/assets/images/eldirekspor/kurt-logo.svg": "c602b91641aaad3b8188b9331f5c1c98",
"assets/assets/images/eldirekspor/4.jpg": "b6a56bc20bbbf36c9f32a2fa52a623ed",
"assets/assets/images/eldirekspor/5.jpg": "f2bee098ace7aa6a28a83893255d0e06",
"assets/assets/images/eldirekspor/7.jpg": "afe662a00ee3389326abf643425d13b4",
"assets/assets/images/eldirekspor/eski-logo.png": "39504145c72e8cd23b1b780b08ca2299",
"assets/assets/images/eldirekspor/6.jpg": "f190cd250e0a4c8070dc9a9bcaa41362",
"assets/assets/images/eldirekspor/2.jpg": "1c3b969bad5bc2e016e138ae704ef179",
"assets/assets/images/eldirekspor/3.jpg": "b2b8bd42a93f6b4ff87e7b66a6cc3290",
"assets/assets/images/eldirekspor/1.jpg": "8138b80dcf7f8a15b2f410b21df1e8b6",
"assets/assets/images/eldirekspor/yonetici.jpg": "587ec7d2ec20544fc115848552acf4da",
"assets/assets/videos/background-video.mp4": "7892346ff4e3c00042a760100f37c17a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
