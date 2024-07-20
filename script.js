var story= [
    {img : "https://plus.unsplash.com/premium_photo-1664875848490-0ee321228c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", name: "only_sarthak",status:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    {img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" , name: "piyush_op",status:"https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    {img: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", name: "neha_garg",status:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"},
    {img: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", name: "nistha_23",status:"https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"},
    {img: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80", name: "reetu_pandey",status:"https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80"}
]

var clutter=""


story.forEach((elem,idx)=>{
    clutter += `<div id="profile" >
    <img id ="${idx}"src="${elem.img}" alt="">  
    <h3>${elem.name}</h3>
    </div>
    `
})
document.querySelector("#card #nav").innerHTML = clutter

var grow =0
document.querySelector("#nav  ").addEventListener("click",(dets)=>{
    console.log(dets.target.id);
    var scr=document.querySelector("#full-scr")
    scr.style.backgroundImage = `url(${story[dets.target.id].status})`
    scr.style.display = "initial"

    setTimeout(() => {
        scr.style.display = "none"
    }, 3000);


        if(grow<100){
            setInterval(() => {
                document.querySelector("#move").style.width = `${grow}%`
                grow++
                console.log(grow);
            }, 30);
        }else{
            grow = 0
        }
   

})