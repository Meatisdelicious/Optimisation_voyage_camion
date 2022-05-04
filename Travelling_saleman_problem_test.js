


//P.S. Here, 99 indicates infinity
function checkPath(){
    var ip=document.getElementById("ip").value.split(",")
    var path=ip;

    var graph1 = [ [0,3,99,4,99,99,2,99,99],
        [3,0,3,99,99,99,99,99,99],
        [9,3,0,1,7,99,99,99,99],
        [4,99,1,0,99,4,1,7,99],
        [99,99,7,4,0,9,99,99,99],
        [99,99,99,1,9,0,99,99,2],
        [2,99,99,7,99,99,0,5,99],
        [99,99,99,7,99,99,5,0,3],
        [99,99,99,99,99,2,99,3,0]  ];

    var city=[0,1,2,3,4,5,6,7,8];
    var ans;
    var p1=[0,1,2,3,2];
    var p2=[0,1,2,4,5,8,7,3,6,0];
    var p3=[0,1,2,4,5,0];

    for(var i=0;i<path.length;i++){
        path[i]=Number(ip[i]);
    }
    //alert(path[0]);
    var pathCost=0;
    if(path[0]==path[(path.length)-1]){//condition 1
        if( _.isEqual(path.slice(0,path.length-1).sort(), city) && (path.length=city.length+1)){ //condition 3
            for(var i=0;i<path.length-1;i++){
                var cost=graph1[path[i]][path[i+1]];
                if(cost<99){//condition 2 and 4
                    pathCost = pathCost + cost;
                }
                else{
                    ans="Condition 2 not satisfied.";
                    document.getElementById("op").innerHTML = ans;
                    // return;
                }
            }
            ans="Path is Correct and Complete. Cost is "+pathCost+".";
        }
        else{
            ans="Condition 3 not satisfied.";
            document.getElementById("op").innerHTML = ans;
            // return;
        }
    }
    else{
        ans="Condition 1 not satisfied.";
        document.getElementById("op").innerHTML = ans;
        //return;
    }
    //alert("reached");
    document.getElementById("op").innerHTML = ans;
    return;
}