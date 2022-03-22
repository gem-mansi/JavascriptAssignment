var AddHTML = "";
var object = getObject();
for (var i =0;i<object.length;i++){ 
  AddHTML +="<tr>"
  for( var j=0;j<object[i].head.length;j++){
      AddHTML += "<td>" + object[i].head[j] + "</td>";
  }
  AddHTML +="</tr>" ;  

  AddHTML +="<tr>"
  for( var j=0;j<object[i].data.length;j++){
      AddHTML += "<td>" + object[i].data[j] + "</td>";
  }
  AddHTML +="</tr>" ;  
} 
document.getElementById("DynamicTable").innerHTML = AddHTML;

function getObject() {
return [
  {
    head:["Name", "Age", "DOB", "Email", "Company"],
     data:["Mansi pandey",21,"17-06-1998","mansi.pandey@geminisolutions.com","Gemini solutions"]
  },{
 head:["Vijay",22,"17-3-1999","vijay123@gmail.com","Gemini solutions"],
    
      data:["sanjay",23,"27-3-1999","sanjay123@gmail.com","Gemini solutions"]
  },
  {
   head:["dhanjay",23,"17-7-1999","dhanjay123@gmail.com","Gemini solutions"],
    
    data:["Ajay",21,"07-3-1999","ajay123@gmail.com","Gemini solutions"]
  }
];
}