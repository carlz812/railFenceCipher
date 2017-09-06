/**
 * Created by yuancheng.yuan on 2017/9/6.
 */
var chai = require('chai')
var railfencecipher = require('../src/index.js')
var assert = chai.assert;

describe('rail fence cipher', function () {
    it('encode', function () {
        var ans = railfencecipher.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3);
        assert.equal(ans, 'WECRLTEERDSOEEFEAOCAIVDEN');
    });
    it('decode', function () {
        var ans = railfencecipher.decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3);
        assert.equal(ans, 'WEAREDISCOVEREDFLEEATONCE');
    });
    it('encode', function () {
        var ans = railfencecipher.encodeRailFenceCipher('ptneictumet Aot rs s iiar ,ieae ieeelfstiir  ipp e pie s rarr f ttictrx etaeiqo i a fneundd, pgfuiimopoaPiabiueu im ce teiilo rucueaiiiki ntqnoe siuianjv  ueaxasti enomoss isevri s al stmda vseetmueomaDrdrrn r Vse !tu n!o a tmcs.o!tmurea uneed', 45);
        assert.equal(ans, 'pnrtudvinede en,ssif i c p atagslu fs miuose imttoiom qmndAioeaoep  taoiv tatsrePses iae xaxtsrbam tieuicuueiie odatu mert vae  ijDn,fmnrui  ad erciraareureea inr rts ui e rmesie te ioV!eelnsolioqe.fp t ss rn!cteu tmi ciutipuk  rpeina iai!  io');
    });
    it('encode', function () {
        var ans = railfencecipher.encodeRailFenceCipher('Hello, World!', 3);
        assert.equal(ans, 'Hoo!el,Wrdl l');
    });
    it('decode', function () {
        var ans = railfencecipher.decodeRailFenceCipher('Hoo!el,Wrdl l', 3);
        assert.equal(ans, 'Hello, World!');
    });
    it('encode', function () {
        var ans = railfencecipher.encodeRailFenceCipher('t ei oai  utueonu rstuae aenioa ruu oimu pdealntm r sd Pto Asenuinrci,llnireifqtmri. riv eimic,oetpo baiaef    u  topxciefmd V ttvdievorseaic! ei icmoepp qigi  i xas ttesuDesrrpoeje tuemssaiarsuss dft  een aker tns!riteai uinem taamrei iias !en',  23);
        assert.equal(ans, 'ta epi elveivroa edniidoreeuiptrmvrsjti  m itseeinou .cteD reamri, aut!mii roVisus  osme ceent  dttd!tmtauu qpm ts atuPfofe srmurti eisaere oebi aikeoa racixaainoAiixc r  uisnapmisni neleoo ueirenlfte seasau,  pis st ii  pg   uenc u idt!nar qfe');
    });
    it('decode', function () {
        var ans = railfencecipher.decodeRailFenceCipher('ta epi elveivroa edniidoreeuiptrmvrsjti  m itseeinou .cteD reamri, aut!mii roVisus  osme ceent  dttd!tmtauu qpm ts atuPfofe srmurti eisaere oebi aikeoa racixaainoAiixc r  uisnapmisni neleoo ueirenlfte seasau,  pis st ii  pg   uenc u idt!nar qfe',  23);
        assert.equal(ans, 't ei oai  utueonu rstuae aenioa ruu oimu pdealntm r sd Pto Asenuinrci,llnireifqtmri. riv eimic,oetpo baiaef    u  topxciefmd V ttvdievorseaic! ei icmoepp qigi  i xas ttesuDesrrpoeje tuemssaiarsuss dft  een aker tns!riteai uinem taamrei iias !en');
    });
    it('encode', function () {
        var ans = railfencecipher.encodeRailFenceCipher('', 3);
        assert.equal(ans, '');
    });
    it('decode', function () {
        var ans = railfencecipher.decodeRailFenceCipher('Hoo!el,Wrdl l');
        assert.equal(ans, '');
    });
});