
(function(){
    var searchArea = document.getElementsByTagName('noaatsunamisearch');

    var form = document.createElement("form");
    var searchText = document.createElement("input");
    var button = document.createElement("input");
    var addressLabel = document.createElement("span");
    var space = document.createElement("span");
    
    var actionURL = window.location.hostname.toLowerCase();

    if (actionURL == "localhost"){  // local development
        actionURL = "http://localhost/tsunamitool/";
    }
    else if (actionURL.indexOf("webdev.coast.noaa.gov") >= 0){   // Dev
        actionURL = "http://webdev.coast.noaa.gov/tsunami-toolv2/";        
    }
    else if (actionURL.indexOf("webqa.coast.noaa.gov") >= 0){ // QA
        actionURL = "http://webqa.coast.noaa.gov/tsunami-toolv2/";        
    }
    else{   // production
        actionURL = "http://tsunami.coast.noaa.gov/";
    }

    
    form.setAttribute("method", "GET");
    form.setAttribute("action", actionURL);
    form.setAttribute("id", "noaatsunamisearchForm");
    if (document.getElementById("noaatsunamisearchscript") != undefined){   // see if want to open search in new window
        if (document.getElementById("noaatsunamisearchscript").getAttribute("newwindow")){
            form.setAttribute("target","_blank");
        }
    }

    addressLabel.innerHTML = "Address:&nbsp;";
    addressLabel.setAttribute("class", "noaatsunamisearchAddressLabel");
    form.appendChild(addressLabel);

    searchText.setAttribute("type", "text");
    searchText.setAttribute("name", "address");
    searchText.setAttribute("id", "noaatsunamisearchAddress");
    searchText.setAttribute("class", "noaatsunamisearchAddress");
    form.appendChild(searchText);

    space.innerHTML = "&nbsp;";
    space.setAttribute("class", "noaatsunamisearchSpace");
    form.appendChild(space);

    button.setAttribute("type", "submit");
    button.setAttribute("value", "Search Address");
    button.setAttribute("class", "noaatsunamisearchSubmit");
    form.appendChild(button);

    searchArea[0].appendChild(form);
    
})();