import React from 'react'
export default function Day6() {
    var menu=[{id:1,name:"R15",price:"50000",image:<div id="fru1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16bHV5-_mWvTg20IqJGUBvXuMtCc2KU8DDA&usqp=CAU"></img></div>},
  
               {id:2,name:"Jawa",price:"30000",image:<div id="fru3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlS6oy7rJisIQre_8zSNoRMbQr1vuLau9lA&usqp=CAU"></img></div>},
               {id:3,name:"BMW",price:"20000",image:<div id="fru4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uDo2ZBz5AxE7v6InUMNKcMBUwtZoDUvxrw&usqp=CAU"></img></div>}]
            


    var dispmenu=menu.map((fname)=>{return<li key={fname.id}>{fname.id} . BIKE {fname.name} <br/> PRICE: {fname.price} <br/> IMAGE: <br/> {fname.image}<br/><br/></li>})
  return (
    <div >
    <h1 id="HEAD">BRANDS OF WORLD</h1><br/>
        {dispmenu}
    </div>
  )
}