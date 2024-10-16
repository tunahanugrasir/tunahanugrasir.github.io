'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "635828a218def416de482185af51440e",
"version.json": "d2f1b2c9ee9824c0f58f66484aac1c5b",
"index.html": "87a91cad6240e1804e7c5480c7355f65",
"/": "87a91cad6240e1804e7c5480c7355f65",
"main.dart.js": "4ffae2073f902b9bf650848e8ba91bbb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "31f8709a00de2120ec7057c6997f54a8",
"assets/AssetManifest.json": "fb04b030d633d3f12e0a27eae2e3df2f",
"assets/NOTICES": "731def69d3477693a563052e1a042866",
"assets/FontManifest.json": "5b6239dbfba7d1ad032ac0e3538ae141",
"assets/AssetManifest.bin.json": "49e7b95a7c745fbe53c6c36e7a285b59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "676dfb5b2456efff4dd11a40761cb1c3",
"assets/fonts/MaterialIcons-Regular.otf": "09a954169c06d8a3621353efe9d6a9a7",
"assets/assets/images/design/8.png": "9255bc334984fd3c4c9c9281faa22fc4",
"assets/assets/images/design/9.png": "b845f48df6f3aa3257ee5ac2af7f115f",
"assets/assets/images/design/14.png": "91a277cfb19126f0faa7ab4ab8d42f31",
"assets/assets/images/design/28.png": "7b47409a3c5b03f192838238d1e00ceb",
"assets/assets/images/design/Shell.webp": "c60224327e4b5bf264a73ab199d0c143",
"assets/assets/images/design/29.png": "668dc1dc58100dc796f777cf40923599",
"assets/assets/images/design/15.png": "52b405f5133fafbae6bd4abdc2eba3dd",
"assets/assets/images/design/17.png": "a9dd195f19209f60505047522bd4bb53",
"assets/assets/images/design/16.png": "dbdca6576598b817dde876d1d91f7338",
"assets/assets/images/design/12.png": "d19e8fdb08f2dc833a503f140f880670",
"assets/assets/images/design/13.png": "d084cf6212690e56bb10fb3d8abc2d7f",
"assets/assets/images/design/39.png": "8032b088fd58f4e7b948df412eb3cb5d",
"assets/assets/images/design/11.png": "84f229a18170c3ff958e0fb93a81e1b2",
"assets/assets/images/design/10.png": "78fefddca54ccbc185942ddc55ac0bf7",
"assets/assets/images/design/38.png": "81b00d5dd25128b6aadb80e51e960f22",
"assets/assets/images/design/35.png": "e4374958b0d8cdf417aadae8d03bfb28",
"assets/assets/images/design/21.png": "48be84234d9b18aef231ebee4148aece",
"assets/assets/images/design/20.png": "4cd3e3ce84dce1409b537fb4fdd85f47",
"assets/assets/images/design/22.png": "20634aa4544679fb978e92017784dc2c",
"assets/assets/images/design/36.png": "a9cf3cdc4750a83d47a0487ad9575343",
"assets/assets/images/design/37.png": "8575c5106c14e5dbd5258b7ccebfffcf",
"assets/assets/images/design/23.png": "c538fea5078ce0d35fcc7ace57914842",
"assets/assets/images/design/27.png": "75af207d77bac634937ea0253b3d267c",
"assets/assets/images/design/32.png": "7673c76bade7fee7b688dcef89ff73a7",
"assets/assets/images/design/26.png": "83245580d2026bcf68533ac791823a35",
"assets/assets/images/design/18.png": "cc640d4bb70f0f95022ad62b81d6bcc1",
"assets/assets/images/design/30.png": "54313d84ca862e71fdd45a8e6fd9f111",
"assets/assets/images/design/24.png": "fdbc36527777f73203ba004170bc55c5",
"assets/assets/images/design/25.png": "689985d4ee4bf81e5c244f70fed2cb0f",
"assets/assets/images/design/31.png": "0c26fe7ca54a7e384305f900ee0e8c53",
"assets/assets/images/design/19.png": "a44e9a89add2d4095ab0ccbbd22132ab",
"assets/assets/images/design/4.png": "defe271d61c42ea35484fb8fc8c1fa46",
"assets/assets/images/design/5.png": "9bf2f42457f31c23bdf92b76bc629694",
"assets/assets/images/design/7.png": "5f012883f395403d288b7d9a09379cfc",
"assets/assets/images/design/6.png": "71b45a43af34c1452d32e92559f3fa49",
"assets/assets/images/design/40.png": "ebef588c796291555126991c59265fed",
"assets/assets/images/design/2.png": "6660b0eb33959b207e34ec307c2ac587",
"assets/assets/images/design/3.png": "3ccef97856f8539dcc98adbc46063a54",
"assets/assets/images/design/Starfish.webp": "0c0611ce5c93a40f782b8bf105dd5c00",
"assets/assets/images/lotties/building-lottie.json": "c2f99257cf765776f6b873b94a770309",
"assets/assets/images/lotties/get-price-orange.json": "cf0a3fa2407b56b23acf572aa9bb025d",
"assets/assets/images/lotties/scroll-to-top-orange.json": "0b42cabe85ec2d1fabd95fba9b2ef6d7",
"assets/assets/images/lotties/orange-404.json": "84c139fd825ade86b43ba065c3fb3c46",
"assets/assets/images/lotties/whatsapp-lottie.json": "a106b7757b9bca73c30e0458a39937e7",
"assets/assets/images/lotties/menu-nav-1.json": "69bb0905bee404445f03db82d3b731ea",
"assets/assets/images/lotties/scroll-to-down-orange.json": "d57e35d65564e5646c7403584b99ab66",
"assets/assets/images/lotties/scroll-down-07-orange.json": "d57e35d65564e5646c7403584b99ab66",
"assets/assets/images/lotties/scroll-to-top-orange-lottie.json": "8fb229fce082cdc386bf8eb344e4e586",
"assets/assets/images/lotties/scroll-top-lottie.json": "ce8147a69089a9a968a1ce99f6c3fbf1",
"assets/assets/images/lotties/menu-nav-2.json": "22d032119ba657ae7b1a1b0ef98104a7",
"assets/assets/images/lotties/scroll-down-07-white.json": "a28bc5df4436ff2b5067dcbfcf2576d7",
"assets/assets/images/lotties/404-yellow.json": "f4cdb67d9216ec42e1c8067770fe7523",
"assets/assets/images/lotties/menu-nav-3.json": "0ee2af3576cf64378fd69625c1f198fe",
"assets/assets/images/lotties/404-orange.json": "3e97c315f3c8ebeb4d9bd11a1dafc95c",
"assets/assets/images/lotties/yellow-404.json": "b9b3d06eb6db37726f679f9328e275b3",
"assets/assets/images/logos/sundia.png": "b596f8ab027ff350e8f3d4aa43899efe",
"assets/assets/images/logos/bed.svg": "89229b5af29e8c27944eca662afe1089",
"assets/assets/images/logos/bathroom.svg": "6dee15e97dfddbecdc5dc53409f1522d",
"assets/assets/images/logos/kultur-yeni.png": "e6b5ec0678de48dcd15a177a941a4af4",
"assets/assets/images/logos/seydikemer.png": "ce0140d010fe49e05b66ba06c0c36529",
"assets/assets/images/logos/family.svg": "6c4c1afbcdb1fb8e2c328a434fa6fb55",
"assets/assets/images/logos/instagram-logo.jpeg": "33dcc93ef1a387b4e95d65c3be371c15",
"assets/assets/images/logos/mugla.svg": "b8599ccecd803141e5343184e72830d7",
"assets/assets/images/logos/kultur-yatay.png": "36acecf036748bc5d44d55d089dcc883",
"assets/assets/images/logos/tiktok--logo.jpeg": "76e32ed052c8fd908cd308c552e5b069",
"assets/assets/images/logos/loft.png": "7287f4e9c974dd4e657a12fbe3ca7d04",
"assets/assets/images/logos/mugla.png": "21766f3bf57d03a1194d42c749710f4a",
"assets/assets/images/logos/fethiye.png": "ea2d7c6f6f8a787d3e2ed9a9b6af9698",
"assets/assets/images/logos/tuana.webp": "ea6b7246fcad01fa2b86efcb3b71d9a8",
"assets/assets/images/logos/zos%25CC%25A7.png": "8f39a2315c1450d87b2f8f13f85e276c",
"assets/assets/images/logos/kultur.png": "2126f3eb690fc7cb465a95495d11f942",
"assets/assets/images/logos/liberty.png": "b309342e85d68f6c4af6e4b16e599cc7",
"assets/assets/images/logos/tck.png": "69cede3fc533a5880a647eb2a343862c",
"assets/assets/images/logos/batching.svg": "143ec8e5bf1710d8f0dc64e0a8084434",
"assets/assets/images/logos/harbour.png": "007ba4c295cfa02d27552fb87570fea2",
"assets/assets/images/logos/facebook-logo.jpeg": "923744b7ae0f107800b404aa0782e3ad",
"assets/assets/images/logos/arwen.png": "a798425a29018b52cefb22a8b308ba96",
"assets/assets/images/logos/nara.png": "5d8c8a1bd66ac292e6dd32f605973fa2",
"assets/assets/images/logos/twitter-logo.jpeg": "9d43bdd7d64940692337530eb907ce47",
"assets/assets/images/logos/nomades.jpg": "fa4299be5aba7fc609514e536ef490a2",
"assets/assets/images/logos/nomades.png": "804a51f4d20cab59e87dd0165b6340ef",
"assets/assets/images/logos/letoonia.png": "69f6e0aec5c62a64bcfaf0121029fae9",
"assets/assets/images/logos/pasa.jpg": "321b65bab5715847d61e7c08cb6b5035",
"assets/assets/images/logos/letoon.png": "fee8496f0a88c346c6fead58d6b5d472",
"assets/assets/images/logos/4.png": "fa10f12c7e386725a214113e2c0f92cb",
"assets/assets/images/logos/pasa.png": "0618b92bef5937304132ed9a83551bcd",
"assets/assets/images/logos/5.png": "124f5f63047d9ded7b9e88ad0716e450",
"assets/assets/images/logos/yacht.png": "2a2cdafafed261f09f6005124d118c69",
"assets/assets/images/logos/erasta.png": "223969083afc4bd4e4565baf035f57df",
"assets/assets/images/logos/2.png": "ae1f92f95f85095a6d68b16352146e6c",
"assets/assets/images/logos/akra.webp": "7b2c1e5451e1888eae17dd856fdee362",
"assets/assets/images/logos/kgm.png": "bb1a812b6808286ef3afd450612fac99",
"assets/assets/images/logos/3.png": "f4c2aa51322beba0e4eb73d49cd3506c",
"assets/assets/images/logos/dalaman.png": "f32b3d2c408d66b5252346175a43bcc9",
"assets/assets/images/logos/linkedin--logo.jpeg": "e1c0167b2e8f0dca3253b808985f805e",
"assets/assets/images/logos/sofia.png": "d102ec0b3238b55fd6742019fc15e1b2",
"assets/assets/images/logos/tck.gif": "b066423c0628f1ddb9e563e7f6be99b1",
"assets/assets/images/logos/1.png": "8149ec7ee18f38a595ac078728289f6c",
"assets/assets/images/others/web-image-1.webp": "5aad6dd6594c5e69119eebf893c4498d",
"assets/assets/images/others/bg.webp": "4f04189a7bcca641de66ed5173f78c66",
"assets/assets/images/others/family.png": "4ff07dcf6708f6e1845b46f0a112e09f",
"assets/assets/images/others/workers.png": "0767717663822432e7a48d6cca15812b",
"assets/assets/images/others/worker.png": "7c2f710e12a8be00a08dfd35a33fb6ca",
"assets/assets/images/others/experience-2.png": "b9e27dc4368e304d894fe93f0e8ea3a0",
"assets/assets/images/others/family-3.png": "a192ceb503da1c0cb9459e472a616b9f",
"assets/assets/images/others/family-2.png": "13f0cc2cecd43917cc102436a2784cf4",
"assets/assets/images/others/experience-1.png": "cfdc12582dcaac278bb5a051dd5f371d",
"assets/assets/images/others/family-1.png": "7c2c8fa626561c8587a9f31ea6010f69",
"assets/assets/images/others/experince.png": "ff40fb06c9d9b05b2ea5f929d09bb02d",
"assets/assets/images/objects/excavator-3d-3.png": "5580fe05cb638750294e0d29808a7708",
"assets/assets/images/objects/gec%25CC%25A7irgen-beton.png": "6490280cd61e4d891dbad9c9acd23fae",
"assets/assets/images/objects/endustriyel-saha-betonlar%25C4%25B1-3.png": "c5b5c46adc14a7de1ca671f9f2057aec",
"assets/assets/images/objects/excavator-3d-2.png": "aea660be7d8ac7ddc285a5e50c976f22",
"assets/assets/images/objects/ozel.png": "c7402f5273c3a651a5a749fbfe93fec4",
"assets/assets/images/objects/gecirimsiz-beton.webp": "9e5630c32c30fa379888787f27227920",
"assets/assets/images/objects/h%25C4%25B1zl%25C4%25B1-priz-alan.webp": "d9cfb421ee59c07436b09d5aa5a93996",
"assets/assets/images/objects/excavator-3d-1.png": "c8b77a6a86512cf7569df0bee5cb1d5e",
"assets/assets/images/objects/geopolymer-beton-2.png": "0f49bcc6ecdb2d90a04b7f91b13a37cc",
"assets/assets/images/objects/standart.png": "cb42889c3ed83c9cb2dd4e4c22b0366f",
"assets/assets/images/objects/c.webp": "bcfcbdba25f2ac72c671ece7bc362083",
"assets/assets/images/objects/hafif-beton.webp": "df445e356ef588785df71f0857aa7c36",
"assets/assets/images/objects/c1.webp": "077a587c0fb5996f5a9e45c2ba6867c5",
"assets/assets/images/objects/ultra-yu%25CC%2588ksek-performansl%25C4%25B1-betonlar-3.webp": "151d28e6ab366206b9f5118e76dfbf3c",
"assets/assets/images/objects/ultra-yuksek-performansl%25C4%25B1-betonlar-2.png": "53401f081ef7e289f71251a831339041",
"assets/assets/images/objects/ultra-yu%25CC%2588ksek-performansl%25C4%25B1-betonlar.png": "86c2a321bdcae2e20597100ee0dbf627",
"assets/assets/images/objects/kendiliginden-yerlesen.webp": "6c35acef21e39bdf83ae4aded49864b6",
"assets/assets/images/objects/c6.webp": "2aeae92abacb2fcef110ede72a50b1c6",
"assets/assets/images/objects/butik.png": "e179ab808d0887a558caf84919ffeeb9",
"assets/assets/images/objects/polimer-beton.webp": "1c0eb7d253eb9cfa85b8703dee354f97",
"assets/assets/images/objects/travers-segment-prekast-betonlar.png": "4e2a4ff69776bcb1e7f01ae2708b199f",
"assets/assets/images/objects/building.png": "03b2efe9d7cba09534c4db5efed37439",
"assets/assets/images/objects/deniz-yap%25C4%25B1lar%25C4%25B1-icin-%25C3%25B6zel-betonlar-2.png": "e37f2133c8b2cf2039bc9542efda9395",
"assets/assets/images/objects/durabil-betonlar.png": "e77768c6c00301d415eeead32bcd9bca",
"assets/assets/images/objects/c4.webp": "1cfc7d27663fc4374fa9831d5a2a3421",
"assets/assets/images/objects/hafif-beton-2.webp": "a8f8b1e5a90e188bf4dbfda8759c32ed",
"assets/assets/images/objects/bas%25C4%25B1nca-dayan%25C4%25B1kl%25C4%25B1-beton.png": "738e7f80b7dc637a7506aca76892a53b",
"assets/assets/images/objects/fiber-beton.png": "134bc0c214693b6f2d82c540651545a1",
"assets/assets/images/objects/lifli-beton.webp": "feb38481d5537587498f85bd6491f04d",
"assets/assets/images/objects/deniz-yap%25C4%25B1lar%25C4%25B1-icin-%25C3%25B6zel-betonlar.webp": "f5de5a28739b03deb2ec95d39debdf5a",
"assets/assets/images/objects/renkli-beton-2.png": "adecacca3bfb0be545fb84f22b7f3cc6",
"assets/assets/images/objects/c5.webp": "a0c722cf268358c209d2cd2f69fadfc2",
"assets/assets/images/objects/endu%25CC%2588striyel-saha-betonlar%25C4%25B1-2.png": "7d736e4bc8aa5ed8f14dc3226a33b46d",
"assets/assets/images/objects/renkli-beton-1.png": "c739f22b56b23ec3e7b71178ad497e93",
"assets/assets/images/objects/endu%25CC%2588striyel-saha-betonlar%25C4%25B1-1.png": "35298aa6dde7a9e764e3e9c2f00cb742",
"assets/assets/images/objects/baski-beton.webp": "65ec305373dcd7e51fecac4178e7c2d4",
"assets/assets/images/objects/lifli-beton-3.webp": "19b588725902810c1d6b44b4290048c8",
"assets/assets/images/objects/c2.webp": "9774f38a041b4b3019fdb9f5c653f4ac",
"assets/assets/images/objects/super-beton.webp": "064df0e6269f64924644a385273685fd",
"assets/assets/images/objects/geopolymer-beton.png": "2f44c9f8656c83239d38c8c854e3a9af",
"assets/assets/images/objects/cizilmeye-dayan%25C4%25B1kl%25C4%25B1-beton.png": "3ca67f01f7ab3d7b94b15503421fbff6",
"assets/assets/images/objects/yuksek-mukavemet.webp": "3eba81a2ff233d1249126b1ee61b6246",
"assets/assets/images/objects/dekoratif-beton.webp": "d00b858e7e4c6558b3e4d54ee0f7d7d1",
"assets/assets/images/objects/bas%25C4%25B1nca-dayan%25C4%25B1kl%25C4%25B1-beton-2.png": "e9f032ecd68043f363f693c7e7aa1ad7",
"assets/assets/images/objects/c3.webp": "d1ba485dd248017ba341c53825f1458d",
"assets/assets/images/objects/bas%25C4%25B1nca-dayan%25C4%25B1kl%25C4%25B1-beton-3.png": "aae4c3e47849e5cfc304aaa2a1d1f526",
"assets/assets/images/objects/seffaf-beton.webp": "5bd9c05f7ebecd76d500c8846000376d",
"assets/assets/images/objects/lifli-beton-2.webp": "96d619183597a5885594299d8039f97b",
"assets/assets/images/villa/selmanvilla/4.jpg": "fff6704061b716f3d6aeac5bcf607d72",
"assets/assets/images/villa/selmanvilla/5.jpg": "a4ec0d72fd9fe658db717b5eccceaf32",
"assets/assets/images/villa/selmanvilla/2.jpg": "90cc19b0570e4ecaae76f495a1deb8c3",
"assets/assets/images/villa/selmanvilla/3.jpg": "4c6badf713e655acd9128f165320d747",
"assets/assets/images/villa/selmanvilla/1.jpg": "6fafbb9c1ae75a5d05e777cabe18cca2",
"assets/assets/images/villa/family.svg": "617cf3364c80d413983e9d4974ebc057",
"assets/assets/images/villa/hot-water.svg": "601d731f7a9c13221df5caf9cf36197b",
"assets/assets/images/villa/villa-1.JPG": "43e3adf6abe9c6528db1216aa112e05d",
"assets/assets/images/villa/villa-2.JPG": "20ad0c6f9e853924db8ab90b4ba1cc49",
"assets/assets/images/villa/swing.svg": "b857dfbdc82658de50afe42355174286",
"assets/assets/images/villa/ilyasvilla/4.jpg": "fd00a3bfde1a393a0773ac2df034d5af",
"assets/assets/images/villa/ilyasvilla/5.jpg": "5258b26d77d049592282a623bf4a177b",
"assets/assets/images/villa/ilyasvilla/6.jpg": "c4fbf011bd32c8aee0d422f1201f85ce",
"assets/assets/images/villa/ilyasvilla/2.jpg": "e4d2a998784cd9ac40a9bcbbdf8a0372",
"assets/assets/images/villa/ilyasvilla/3.jpg": "365a4521b50d5fd963c1b66e80330ed5",
"assets/assets/images/villa/ilyasvilla/1.jpg": "321fb6ce07f80f24e2663f82309f9b8b",
"assets/assets/images/villa/ikrada/8.jpg": "04f43ec3d8d7b56ba1f1ea481cfea69c",
"assets/assets/images/villa/ikrada/9.jpg": "24ce05d13776dff7be7eff0b951cd6fb",
"assets/assets/images/villa/ikrada/10.jpg": "8918ece421b176fe76c8ffd45f29f9d4",
"assets/assets/images/villa/ikrada/4.jpg": "d12b7b5958364953e877cf7c5aaa1f27",
"assets/assets/images/villa/ikrada/5.jpg": "53e6bfd89227af9f4ace8091c686b8c5",
"assets/assets/images/villa/ikrada/7.jpg": "755d8b10cc96fddd1cdc7a9e0f50bc84",
"assets/assets/images/villa/ikrada/6.jpg": "ad11a3fd48515585390260e1372e596a",
"assets/assets/images/villa/ikrada/2.jpg": "a2267c1ee713d888b806de48e0954e84",
"assets/assets/images/villa/ikrada/3.jpg": "1a354acf036dd0d623692f4a811e822d",
"assets/assets/images/villa/ikrada/1.jpg": "0833c52131efa00a272e050a9cbb537c",
"assets/assets/images/villa/furniture.svg": "fcfb9edaad61825a65138f7b18c6ce71",
"assets/assets/images/sponsors/4.png": "73418f1faef42ac9ea7b5d9ebec54fa6",
"assets/assets/images/sponsors/5.png": "b95b116ad3a96cf446acfaae1ca2447b",
"assets/assets/images/sponsors/6.png": "aecdb723edfa1356ba70974846cb2228",
"assets/assets/images/sponsors/2.png": "f3ad5f9521a7609ae3caed7493e25279",
"assets/assets/images/sponsors/3.png": "cbe12719b67122667bff1642d0d85823",
"assets/assets/images/sponsors/1.png": "ae207c9316510500dcde8ca7ff0a41bd",
"assets/assets/images/backgrounds/excavator-3.jpg": "e792da691050275cad9b470db4bcd83a",
"assets/assets/images/backgrounds/excavator-2.jpg": "58719008853dd3fa8d3891d7cfd81dde",
"assets/assets/images/backgrounds/balci-beton-tesis.jpg": "a0cf599c88a3b277d9ea401b7e08f27a",
"assets/assets/images/backgrounds/excavator-1.jpg": "a3ca4f614ead2356d5758d5af40e2ff5",
"assets/assets/images/backgrounds/excavator-5.JPG": "98ae247f6c34dc181ab4bb1582d6dbdb",
"assets/assets/images/backgrounds/excavator-4.jpg": "f038a1bd1bf7fa0ceef7c09eb7299ce1",
"assets/assets/images/backgrounds/excavator-6.jpg": "0c2b8c56b6aa0fb38c0a1671b5355693",
"assets/assets/images/backgrounds/excavator-7.jpg": "642a1c66c728a0bb608189ea7ca50293",
"assets/assets/images/backgrounds/fethiye.jpg": "0d49ecc912716fbb2d0cd270135562c4",
"assets/assets/images/backgrounds/balci-beton-tesis-2.jpg": "016b471b975e50a56bde556427906385",
"assets/assets/images/backgrounds/excavator-10.jpg": "4b2d8b4875c6dc412890f15378be4db8",
"assets/assets/images/backgrounds/betonlar-2.png": "09abf4ecfc735896da169ab61d2bd67f",
"assets/assets/images/backgrounds/excavator-11.jpg": "37b9fdedde3c9ff99a38ecffe3a5f697",
"assets/assets/images/backgrounds/betonlar.png": "946351ef135105304fb0e5bdb10f4238",
"assets/assets/images/backgrounds/excavator-12.jpg": "e40875ba9d5c2944a3b11233a51d55da",
"assets/assets/images/backgrounds/landscape-1.jpg": "add5b6895886e0ba73b41e53e9bc52ba",
"assets/assets/images/backgrounds/landscape-2.png": "3a0c75b093a2fa4ef1d1a377a33ac20b",
"assets/assets/images/backgrounds/beton-1.png": "75074b3251d4b487f6c78df3be179c52",
"assets/assets/images/backgrounds/santral.png": "976d996e2138b6130c1c0ae78f12bfa3",
"assets/assets/images/backgrounds/fethiye-2.jpg": "3d8ee1c79d985fdcb912698c114edc81",
"assets/assets/images/backgrounds/excavator-9.jpg": "ea3f5617816507e3efa6fa6d73ea3df3",
"assets/assets/images/backgrounds/excavator-8.jpg": "af9c265f219f1fd4ffb2f769523bd4e8",
"assets/assets/images/balci/santral-6.JPG": "d16d13d3f1e12c8ae3a2925b11da8b19",
"assets/assets/images/balci/santral-4.JPG": "a7f0f89605010db47b770a3c0befd14d",
"assets/assets/images/balci/santral-5.JPG": "7591aee33c738cc49683377fa0050267",
"assets/assets/images/balci/santral-1.JPG": "5aee687c3f00b2a2648b6d94640b7bf0",
"assets/assets/images/balci/balci-logo.png": "1bf2feec66a0d5312cdf952ae9d2bd44",
"assets/assets/images/balci/santral-2.JPG": "1077aa141a42b0d6ae8bd4deb5b87b4c",
"assets/assets/images/balci/santral-3.JPG": "e94a0ca97c580dad2408178ce7f09ce7",
"assets/assets/images/balci/makine-2.JPG": "43c801a22da0f81a2e4289f156cc460e",
"assets/assets/images/balci/makine-3.JPG": "e9596670ea618e7bd9634853e8bfa86d",
"assets/assets/images/balci/makine-1.JPG": "04eb0edff63a67ed0a060df2661725e9",
"assets/assets/images/balci/makine-4.JPG": "92451caa0a45353a8848619ff55e9cee",
"assets/assets/images/balci/makine-5.JPG": "12060982a2ac1cb1097c2c90621dbce7",
"assets/assets/images/balci/makine-7.JPG": "51deae78d307416d2ee5c2c39f140b9f",
"assets/assets/images/balci/makine-6.JPG": "e6e879c5b92b24e2928135b3daada23d",
"assets/assets/images/balci/balci-beton-1.png": "a7c287d340128f543780219b04f5833a",
"assets/assets/images/balci/white-logo.png": "ac2b556c6dfd366ac098f597e98ee90e",
"assets/assets/images/balci/hafriyat-1.jpg": "09c110a17b7cb63539ee9ac37cd7dd55",
"assets/assets/images/balci/hafriyat-1.PNG": "6b12fdcfb398d7fb1953f4f263ce7291",
"assets/assets/images/balci/makine-8.JPG": "dd8d15553f7038b4c0aaaeca447db2d9",
"assets/assets/images/balci/makine-9.JPG": "76a7c03e0eb57d3321c0dcbc99cd34f1",
"assets/assets/images/balci/logo6.png": "9e99fe18fe503ae28c857ac6fd1ee49e",
"assets/assets/images/balci/balci-logo-transparent-logo.png": "1e1623459e221ef578978c3d0cfd19d8",
"assets/assets/images/balci/beton-santral-2.JPG": "dce4c0c14733b0e144e231bb7eff3217",
"assets/assets/images/balci/beton-santral.PNG": "26f614aa27c0ec57a6bd859f7a8f3582",
"assets/assets/images/balci/beton-dokme.PNG": "e2aee8efe265844923c71e0cded33854",
"assets/assets/images/balci/ceo.jpg": "869b5737d2aab700cbfa231d6fb3e424",
"assets/assets/images/filo/kepce-11.jpg": "de41dcd74f1bf0ad891c1215f7f73de4",
"assets/assets/images/filo/kepce-39.jpg": "3bf61cc072f2520d4caacfcf5e14492a",
"assets/assets/images/filo/kepce-38.jpg": "46a2b6630ea1556aa188518c625cf7e5",
"assets/assets/images/filo/kepce-10.jpg": "9bb0506a50b6b26ae6f75b23472e8cf0",
"assets/assets/images/filo/kepce-12.jpg": "c1cb8acace53655727f40f7ead278b25",
"assets/assets/images/filo/kepce-13.jpg": "be95de0a9acef653b54ee9c1815d7822",
"assets/assets/images/filo/kepce-17.jpg": "09b9c4bc1741b49b367ca194e5ff30e3",
"assets/assets/images/filo/kepce-16.jpg": "cfa76b45f8a79d764975db9d911c20ce",
"assets/assets/images/filo/kepce-28.jpg": "4f92942bc51a9f6a0a456114139fb208",
"assets/assets/images/filo/kepce-14.jpg": "6da295d08ba4fabca008b77294eca8c8",
"assets/assets/images/filo/kepce-15.jpg": "135a3884b3b85b7ffedf78760777b290",
"assets/assets/images/filo/kepce-29.jpg": "0e65e2867eef1c93221c7795ddd67d3b",
"assets/assets/images/filo/kepce-1.jpg": "df40026300d329185b82a8bcc507ba3a",
"assets/assets/images/filo/kepce-59.jpg": "13b4ba7123cb8ca6f4b1ce33795a91de",
"assets/assets/images/filo/kepce-2.jpg": "3e1671b25947a43e19922d5787e0a8bf",
"assets/assets/images/filo/kepce-3.jpg": "08584d18aba7f044dd79a53941b09490",
"assets/assets/images/filo/kepce-58.jpg": "6dd7561b504bfe991ef938f218abc9d1",
"assets/assets/images/filo/kepce-48.jpg": "0cb78ebbf9ba7fa23b57e1ec28c9dfc0",
"assets/assets/images/filo/kepce-60.jpg": "bd1097cb31aa3f1abf175344e4c4ffd5",
"assets/assets/images/filo/kepce-7.jpg": "946cd5e98366a1ddb00c4127d5f4e6d0",
"assets/assets/images/filo/kepce-6.jpg": "21cc8eb69460161f6d570ae08c4758d8",
"assets/assets/images/filo/kepce-61.jpg": "2b5a135418990cd275b050dfd27075c5",
"assets/assets/images/filo/kepce-49.jpg": "2c03005c6c2f547a6f95c14e9db2ebff",
"assets/assets/images/filo/kepce-4.jpg": "0362dd295b0dd1ce3fb34194d4f00512",
"assets/assets/images/filo/kepce-5.jpg": "758fc1398cfb0d0e91e265f5dfae0de1",
"assets/assets/images/filo/kepce-62.jpg": "4cc3147aa712066191bf83c16ac42c3c",
"assets/assets/images/filo/kepce-47.jpg": "6dd487b6634d7f4e028dae7f0aeb1d7c",
"assets/assets/images/filo/kepce-53.jpg": "c9711ddb374f01410a3e455d2b37b36c",
"assets/assets/images/filo/kepce-8.jpg": "c98f6709c0e78eadc7f33af1316261c9",
"assets/assets/images/filo/kepce-9.jpg": "9a55d12cb9e2f3334cc4f7a5679301d1",
"assets/assets/images/filo/kepce-52.jpg": "1b58342b8a85cffc758e7e354f05be15",
"assets/assets/images/filo/kepce-46.jpg": "972c550504a38e65c1c69909630231c3",
"assets/assets/images/filo/kepce-50.jpg": "9d9e602a391cfee2a05c9e89165784cd",
"assets/assets/images/filo/kepce-44.jpg": "bea1b3d2186ba46b7f287e42771b3d87",
"assets/assets/images/filo/kepce-45.jpg": "e360c4cbcf0a26b08eee18ffabec3d1c",
"assets/assets/images/filo/kepce-51.jpg": "e793116c1e7f0ad3bdc07550e0b42b68",
"assets/assets/images/filo/kepce-55.jpg": "fa1f6fedee76b3db191f2f3e4f3614d5",
"assets/assets/images/filo/kepce-41.jpg": "297c5426a35911c93861ec7df8015921",
"assets/assets/images/filo/kepce-40.jpg": "d8ec096f0c513683e410d5a4b20e03b9",
"assets/assets/images/filo/kepce-54.jpg": "b11b43c398053bbea4c86e8a6f012204",
"assets/assets/images/filo/kepce-42.jpg": "dd970fd1fed17404de3562bb810dab38",
"assets/assets/images/filo/kepce-56.jpg": "66d86b44b3d6f08ccee770e9b450181f",
"assets/assets/images/filo/kepce-57.jpg": "83fbe87bde34d64c9df9d52a72e95f3e",
"assets/assets/images/filo/kepce-43.jpg": "9cce5a7253954d85d6512e66f2a29cdf",
"assets/assets/images/filo/kepce-24.jpg": "0a5ca2f24fb23e7ae00fe19fd17e6458",
"assets/assets/images/filo/kepce-30.jpg": "897730a379fead53c86bd3fe1f2396a4",
"assets/assets/images/filo/kepce-18.jpg": "1a22c33600211eb183602420795760e1",
"assets/assets/images/filo/kepce-19.jpg": "63e84f119ce8e993b0216b41ae2487c8",
"assets/assets/images/filo/kepce-31.jpg": "4399e981088f114fd4475f993d972ffe",
"assets/assets/images/filo/kepce-25.jpg": "cfc92d8eb927df610a8e79eef230734c",
"assets/assets/images/filo/kepce-33.jpg": "b4a52edf121feee58269a46cdb9c97f3",
"assets/assets/images/filo/kepce-27.jpg": "2d2ddb196832ed61fddf9ed76176dc33",
"assets/assets/images/filo/kepce-26.jpg": "8fac9c1353f5494c3441b3f3229d3c7c",
"assets/assets/images/filo/kepce-32.jpg": "673c87871a02af559f89e6c0b2cc9178",
"assets/assets/images/filo/kepce-36.jpg": "5181a2be5f31b6b28591e6023d08a458",
"assets/assets/images/filo/kepce-22.jpg": "ee72789746c55ee71fe826926b99f9d3",
"assets/assets/images/filo/kepce-23.jpg": "2c8ef84208961134c6867da7d8706ab6",
"assets/assets/images/filo/kepce-37.jpg": "5e100ff14fc1077e1c8e4c567d09945f",
"assets/assets/images/filo/kepce-21.jpg": "8de1f510459b559feba60bf2a128c84b",
"assets/assets/images/filo/kepce-35.jpg": "6c09bb57ed2042f5daddc3d682482466",
"assets/assets/images/filo/kepce-34.jpg": "4fbfb57fe859305cfc707159e9401afa",
"assets/assets/images/filo/kepce-20.jpg": "0ad40c066c814b7be7a73467adf46a79",
"assets/assets/images/eldirekspor/eldirek-spor-2.jpeg": "98448bcb6a7753eeafda1ad9efabc328",
"assets/assets/images/eldirekspor/kutlama.jpg": "fd2cf3eebd88a85802834406d78e55a4",
"assets/assets/images/eldirekspor/8.jpg": "24f424fdc9e098e9f21447261ce7818e",
"assets/assets/images/eldirekspor/taraftar.jpg": "dfb433e63e9ba155cba3c0d2c0a682d3",
"assets/assets/images/eldirekspor/kurt-logo.svg": "c602b91641aaad3b8188b9331f5c1c98",
"assets/assets/images/eldirekspor/eldirek-spor-1.png": "58d0fd56b4e3d63eafe0d75583b5e2e7",
"assets/assets/images/eldirekspor/harita.png": "a03ebf28e64eadb1d583a23337578111",
"assets/assets/images/eldirekspor/4.jpg": "b6a56bc20bbbf36c9f32a2fa52a623ed",
"assets/assets/images/eldirekspor/5.jpg": "f2bee098ace7aa6a28a83893255d0e06",
"assets/assets/images/eldirekspor/7.jpg": "afe662a00ee3389326abf643425d13b4",
"assets/assets/images/eldirekspor/eski-logo.png": "39504145c72e8cd23b1b780b08ca2299",
"assets/assets/images/eldirekspor/6.jpg": "f190cd250e0a4c8070dc9a9bcaa41362",
"assets/assets/images/eldirekspor/2.jpg": "1c3b969bad5bc2e016e138ae704ef179",
"assets/assets/images/eldirekspor/3.jpg": "b2b8bd42a93f6b4ff87e7b66a6cc3290",
"assets/assets/images/eldirekspor/1.jpg": "8138b80dcf7f8a15b2f410b21df1e8b6",
"assets/assets/images/eldirekspor/yonetici.jpg": "587ec7d2ec20544fc115848552acf4da",
"assets/assets/images/eldirekspor/kurt.png": "76976f8b681a444125df96c26be78a66",
"assets/assets/videos/hafriyat-video.mp4": "8700c73d2fa56a889a100216b38a0d1b",
"assets/assets/videos/background-video.mp4": "7892346ff4e3c00042a760100f37c17a",
"assets/assets/fonts/welland-font.otf": "d2959e6215c54956201290a4a8f30f0c",
"assets/assets/fonts/chalet_medium.otf": "4de9128304736529c4e5361dd5a4b5a8",
"assets/assets/fonts/chalet_light.otf": "e0ec50ffa0bcbb9a71062f819e174ca2",
"assets/assets/fonts/chalet_bold.otf": "a2c8af8da91d72d8b179f5e4cf527da6",
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
