//主图案自适应

var main = document.getElementById("b-r");
var l = document.getElementById("l");
var r = document.getElementById("r");
var m = document.getElementById("m");

main.style.height = (main.offsetWidth / 1280) * 583 + "px";

// if (!browserRedirect()||hasScrollbar()) {
//     // l.style.width = (client().width - main.offsetWidth - 20) / 2 + 'px';
//     l.style.width = (document.body.clientWidth - main.offsetWidth) / 2 + 'px';
// } else {
//     l.style.width = (document.body.clientWidth - main.offsetWidth) / 2 + 'px';
// }
// r.style.width = l.style.width;
// l.style.height = main.style.height;
// r.style.height = main.style.height;
m.style.height = main.style.height;

// 视频自适应

var frr = document.getElementById("fr-r");
var frl = document.getElementById("fr-l");

frl.style.width = frr.offsetWidth + "px";
frl.style.height = (parseInt(frl.style.width) / 8.7) * 5.6 + "px";
// frr.style.height=frl.style.height;
window.onresize = function() {
  //主图案自适应

  main.style.height = (main.offsetWidth / 1280) * 583 + "px";
  // if (!browserRedirect()||hasScrollbar()) {
  //     console.log("yes--");
  //     l.style.width = (document.body.clientWidth - main.offsetWidth) / 2 + 'px';
  // }
  // else {
  //     console.log("no--");
  //     l.style.width = (document.body.clientWidth - main.offsetWidth) / 2 + 'px';
  // }
  // r.style.width = l.style.width;
  // l.style.height = main.style.height;
  // r.style.height = main.style.height;
  m.style.height = main.style.height;


  // 视频自适应

  var frr = document.getElementById("fr-r");
  var frl = document.getElementById("fr-l");

  frl.style.width = frr.offsetWidth + "px";
  frl.style.height = (parseInt(frl.style.width) / 8.7) * 5.6 + "px";
  // frr.style.height=frl.style.height;
};

// 阅读更多效果

var more = document.getElementsByClassName("more");
var panel = document.getElementById("panel");
var show = document.getElementById("show");
var s = document.getElementById("s");
for (let i = 0; i < more.length; i++) {
  // 这里用立即执行函数直接给我执行了？？？？
  more[i].onclick = function(e) {
    // 显示蒙版
    panel.style.display = "block";
    show.style.display = "block";
    // 隐藏滚动条
    document.body.style.overflow = "hidden";
    if (i == 0) {
      s.innerHTML =
        "<div><p>我国《刑法》中，非法集资根据主观态度、行为方式、危害结果等具体情况的不同，构成相应的罪名，其中最主要的是《刑法》中第176条非法吸收公众存款罪和第192条集资诈骗罪。《刑法》规定，犯非法吸收公众存款罪的，处三年以下有期徒刑或者拘役，并处或者单处二万元以上二十万元以下罚金；数额巨大或者有其他严重情节的，处三年以上十年以下有期徒刑，并处五万元以上五十万元以下罚金。犯集资诈骗罪，数额较大的，处五年以下有期徒刑或者拘役，并处二万元以上二十万元以下罚金；数额巨大或者有其他严重情节的，处五年以上十年以下有期徒刑，并处五万元以上五十万元以下罚金；数额特别巨大或者有其他特别严重情节的，处十年以上有期徒刑或者无期徒刑，并处五万元以上五十万元以下罚金或者没收财产。</p></div>";
    } else if (i == 1) {
      s.innerHTML =
        "<div><p>一是承诺高额回报。不法分子编造“天上掉馅饼”“一夜成富翁”的神话，许诺投资者高额回报。为了骗取更多的人参与集资，非法集资人在集资初期往往按时足额兑现承诺本息，待集资达到一定规模后，便秘密转移资金或携款潜逃，使集资参与人遭受经济损失。</p><p>二是编造虚假项目。不法分子大多通过注册合法的公司或企业，打着响应国家产业政策、开展创业创新等幌子，编造各种虚假项目，有的甚至组织免费旅游、考察等，骗取社会公众信任。</p><p>三是以虚假宣传造势。不法分子在宣传上往往一掷千金，聘请明星代言、名人站台，在各大广播电视、网络等媒体发布广告、在著名报刊上刊登专访文章、雇人广为散发宣传单、进行社会捐赠等方式，制造虚假声势。</p><p>四是利用亲情诱骗。有些类传销非法集资的参与人，为了完成或增加自己的业绩，不惜利用亲情、地缘关系，编造自己获得高额回报的谎言，拉拢亲朋、同学或邻居加入，使参与人员迅速蔓延，集资规模不断扩大。</p></div>";
    } else {
      s.innerHTML =
        "<div><p>2.了解银行员工行为规范、保险销售行为规范等，不与银行、保险从业人员个人签订投资理财协议，不接收从业人员个人出具的任何收据、欠条。知道非法集资及有关违规行为举报投诉方式，及时提供非法集资线索。</p><p>3.不要轻易相信所谓的高息“保险”、高息“理财”，不被小礼品打动，不接收“先返息”之类的诱饵。通过正规渠道购买金融产品，购买保险过程中要尽量做到“三查、两配合”，即通过保险公司网站、客户热线或监管部门、行业协会网站查人员、查产品、查单证，配合做好转账缴费、配合做好回访。<p><p>4.注意保护个人信息，关注正规机构发布的银行、保险广告信息和非法集资风险提示，遇到涉嫌非法集资行为及时举报投诉。</p><p>5.如遇以下情形的“理财”“保险”产品，务必提高警惕：</p><p>一是以“看广告、赚外快”“消费返利”为幌子的；</p><p>二是以境外投资股权、期权、外汇、贵金属等为幌子的；</p><p>三是以投资养老产业可获高额回报或“免费”养老为幌子的；</p><p>四是以私募入股、合伙办企业为幌子，但不办理企业工商注册登记的；</p><p>五是以投资虚拟货币、区块链等为幌子的；</p><p>六是以“扶贫“互助”“慈善”等为幌子的；</p><p>七是在街头、商场、超市等发放广告传单的；</p><p>八是以组织考察、旅游、讲座等方式招揽老年群众的；</p><p>九是“投资、理财”公司、网站及服务器在境外的；</p><p>十是要求以现金方式或向个人账户、境外账户缴纳投资款的。</p></div>";
    }
    show.style.opacity = 0;
    var t = setInterval(function() {
      show.style.opacity = parseFloat(show.style.opacity) + 0.01;
      if (show.style.opacity >= 1) {
        clearInterval(t);
      }
    }, 10);

    // 文字溢出
    // var lp = document.getElementById("s").children[0].children;
    // for (var j = 0; j < lp.length; j++) {
    //     console.log("hah");
    //   lp[j].style.width = document.getElementById("s").style.width;
    // }


    // 阻止冒泡
    if (e && e.stopPropagation) {
      e.stopPropagation();
    } else {
      window.event.cancelBubble = true;
    }
    return false;
  };
}

document.body.addEventListener("click", function(event) {
  var e = event || window.event;
  var target = e.target ? e.target.id : event.srcElement.id;
  console.log(target);
  if (target !== "show") {
    console.log("wo");
    panel.style.display = "none";
    show.style.display = "none";
    document.body.style.overflow = "auto";
    // if (!browserRedirect()||hasScrollbar()) {
    //     // l.style.width = (client().width - main.offsetWidth - 20) / 2 + 'px';
    //     console.log('fdsafdf');
    //     l.style.width = (document.body.clientWidth - main.offsetWidth) / 2 + 'px';
    // } else {
    //     console.log("123123");
    //     l.style.width = (document.body.clientWidth - main.offsetWidth) / 2 + 'px';
    // }
    // r.style.width = l.style.width;
    // l.style.height = main.style.height;
    // r.style.height = main.style.height;
    m.style.height = main.style.height;
  }
});
// 视屏木马
var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: ".swiper-pagination",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  coverflow: {
    rotate: 0, // 旋转的角度
    stretch: 100, // 拉伸   图片间左右的间距和密集度
    depth: 150, // 深度   切换图片间上下的间距和密集度
    modifier: 3, // 修正值 该值越大前面的效果越明显
    slideShadows: false // 页面阴影效果
  }
});
