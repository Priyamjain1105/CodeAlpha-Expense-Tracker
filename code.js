
var sum = 100;
var income = 100    ;
var expence = 0;
function balance_updater(sum){
    let bal = document.querySelector("#bal");
    console.log(bal.innerText);
    bal.textContent= sum;
    console.log(bal.textContent,"done");
    if(sum<0)
    {
        bal.style.color = "red";
    }
    else{
        bal.style.color = "black";
    }
}

function polupdater(value){
        if(value>0){
            let incomeElem = document.getElementById("income");
            income = income+value;
            incomeElem.textContent = income;
        }
        else{
            let expenceElem = document.getElementById("expence");
            expence = expence+value;
            expenceElem.textContent = expence;
        }
}
function polupdaterRemove(value){
    if(value<0){
        let incomeElem = document.getElementById("income");
        income = income+value;
        incomeElem.textContent = income;
    }
    else{
        let expenceElem = document.getElementById("expence");
        expence = expence+value;
        expenceElem.textContent = expence;
    }
}

let add_btn = document.getElementById("add_btn")
console.log(add_btn)
add_btn.addEventListener("click",addTrasition);
function addTrasition(e){
         console.log(e);
         let newList = document.createElement("li");
         newList.className = "listItem";
         let inputName = document.getElementById("expenceName");
         let inputExp = document.getElementById("expenceAmt");
         let texti = inputName.value;
         let expi = inputExp.value;
         sum = sum+Number(expi);
         v = Number(expi);
         balance_updater(sum);
         polupdater(v);
         console.log(texti,expi);
         newList.innerHTML = ` <h3>${texti}</h3>
                                <p>${expi}</p>
                                <button id = "rmvbtn" onclick="removeBtn(this)" >Remove</button>`
         let parentList = document.getElementById("parentList")
         console.log(parentList);
         console.log(newList);
         parentList.appendChild(newList)
}

function removeBtn(currElement){
        console.log(currElement)
        s = currElement.parentElement.children[1].textContent;
        console.log(s);
        decrease  = -1*Number(s);
        sum = sum+decrease;
        balance_updater(sum);
        polupdaterRemove(decrease);
        currElement.parentElement.remove();
}
