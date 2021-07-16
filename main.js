var arr = new Array();
var task = document.getElementById("task");
var choice = document.getElementById("choice");
var output = document.getElementById("output");
document.querySelector(".save").addEventListener("click", ()=>{
    arr.push(task.value);
    arr.push(choice.value);
    give(0);
});
function give(val)
{
    var o="";
    for(var i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            if(arr[i+1]==val || val==0)
            {
                o=o+"<div class = 'i i"+arr[i+1]+"'>"+arr[i]+"</div>";
            }            
        }
    }
    output.innerHTML=o;
}
document.querySelector(".b1").addEventListener("click",()=>{
    give(1)
})

document.querySelector(".b2").addEventListener("click",()=>{
    give(2)
})

document.querySelector(".b3").addEventListener("click",()=>{
    give(3)
})