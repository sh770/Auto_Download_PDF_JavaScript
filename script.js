window.onload = ()=> {
    setTimeout( ()=> {
        DownloadFile("sample.pdf");
    }, 2000);
};

let DownloadFile = (fileName)=> {
    //Set the File URL.
    let url = "http://www.africau.edu/images/default/" + fileName;

    //Create XMLHTTP Request.
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        let blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        let isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            let url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            let a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};


// document.location.href = "http://www.africau.edu/images/default/sample.pdf" ; 


//alert('Wanna pizza joke?\n Nevermind, it\’s \ntoo cheesy!')
//alert(1)