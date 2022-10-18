<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="textrpg.css" type="text/css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <title>금지된 숲</title>
</head>
    <body style="background-image: url('https://blog.kakaocdn.net/dn/cFQ7Xh/btrGv5eSDeX/dQ3AL2sJLrgGTUP0tKIhE1/img.gif');">
    <!-- <audio controls autoplay loop>
        <source src="/css/textrpg/2.mp3" type="audio/mp3">
    </audio> -->
    <div class="banner">
            <a href="main"><img src="https://blog.kakaocdn.net/dn/r52gW/btrGoaI3Ku4/G4GthQhTIFiiAQlG25Wk30/img.gif"
            style="height: 200px;"></a>
    </div>
    <div class="gamecenter" id="gamecenter">
        <div class="ingametext1">
            <div class="enemydiv">
                <table class="enemytable" id="enemy">
                    <tr>
                        <td colspan="2" style="border: 2px solid white;" id="ename">적 이름</td>
                    </tr>
                    <tr>
                        <td>체력</td><td id="enemyhp">0/0</td>
                    </tr>
                    <tr>
                        <td>공격력</td><td id="enemyad">0</td>
                    </tr>
                    <tr>
                        <td colspan="2" style="border: 2px solid white;">스킬</td>
                    </tr>
                    <tr>
                        <td>이름</td><td>데미지</td>
                    </tr>
                </table>
            </div>
            <div class="enemyimgdiv">
                <img src="owl.png" class="enemyimg" id="enemyimg">
            </div>
        </div>
        <hr>
        <div class="ingametext2">
            <ul style="list-style:none; padding-left: 0;" id="gamehome2">
                <li><b style="color: red;">금지된 숲</b>에 오신걸 환영합니다.</li>
                <li>숲을 모험하며 여러 생물과 싸우세요!</li>
                <li>모험을 진행할때 마다 체력이 조금씩 회복됩니다!</li>
                <li>모험을 진행하며 기숙사의 점수에 기여하세요!</li>
                <li>숲에서 나가고 싶다면 뱃지를 클릭하세요.</li>
                <li style="color: red;">※ 중간에 나간다면 획득하셨던 점수는 반영되지 않습니다 ※</li>
                <li>&nbsp;</li>
                <li>게임 시작은 1 번을 클릭하세요.</li>
                <li>자세한 설명은 2 번을 클릭하세요.</li>
            </ul>
        </div>
        <hr>
        <div class="ingametext3">
            <br>
            행동을 선택하세요.
            <br>
            <button class="actioncheck" id="actioncheck">1</button>
            <input type="hidden" id="btn1" value="start2">
            <button class="actioncheck1" id="actioncheck1">2</button>
            <input type="hidden" id="btn2" value="notice">
            <button class="actioncheck2" id="actioncheck2">3</button>
            <input type="hidden" id="btn3" value="">
            <button class="actioncheck3" id="actioncheck3">4</button>
            <input type="hidden" id="btn4" value="">
        </div>
    </div>
    <div class="userinfo1">
        <table class="tableuserinfo">
            <tr>
                <td colspan="2" style="border: 2px solid white;">test님의 상태</td>
            </tr>
            <tr>
                <td>체력</td><td id="php">100/100</td>
            </tr>
            <tr>
                <td>마나</td><td id="pmp">50/50</td>
            </tr>
            <tr>
                <td>공격력</td><td id="pad">6~8</td>
            </tr>
            <tr>
                <td>주문력</td><td id="pap">15+0</td>
            </tr>
            <tr>
                <td>레벨</td><td id="plv">1</td>
            </tr>
            <tr>
                <td>경험치</td><td id="pexp">0/100</td>
            </tr>
            <tr>
                <td colspan="2" style="border: 2px solid white;">스킬</td>
            </tr>
            <table class="tableuserinfo" id="pspell">
                <tr>
                    <td>이름</td><td>마나 소모값</td>
                </tr>
                <tr>
                    <td id="spell1name">벤투스</td><td id="spell1mp">12</td>
                </tr>
                <tr>
                    <td colspan="2">지팡이에서 바람을 날립니다.</td>
                </tr>
            </table>
        </table>
    </div>
    <div class="userinfo2">
        <table class="tableuserinfo">
            <tr>
                <td colspan="2" style="border: 2px solid white;">게임진행 상태</td>
            </tr>
            <tr>
                <td>진행도</td><td id="move">0 번째 행동</td>
            </tr>
            <tr>
                <td>잡은 보스 수</td><td id="kboss">0 마리</td>
            </tr>
            <tr>
                <td>획득 점수</td><td id="pscore">0</td>
            </tr>
        </table>
    </div>
    <div class="userinfo3">
        <table class="tableuserinfo">
            <tr>
                <td colspan="5" style="border: 2px solid white;">랭킹</td>
            </tr>
            <tr>
                <td>등수</td><td>닉네임</td><td>점수</td><td>진행도</td><td>보스</td>
            </tr>
                        <tr>
                        <td style="color:gold">1위</td>
                        <td>해리포터</td>
                        <td>9999점</td>
                        <td>99</td>
                        <td>9마리</td>
                        </tr>
                        <tr>
                        <td style="color:silver">2위</td>
                        <td>헤르미온느</td>
                        <td>8765점</td>
                        <td>87</td>
                        <td>8마리</td>
                        </tr>
                        <tr>
                        <td style="color:rgb(204, 107, 69)">3위</td>
                        <td>론</td>
                        <td>4444점</td>
                        <td>44</td>
                        <td>3마리</td>
                        </tr>
            <hr>
            <tr>
                <td>본인</td><td id="nick">test</td><td>0점</td><td>0</td><td>0마리</td>
                <input type="hidden" id="dominum" value=${userinfo.dominum}>
            </tr>
        </table>
    </div>
</body>
<script type="text/javascript" src="textrpg.js"></script>
</html>