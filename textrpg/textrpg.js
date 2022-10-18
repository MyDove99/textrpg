let php=100,pmp=50,pad=6,pap=15,plv=1; // 플레이어 체력/마나/플레이어 공격력/주문력/플레이어레벨
let pmad=8,pmhp=100,pmmp=50; // 플레이어 최대체력/최대마나
let pexp=0,pmexp=100,move=0,kboss=0,pscore=0 //플레이어 경험치 / 게임 진행도 / 잡은보스 / 획득점수
let ename="",ehp=0,emhp=0,ead=0,emad=0,eimg="",eexp=0; //적 이름 체력 최대체력 공격력 최대공격력 이미지
let applus=0; // 주문력 증가량
let onspell=1; // 주문 사용 가능
let skillno =0; // 삭제할 스킬 버튼 번호
let bosscount=0,bossMcount=9,bossorder=1,bossOn=false,bossskill={name:"",damage:0},bossSON=false;

    var spell1={name:"벤투스",spellno:"spell/1",smp:12,type:"attack",effect:"지팡이에서 바람을 날립니다."}; //바람
    var spell2={name:"아쿠아멘티",spellno:"spell/2",smp:15,type:"attack",effect:"지팡이에서 물을 뿜어냅니다."}; //물
    var spell3={name:"에피스키",spellno:"spell/3",smp:20,type:"hill",effect:"자그마한 상처들을 치료합니다."}; //치료 
    var spell4={name:"인센디오",spellno:"spell/4",smp:20,type:"attack",effect:"지팡이에서 불을 뿜어냅니다."}; //불
    var spell5={name:"프로테고",spellno:"spell/5",smp:40,type:"defence",effect:"순간적으로 방어막을 형성합니다."}; //방어
    
    var spell6={name:"봄바르다",spellno:"spell/6",smp:40,type:"attack",effect:"대상을 폭발 시킵니다."}; //폭발
    var spell7={name:"아쿠아에렉토",spellno:"spell/7",smp:30,type:"attack",effect:"아쿠아멘티 보다 많은 물을 뿜어냅니다."}; //물
    var spell8={name:"불네라 사넨투르",spellno:"spell/8",smp:60,type:"hill",effect:"모든 상처를 치유합니다."}; //치유
    var spell9={name:"섹텀셈프라",spellno:"spell/9",smp:50,type:"attack",effect:"지팡이가 지나간 자리를 베어냅니다."}; //절단
    var spell10={name:"아퍼레이션",spellno:"spell/10",smp:60,type:"event",effect:"순간이동 합니다."}; //도망
    
    var spell11={name:"봄바르다 막시마",spellno:"spell/11",smp:80,type:"attack",effect:"봄바르다보다 더 큰 폭발을 일으킵니다."}; //폭발
    var spell12={name:"파이어스톰",spellno:"spell/12",smp:70,type:"attack",effect:"지팡이에서 거대한 불기둥을 소환합니다."}; //불마법
    var spell13={name:"리디큘러스",spellno:"spell/13",smp:30,type:"attack",effect:"상대방을 우스꽝스럽게 변신시킵니다."}; //변신
    var spell14={name:"벤투스트리아",spellno:"spell/14",smp:35,type:"attack",effect:"지팡이에서 돌풍을 날립니다."}; //바람
    var spell15={name:"스투페파이",spellno:"spell/15",smp:15,type:"attack",effect:"지팡이에서 충격파를 뿜습니다."}; //충격

    var spell16={name:"글레시우스",spellno:"spell/16",smp:45,type:"attack",effect:"대상을 순간적으로 얼립니다."}; //얼음
    var spell17={name:"임페리우스",spellno:"spell/17",smp:100,type:"event",effect:"대상을 조종하는 저주입니다."}; //조종저주
    var spell18={name:"크루시오",spellno:"spell/18",smp:120,type:"attack",effect:"대상을 끝없는 고통에 빠트리는 저주입니다."}; // 고통저주
    var spell19={name:"아바다 케다브라",spellno:"spell/19",smp:pmmp,type:"attack",effect:"즉사의 주문입니다."}; //즉결처형
    var spell20={name:"엑스펙토 패트로눔",spellno:"spell/20",smp:pmmp/2,type:"attack",effect:"자신의 수호신을 소환합니다."}; // 최종

    var epell1={name:"산성독",damage:25};
    var epell2={name:"폭풍",damage:50};
    var epell3={name:"브레스",damage:100};
    var epell4={name:"아바다 케다브라",damage:300};
    var epell5={name:"물어뜯기",damage:37};

    var spellbook=[spell1,spell2,spell3,spell4,spell5,spell6,spell7,spell8,spell9,spell10,
        spell11,spell12,spell13,spell14,spell15,spell16,spell17,spell18,spell19,spell20];

var pspell = [spell1,{name:"",spellno:"",smp:0},{name:"",spellno:"",smp:0},{name:"",spellno:"",smp:0}];

$(document)
.on('click','#actioncheck',function(){ //1번 버튼
    if($("#btn1").val()=="start2"){ //게임입장
        $("#gamehome2").empty();
        $("#gamehome2").append("<li><b style='color: red;'>금지된 숲</b>에 입장하셨습니다.</li>");
        $("#gamehome2").append("<li>1번을 눌러 움직이세요</li>");
        $("#btn1").val("start");
    }else if($("#btn1").val()=="start"){ //게임시작
        $.game();
    }else if($("#btn1").val()=="jellyeat"){ //젤리먹기
        $("#gamehome2").empty();
        $.jelly();
    }else if($("#btn1").val()=="move"){ //움직이기
        $("#gamehome2").empty();
        $("#enemyimg").attr("src","owl.png");
        $("#ename").text("적 이름");
        $.game();
    }else if($("#btn1").val()=="attack"){ //공격
        $("#gamehome2").empty();
        $.attack();
    }else if($("#btn1").val()=="drink"){ //호수 물 마시기
        $.drink();
    }else if($("#btn1").val().includes("spell")==true){
        const str1 = $("#btn1").val().split("/");
        $("#gamehome2").empty();
        $.spell(str1[1]);
    }else if($("#btn1").val()=="skillremove"){ //스킬삭제확인
        $("#gamehome2").empty();
        $.skillremove();
    }else if($("#btn1").val()=="1remove"){ //1번 스킬삭제
        $.maxskill(0);
    }else{
        return;
    }
})
.on('click','#actioncheck1',function(){ //2번 버튼
    if($("#btn2").val()=="jellynot"){ //젤리 안먹기
        $("#gamehome2").empty();
        $.game();
    }else if($("#btn2").val()=="notdrink"){ //호수 물 안마시기
        $("#gamehome2").empty();
        $.game();
    }else if($("#btn2").val()=="skill"){ //호수 물 안마시기
        $("#gamehome2").empty();
        $.skill();
    }else if($("#btn2").val()=="skillNremove"){ //스킬 삭제 안하기
        $("#gamehome2").empty();
        $.skillNremove();
    }else if($("#btn2").val().includes("spell")==true){
        const str1 = $("#btn2").val().split("/");
        $("#gamehome2").empty();
        $.spell(str1[1]);
    }else if($("#btn2").val()=="2remove"){ //2번 스킬삭제
        $.maxskill(1);
    }else if($("#btn2").val()=="notice"){ //호수 물 안마시기
        $("#gamehome2").empty();
        $("#gamehome2").append("<li>당신이 하나 하나 행동할때마다 적을 만나기도 하며</li>");
        $("#gamehome2").append("<li>여러 이벤트를 만나기도 합니다.</li>");
        $("#gamehome2").append("<li>당신의 스킬은 소모값에 비례해서 적에게 데미지가 들어갑니다.</li>");
        $("#gamehome2").append("<li>보스는 일정횟수마다 만나게 되며 매우 강력하니 준비하세요.</li>");
        $("#gamehome2").append("<li>보스는 스킬을 가지기도 하며 안가지기도 합니다.</li>");
        $("#gamehome2").append("<li>모든 행동은 당신의 선택에 달려있습니다.</li>");
        $("#gamehome2").append("<li>행운을 빕니다.</li>");
        $("#gamehome2").append("<li>1번을 눌러 시작하세요.</li>");
        $("#btn1").val("start");
    }else{
        return;
    }
})
.on('click','#actioncheck2',function(){ //3번 버튼
    if($("#btn3").val()=="defence"){ //막기
        $("#gamehome2").empty();
        $.defence();
    }else if($("#btn3").val().includes("spell")==true){
        const str1 = $("#btn3").val().split("/");
        $("#gamehome2").empty();
        $.spell(str1[1]);
    }else if($("#btn3").val()=="3remove"){ //3번 스킬삭제
        $.maxskill(2);
    }else{
        return;
    }
})
.on('click','#actioncheck3',function(){ //4번 버튼
    if($("#btn4").val()=="run"){ //도망
        $("#gamehome2").empty();
        $.run();
    }else if($("#btn4").val().includes("spell")==true){
        const str1 = $("#btn4").val().split("/");
        $("#gamehome2").empty();
        $.spell(str1[1]);
    }else if($("#btn4").val()=="4remove"){ //4번 스킬삭제
        $.maxskill(3);
    }else{
        return;
    }
})
$.game=function(){ //게임move
    move=move+1;
    $("#move").text(move+" 번째 행동");
    $.hill();
    if(bosscount==bossMcount){
        $("#gamehome2").empty();
        $("#gamehome2").append("<li style='color: red;'>!보스를 만났습니다!</li>");
        $.boss();
        $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
        $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");
        bosscount=0,bossMcount=bossMcount+(5*bossorder);
    }else{
        var random = Math.ceil( Math.random()*10 );
        if(random<7){
            $("#gamehome2").empty();
            $("#gamehome2").append("<li style='color: red;'>!적과 조우했습니다!</li>");
            $.enemy1();
            $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
            $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");
        }
        else{
            $("#gamehome2").empty();
            $.event1();
        }
    }
}
$.enemy1=function(){ //적 정보
    var random = Math.ceil( Math.random()*16);
    if(random<3){
        ename="박쥐",ehp=29+plv,emhp=29+plv,ead=2+plv,emad=5+plv,eimg="bat.png",eexp=19+plv;
    }else if(random<7){
        ename="스켈레톤",ehp=39+plv,emhp=39+plv,ead=1+plv,emad=3+plv,eimg="skeleton.png",eexp=19+plv;
    }else if(random<10){
        ename="거미",ehp=19+plv,emhp=19+plv,ead=4+plv,emad=7+plv,eimg="spider.png",eexp=19+plv;
    }else if(random<13){
        ename="고블린",ehp=24+plv,emhp=24+plv,ead=3+plv,emad=6+plv,eimg="goblin.png",eexp=19+plv;
    }else{
        ename="좀비",ehp=34+plv,emhp=34+plv,ead=3+plv,emad=3+plv,eimg=" zombie.png",eexp=19+plv;
    }
    $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
    $("#enemyhp").text(ehp+"/"+emhp);
    $("#enemyad").text(ead+"~"+emad);
    $("#enemyimg").attr("src",eimg);
    $("#ename").text(ename);
}
$.event1=function(){ //이벤트
    var event = Math.ceil( Math.random()*100 );
    if(event<20){
        $("#gamehome2").append("<li>나뭇가지에 찔렸습니다.</li>");
        $("#gamehome2").append("<li>체력이 <span style='color: red;'>10 깍입니다.</span></li>");
        php=php-10;
        $("#php").text(php+"/"+pmhp);
        if(php<=0){
            $.pend();
        }else{
            $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
            $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
        }
    }else if(event<70){
        $("#gamehome2").append("<li>버티 보트의 온갖 맛이 나는 강낭콩 모양의 젤리를 주웠습니다.</li>");
        $("#gamehome2").append("<li>먹기전까지 무슨 맛인지 모릅니다.</li>");
        $("#gamehome2").append("<li>드시겠습니까?</li>");
        $("#gamehome2").append("<li>드시겠다면 1번, 버리고 가겠다면 2번을 클릭하세요.</li>");
        $("#btn1").val("jellyeat"),$("#btn2").val("jellynot"),$("#btn3").val(""),$("#btn4").val("");
    }else if(event<80){
        $("#gamehome2").append("<li>당신은 해그리드를 만났습니다.</li>");
        $("#gamehome2").append("<li>해그리드가 당신을 <span style='color: #FFFF00;'>치유</span>해줍니다.</li>");
        php=pmhp;
        $("#php").text(php+"/"+pmhp);
        $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
        $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
    }else if(event<90){
        $("#gamehome2").append("<li>당신은 <span style='color: #00FFFF;'>호수</span>를 찾았습니다.</li>");
        $("#gamehome2").append("<li>물을 떠 마시겠습니까?</li>");
        $("#gamehome2").append("<li>드시겠다면 1번, 그냥 가겠다면 2번을 클릭하세요.</li>");
        $("#btn1").val("drink"),$("#btn2").val("notdrink"),$("#btn3").val(""),$("#btn4").val("");
    }else if(event<95){
        $("#gamehome2").append("<li style='color: red;'>!디멘터를 조우했습니다!</li>");
        $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
        $.dementor();
        $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");
    }else{
        $("#gamehome2").append("<li>당신은 <span style='color: #00FFFF;'>유니콘</span>을 발견했습니다.</li>");
        $("#gamehome2").append("<li>레벨이 증가합니다.</li>");
        $("#enemyimg").attr("src"," unicon.png");
        $("#ename").text("유니콘");
        eexp=pmexp-pexp;
        $.plevel();
    }
}
$.jelly=function(){ //젤리
    var jelly = Math.ceil( Math.random()*5 );
    if(jelly==1){
        $("#gamehome2").append("<li>당신은 <span style='color:#663300;'>구토맛 젤리</span>를 먹었습니다.</li>");
        $("#gamehome2").append("<li>당신은 구역질을 참지 못하고 토를 했습니다.</li>");
        $("#gamehome2").append("<li>체력이 <span style='color: red;'>10 깍입니다.</span></li>");
        $("#gamehome2").append("<li>당신의 미지의 대한 용감함에 10점을 드립니다!</li>");
        pscore=pscore+10;
        $("#pscore").text(pscore);
        php=php-10;
        $("#php").text(php+"/"+pmhp);
        if(php<=0){
            $.pend();
        }else{
            $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
        }
    }else if(jelly==2){
        $("#gamehome2").append("<li>당신은 <span style='color:#99FFFF;'>비누맛 젤리</span>를 먹었습니다.</li>");
        $("#gamehome2").append("<li>당신은 속이 깨끗해짐을 느낍니다.</li>");
        $("#gamehome2").append("<li>주문력이 3증가 합니다.</li>");
        $("#gamehome2").append("<li>당신의 미지의 대한 용감함에 10점을 드립니다!</li>");
        pscore=pscore+10;
        $("#pscore").text(pscore);
        applus=applus+3;
        $("#pap").text(pap+"+"+applus);
        $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
    }else if(jelly==3){
        $("#gamehome2").append("<li>당신은 <span style='color:#66FF66;'>코딱지맛 젤리</span>를 먹었습니다.</li>");
        $("#gamehome2").append("<li>당신은 먹어본것 같은 감각을 떠올립니다.</li>");
        $("#gamehome2").append("<li>당신의 미지의 대한 용감함에 10점을 드립니다!</li>");
        pscore=pscore+10;
        $("#pscore").text(pscore);
        $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
        
    }else if(jelly==4){
        $("#gamehome2").append("<li>당신은 <span style='color:#FFFFCC;'>썩은 계란맛 젤리</span>를 먹었습니다.</li>");
        $("#gamehome2").append("<li>당신은 속이 더러워지는것을 느낍니다.</li>");
        $("#gamehome2").append("<li>마나가 10 깍입니다.</li>");
        $("#gamehome2").append("<li>당신의 미지의 대한 용감함에 10점을 드립니다!</li>");
        pscore=pscore+10;
        $("#pscore").text(pscore);
        if(10<=pmp){
            pmp=pmp-10;
        }else{
            pmp=0;
        }
        $("#pmp").text(pmp+"/"+pmmp);
        $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
    }else if(jelly==5){
        $("#gamehome2").append("<li>당신은 <span style='color:#990066;'>지렁이맛 젤리</span>를 먹었습니다.</li>");
        $("#gamehome2").append("<li>당신은 진짜 지렁이를 먹은 기분을 느낍니다.</li>");
        $("#gamehome2").append("<li>경험치가 10 증가합니다.</li>");
        $("#gamehome2").append("<li>당신의 미지의 대한 용감함에 10점을 드립니다!</li>");
        eexp=10;
        $.plevel();
        pscore=pscore+10;
        $("#pscore").text(pscore);
    }
    $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
}
$.attack=function(){ //공격
    var pattack = Math.floor( Math.random()*(pmad-pad+1))+pad;
    var pcritical = Math.floor( Math.random()*100)+1;
    if(pcritical <4){
        pattack = pattack*2;
        $("#gamehome2").append("<li style='color: red;'>당신은 "+ename+"의 급소를 때렸다!</li>");
    }
    $("#gamehome2").append("<li>당신이 "+ename+"에게 <span style='color:#FF9900; text-shadow: none;'>"+pattack+"의 데미지를 입혔습니다.</span></li>");
    ehp=ehp-pattack;
    $("#enemyhp").text(ehp+"/"+emhp);
    if(ehp<=0){
        $.eend();
    }else{
        $.hit();
        $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
    }
}
$.hit=function(){ //맞기
    if(bossOn==true){
        if(bossSON==true){
            var skill = Math.floor( Math.random()*10)+1;
            if(skill<4){
                $("#gamehome2").append("<li style='color: red;'>보스의 "+bossskill.name+"!</li>");
                $("#gamehome2").append("<li>당신은 "+ename+"에게 <span style='color:#CC33FF; text-shadow: none;'>"+bossskill.damage+"의 데미지를 입었습니다.</span></li>");
                php=php-bossskill.damage;
                $("#php").text(php+"/"+pmhp);
                if(php<=0){
                    $.pend();
                }
            }else{
                var ecritical = Math.floor( Math.random()*100)+1;
                var eattack = Math.floor( Math.random()*(emad-ead+1))+ead;
                if(ecritical <4){
                    eattack = eattack*2;
                    $("#gamehome2").append("<li style='color: red;'>당신은 급소를 맞았다!</li>");
                }
                $("#gamehome2").append("<li>당신은 "+ename+"에게 <span style='color:#CC33FF; text-shadow: none;'>"+eattack+"의 데미지를 입었습니다.</span></li>");
                php=php-eattack;
                $("#php").text(php+"/"+pmhp);
                if(php<=0){
                    $.pend();
                }
            }
        }else{
            var ecritical = Math.floor( Math.random()*100)+1;
            var eattack = Math.floor( Math.random()*(emad-ead+1))+ead;
            if(ecritical <4){
                eattack = eattack*2;
                $("#gamehome2").append("<li style='color: red;'>당신은 급소를 맞았다!</li>");
            }
            $("#gamehome2").append("<li>당신은 "+ename+"에게 <span style='color:#CC33FF; text-shadow: none;'>"+eattack+"의 데미지를 입었습니다.</span></li>");
            php=php-eattack;
            $("#php").text(php+"/"+pmhp);
            if(php<=0){
                $.pend();
            }
        }
    }else{
        var ecritical = Math.floor( Math.random()*100)+1;
        var eattack = Math.floor( Math.random()*(emad-ead+1))+ead;
        if(ecritical <4){
            eattack = eattack*2;
            $("#gamehome2").append("<li style='color: red;'>당신은 급소를 맞았다!</li>");
        }
        $("#gamehome2").append("<li>당신은 "+ename+"에게 <span style='color:#CC33FF; text-shadow: none;'>"+eattack+"의 데미지를 입었습니다.</span></li>");
        php=php-eattack;
        $("#php").text(php+"/"+pmhp);
        if(php<=0){
            $.pend();
        }
    }
}
$.pend=function(){ // 플레이어 종료
    $("#btn1").val(""),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
    $("#gamehome2").append("<li style='color: red;'>※당신은 죽었습니다※</li>");
    $("#gamehome2").append("<li>당신은 "+move+"번 행동 했으며</li>");
    $("#gamehome2").append("<li>당신은 "+pscore+"점을 획득 했으며</li>");
    $("#gamehome2").append("<li>당신은 "+kboss+"마리의 보스를 잡았습니다!</li>");
    $("#gamehome2").append("<li>호그와트로 돌아가서 점수를 저장하세요!</li>");
    $.gameend();
}
$.eend=function(){ // 적 종료
    $("#gamehome2").append("<li>"+ename+"는(은) 죽었습니다.</li>");
    $("#gamehome2").append("<li> 경험치"+eexp+"을(를) 획득합니다.</li>");
    $("#enemyhp").text("0/0");
    $("#enemyad").text("0/0");
    $("#enemyimg").attr("src"," owl.png");
    $("#ename").text("적 이름");
    $.plevel();
    pscore=pscore+eexp;
    $("#pscore").text(pscore);
    if(bossOn==true){
        bossOn=false;
        if(php<pmhp){
            php=php+(Math.ceil(pmhp/100*20));
            if(pmhp<php){
                php=pmhp;
            }
        }
        $("#php").text(php+"/"+pmhp);
        kboss=kboss+1;
        $("#kboss").text(kboss+" 마리");
        $("#enemy tr").eq(5).remove();
    }else{
        bosscount=bosscount+1;
    }
}
$.plevel=function(){ //레벨업
    pexp=pexp+eexp;
    pmexp=80+(20*plv);
    if(pmexp<=pexp){
        pexp=pexp-pmexp;
        plv=plv+1,pmhp=pmhp+10,pmmp=pmmp+5,pmp=pmmp,php=pmhp,pad=pad+1,pmad=pmad+1,pap=pap+3;
        $("#gamehome2").append("<li>레벨 업!</li>");
        $("#gamehome2").append("<li>체력 10 증가 / 마나 5 증가 / 공격력 1 증가 / 주문력 3증가</li>");
        $("#php").text(php+"/"+pmhp);
        $("#pmp").text(pmp+"/"+pmmp);
        $("#pad").text(pad+"~"+pmad);
        $("#pap").text(pap+"+"+applus);
        $("#plv").text(plv);
        pmexp=80+(20*plv);
        $("#pexp").text(pexp+"/"+pmexp);
        if(plv % 2==0 && plv!==0){
            $("#gamegome2").empty();
            $("#gamehome2").append("<li style='color:#FFFF00; text-shadow: none;'>※스킬을 새로 배웁니다※</li>");
            onspell=onspell+1;
            if(onspell==2){
                pspell[1]=spell2;
                $("#pspell").append("<tr><td>"+spell2.name+"</td><td>"+spell2.smp+"</td></tr>");
                $("#pspell").append("<tr><td colspan='2'>"+spell2.effect+"</td></tr>");
            }else if(onspell==3){
                pspell[2]=spell3;
                $("#pspell").append("<tr><td>"+spell3.name+"</td><td>"+spell3.smp+"</td></tr>");
                $("#pspell").append("<tr><td colspan='2'>"+spell3.effect+"</td></tr>");
            }else if(onspell==4){
                pspell[3]=spell4;
                $("#pspell").append("<tr><td>"+spell4.name+"</td><td>"+spell4.smp+"</td></tr>");
                $("#pspell").append("<tr><td colspan='2'>"+spell4.effect+"</td></tr>");
            }else if(5<=onspell){
                $("#gamehome2").append("<li>"+spellbook[onspell].name+"을 배우려고 합니다.</li>");
                $("#gamehome2").append("<li>마나소모값:"+spellbook[onspell].smp+"</li>");
                $("#gamehome2").append("<li>설명:"+spellbook[onspell].effect+"</li>");
                $("#gamehome2").append("<li>더 이상 스킬을 배울 수 없습니다!</li>");
                $("#gamehome2").append("<li>스킬을 한 개 삭제하고 배우시겠습니까?</li>");
                $("#gamehome2").append("<li>배우시겠다면 1번 , 그냥 가겠다면 2번을 클릭하세요.</li>");
                $("#btn1").val("skillremove"),$("#btn2").val("skillNremove"),$("#btn3").val(""),$("#btn4").val("");
            }
        }else{
            $("#pexp").text(pexp+"/"+pmexp);
            $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
            $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
        }
    }else{
        $("#pexp").text(pexp+"/"+pmexp);
        $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
        $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
    }
}
$.drink=function(){ //호수
    var drink = Math.floor( Math.random()*3)+1;
    if(drink==1){
        $("#gamehome2").append("<li style='color:#CC33FF; text-shadow: none;'>저주 받은 호수였습니다!</li>");
        $("#gamehome2").append("<li>당신은 몸에서 수분이 빠져나가는 기분을 느낍니다.</li>");
        $("#gamehome2").append("<li>당신의 마나가 절반 사라집니다.</li>");
        pmp=Math.ceil(pmp/2);
        $("#pmp").text(pmp+"/"+pmmp);
    }else if(drink==2){
        $("#gamehome2").append("<li style='color:#FFFF00; text-shadow: none;'>당신은 축복 받은 물을 마십니다.</li>");
        $("#gamehome2").append("<li>당신의 마나가 채워집니다.</li>");
        if(pmp<pmmp){
            pmp=pmp*2;
            if(pmmp<pmp){
                pmp=pmmp;
            }
        }
        $("#pmp").text(pmp+"/"+pmmp);
    }else if(drink==3){
        $("#gamehome2").append("<li'>당신은 안전하게 물을 마십니다.</li>");
    }
    $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
    $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
}
$.hill=function(){ // 걸을때 힐
    if(php<pmhp){
        php=php+(Math.ceil(pmhp/100*4));
        if(pmhp<php){
            php=pmhp;
        }
    }
    if(pmp<pmmp){
        pmp=pmp+(Math.ceil(pmmp/100*3));
        if(pmmp<pmp){
            pmp=pmmp;
        }
    }
    $("#php").text(php+"/"+pmhp);
    $("#pmp").text(pmp+"/"+pmmp);
}
$.defence=function(){ //막기
    var eattack = Math.floor( Math.random()*(emad-ead+1))+ead;
    var defence = Math.floor( Math.random()*100)+1;
    if(defence<6){
        eattack=0;
        php=php-eattack
        $("#gamehome2").append("<li>당신은 공격을 회피하였습니다.</li>");
    }else{
        php=php-(Math.ceil(eattack/2));
        $("#gamehome2").append("<li>당신은 방어를 하였습니다.</li>");
        $("#gamehome2").append("<li>당신은 "+ename+"에게 <span style='color:#CC33FF; text-shadow: none;'>"+(Math.ceil(eattack/2))+"의 데미지를 입었습니다.</span></li>");
        $("#php").text(php+"/"+pmhp);
        if(php<=0){
            $.pend();
        }
    }
    if(pmp<pmmp){
        pmp=pmp+5;
        if(pmmp<pmp){
            pmp=pmmp;
        }
    }
    $("#pmp").text(pmp+"/"+pmmp);
    $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
}
$.run=function(){ //도망
    var eattack = Math.floor( Math.random()*(emad-ead+1))+ead;
    var run = Math.floor( Math.random()*10)+1;
    if(run==1){
        $("#gamehome2").append("<li>당신은 도망쳤습니다.</li>");
        $("#enemyhp").text("0/0");
        $("#enemyad").text("0/0");
        $("#enemyimg").attr("src","C:/Users/admin/Downloads/GvPnTY5.jpg");
        $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
        $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
    }else{
        php=php-eattack;
        $("#gamehome2").append("<li>당신은 도망가지 못했습니다.</li>");
        $("#gamehome2").append("<li>당신은 "+ename+"에게 <span style='color:#CC33FF; text-shadow: none;'>"+eattack+"의 데미지를 입었습니다.</span></li>");
        $("#php").text(php+"/"+pmhp);
        if(php<=0){
            $.pend();
        }else{
            $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
        }
    }
}
$.skill=function(){ //스킬버튼
    $("#gamehome2").append("<li> 1:"+pspell[0].name+" 2:"+pspell[1].name+" 3:"+pspell[2].name+" 4:"+pspell[3].name+"</li>");
    $("#btn1").val(pspell[0].spellno),$("#btn2").val(pspell[1].spellno),$("#btn3").val(pspell[2].spellno),$("#btn4").val(pspell[3].spellno);
}
$.spell=function(spellno){ //주문주창
    if(spellbook[spellno-1].smp<=pmp){
        pmp=pmp-spellbook[spellno-1].smp;
        $("#pmp").text(pmp+"/"+pmmp);
        $("#gamehome2").append("<li>"+spellbook[spellno-1].name+"!</li>");
        if(spellbook[spellno-1].type=="attack"){
            var damage = spellbook[spellno-1].smp+Math.ceil(spellbook[spellno-1].smp/100*(pap+applus));
            $("#gamehome2").append("<li>"+spellbook[spellno-1].smp+" 마나를 소모하였습니다.</li>");
            $("#gamehome2").append("<li>당신이 "+ename+"에게 <span style='color:#FF9900; text-shadow: none;'>"+damage+"의 데미지를 입혔습니다.</span></li>");
            ehp=ehp-damage;
            $("#enemyhp").text(ehp+"/"+emhp);
            if(ehp<=0){
                $.eend();
            }else{
                $.hit();
                $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
                $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");
            }
        }else if(spellbook[spellno-1].type=="hill"){
            var hill = spellbook[spellno-1].smp+Math.ceil(spellbook[spellno-1].smp/100*(pap+applus));
            $("#gamehome2").append("<li>"+spellbook[spellno-1].smp+" 마나를 소모하였습니다.</li>");
            if(php<pmhp){
                php=php+hill;
                if(pmhp<php){
                    php=pmhp;
                }
            }
            $("#php").text(php+"/"+pmhp);
            $("#gamehome2").append("<li>당신은 <span style='color: #FFFF00;'>"+hill+"만큼 회복했습니다.</span></li>");
            $.hit();
            $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
            $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");

        }else if(spellbook[spellno-1].type=="defence"){
            $("#gamehome2").append("<li>"+spellbook[spellno-1].smp+" 마나를 소모하였습니다.</li>");
            $("#gamehome2").append("<li>당신은 공격을 막았습니다.</li>");
            $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
            $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");
        }
    }else{
        $("#gamehome2").append("<li>마나가 부족합니다.</li>");
        $("#gamehome2").append("<li>다시 선택하세요.</li>");
        $("#gamehome2").append("<li>1:공격 2:스킬 3:방어 4:도망</li>");
        $("#btn1").val("attack"),$("#btn2").val("skill"),$("#btn3").val("defence"),$("#btn4").val("run");
    }
}
$.boss=function(){ //보스
    bossOn=true;
    if(bossorder==1){
        ename="아크로만툴라",ehp=80,emhp=80,ead=8,emad=12,eimg=" bspider.png",eexp=50;
        $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
        $("#enemyhp").text(ehp+"/"+emhp);
        $("#enemyad").text(ead+"~"+emad);
        $("#enemyimg").attr("src",eimg);
        $("#enemy").append("<tr><td>"+epell1.name+"</td><td>"+epell1.damage+"</td></tr>");
        $("#gamecenter").css("background-image","url(' bg1.png')");
        $("#gamecenter").css("background-repeat","no-repeat;");
        $("#gamecenter").css("background-size","cover;");
        $("#gamecenter").css("background-position","center;");
        bossorder=bossorder+1;
        bossskill=epell1;
        bossSON=true;
    }else if(bossorder==2){
        ename="늑대인간",ehp=120,emhp=120,ead=16,emad=20,eimg=" wearwolf.png",eexp=100;
        $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
        $("#enemyhp").text(ehp+"/"+emhp);
        $("#enemyad").text(ead+"~"+emad);
        $("#enemyimg").attr("src",eimg);
        $("#enemy").append("<tr><td>"+epell5.name+"</td><td>"+epell5.damage+"</td></tr>");
        $("#gamecenter").css("background-image","url(' bg3.png')");
        $("#gamecenter").css("background-repeat","no-repeat;");
        $("#gamecenter").css("background-size","cover;");
        $("#gamecenter").css("background-position","center;");
        bossorder=bossorder+1;
        bossskill=epell5;
        bossSON=true;
    }else if(bossorder==3){
        ename="그리폰",ehp=200,emhp=200,ead=17,emad=22,eimg=" gri.png",eexp=150;
        $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
        $("#enemyhp").text(ehp+"/"+emhp);
        $("#enemyad").text(ead+"~"+emad);
        $("#enemyimg").attr("src",eimg);
        $("#enemy").append("<tr><td>"+epell2.name+"</td><td>"+epell2.damage+"</td></tr>");
        $("#gamecenter").css("background-image","url(' gribg.jpg')");
        $("#gamecenter").css("background-repeat","no-repeat;");
        $("#gamecenter").css("background-size","cover;");
        $("#gamecenter").css("background-position","center;");
        bossorder=bossorder+1;
        bossskill=epell2;
        bossSON=true;
    }else if(bossorder==4){
        ename="켄타우로스",ehp=290,emhp=290,ead=28,emad=36,eimg=" centa.png",eexp=200;
        $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
        $("#enemyhp").text(ehp+"/"+emhp);
        $("#enemyad").text(ead+"~"+emad);
        $("#enemyimg").attr("src",eimg);
        $("#gamecenter").css("background-image","url(' centabg.jpg')");
        $("#gamecenter").css("background-repeat","no-repeat;");
        $("#gamecenter").css("background-size","cover;");
        $("#gamecenter").css("background-position","center;");
        bossorder=bossorder+1;
        bossSON=false;
    }else if(bossorder==5){
        ename="드래곤",ehp=360,emhp=360,ead=32,emad=36,eimg=" dragon.png",eexp=250;
        $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
        $("#enemyhp").text(ehp+"/"+emhp);
        $("#enemyad").text(ead+"~"+emad);
        $("#enemyimg").attr("src",eimg);
        $("#enemy").append("<tr><td>"+epell3.name+"</td><td>"+epell3.damage+"</td></tr>");
        $("#gamecenter").css("background-image","url(' bg4.png')")
        $("#gamecenter").css("background-repeat","no-repeat;");
        $("#gamecenter").css("background-size","cover;");
        $("#gamecenter").css("background-position","center;");
        bossorder=bossorder+1;
        bossskill=epell3;
        bossSON=true;
    }else if(bossorder==6){
        ename="볼드모트",ehp=480,emhp=480,ead=40,emad=40,eimg=" voldmort.png",eexp=300;
        $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
        $("#enemyhp").text(ehp+"/"+emhp);
        $("#enemyad").text(ead+"~"+emad);
        $("#enemyimg").attr("src",eimg);
        $("#enemy").append("<tr><td>"+epell4.name+"</td><td>"+epell4.damage+"</td></tr>");
        $("#gamecenter").css("background-image","url(' bg4.png')")
        $("#gamecenter").css("background-repeat","no-repeat;");
        $("#gamecenter").css("background-size","cover;");
        $("#gamecenter").css("background-position","center;");
        bossorder=bossorder+1;
        bossskill=epell4;
        bossSON=true;
    }
    $("#ename").text(ename);
}
$.dementor=function(){ //디멘터
    ename="디멘터",ehp=59+plv,emhp=59+plv,ead=5+plv,emad=10+plv,eimg=" dementor.png",eexp=34+plv;
    $("#gamehome2").append("<li>"+ename+"를 만났습니다.</li>");
    $("#enemyhp").text(ehp+"/"+emhp);
    $("#enemyad").text(ead+"~"+emad);
    $("#enemyimg").attr("src",eimg);
    $("#ename").text(ename);
    $("#gamecenter").css("background-image","url(' bg2.png')");
    $("#gamecenter").css({"background-repeat":"no-repeat;"})
    $("#gamecenter").css({"background-size":"cover;"})
    $("#gamecenter").css({"height":"100vh;"})
}
$.maxskill=function(skillno){ //스킬꽉참
    $("#gamehome2").empty();
    $("#gamehome2").append("<li>"+pspell[skillno].name+"가 <span style='color: red;'>삭제</span>되었습니다.</li>");
    $("#gamehome2").append("<li>"+spellbook[onspell].name+"을(를) 배우셨습니다.</li>");
    pspell[skillno]=spellbook[onspell];
    $("#pspell").empty();
    $("#pspell").append("<tr><td>이름</td><td>마나 소모값</td></tr>");
    for(let i=0; i<pspell.length; i++){
        $("#pspell").append("<tr><td>"+pspell[i].name+"</td><td>"+pspell[i].smp+"</td></tr>");
        $("#pspell").append("<tr><td colspan='2'>"+pspell[i].effect+"</td></tr>");
    }
    $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
    $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
}
$.skillremove=function(){ //스킬삭제
    $("#gamehome2").append("<li><span style='color: red;'>삭제</span>를 원하는 스킬의 버튼을 눌러주세요.</li>");
    $("#gamehome2").append("<li>1."+pspell[0].name+" 2."+pspell[1].name+" 3."+pspell[2].name+" 4."+pspell[3].name+"</li>");
    $("#btn1").val("1remove"),$("#btn2").val("2remove"),$("#btn3").val("3remove"),$("#btn4").val("4remove");
}
$.skillNremove=function(){ //스킬 냅두기
    $("#gamehome2").append("<li>스킬을 배우지 않으셨습니다.</li>")
    $("#btn1").val("move"),$("#btn2").val(""),$("#btn3").val(""),$("#btn4").val("");
    $("#gamehome2").append("<li>1번을 눌러 움직이세요.</li>");
}
$.gameend=function(){
    alert("게임이 종료되었습니다! 기숙사로 돌아가세요!");
}
