import { html, LitElement } from 'lit-element'
import * as d3 from 'd3'

const noise = {
  layer1: [
    -0.1, -0.1470801446155641, -0.11156223321273862, -0.058080381654190244, -0.08156623399113398, -0.12194960974149516, -0.12925298891321121, -0.15161825671538603, -0.16626161223571506, -0.11696532710022522, -0.08174443576121775, -0.11572473805287, -0.15283711823166596, -0.1416841697809003, -0.12259922490860832, -0.11651956958274601, -0.11727503438619903, -0.10769189336322488, -0.10414826554609331, -0.1208290553143637, -0.13330583731071624, -0.10967703656175845, -0.07638535172186338, -0.051134582149068825, -0.017924691802760948, -0.01372328189351997, -0.05749913856615443, -0.06652920048442273, -0.017006498989525692, -0.022068553165624977, -0.0678854469236681, -0.07452733130850675, -0.03133537500473456, -0.0016273957089198154, 0.0014369218835263015, 0.013448339420658637, 0.006742831620101572, -0.028771561561972123, -0.06960755867194852, -0.09767851219935757, -0.07116598519288354, -0.026678236016285925, -0.031614406072223614, -0.04474637353924707, -0.03796405140504641, -0.05059144914345882, -0.07187713012806692, -0.08914236369948901, -0.0981817645990425, -0.09120850230564118, -0.09504720507482903, -0.13905811079040065, -0.15859300677175642, -0.1483537744876551, -0.1392487615574219, -0.09400852312889847, -0.05563234605032134, -0.06666268435869871, -0.06469850182340435, -0.05502514425393521, -0.06495846861243751, -0.0657791870641321, -0.062313318158034904, -0.08674344747624904, -0.11641063736750769, -0.13355168095939296, -0.13963260349807188, -0.13273983262066832, -0.1488821644739286, -0.1452799242281869, -0.09756028688844201, -0.0809088520470082, -0.11742313563328705, -0.11227916307068161, -0.07877753140490808, -0.09349116584106715, -0.15001985104832807, -0.17305242839444068, -0.14810851019753174, -0.16274703359930826, -0.25942104841534597, -0.3770774770910673, -0.42268474907764153, -0.31978317005091095, -0.1721009691102892, -0.21638751355280467, -0.49038787152981755, -0.7969617725136574, -1.1729220180835342, -1.1588962964423806, -0.4480732536355958, -0.6094059363644455, -1.032687772373801, -0.9539936355961376, -0.6826482460839168, -0.19350937483186345, -0.07952580641970047, -0.056167422036868205, -0.011856969967170922, -0.0371632977340665,
    -0.1, -0.14251019962993355, -0.13545038576166593, -0.13544135838500543, -0.1450577377648402, -0.12579093144448278, -0.0957281742610312, -0.08655332743871355, -0.09691218463016076, -0.13672379880084456, -0.1645325501282942, -0.13012970562566914, -0.09572131465947378, -0.12385856504375362, -0.12508123337999202, -0.07282169947295945, -0.05358402881021623, -0.08530565554347322, -0.07967450541412686, -0.05082191173307566, -0.04999190640500997, -0.08578794163077587, -0.1159750565991645, -0.12347028430243799, -0.13902129809586017, -0.12742442724683306, -0.07774411088899451, -0.06517769243378166, -0.08134671392947015, -0.07526698825358095, -0.0766173592326209, -0.09642535595662995, -0.142833816813277, -0.16061126067188233, -0.12987694559196014, -0.1267369865812002, -0.14663590476088093, -0.14363893550706988, -0.10373795045673541, -0.06998813782666301, -0.10428415968489674, -0.15107335720419593, -0.14721542203375435, -0.11652645310125502, -0.0721829551107866, -0.041511548668176024, -0.0689222527783478, -0.12601143685269878, -0.13945964817418224, -0.12244485006561633, -0.13162986259560855, -0.14385053675461498, -0.1331634334101989, -0.13646729401216023, -0.14159208161104325, -0.09624291008519618, -0.058077522242971004, -0.08582229062519912, -0.12868215785325476, -0.14146218466448796, -0.13241710558998415, -0.11914950790045155, -0.11206291728401534, -0.10057961803480611, -0.07212837890720432, -0.06902112893289084, -0.11293173698281413, -0.13419812534073106, -0.11698335358839884, -0.11585160771116777, -0.11757364009084302, -0.10558527463573975, -0.07639530684308393, -0.0777122081189769, -0.10730977453953622, -0.10052944111428053, -0.09063592106548866, -0.11349216538376247, -0.10198220858575904, -0.1315219846143396, -0.23023970747468397, -0.15096215856327805, -0.13967925648303028, -0.5559786521298548, -0.9465658831780122, -1.0869502454738291, -0.996027208188621, -0.9188686237738216, -1.31310790007703, -1.462117856305936, -0.6420043428913309, -0.6390741325712466, -1.0553651556587516, -0.5307552713272476, -0.11290741770190409, -0.21451438179348054, -0.06032058812544124, -0.06658376753713059, -0.09931479835448034, -0.14341473367627827,
  ],
  layer2: [
    -0.1, -0.10052413377249161, -0.12490075405931139, -0.15999668346547902, -0.14057630162180657, -0.09504720507482849, -0.07313314141796323, -0.07549520489962923, -0.0843940031821931, -0.10687218662029359, -0.0997054765162676, -0.0539702267717247, -0.04576164815817401, -0.08124094102504864, -0.09147989180055027, -0.09167242291914181, -0.10188414811567807, -0.12536625739488946, -0.15148142068492546, -0.15965890120674361, -0.13199169931943408, -0.09804778887562487, -0.10534362845659369, -0.1437095723606798, -0.18239716163223224, -0.17094666811291825, -0.12494989549517849, -0.11561735786166008, -0.13446711248377322, -0.13046758183794835, -0.13328964098525994, -0.15159603440027494, -0.15988298066567688, -0.1633830099454455, -0.1672622548433536, -0.14552688607838415, -0.14641428292242195, -0.17165243107390302, -0.14816204344748093, -0.10359665483704711, -0.12881514126122762, -0.1731189379498043, -0.14939869794700936, -0.09760387791619758, -0.11518684136355437, -0.14599059036250375, -0.1165262468026684, -0.06058725638538159, -0.05950232558549474, -0.10298605505586672, -0.12436699857265487, -0.089997988289289, -0.05680185709656299, -0.06835002670097709, -0.07831529867899369, -0.0750787482660485, -0.07471853184838281, -0.08631878358746693, -0.10995374913735914, -0.11702542572369813, -0.10628879954184199, -0.10761713521906212, -0.12267823615364642, -0.10633940374932636, -0.08997436406417306, -0.10284278672502489, -0.10743843035093929, -0.09833338911746109, -0.11240061307043617, -0.1063867627025826, -0.056223182570609015, -0.03484702131105365, -0.036709472364959264, -0.024919994337336104, -0.046765915377652394, -0.047164938791513795, -0.03351638410852262, -0.06552671040212707, -0.10083938503244017, -0.12371704730406027, -0.10597171904613598, -0.05725475997572794, -0.04274915064866583, -0.04829195905177958, -0.07518702106539106, -0.12385413734359192, -0.12991610259928105, -0.09397330682744152, -0.09256362139143201, -0.12749670650460498, -0.16478228168110737, -0.1566886923829479, -0.11682608428188974, -0.12375372377338016, -0.1573541965077631, -0.12507418295674666, -0.07577979690162884, -0.09492282106839538, -0.13510580298826172, -0.10591637014774434,
    -0.1, -0.05225906224114731, -0.05626119285194071, -0.05328372349981666, -0.03579579679393474, -0.040091314505174204, -0.038026294464555015, -0.02903621513873403, -0.04875177742994142, -0.07780436517585505, -0.05889240855209379, -0.009908294771115086, 0.003908714222613421, -0.0015783723887239781, -0.0093403136299616, -0.05852987832941576, -0.09143967811397195, -0.06771511288180201, -0.07500457417388211, -0.11536631528249996, -0.12121719314242682, -0.08772354177533827, -0.05369677833171609, -0.036129457373384924, -0.018976559587057892, -0.025121351551903412, -0.07506505615560513, -0.1088866563717654, -0.12922744227655864, -0.12117007284167719, -0.07033486057394943, -0.05058378219783786, -0.05982776967154808, -0.04109356894201751, -0.03639789900041031, -0.05097005434589109, -0.028614795795588024, -0.009466368644726372, -0.031759314713673284, -0.04961065494861136, -0.04619604559218423, -0.04836144807885362, -0.041467413619307524, -0.025684451496105973, -0.05316348795059017, -0.09003893675191416, -0.07679893586432926, -0.07103585636183866, -0.09789835090556288, -0.07218407118414427, -0.015191645078288213, -0.027413460000582326, -0.07171910859965752, -0.10465655660363245, -0.11091287676417744, -0.06616462718064495, -0.028049296486189007, -0.039873356260136265, -0.04037684875239155, -0.02817403322188801, -0.03600948430313829, -0.055598411334185055, -0.08965893649764428, -0.09208389021588849, -0.05470470604098409, -0.06476049674419446, -0.1123681934175345, -0.12318014289560462, -0.11230558711517427, -0.09477872368757174, -0.04456872824828559, -0.024544666362263295, -0.045440785907794434, -0.039928761677935014, -0.034188150673396464, -0.06944866751449441, -0.11003725993569993, -0.11436818282479334, -0.10277666639869526, -0.12122838651995581, -0.10821207689354019, -0.06140524262902518, -0.048686802317945505, -0.05593190385034794, -0.0841492233077034, -0.1337485051626648, -0.14395797224101653, -0.1425240625450135, -0.13635734889211076, -0.10459058400848358, -0.10969423361916016, -0.15532355656759333, -0.17993655008640208, -0.16827485469452563, -0.16180575700107608, -0.12420368222318144, -0.07515408795775379, -0.07610010696309616, -0.07954616546739704, -0.0644080730815628,
  ],
  layer3: [
    -0.29984214903766765, -0.3070895640146865, -0.30096446804542076, -0.30423164220717314, -0.30520095136110376, -0.29209943303950225, -0.2692105634744661, -0.2515213238878746, -0.25016304006310186, -0.2719799046402416, -0.3205552922581286, -0.3219317487473905, -0.26872261795465063, -0.23815622692381602, -0.2446543930675919, -0.2668392597836638, -0.28458438010864084, -0.22759751525074084, -0.18641818585527747, -0.2069666981155217, -0.2379308106010071, -0.2697967815360396, -0.24708052704516575, -0.19156258540713958, -0.17435724584020773, -0.19191071575150795, -0.2338338859769655, -0.26975528403605764, -0.2545103164708282, -0.225532441653666, -0.22620384560703558, -0.2181820833535345, -0.19999690435551723, -0.22589188172065786, -0.2612269492484245, -0.2302613571656029, -0.20278226066926316, -0.25, -0.30881748383648144, -0.2817142370870529, -0.2952642108533679, -0.30434980502002906, -0.435294311360536, -0.6118371812522385, -0.42399458935851386, 0.019562165126978615, -0.2934483459699681, -0.8319504749734551, -0.552923428466064, -0.5702130393176457, -0.953473572871908, -0.7850177455793891, -0.38607495635930744, -0.33041137405377413, -0.41068020554752793, -0.33116741641217495, -0.39908482614505325, -0.4326446252994415, -0.29433475711722734, -0.24274526787390552, -0.25599677283395167, -0.27652616286521137, -0.2936185697617389, -0.27125929789043246, -0.23704721055791475, -0.22581851699751626, -0.2087022929689301, -0.22246433638756877, -0.27481530572527135, -0.279996864666018, -0.24889090103396755, -0.2790171962771916, -0.31816906519622756, -0.30410010539722115, -0.26212807306653874, -0.23476520858259523, -0.22271003365786055, -0.21616525448542373, -0.2047171048088936, -0.2149472544213434, -0.25526563219347076, -0.28052785036856664, -0.24001806050907273, -0.1928699325382336, -0.21803859527187316, -0.25572721255384456, -0.22826417699152243, -0.20099827197540784, -0.22169884804610498, -0.2398141790371223, -0.2434214242079123, -0.2622214786371683, -0.2629336510093992, -0.2268379886038371, -0.2036507831541551, -0.2231368069416849, -0.23425171669460168, -0.2362921305189073, -0.245587065943064, -0.2699151940610719,
    -0.03338608634167346, -0.05005775151789766, -0.07169677088710374, -0.07752438670605719, -0.21353083964617853, -0.40786510767209805, -0.696667818620981, -0.9479822356558925, -0.6047039170454436, -0.14162024924963643, -0.393262092951416, -0.8756765512698257, -1.0143384947200036, -0.5110722295474611, -0.6661398525082703, -1.1844874923890416, -0.9682998725138725, -0.40092568894476865, -0.20290909980650348, -0.16977396543760162, -0.1464395499796158, -0.1065116559319852, -0.07967511427782115, -0.06706262410106821, -0.06678010366932008, -0.05716369876105332, -0.06203584216927938, -0.09489950937418479, -0.1253335221296655, -0.09980596098217355, -0.04570391394796596, -0.0427774504664615, -0.08438001516487452, -0.10187404383040677, -0.09612681685683212, -0.08680271239210834, -0.06711485133036707, -0.03767807327877454, -0.04124105549404533, -0.08094326712377126, -0.10423297710683477, -0.09604083119298171, -0.09725985937581655, -0.10980211794807719, -0.0742723787578216, -0.032315774023166016, -0.0342312162672056, -0.04962023244844859, -0.08464691439123176, -0.12283296009853364, -0.12816939674856645, -0.12166011544736478, -0.12047850480069884, -0.09798853228490446, -0.08719448136190266, -0.12787187909119832, -0.15527046499945807, -0.11297413031583275, -0.09835421380558128, -0.15131299612979018, -0.18622778741292145, -0.17700463787414666, -0.18444048318018214, -0.19421611485034207, -0.18795987897380112, -0.17209271127180698, -0.1567372583422628, -0.1581544949753017, -0.15076005654069846, -0.13030809350598144, -0.12824809371320117, -0.14863163033878082, -0.18793090114666672, -0.1783495265983518, -0.12756155100962255, -0.11848093447565233, -0.15198332968100117, -0.13368230545026605, -0.11062383565038729, -0.16222640375492506, -0.19574443304060507, -0.16440683166093512, -0.12865714055584135, -0.0962533187580031, -0.11519921326896555, -0.16701579654910476, -0.168934820377048, -0.12677846767442238, -0.1072781349865699, -0.11377932840159756, -0.14624128589468155, -0.15352745922340577, -0.11534279373758595, -0.0925145640322154, -0.11699681481632365, -0.16171324492804073, -0.17396683315140588, -0.15956256184006298, -0.1481265414717958, -0.1
  ]
}

export default class DashbirdGraph extends LitElement {
  static get properties() {
    return {
      autoPlay: {type: Boolean}
    }
  }

  constructor() {
    super()
    this.circleResolution = 100
    this.radius = 150
    this.amplitude = 75
    this.playing = false
  }

  firstUpdated () {
    if (this.dependenciesMet()) {
      this.setupLayers()
      this.lineGraphs = this.createLineGraphs()
      this.n1.next()
      this.n2.next()
      this.n3.next()
      this.animate()
    }
  }
  
  createLineGraphs () {
    this.n1 = this.noiseGenerator(noise.layer1, this.circleResolution)
    this.n2 = this.noiseGenerator(noise.layer2, this.circleResolution)
    this.n3 = this.noiseGenerator(noise.layer3, this.circleResolution)
    this.points = this.pointGenerator(this.circleResolution)
    this.initialPoints = this.points.next().value
    return [
      this.n3.next().value,
      this.n2.next().value,
      this.n1.next().value
    ].map(layer => layer.map(this.mapNoiseToPoints.bind(this)))
    .map(p => this.renderNoiseLayer(p))
  }

  mapNoiseToPoints (noise, i) {
    return {
      x: this.initialPoints[i].x * -noise * this.amplitude + this.initialPoints[i].x * this.radius,
      y: this.initialPoints[i].y * -noise * this.amplitude + this.initialPoints[i].y * this.radius
    }
  }

  * noiseGenerator (arr, initialAmount = 0) {
    let i = initialAmount
    yield initialAmount ? arr.slice(0, initialAmount) : arr
    while(true) {
      yield arr[i]
      if (i >= arr.length-1) i=0
      else i++
    }
  }

  * pointGenerator (resolution) {
    var angle = (2 * Math.PI) / (resolution - 1);
    var points = [];
    var i = resolution - 1;
    for(var a = 0; a < (2*Math.PI); a += angle){
      points.push({
        x: Math.cos(a),
        y: Math.sin(a)
      })
    }
    yield points
    while (true) {
      yield points[i]
      if (i === 0) i = resolution - 1
      else i--
    }
  }

  dependenciesMet () {
    if (typeof TweenMax !== 'undefined') {
      return true
    } else {
      console.error(`Dependancy 'TweenMax' not found for DashbirdGraph`)
      return false
    }
  }

  animate () {
    const c = this.shadowRoot.querySelector('.noise-line')
    let currentPoint = 0
    const max = this.circleResolution-1
    const that = this

    TweenMax.fromTo(c, 20, {
      transformOrigin: '50% 50%',
      rotation: -100,
    }, {
      rotation: 260,
      repeat: -1,
      ease: Linear.easeNone,
      onUpdate: function () {
        if (currentPoint !== Math.floor(this.progress() * max) && currentPoint < max) {
          that.updatePoints(max - currentPoint)
          currentPoint++
        } else if (currentPoint === max) {
          that.updatePoints(max - currentPoint)
          currentPoint = 0
        }
      }
    })
  }

  updatePoints (_i) {
    const {x,y} = this.points.next().value

    this.lineGraphs.map((graph, i) => {
      const noise = eval('this.n'+(i+1)).next().value
      //if (i == 0) console.log(noise, _i, x)
      let d = graph.data()[0]
      d[_i] = {
        x: x * -noise * this.amplitude + x * this.radius,
        y: y * -noise * this.amplitude + y * this.radius
      }
      graph.datum(d).attr('d', this.line)
    })

    const el = this.shadowRoot.querySelector('circle#max-dot')
    TweenMax.set(el, {y: Math.random()*111})
  }

  setupLayers () {
    const svg = d3.select(this.shadowRoot.querySelector('svg')),
      w = +svg.attr('width'),
      h = +svg.attr('height')

    this.clip = svg.insert('g', ':first-child')
      .attr('clip-path', 'url(#cut-off-bottom)')
      .append('g')
      .attr('class', 'noise-line')
      .attr('transform', `translate(${w*.5}, ${h*.5})`)
      
    //to get the center position correct for the rotation
    this.clip.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', '350')
      .attr('fill', 'none')
      .attr('stroke', 'none')

    this.line = d3.line()
      .curve(d3.curveCatmullRomClosed.alpha(.5))
      .x(d => d.x)
      .y(d => d.y)
  }

  renderNoiseLayer (points, color) {
    return this.clip.append('path')
      .datum(points)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('d', this.line)
  }

  render () {
    return html`
      <style>
        :host {
          all: initial;
          font-family: sans-serif;
          width: 500px;
          height: 500px;
          display: block;
        }
        svg {
          width: 100%;
          height: 100%;
        } 
        .noise-line {
          stroke-width: 1px;
        }
        .noise-line path:nth-child(2) {
          stroke: red;
        }
        .noise-line path:nth-child(3) {
          stroke: green;
        }
        .noise-line path:nth-child(4) {
          stroke: blue;
        }
      </style>
      <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="cut-off-bottom">
            <path transform="translate(-150 0)" d="M399.536 248.879L399.39.499c-91.423-.012-91.208-.012.646.001C491.889.513 625.21.346 800 0v500c-533.333 91.53-800 91.363-800-.5V0l207 .5 192.536 248.379z"/>
          </clipPath>
        </defs>
        <!-- graphics n shit -->
        <g fill="none" fill-rule="evenodd"><g transform="translate(82 82)"><circle stroke="#FFF" opacity=".2" cx="168" cy="168" r="100"/><circle stroke="#FFF" cx="168" cy="168" r="${this.radius - 5}"/><g transform="translate(150 128)"><path fill="#FFF" d="M0 56.141l15.647-29.128-1.868-5.127H8.372V15h9.94l12.096 33.117 5.245-2.105L38 52.453 26.605 57l-7.898-21.63L7.565 56.14z"/><rect fill="red" x="28" width="23" height="23" rx="11.5"/><text font-family="HelveticaNeue-Bold, Helvetica Neue" font-size="17" font-weight="bold" fill="#FFF"><tspan x="34.274" y="17">4</tspan></text></g></g><text font-family="RenoMono-Regular, Reno Mono" font-size="41" letter-spacing="-.976" fill="#FFF"><tspan x="71.957" y="68">12,412</tspan></text><text opacity=".5" font-family="RenoMono-Regular, Reno Mono" font-size="12" letter-spacing=".112" fill="#FFF"><tspan x="91.488" y="31">Total invocations</tspan></text></g>
        <!-- other shit -->
        <circle id="max-dot" cx="250" cy="${this.amplitude}" r="4" stroke-width="3" fill="white" />
      </svg>
    `
  }
}

customElements.define('dashbird-graph', DashbirdGraph)