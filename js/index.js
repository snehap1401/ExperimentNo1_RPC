
var line_no, lineCount = 0, num;

screen.orientation.onchange = function () {
    var type = screen.orientation.type;
    if (type.match(/portrait/)) {
        alert('Please flip to landscape, to view simulation!');
    }
}
function executeCmd(){
    var cmd1=document.getElementById('line12').value;
    var letters = 'rpcgen -a -c add.x'; 
    if(cmd1.match(letters))
    {
        var str = "Execute";
        var result = str.link("index1.html");
        document.getElementById("executeCmd").innerHTML = result;
    }
    else{
        
        alert("Enter valid command");
    }
       
}

function executeServer(){
    var ser1=document.getElementById('executeServer1').value;
    var letters='sudo ./add_server';
    if(ser1.match(letters))
    {
        document.getElementById('executeClient1').style.background='green';

    }
    else
    {
        alert("Enter valid Command");
    }
}

function executeClient(){
    
    var ser1=document.getElementById('executeClient1').value;
    var letters='sudo ./add_client localhost';
    if(ser1.match(letters))
    {
        var a,b,c;
        a=Number(document.getElementById('no1').value);
        b=Number(document.getElementById('no2').value);
        c=a+b;
        document.getElementById('result').value=c;
        document.getElementById('req').style.visibility = "visible";

        document.getElementById('serverresult').style.visibility = "visible";
        document.getElementById('serverresult').value=c;

       //document.getElementById('no1').style.background='green';
       

    }
    else
    {
        alert("Enter valid Command");
    }
}



function startRpc() {
    document.getElementById('commented').style.visibility = "visible";
    document.getElementById('startbtn').innerHTML = "<b>Next</b>";
    executeCode();
}

function executeCode(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);

    line_no = 'line' + lineCount;

    document.getElementById(line_no).style.color = "red";

    if(line_no=='line2')
    {
        num=0;
        document.getElementById('line2comment').style.visibility = 'visible';
    }
    if((line_no>='line3')&&(line_no<='line5'))
    {
       document.getElementById('line2comment').style.visibility = 'hidden';

    }
    if(line_no=='line6')
    {
        document.getElementById('line2comment').style.visibility = 'hidden';
        document.getElementById('line5comment').style.visibility='visible';
    }
    if(line_no=='line7')
    {
        document.getElementById('line5comment').style.visibility = 'hidden';
        document.getElementById('line6comment').style.visibility='visible';
    }
    if(line_no=='line8')
    {
        document.getElementById('line6comment').style.visibility = 'hidden';
        document.getElementById('line7comment').style.visibility='visible';
    }
    if(line_no=='line9')
    {
        document.getElementById('line7comment').style.visibility='hidden';
        document.getElementById('line9comment').style.visibility='visible';

    }
    if(line_no=='line10')
    {
        document.getElementById('line9comment').style.visibility='hidden';
        document.getElementById('line10comment').style.visibility='visible';

    }
    if(line_no=='line11')
    {
        document.getElementById('line10comment').style.visibility='hidden';
        document.getElementById('line11comment').style.visibility='visible';


    }
    if(line_no=='line12')
    {
        document.getElementById('line11comment').style.visibility='hidden';
        document.getElementById('line12comment').style.visibility='visible';


    }





}

//code for RPC1
function startClient() {
    document.getElementById('commented').style.visibility = "visible";
    document.getElementById('startbtn1').innerHTML = "<b>Next</b>";
    executeCode1();
}

function executeCode1(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);

    line_no = 'line' + lineCount;

    document.getElementById(line_no).style.color = "red";
    if(line_no=='line2')
    {
        num=0;
        document.getElementById('line2Comment').style.visibility = 'visible';
    }
    if(line_no=='line3')
    {
        document.getElementById('line2Comment').style.visibility = 'hidden';
        document.getElementById('line3Comment').style.visibility='visible';
    }

    if(line_no=='line4')
    {
        document.getElementById('line3Comment').style.visibility = 'hidden';
        document.getElementById('line4Comment').style.visibility='visible';
    }
    if(line_no=='line5')
    {
        document.getElementById('line4Comment').style.visibility = 'hidden';
    }
    if(line_no=='line13')
    {
        //document.getElementById('line12comment').style.visibility='hidden';
        document.getElementById('line13Comment').style.visibility='visible';


    }
    if(line_no=='line14')
    {
        document.getElementById('line13Comment').style.visibility='hidden';


    }
    if(line_no=='line15')
    {
        document.getElementById('line15Comment').style.visibility='visible';

    }
    if(line_no=='line16')
    {
        document.getElementById('line15Comment').style.visibility='hidden';
        document.getElementById('line16Comment').style.visibility='visible';


    }
    if(line_no=='line17')
    {
        document.getElementById('line16Comment').style.visibility='hidden';


    }
    if(line_no=='line19')
    {
        document.getElementById('line19Comment').style.visibility='visible';
    }
    if(line_no=='line20')
    {
        document.getElementById('line19Comment').style.visibility='hidden';
    }
    if(line_no=='line21')
    {
        document.getElementById('line21Comment').style.visibility='visible';

    }
    if(line_no=='line22')
    {
        document.getElementById('line21Comment').style.visibility='hidden';
        document.getElementById('line22Comment').style.visibility='visible';

    }
    if(line_no=='line23')
    {
        document.getElementById('line22Comment').style.visibility='hidden';
    }

}


function startServer() {
    document.getElementById('commented').style.visibility = "visible";
    document.getElementById('startbtn2').innerHTML = "<b>Next</b>";
    executeCode2();
}

function executeCode2(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);

    line_no = 'server' + lineCount;

    document.getElementById(line_no).style.color = "red";
    if(line_no=='server2')
    {
        num=0;
        document.getElementById('server2Comment').style.visibility = 'visible';
    }
    if(line_no=='server3')
    {
        document.getElementById('server2Comment').style.visibility = 'hidden';
        document.getElementById('server3Comment').style.visibility='visible';
    }
    if(line_no=='server4')
    {
        
        document.getElementById('server3Comment').style.visibility='hidden';
        document.getElementById('server4Comment').style.visibility='visible';

    }
    if(line_no=='server5')
    {
        
        document.getElementById('server4Comment').style.visibility='hidden';
    }
    if(line_no=='server7')
    {
        
        document.getElementById('server7Comment').style.visibility='visible';
    }

    if(line_no=='server8')
    {
        
        document.getElementById('server7Comment').style.visibility='hidden';
        document.getElementById('server8Comment').style.visibility='visible';

    }
    if(line_no=='server9')
    {
        
        document.getElementById('server9Comment').style.visibility='hidden';
    }
}

