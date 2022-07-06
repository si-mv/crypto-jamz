const sample = require('../assets/sampleEnglish')

/*
The variable "sample" contains a large amount of text in English:
The Collected Works of Edgar Allen Poe.
Your challenge is to work out the relative frequencies of each letter in the text.
This will give us an idea of which letters are the most common letters in the English language.
*/

function getFrequencies (sample) {
  // write code here to work out the frequency of each letter in the English alphabet
  // the output should be an object whose keys are the lowercase letters of the alphabet,
  // and whose value should be the relative frequency of that letter
  const frequencies = {}
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let total = 0
  for (let x of sample) {
    x = x.toLowerCase()
    if (alphabet.includes(x)) {
      total += 1
      frequencies[x] = frequencies[x] ? frequencies[x] += 1 : frequencies[x] = 1
    }
  }
  Object.keys(frequencies).forEach(x => {
    frequencies[x] /= total
  })
  return frequencies
}

// don't change this code below!
const frequencies = getFrequencies(sample)

const poe = String.raw`Yxmo ezyx k wsnxsqrd nbokbi, grsvo S zyxnobon, goku kxn gokbi, Yfob wkxi k aeksxd kxn mebsyec fyvewo yp pybqyddox vybo— Grsvo S xynnon, xokbvi xkzzsxq, cennoxvi drobo mkwo k dkzzsxq, Kc yp cywo yxo qoxdvi bkzzsxq, bkzzsxq kd wi mrkwlob nyyb. “’Dsc cywo fscsdyb,” S weddobon, “dkzzsxq kd wi mrkwlob nyyb— Yxvi drsc kxn xydrsxq wybo.” Kr, nscdsxmdvi S bowowlob sd gkc sx dro lvoku Nomowlob; Kxn okmr cozkbkdo nisxq owlob gbyeqrd sdc qrycd ezyx dro pvyyb. Okqobvi S gscron dro wybbyg;—fksxvi S rkn cyeqrd dy lybbyg Pbyw wi lyyuc cebmokco yp cybbyg—cybbyg pyb dro vycd Voxybo— Pyb dro bkbo kxn bknskxd wksnox gryw dro kxqovc xkwo Voxybo— Xkwovocc robo pyb ofobwybo. Kxn dro csvuox, ckn, exmobdksx becdvsxq yp okmr zebzvo mebdksx Drbsvvon wo—psvvon wo gsdr pkxdkcdsm dobbybc xofob povd lopybo; Cy drkd xyg, dy cdsvv dro lokdsxq yp wi rokbd, S cdyyn bozokdsxq “’Dsc cywo fscsdyb oxdbokdsxq oxdbkxmo kd wi mrkwlob nyyb— Cywo vkdo fscsdyb oxdbokdsxq oxdbkxmo kd wi mrkwlob nyyb;— Drsc sd sc kxn xydrsxq wybo.” Zbocoxdvi wi cyev qbog cdbyxqob; rocsdkdsxq drox xy vyxqob, “Csb,” cksn S, “yb Wknkw, dbevi iyeb pybqsfoxocc S swzvybo; Led dro pkmd sc S gkc xkzzsxq, kxn cy qoxdvi iye mkwo bkzzsxq, Kxn cy pksxdvi iye mkwo dkzzsxq, dkzzsxq kd wi mrkwlob nyyb, Drkd S cmkbmo gkc cebo S rokbn iye”—robo S yzoxon gsno dro nyyb;— Nkbuxocc drobo kxn xydrsxq wybo. Nooz sxdy drkd nkbuxocc zoobsxq, vyxq S cdyyn drobo gyxnobsxq, pokbsxq, Nyeldsxq, nbokwsxq nbokwc xy wybdkv ofob nkbon dy nbokw lopybo; Led dro csvoxmo gkc exlbyuox, kxn dro cdsvvxocc qkfo xy dyuox, Kxn dro yxvi gybn drobo czyuox gkc dro grsczobon gybn, “Voxybo?” Drsc S grsczobon, kxn kx omry webwebon lkmu dro gybn, “Voxybo!”— Wobovi drsc kxn xydrsxq wybo. Lkmu sxdy dro mrkwlob debxsxq, kvv wi cyev gsdrsx wo lebxsxq, Cyyx kqksx S rokbn k dkzzsxq cywogrkd vyenob drkx lopybo. “Cebovi,” cksn S, “cebovi drkd sc cywodrsxq kd wi gsxnyg vkddsmo; Vod wo coo, drox, grkd drobokd sc, kxn drsc wicdobi ohzvybo— Vod wi rokbd lo cdsvv k wywoxd kxn drsc wicdobi ohzvybo;— ’Dsc dro gsxn kxn xydrsxq wybo!” Yzox robo S pvexq dro creddob, grox, gsdr wkxi k pvsbd kxn pveddob, Sx drobo cdozzon k cdkdovi Bkfox yp dro cksxdvi nkic yp iybo; Xyd dro vokcd ylosckxmo wkno ro; xyd k wsxedo cdyzzon yb cdkion ro; Led, gsdr wsox yp vybn yb vkni, zobmron klyfo wi mrkwlob nyyb— Zobmron ezyx k lecd yp Zkvvkc tecd klyfo wi mrkwlob nyyb— Zobmron, kxn ckd, kxn xydrsxq wybo. Drox drsc olyxi lsbn loqesvsxq wi ckn pkxmi sxdy cwsvsxq, Li dro qbkfo kxn cdobx nomybew yp dro myexdoxkxmo sd gybo, “Dryeqr dri mbocd lo crybx kxn crkfox, drye,” S cksn, “kbd cebo xy mbkfox, Qrkcdvi qbsw kxn kxmsoxd Bkfox gkxnobsxq pbyw dro Xsqrdvi crybo— Dovv wo grkd dri vybnvi xkwo sc yx dro Xsqrd’c Zvedyxskx crybo!” Aeydr dro Bkfox “Xofobwybo.” Wemr S wkbfovvon drsc exqksxvi pygv dy rokb nscmyebco cy zvksxvi, Dryeqr sdc kxcgob vsddvo wokxsxq—vsddvo bovofkxmi lybo; Pyb go mkxxyd rovz kqboosxq drkd xy vsfsxq rewkx losxq Ofob iod gkc lvoccon gsdr coosxq lsbn klyfo rsc mrkwlob nyyb— Lsbn yb lokcd ezyx dro cmevzdebon lecd klyfo rsc mrkwlob nyyb, Gsdr cemr xkwo kc “Xofobwybo.” Led dro Bkfox, csddsxq vyxovi yx dro zvkmsn lecd, czyuo yxvi Drkd yxo gybn, kc sp rsc cyev sx drkd yxo gybn ro nsn yedzyeb. Xydrsxq pkbdrob drox ro eddobon—xyd k pokdrob drox ro pveddobon— Dsvv S cmkbmovi wybo drkx weddobon “Ydrob pbsoxnc rkfo pvygx lopybo— Yx dro wybbyg ro gsvv vokfo wo, kc wi Ryzoc rkfo pvygx lopybo.” Drox dro lsbn cksn “Xofobwybo.” Cdkbdvon kd dro cdsvvxocc lbyuox li bozvi cy kzdvi czyuox, “Nyeldvocc,” cksn S, “grkd sd eddobc sc sdc yxvi cdymu kxn cdybo Mkeqrd pbyw cywo exrkzzi wkcdob gryw exwobmspev Nsckcdob Pyvvygon pkcd kxn pyvvygon pkcdob dsvv rsc cyxqc yxo lebnox lybo— Dsvv dro nsbqoc yp rsc Ryzo drkd wovkxmryvi lebnox lybo Yp ‘Xofob—xofobwybo’.” Led dro Bkfox cdsvv loqesvsxq kvv wi pkxmi sxdy cwsvsxq, Cdbksqrd S groovon k mecrsyxon cokd sx pbyxd yp lsbn, kxn lecd kxn nyyb; Drox, ezyx dro fovfod csxusxq, S lodyyu wicovp dy vsxusxq Pkxmi exdy pkxmi, drsxusxq grkd drsc ywsxyec lsbn yp iybo— Grkd drsc qbsw, exqksxvi, qrkcdvi, qkexd, kxn ywsxyec lsbn yp iybo Wokxd sx mbykusxq “Xofobwybo.” Drsc S ckd oxqkqon sx qeoccsxq, led xy civvklvo ohzboccsxq Dy dro pygv gryco psobi oioc xyg lebxon sxdy wi lycyw’c mybo; Drsc kxn wybo S ckd nsfsxsxq, gsdr wi rokn kd okco bomvsxsxq Yx dro mecrsyx’c fovfod vsxsxq drkd dro vkwz-vsqrd qvykdon y’ob, Led gryco fovfod-fsyvod vsxsxq gsdr dro vkwz-vsqrd qvykdsxq y’ob, Cro crkvv zbocc, kr, xofobwybo! Drox, wodryeqrd, dro ksb qbog noxcob, zobpewon pbyw kx excoox moxcob Cgexq li Cobkzrsw gryco pyyd-pkvvc dsxuvon yx dro depdon pvyyb. “Gbodmr,” S mbson, “dri Qyn rkdr voxd droo—li droco kxqovc ro rkdr coxd droo Boczsdo—boczsdo kxn xozoxdro pbyw dri wowybsoc yp Voxybo; Aekpp, yr aekpp drsc usxn xozoxdro kxn pybqod drsc vycd Voxybo!” Aeydr dro Bkfox “Xofobwybo.” “Zbyzrod!” cksn S, “drsxq yp ofsv!—zbyzrod cdsvv, sp lsbn yb nofsv!— Grodrob Dowzdob coxd, yb grodrob dowzocd dyccon droo robo kcrybo, Nocyvkdo iod kvv exnkexdon, yx drsc nocobd vkxn oxmrkxdon— Yx drsc rywo li Rybbyb rkexdon—dovv wo dbevi, S swzvybo— Sc drobo—sc drobo lkvw sx Qsvokn?—dovv wo—dovv wo, S swzvybo!” Aeydr dro Bkfox “Xofobwybo.” “Zbyzrod!” cksn S, “drsxq yp ofsv!—zbyzrod cdsvv, sp lsbn yb nofsv! Li drkd Rokfox drkd loxnc klyfo ec—li drkd Qyn go lydr knybo— Dovv drsc cyev gsdr cybbyg vknox sp, gsdrsx dro nscdkxd Ksnoxx, Sd crkvv mvkcz k cksxdon wksnox gryw dro kxqovc xkwo Voxybo— Mvkcz k bkbo kxn bknskxd wksnox gryw dro kxqovc xkwo Voxybo.” Aeydr dro Bkfox “Xofobwybo.” “Lo drkd gybn yeb csqx yp zkbdsxq, lsbn yb psoxn!” S crbsouon, ezcdkbdsxq— “Qod droo lkmu sxdy dro dowzocd kxn dro Xsqrd’c Zvedyxskx crybo! Vokfo xy lvkmu zvewo kc k dyuox yp drkd vso dri cyev rkdr czyuox! Vokfo wi vyxovsxocc exlbyuox!—aesd dro lecd klyfo wi nyyb! Dkuo dri loku pbyw yed wi rokbd, kxn dkuo dri pybw pbyw ypp wi nyyb!” Aeydr dro Bkfox “Xofobwybo.” Kxn dro Bkfox, xofob pvsddsxq, cdsvv sc csddsxq, cdsvv sc csddsxq Yx dro zkvvsn lecd yp Zkvvkc tecd klyfo wi mrkwlob nyyb; Kxn rsc oioc rkfo kvv dro coowsxq yp k nowyx’c drkd sc nbokwsxq, Kxn dro vkwz-vsqrd y’ob rsw cdbokwsxq drbygc rsc crknyg yx dro pvyyb; Kxn wi cyev pbyw yed drkd crknyg drkd vsoc pvykdsxq yx dro pvyyb Crkvv lo vspdon—xofobwybo!`

console.log(getFrequencies(poe))

module.exports = frequencies
