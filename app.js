document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)

    updateButtons();

    var db = firebase.firestore();
    const esp = db.doc("toESP32/readThisData");
    

    // esp.get()
    //     .then(doc => {

    //         const data = doc.data();
    //         document.write(data.datapoint + '<br>')
    //     })

    // esp.onSnapshot(doc => {

    //     const data = doc.data();
    //     document.write(data.pos + '<br>')
    // })

});

// function googleLogin() {

//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const myuser = result.user;
//             document.write('Hello ${myuser.displayName}');
//         })

// }

function updateButtons() {
    var db = firebase.firestore();

    db.doc("shelves/shelf1").get()
        .then(doc =>{
            const data = doc.data()
            document.getElementById("btn11").innerHTML = data.space1;
            document.getElementById("btn12").innerHTML = data.space2;
            document.getElementById("btn13").innerHTML = data.space3;
            document.getElementById("btn14").innerHTML = data.space4;
        })

    db.doc("shelves/shelf2").get()
        .then(doc =>{
            const data = doc.data()
            document.getElementById("btn21").innerHTML = data.space1;
            document.getElementById("btn22").innerHTML = data.space2;
            document.getElementById("btn23").innerHTML = data.space3;
            document.getElementById("btn24").innerHTML = data.space4;
        })

    db.doc("shelves/shelf3").get()
        .then(doc =>{
            const data = doc.data()
            document.getElementById("btn31").innerHTML = data.space1;
            document.getElementById("btn32").innerHTML = data.space2;
            document.getElementById("btn33").innerHTML = data.space3;
            document.getElementById("btn34").innerHTML = data.space4;
        })

    db.doc("shelves/shelf4").get()
        .then(doc =>{
            const data = doc.data()
            document.getElementById("btn41").innerHTML = data.space1;
            document.getElementById("btn42").innerHTML = data.space2;
            document.getElementById("btn43").innerHTML = data.space3;
            document.getElementById("btn44").innerHTML = data.space4;
        })
    
}

function readItem() {
    return prompt("Enter Item Name:");
}

function row1Btns(col) {
    var db = firebase.firestore();
    
    db.doc("toESP32/readThisData").update({
        "pos": 1
    })

    db.doc("shelves/shelf1").get()
        .then(doc =>{
            var db = firebase.firestore();
            const data = doc.data();
            var readData;
            switch(col){
                case 1:
                    if(data.space1 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf1").update({ "space1": readData});
                        document.getElementById("btn11").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf1").update({ "space1": " "});
                        document.getElementById("btn11").innerHTML = " ";
                    }
                    break;
                case 2:
                    if(data.space2 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf1").update({ "space2": readData});
                        document.getElementById("btn12").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf1").update({ "space2": " "});
                        document.getElementById("btn12").innerHTML = " ";
                    }
                    break;
                case 3:
                    if(data.space3 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf1").update({ "space3": readData});
                        document.getElementById("btn13").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf1").update({ "space3": " "});
                        document.getElementById("btn13").innerHTML = " ";
                    }
                    break;
                case 4:
                    if(data.space4 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf1").update({ "space4": readData});
                        document.getElementById("btn14").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf1").update({ "space4": " "});
                        document.getElementById("btn14").innerHTML = " ";
                    }
                    break;
                }
            
        })    
}


function row2Btns(col) {
    var db = firebase.firestore();
    
    db.doc("toESP32/readThisData").update({
        "pos": 2
    })

    db.doc("shelves/shelf2").get()
        .then(doc =>{
            var db = firebase.firestore();
            const data = doc.data();
            var readData;
            switch(col){
                case 1:
                    if(data.space1 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf2").update({ "space1": readData});
                        document.getElementById("btn21").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf2").update({ "space1": " "});
                        document.getElementById("btn21").innerHTML = " ";
                    }
                    break;
                case 2:
                    if(data.space2 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf2").update({ "space2": readData});
                        document.getElementById("btn22").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf2").update({ "space2": " "});
                        document.getElementById("btn22").innerHTML = " ";
                    }
                    break;
                case 3:
                    if(data.space3 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf2").update({ "space3": readData});
                        document.getElementById("btn23").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf2").update({ "space3": " "});
                        document.getElementById("btn23").innerHTML = " ";
                    }
                    break;
                case 4:
                    if(data.space4 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf2").update({ "space4": readData});
                        document.getElementById("btn24").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf2").update({ "space4": " "});
                        document.getElementById("btn24").innerHTML = " ";
                    }
                    break;
                }
            
        })    
}

function row3Btns(col) {
    var db = firebase.firestore();
    
    db.doc("toESP32/readThisData").update({
        "pos": 3
    })

    db.doc("shelves/shelf3").get()
        .then(doc =>{
            var db = firebase.firestore();
            const data = doc.data();
            var readData;
            switch(col){
                case 1:
                    if(data.space1 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf3").update({ "space1": readData});
                        document.getElementById("btn31").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf3").update({ "space1": " "});
                        document.getElementById("btn31").innerHTML = " ";
                    }
                    break;
                case 2:
                    if(data.space2 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf3").update({ "space2": readData});
                        document.getElementById("btn32").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf3").update({ "space2": " "});
                        document.getElementById("btn32").innerHTML = " ";
                    }
                    break;
                case 3:
                    if(data.space3 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf3").update({ "space3": readData});
                        document.getElementById("btn33").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf3").update({ "space3": " "});
                        document.getElementById("btn33").innerHTML = " ";
                    }
                    break;
                case 4:
                    if(data.space4 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf3").update({ "space4": readData});
                        document.getElementById("btn34").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf3").update({ "space4": " "});
                        document.getElementById("btn34").innerHTML = " ";
                    }
                    break;
                }
            
        })    
}

function row4Btns(col) {
    var db = firebase.firestore();
    
    db.doc("toESP32/readThisData").update({
        "pos": 4
    })

    db.doc("shelves/shelf4").get()
        .then(doc =>{
            var db = firebase.firestore();
            const data = doc.data();
            var readData;
            switch(col){
                case 1:
                    if(data.space1 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf4").update({ "space1": readData});
                        document.getElementById("btn41").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf4").update({ "space1": " "});
                        document.getElementById("btn41").innerHTML = " ";
                    }
                    break;
                case 2:
                    if(data.space2 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf4").update({ "space2": readData});
                        document.getElementById("btn42").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf4").update({ "space2": " "});
                        document.getElementById("btn42").innerHTML = " ";
                    }
                    break;
                case 3:
                    if(data.space3 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf4").update({ "space3": readData});
                        document.getElementById("btn43").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf4").update({ "space3": " "});
                        document.getElementById("btn43").innerHTML = " ";
                    }
                    break;
                case 4:
                    if(data.space4 == " "){
                        readData = readItem();
                        db.doc("shelves/shelf4").update({ "space4": readData});
                        document.getElementById("btn44").innerHTML = readData;
                    } else {
                        db.doc("shelves/shelf4").update({ "space4": " "});
                        document.getElementById("btn44").innerHTML = " ";
                    }
                    break;
                }
            
        })    
}