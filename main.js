let forms=document.getElementById("forms");
let ul=document.getElementById("items");
forms.addEventListener("submit",onsignup);
let sum=0;
document.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/90428d2d6edf4b92b2d48601b65508b2/Product").then((res)=>
    {
        for(let i=0;i<res.data.length;i++)
        {
    showUserName(res.data[i])
    Sum(res.data[i])
        }
    }).catch(err=>console.log(err))
  });
function onsignup(e){
    e.preventDefault();
let name=e.target.Inumber.value;
let title=e.target.textid.value;
let obj={
    name,title
};
Sum(obj);
axios.post("https://crudcrud.com/api/90428d2d6edf4b92b2d48601b65508b2/Product",obj).
then(res=>console.log(res.data)).
catch(err=>console.log(err));
showUserName(obj)
}
function showUserName(obj)
{
    let inputPrice=document.querySelector("#Value");
let inputProduct=document.querySelector("#product");
  let li=document.createElement("li");
    let textnode=document.createTextNode(obj.name);
    let textnode1=document.createTextNode(obj.title);
    let textnode2=document.createTextNode(" ");
    li.appendChild(textnode);
    li.appendChild(textnode2);
    li.appendChild(textnode1);
    let btn=document.createElement("button");
    let btnText=document.createTextNode("Delete Product");
    btn.appendChild(btnText);
    li.appendChild(btn);
    ul.appendChild(li);
    btn.onclick=()=>{
        axios.get("https://crudcrud.com/api/90428d2d6edf4b92b2d48601b65508b2/Product").then
        ((res)=>{
            let id;
            for(let i=0;i<res.data.length;i++)
            {
            if(res.data[i].title==obj.title)
            {
            id=res.data[i]._id;
            break;
            }
        }
        subtract(obj);
        axios.delete(`https://crudcrud.com/api/90428d2d6edf4b92b2d48601b65508b2/Product/${id}`
        ) 
        }).catch(err=>console.log(err))
        ul.removeChild(li);
        
        }
    li.appendChild(btn);
    ul.appendChild(li);
    inputPrice.value= '';
    inputProduct.value= '';
}
function Sum(obj)
{
sum+=parseInt(obj.name,10);
document.getElementById("add").innerHTML = "Total Product Price "+sum;
}
function subtract(obj){
    sum-=parseInt(obj.name,10);
    document.getElementById("add").innerHTML = "Total Product Price "+sum;
    }