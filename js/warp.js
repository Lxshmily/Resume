 $(function() {
  var json = [{
    id:1,
    obj:"项目一",
    images:"./images/photo01.png",
    title:"幼儿园官网项目",
    text:"本项目只作为幼儿园官网展示性网站，主要采用html/css编写，以渐进增强为原则构建页面，特效利用jQuery提供的方法，保证页面更好的展示。",
    environments:"windows 10&&sublime text 3",
    technology:"HTML/CSS、jQuery",
    duty:"主要切图，完成页面排版，利用jQuery编写页面效果，解决浏览器兼容性，与后台php开发配合完成数据交互。",
    link:"http://www.xylxyey.com/"
  },
  {
    id:2,
    obj:"项目二",
    images:"./images/photo02.png",
    title:"蓝悦教育项目",
    text:"同项目一，对于外包型项目，采用公司原有素材库，以及客户的意愿，构建html页面，引入jQuery库文件，以及kinMaxShow插件完成页面焦点图特效。",
    environments:"windows 10&&sublime text 3",
    technology:"HTML/CSS,jQuery",
    duty:"切图，完成页面排版布局，完成页面特效,解决兼容性问题,与php后台人员配合开发工作",
    link:"http://www.lanyuejiaoyu.com//"
  },
  {
    id:3,
    obj:"项目三",
    images:"./images/photo03.png",
    title:"数梦工厂项目",
    text:"本项目只是自己练手的一个项目，为了学习h5/c3新属性，焦点图采用c3的transform，广告展示采用c3阴影以及放大效果等等。页面架构利用bootstrap框架搭建，同时还引入swiper插件，开发更方便！很遗憾的是没有对手机做专门的适配，不过后面有尝试。",
    environments:"windows 10&&sublime text 3",
    technology:"HTML/CSS,jQuery，H5/C3，bootstrap",
    duty:"希望自己有进步",
    link:"https://lxshmily.github.io/smgc/"
  },{
    id:4,
    obj:"项目四",
    images:"./images/photo04.png",
    title:"微金所首页",
    text:"为了适应pc，pad，mobile，还是利用bootstrap搭建页面，只是一个单页面，自己查看getbootstrap.com/文档以及视频学习，做出来的，只为三端共享！",
    environments:"windows 10&&sublime text 3",
    technology:"HTML/CSS,jQuery，H5/C3，bootstrap",
    duty:"",
    link:"https://lxshmily.github.io/wjs/"
  },{
    id:5,
    obj:"DEMO展示",
    images:"./images/photo05.png",
    title:"原生js轮播特效",
    text:"利用原生js，采用交换json数据的方法实现3D轮播效果，引入了自己写的一个小运动框架，yaoyu-animate.js，可循环使用，只需传入id，和属性，属性以json的方式即可。中间使用了函数节流的方式，控制轮播图不会抢播。",
    environments:"windows 10&&sublime text 3",
    technology:"HTML/CSS,javascript，json",
    duty:"",
    link:"https://lxshmily.github.io/focus/"
  },{
    id:6,
    obj:"DEMO展示",
    images:"./images/photo06.png",
    title:"3D切割轮播图",
    text:"利用css3中transform属性，实现焦点图的旋转，移动，切割效果",
    environments:"windows 10&&sublime text 3",
    technology:"HTML/CSS，jQuery，CSS3",
    duty:"",
    link:"https://lxshmily.github.io/wf/"
  }];

function showObj(me){
  $.each(json,function(index,val){
    //console.log(json[index].id);
    if(me == json[index].id){
      //alert(json[index].title);
      var str = '';
      str +='<div class="modal-header">';
      str +='<button type="button" class="close">&times;</button>';
      str +='<h2>'+json[index].obj+'</h2>';
      str +='</div>';
      str +='<div class="modal-body">';
      str +='<div class="projects-top">';
      str +='<div class="img">';
      str +='<a href="#"><img src="'+json[index].images+'" alt="'+json[index].title+'"></a>';
      str +='</div>';
      str +='<div class="details">';
      str +='<h3 class="project-title">'+json[index].title+'</h3>';
      str +='<p>'+json[index].text+'</p>';
      str +='<h5>开发环境</h5>';
      str +='<p>Windows 10、sublime Text 3</p>';
      str +='<ul class="project-detail"> ';
      str +='<li>';
      str +='<h5>技术选型</h5>';
      str +='<p>'+json[index].technology+'</p>';
      str +='</li>';
      str +='<li>';
      str +='<h5>职责领域</h5>';
      str +='<p>'+json[index].duty+'</p>';
      str +='<li>';
      str +='<h5>相关链接</h5>';
      str +='<p>项目线上地址：<a href="'+json[index].link+'" target="_blank">'+json[index].link+'</a></p>';
      str +='</li>';
      str +='</ul>';
      str +='</div>';
      str +='</div>';
      str +='</div>';
    }
    $("#myModal").html(str);
  })
  $("#myModal").show(1000);

}



   $(".item").on("mouseenter mouseleave click",function(e) {
   	 var that = $(this);   //把当前this存起来
       var w = $(this).width(); // 得到盒子宽度
       var h = $(this).height();// 得到盒子高度
       var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
       // 获取x值
       var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
       // 获取y值
       var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
       // 将点的坐标对应的弧度值换算成角度度数值
      /* var dirName = new Array('上方','右侧','下方','左侧');*/
       if(e.type == 'mouseenter'){
         switch(direction){
         	case 0:
         		comeIn("top");  //鼠标从上方进入
         		break;
         	case 1:
         		comeIn("right");  //鼠标从右上方进入
         		break;
         	case 2:
         		comeIn("bottom");  //从右下角进入
         		break;
         	case 3:
         		comeIn("left");  //从左下角进入
         		break;
         }
       }else if(e.type == 'mouseleave'){
         switch(direction){
         	case 0:
         		getOut("top");
         		break;
         	case 1:
         		getOut("right");
         		break;
         	case 2:
         		getOut("bottom");
         		break;
         	case 3:
         		getOut("left");
         		break;
         	}
       }else{
        var id = this.getAttribute('data-id');
        //console.log(id);
        showObj(id);
       }

       function comeIn(str){
       	that.addClass("current");
       	that.children("div").removeClass().addClass(str);  //先清除前面的类
       }
       function getOut(str){
       	that.removeClass("current");
       	that.children("div").removeClass().removeClass(str);
       }
   });

   $("#myModal").on("click",".close",function(){
      $("#myModal").hide(1000);
   })

   
})