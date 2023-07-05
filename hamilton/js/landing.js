"use strict";

let sceneConfig = [];
let sceneHistory = [];
let currentScene = 0;
let addToHistory = true;
let slideIndex = 1;

let mousePosX = 0;
let mousePosY = 0;

let horizonPitch = -1.4;

function hideNavMenu() {
  document.getElementById("viewsDiv").style.display = "none";
  document.getElementById("showNavMenu").innerHTML =
    '<i class="material-icons" style="font-size: 16px;">expand_less</i><span class="nav-menu-button-text"> Views</span>';
}

function toggleNavMenu() {
  if (
    document.getElementById("viewsDiv").style.display === "none" ||
    document.getElementById("viewsDiv").style.display === ""
  ) {
    document.getElementById("viewsDiv").style.display = "grid";
    document.getElementById("showNavMenu").innerHTML =
      '<i class="material-icons" style="font-size: 16px;">expand_more</i><span class="nav-menu-button-text"> Hide</span>';
  } else {
    document.getElementById("viewsDiv").style.display = "none";
    document.getElementById("showNavMenu").innerHTML =
      '<i class="material-icons" style="font-size: 16px;">expand_less</i><span class="nav-menu-button-text"> Views</span>';
  }
}

document.getElementById("showNavMenu").addEventListener("click", toggleNavMenu);

//Show  Image
let showImg = function (params, data) {
  document.getElementById("myModal").style.display = "inline";
  document.getElementById("myModal").style.zIndex = "6";
  document.getElementById("img01").style.display = "block";
  document.getElementById("img01").src = data[0];
  document.getElementById("caption").innerHTML = data[1];
};

//Save Scene Config
let saveScene = function () {
  sceneConfig.push([
    viewer.getScene(),
    viewer.getPitch(),
    viewer.getYaw(),
    viewer.getHfov(),
  ]);
};

// Create viewer
let viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "1",
    type: "equirectangular",
    hfov: screen.width > 640 ? 125 : 40,
    maxHfov: 140,
    minHfov: 70,
    /*        "maxPitch": 90,
                "minPitch": -90,*/
    vaov: 180,
    vOffset: 0,
    northOffset: 0,
    horizonPitch: horizonPitch,
    scale: false,
    compass: false,
    showZoomCtrl: false,
    showFullscreenCtrl: false,
    autoLoad: true,
    hotSpotDebug: false,
    sceneFadeDuration: 1000,
  },

  scenes: {
    1: {
      title: "Taunton - Thornton <br> Aerial",
      panorama: "tiles/2.jpg",
      northOffset: -4, // North Direction Yaw 
      pitch: -19.48,
      yaw: 23.49,
      hotSpots: [
        {
          pitch: -13.3,
          yaw: -14.8,
          type: "scene",
          text: "1680 Thornton Aerial",
          sceneId: "3",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Aerial",
        },
        {
          pitch: -10.11,
          yaw: 62,
          type: "scene",
          text: "1410 Stevenson Aerial",
          sceneId: "2",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1410 Stevenson Aerial",
        },
        // {
        //     "pitch": -14.11,
        //     "yaw": 205,
        //     "type": "scene",
        //     "text": "1410 Stevenson Aerial",
        //     "sceneId": "2",
        //     "cssClass": "hotspot_size arrow_down",
        //     "createTooltipFunc": hotspot,
        //     "createTooltipArgs": "1410 Stevenson Aerial"
        // },
        {
          pitch: -46.8,
          yaw: -8,
          type: "scene",
          text: "1423 Thornton Rd. Street View",
          sceneId: "6",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1423 Thornton Rd. Street View",
        },
        {
          pitch: -25.59,
          yaw: -13.74,
          type: "scene",
          text: "1680 Thornton Rd. Street View",
          sceneId: "7",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Rd. Street View",
        },
        {
          pitch: -30.203868457913575,
          yaw: 21.267451533443698,
          type: "",
          text: "1515, 1517, 1455 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1515, 1517, 1455 Thornton Rd.",
        },
        {
          pitch: -61.07184238303159,
          yaw: 22.97901493777596,
          type: "",
          text: "1395 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1395 Thornton Rd.",
        },
        {
          pitch: -18.126935288016377,
          yaw: 5.38246574339993,
          type: "",
          text: "1565 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1565 Thornton Rd.",
        },
        {
          pitch: -16.30367685041698,
          yaw: -29.36276410826554,
          type: "",
          text: "1680 Thornton Rd. St View N",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Rd. St View N",
        },
        {
          pitch: -17.27448629430212,
          yaw: 67.13774829096315,
          type: "",
          text: "650 Taunton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "650 Taunton Rd.",
        },
        {
          pitch: -16.513558933301557,
          yaw: 57.15774925240225,
          type: "",
          text: "1410 Stevenson Rd. New Community Center",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1410 Stevenson Rd. New Community Center",
        },
      ],
    },
    2: {
      title: "1410 Stevenson Rd. <br> Aerial",
      panorama: "tiles/1.jpg",
      pitch: -38.71,
      yaw: -60,
      northOffset: -9, // North Direction Yaw 
      hotSpots: [
        {
          pitch: -7.18,
          yaw: -43.98,
          type: "scene",
          text: "Conlin Roundabout Aerial",
          sceneId: "4",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin Roundabout Aerial",
        },
        {
          pitch: -12,
          yaw: 240,
          type: "scene",
          text: "Taunton - Thornton Aerial",
          sceneId: "1",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Taunton - Thornton Aerial",
        },
        {
          pitch: -26.6,
          yaw: -25.7,
          type: "scene",
          text: "1497 Stevenson Rd. Street View",
          sceneId: "10",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1497 Stevenson Street View",
        },
        {
          pitch: -59.127247325626406,
          yaw: -116.59429889526945,
          type: "",
          text: "1410 Stevenson Rd. New Community Center",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1410 Stevenson Rd. New Community Center",
        },
        {
          pitch: -43.047631633659805,
          yaw: -150.9566176987321,
          type: "",
          text: "650 Taunton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "650 Taunton Rd.",
        },
        {
          pitch: -64.43672561713386,
          yaw: -28.04990425508266,
          type: "",
          text: "1497 Stevenson Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1497 Stevenson Rd.",
        },
        {
          pitch: -32.89528891311256,
          yaw: -39.50258355291332,
          type: "",
          text: "1510 Stevenson Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1490 Stevenson Rd.",
        },
        {
          pitch: -26.71851441551812,
          yaw: -36.23420303097552,
          type: "",
          text: "1520 Stevenson Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1510 Stevenson Rd.",
        },
        {
          pitch: -21.780642442895797,
          yaw: -15.181755823208587,
          type: "",
          text: "1591 Stevenson Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1591 Stevenson Rd.",
        },
      ],
    },
    3: {
      title: "1680 Thornton <br> Aerial",
      panorama: "tiles/3.jpg",
      pitch: -30.5,
      yaw: 7.41,
      northOffset: -6, // North Direction Yaw 
      hotSpots: [
        {
          pitch: -18,
          yaw: 160,
          type: "scene",
          text: "Taunton - Thornton Aerial",
          sceneId: "1",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Taunton - Thornton Aerial",
        },
        {
          pitch: -58.6,
          yaw: 12.69,
          type: "scene",
          text: "1680 Thornton Street View",
          sceneId: "7",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Street View",
        },
        {
          pitch: -43.65,
          yaw: 145.35,
          type: "scene",
          text: "1423 Thornton Street View",
          sceneId: "6",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1423 Thornton Street View",
        },
        {
          pitch: -9.24,
          yaw: -15.56,
          type: "scene",
          text: "Conlin Roundabout Aerial",
          sceneId: "4",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin Roundabout Aerial",
        },
        {
          pitch: -13.18,
          yaw: 93.78,
          type: "scene",
          text: "Stevenson Aerial",
          sceneId: "2",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Stevenson Aerial",
        },
        {
          pitch: -39.09526684010751,
          yaw: 102.56725490413841,
          type: "",
          text: "1515, 1517, 1455 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1515, 1517, 1455 Thornton Rd.",
        },
        {
          pitch: -40.160357909080915,
          yaw: 40.21615430181023,
          type: "",
          text: "1565 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1565 Thornton Rd.",
        },
        {
          pitch: -37.9808373938563,
          yaw: -30.105725183848204,
          type: "",
          text: "1680 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Rd.",
        },
        {
          pitch: -39.07615048868543,
          yaw: 140.19882601551808,
          type: "",
          text: "1423 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1423 Thornton Rd.",
        },
        {
          pitch: -31.946594376849767,
          yaw: 142.16527175046005,
          type: "",
          text: "1395 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1395 Thornton Rd.",
        },
      ],
    },
    4: {
      title: "Conlin Roundabout <br> Aerial",
      panorama: "tiles/4.jpg",
      pitch: -46.89,
      yaw: -7.31,
      northOffset: -6, // North Direction Yaw 
      hotSpots: [
        {
          pitch: -11.34,
          yaw: 167.77,
          type: "scene",
          text: "1680 Thornton Aerial",
          sceneId: "3",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Aerial",
        },
        {
          pitch: -9.59,
          yaw: 133.82,
          type: "scene",
          text: "1410 Stevenson Aerial",
          sceneId: "2",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1410 Stevenson Aerial",
        },
        {
          pitch: -14.85,
          yaw: -25.69,
          type: "scene",
          text: "Community Center Aerial",
          sceneId: "5",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Community Center Aerial",
        },
        {
          pitch: -63.21,
          yaw: -60.91,
          type: "scene",
          text: "Conlin - Thornton Street View",
          sceneId: "8",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin - Thornton Street View",
        },
        {
          pitch: -23.293120500088754,
          yaw: 84.02292598164577,
          type: "",
          text: "2000 Stevenson Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2000 Stevenson Rd.",
        },
        {
          pitch: -51.4014908510165,
          yaw: 78.13332380388943,
          type: "",
          text: "465 Conlin Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "465 Conlin Rd.",
        },
        {
          pitch: -66.17792294108641,
          yaw: 159.4057798600807,
          type: "",
          text: "1995 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1995 Thornton Rd.",
        },
        {
          pitch: -55.30307050954753,
          yaw: 259.7724200701116,
          type: "",
          text: "579 Conlin Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "579 Conlin Rd.",
        },
        {
          pitch: -50.9056437238406,
          yaw: 297.5436262327369,
          type: "",
          text: "2072 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2072 Thornton Rd.",
        },
        {
          pitch: -37.61260989207889,
          yaw: -78.80465191342424,
          type: "",
          text: "600 Conlin Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "600 Conlin Rd.",
        },
      ],
    },
    5: {
      title: "Community Center <br> Aerial",
      panorama: "tiles/5.jpg",
      pitch: -40.65,
      yaw: 36.76,
      northOffset: -5, // North Direction Yaw 
      hotSpots: [
        {
          pitch: -16.05,
          yaw: 154.23,
          type: "scene",
          text: "Conlin Roundabout Aerial",
          sceneId: "4",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin Roundabout Aerial",
        },
        {
          pitch: -67.79,
          yaw: 57.81,
          type: "scene",
          text: "Community Center Street View",
          sceneId: "9",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Community Center Street View",
        },
        {
          pitch: -40.92605186728068,
          yaw: 156.03924828737954,
          type: "",
          text: "2170 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2170 Thornton Rd.",
        },
        {
          pitch: -51.5858344058268,
          yaw: 160.75436570903256,
          type: "",
          text: "2182 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2182 Thornton Rd.",
        },
        {
          pitch: -49.957010094507154,
          yaw: 20.952608648345976,
          type: "",
          text: "2385 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2385 Thornton Rd.",
        },
        {
          pitch: -39.78449439000852,
          yaw: 19.342688669603913,
          type: "",
          text: "2411 Thornton Rd.",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2411 Thornton Rd.",
        },
        {
          pitch: -45.190953264704895,
          yaw: -18.515247593249764,
          type: "",
          text: "2400 Thornton Rd. Durham Transit Station",
          cssClass: "target_size invisible",
          createTooltipFunc: hotspot,
          createTooltipArgs: "2400 Thornton Rd. Durham Transit Station",
        },
      ],
    },
    6: {
      title: "1423 Thornton Rd <br> Street View",
      panorama: "tiles/10.jpg",
      pitch: -10.44,
      yaw: -7,
      hotSpots: [
        {
          pitch: 17.95,
          yaw: -14.48,
          type: "scene",
          text: "1680 Thornton Aerial",
          sceneId: "3",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Aerial",
        },
        {
          pitch: -4,
          yaw: -17.17,
          type: "scene",
          text: "1680 Thornton Rd. Street View",
          sceneId: "7",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Rd. Street View",
        },
        {
          pitch: 28.83,
          yaw: 162.55,
          type: "scene",
          text: "1423 Thornton Aerial",
          sceneId: "1",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1423 Thornton Aerial",
        },
      ],
    },
    7: {
      title: "1680 Thornton <br> Street View",
      panorama: "tiles/6.jpg",
      pitch: -1,
      yaw: -17.49,
      hotSpots: [
        {
          pitch: 8.54,
          yaw: -197.06,
          type: "scene",
          text: "1423 Thornton Aerial",
          sceneId: "1",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1423 Thornton Aerial",
        },
        {
          pitch: 6.86,
          yaw: -17.42,
          type: "scene",
          text: "Conlin Roundabout Aerial",
          sceneId: "4",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin Roundabout Aerial",
        },
        {
          pitch: -2.4,
          yaw: -17.32,
          type: "scene",
          text: "Conlin - Thornton Street View",
          sceneId: "8",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin - Thornton Street View",
        },
        {
          pitch: -0.5,
          yaw: 162.18,
          type: "scene",
          text: "1423 Thornton Rd. Street View",
          sceneId: "6",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1680 Thornton Rd. Street View",
        },
      ],
    },
    8: {
      title: "Conlin - Thornton <br> Street View",
      panorama: "tiles/8.jpg",
      pitch: 0.2,
      yaw: -95.47,
      hotSpots: [
        {
          pitch: 20.28,
          yaw: -189.9,
          type: "scene",
          text: "Conlin Roundabout Aerial",
          sceneId: "4",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin Roundabout Aerial",
        },
        {
          pitch: 11.67,
          yaw: -30.26,
          type: "scene",
          text: "Community Center Aerial",
          sceneId: "5",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Community Center Aerial",
        },
        {
          pitch: -1.66,
          yaw: -20.64,
          type: "scene",
          text: "Community Center Street View",
          sceneId: "9",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Community Center Street View",
        },
      ],
    },
    9: {
      title: "Community Center <br> Street View",
      panorama: "tiles/7.jpg",
      pitch: -9.56,
      yaw: 46.83,
      hotSpots: [
        {
          pitch: 38.62,
          yaw: 199.74,
          type: "scene",
          text: "Community Center Aerial",
          sceneId: "5",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Community Center Aerial",
        },
        {
          pitch: 0,
          yaw: 160.66,
          type: "scene",
          text: "Conlin - Thornton Street View",
          sceneId: "8",
          cssClass: "target_size target",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Conlin - Thornton Street View",
        },
      ],
    },
    10: {
      title: "1497 Stevenson <br> Street View",
      panorama: "tiles/9.jpg",
      pitch: -11.04,
      yaw: -16.66,
      hotSpots: [
        {
          pitch: 16.57,
          yaw: -196.08,
          type: "scene",
          text: "1410 Stevenson Aerial",
          sceneId: "2",
          cssClass: "hotspot_size arrow_down",
          createTooltipFunc: hotspot,
          createTooltipArgs: "1410 Stevenson Aerial",
        },
      ],
    },
  },
});

//Populate views and save scene config
let views = viewer.getConfig().scenes;
for (let scene in views) {
  document.getElementById("viewsDiv").innerHTML =
    document.getElementById("viewsDiv").innerHTML +
    '<div class="ctrl" id="' +
    scene +
    '">' +
    views[scene].title +
    "</div>";
  sceneConfig.push({
    scene: scene,
    yam: views[scene].yaw,
    pitch: views[scene].pitch,
    hfov: views[scene].hfov,
  });
}

//Set Home Button
document.getElementById("home_button").onclick = function () {
  loadScene(viewer.getConfig().firstScene);
};

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  //Top Icon
  hotSpotDiv.classList.add("tooltipName");
  let spanTop = document.createElement("span");
  spanTop.innerHTML = args; //Add content to it
  hotSpotDiv.appendChild(spanTop);

  //hotspotdiv hover event listener if invisible (you dont need spanTop and floating text)
  if (hotSpotDiv.classList.contains("invisible")) {
    hotSpotDiv.addEventListener("mousemove", function () {
      document.getElementById("floating_text").innerHTML = args;
      document.getElementById("floating_text").style.display = "block";
      document.getElementById("floating_text").style.top =
        mousePosY + 10 + "px";
      document.getElementById("floating_text").style.left =
        mousePosX + 10 + "px";
    });

    //hotspotdiv hover end event listener
    hotSpotDiv.addEventListener("mouseout", function () {
      document.getElementById("floating_text").style.display = "none";
    });
  }

  //Check if hotspotdiv has class of invisible
  if (hotSpotDiv.classList.contains("invisible")) {
    //If invisible, remove tooltip
    spanTop.style.display = "none";
  } else {
    spanTop.style.width = spanTop.offsetWidth - 20 + "px";
    spanTop.style.marginLeft =
      -(spanTop.offsetWidth - hotSpotDiv.offsetWidth) / 2 + 2 + "px";
    spanTop.style.marginTop = -spanTop.scrollHeight - 14 + "px";

    // window resize event listener to keep tooltip in place
    window.addEventListener("resize", function () {
      spanTop.style.width = spanTop.offsetWidth - 20 + "px";
      spanTop.style.marginLeft =
        -(spanTop.offsetWidth - hotSpotDiv.offsetWidth) / 2 + 2 + "px";
      spanTop.style.marginTop = -spanTop.scrollHeight - 14 + "px";
    });
  }
}

function hotspotArrow(hotSpotDiv, args) {
  //Arrow Hotspot
  hotSpotDiv.classList.add("custom-tooltip");
  let spanLine = document.createElement("div");
  spanLine.classList.add("custom-hotspot-line");
  spanLine.style.width = args[1] + "vmax";
  spanLine.style.backgroundColor = "#ea1d2e";
  spanLine.style.transform =
    "translate(calc(" +
    (screen.width > 640 ? args[1] * 3 : args[1] * 6) +
    "vmax + 1vmin), calc(-" +
    args[2] +
    "vmax + 1vmin";
  spanLine.style.height = "calc(" + args[2] + "vmax + 1vmin)";
  hotSpotDiv.appendChild(spanLine);
  let divText = document.createElement("div");
  divText.classList.add("custom-hotspot-line");
  divText.innerHTML = args[0];
  divText.style.width = "max-content";
  divText.style.color = "black";
  divText.style.fontSize = screen.width > 840 ? "1vmax" : "2vmax";
  divText.style.transform =
    "translate(calc(" +
    (screen.width > 640 ? args[1] * 3 : args[1] * 6) +
    "vmax + 1vmin), calc(-" +
    args[2] * 2.3 +
    "vmax + 1vmin";
  hotSpotDiv.appendChild(divText);
  divText.style.marginLeft = -divText.offsetWidth / 2 + "px"; //Get calculated width of Span and apply as marginLeft
}

// Create Hotspot with Icons
function hotspotIcons(hotSpotDiv, args) {
  //Tool Tip
  hotSpotDiv.classList.add("tooltipName");
  let spanTopToolTip = document.createElement("span");
  spanTopToolTip.innerHTML = args[0]; //Add content to it
  hotSpotDiv.appendChild(spanTopToolTip);
  spanTopToolTip.classList.add("icon_hotspot_tooltip");

  //Top Right Icon - PDF
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanTopRight = document.createElement("div");
  let iconTopRight = document.createElement("i");
  iconTopRight.classList.add("material-icons");
  iconTopRight.title = "View PDF";
  iconTopRight.onclick = function () {
    closeImg();
    let isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) showIframe(args[0], args[1]);
    else window.open(args[1]);
  };
  iconTopRight.innerHTML = "picture_as_pdf";
  spanTopRight.appendChild(iconTopRight);
  spanTopRight.classList.add("icon_top_right");
  hotSpotDiv.appendChild(spanTopRight);

  //Top Left Icon - Info
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanTopLeft = document.createElement("div");
  let iconTopLeft = document.createElement("i");
  iconTopLeft.classList.add("material-icons");
  iconTopLeft.title = "Show Info";
  iconTopLeft.onclick = function () {
    closeImg();
    showInfo(args[2]);
    selectLanguage($("#languageSelect").val());
  };
  iconTopLeft.innerHTML = "content_paste";
  spanTopLeft.appendChild(iconTopLeft);
  spanTopLeft.classList.add("icon_top_left");
  hotSpotDiv.appendChild(spanTopLeft);

  //Right Icon - Video
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanRight = document.createElement("div");
  let iconRight = document.createElement("i");
  iconRight.classList.add("material-icons");
  iconRight.title = "Show Video";
  iconRight.onclick = function () {
    closeImg();
    showIframe("Video Player", args[3]);
  };
  iconRight.innerHTML = "smart_display";
  spanRight.appendChild(iconRight);
  spanRight.classList.add("icon_right");
  hotSpotDiv.appendChild(spanRight);

  //Left Icon - Image Gallery
  hotSpotDiv.classList.add("custom-hotspot2");
  let spanLeft = document.createElement("div");
  let iconLeft = document.createElement("i");
  iconLeft.classList.add("material-icons");
  iconLeft.title = "Show Gallery";
  iconLeft.onclick = function () {
    closeImg();
    slideIndex = 1;
    openGallery(args[4]);
  };
  iconLeft.innerHTML = "image";
  spanLeft.appendChild(iconLeft);
  spanLeft.classList.add("icon_left");
  hotSpotDiv.appendChild(spanLeft);
}

//Open Gallery Function
let openGallery = function (imgGallery) {
  let innerHTML = "";
  //foreach Add Images
  for (let i = 0; i < imgGallery.length; i++) {
    innerHTML =
      innerHTML +
      '<div class="mySlides"><div class="numbertext">' +
      imgGallery[i].position +
      "/" +
      imgGallery.length +
      "</div>" +
      '<img class="mySlidesImg" src="' +
      imgGallery[i].src +
      '" alt=""></div>';
  }
  document.getElementById("content_gallery").innerHTML = innerHTML;
  document.getElementById("myModalGallery").style.display = "block";
  showSlides(1);
};

// Close the Gallery Modal
let closeGallery = function () {
  document.getElementById("myModalGallery").style.display = "none";
  document.getElementById("content_gallery").innerHTML = "";
};

// Next/previous controls
let nextSlides = function () {
  showSlides((slideIndex += 1));
};
let prevSlides = function () {
  showSlides((slideIndex += -1));
};

//Show slides Gallery
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//Hotspot Icon Actions - Iframe
let showIframe = function (iframeTitle, iframeSrc) {
  document.getElementById("myModal").style.display = "inline";
  document.getElementById("myModal").style.zIndex = "6";
  document.getElementById("video01").style.display = "block";
  document.getElementById("video01").src = iframeSrc;
  document.getElementById("video01").title = iframeTitle;
  document.getElementById("caption").innerHTML = "";
};

//Hotspot Icon Actions - Info
let showInfo = function (inner_html) {
  document.getElementById("myModalInfo").style.display = "flex";
  document.getElementById("myModalInfo").style.zIndex = "6";
  document.getElementById("modal_info_span").innerHTML = inner_html;
};

//Hotspot Icon Actions - Close Info
function closeInfo() {
  document.getElementById("myModalInfo").style.display = "none";
}
// document.getElementById("myModalInfo").addEventListener("click", function () {
//   closeInfo();
// });

//Close Info Modal
function closeImg() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("video01").style.display = "none";
  document.getElementById("video01").src = "";
  document.getElementById("caption").innerHTML = "";
  document.getElementById("img01").src = "";
  document.getElementById("img01").style.display = "none";
}

let openContactForm = function (params, data) {
  document.getElementById("myModalInfo").style.display = "inline";
  document.getElementById("myModalInfo").style.zIndex = "6";
};

document.getElementById("closeButton").addEventListener("click", function () {
  closeImg();
});
document.getElementById("myModal").addEventListener("click", function () {
  closeImg();
});

//Search and Load Scene
function searchScene(sceneKey) {
  for (let i = 0; i < sceneConfig.length; i++) {
    if (sceneConfig[i].scene === sceneKey) {
      return sceneConfig[i];
    }
  }
}

// change direction indicator text depending on the current yaw
function updateDirectionIndicatorText(yaw) {
  let directionIndicator = document.querySelector(".direction-indicator-text");
  let northOffset = viewer.getNorthOffset();
  yaw = yaw + northOffset;

  if (yaw > -45 && yaw < 45) {
    directionIndicator.innerHTML = "N";
  } else if (yaw > 45 && yaw < 135) {
    directionIndicator.innerHTML = "E";
  } else if (yaw > 135 || yaw < -135) {
    directionIndicator.innerHTML = "S";
  } else if (yaw > -135 && yaw < -45) {
    directionIndicator.innerHTML = "W";
  }
}

// Every 0.5s check if the yaw has changed and update the direction indicator text
setInterval(function () {
  let yaw = viewer.getYaw();
  updateDirectionIndicatorText(yaw);
}, 100);


function loadScene(sceneKey) {
  let scene = searchScene(sceneKey);
  viewer.loadScene(scene.scene, scene.pitch, scene.yam, scene.hfov);

  // If screen is smaller than 768px, hide the navigation menu.
  if (window.innerWidth < 768) {
    hideNavMenu();
  }
}

function nextScene() {
  for (let scene in sceneConfig) {
    if (sceneConfig[scene].scene === viewer.getScene()) {
      if (viewer.getScene() === sceneConfig[sceneConfig.length - 1].scene) {
        loadScene(sceneConfig[0].scene);
        break;
      } else {
        loadScene(sceneConfig[parseInt(scene) + 1].scene);
        break;
      }
    }
  }
}

function previousScene() {
  let last = "";
  for (let scene in sceneConfig) {
    if (sceneConfig[scene].scene === viewer.getScene()) {
      if (last !== "") {
        loadScene(last);
        break;
      } else {
        loadScene(sceneConfig[sceneConfig.length - 1].scene);
        break;
      }
    } else last = sceneConfig[scene].scene;
  }
}

//Bottom Menu Event Listener
let els = document.getElementsByClassName("ctrl");
Array.prototype.forEach.call(els, function (el) {
  //Load Scene
  document.getElementById(el.id).addEventListener("click", function () {
    loadScene(el.id);
  });

  //Mouse Over Event
  document.getElementById(el.id).addEventListener("mouseover", function () {
    //Highlights Current Hotspot
    if (document.getElementsByClassName(el.id).item(0) != null)
      document
        .getElementsByClassName(el.id)
        .item(0)
        .classList.add("hoverEffect");

    //Dims Other hotspots
    let hotspots_elements =
      document.getElementsByClassName("pnlm-hotspot-base");
    Array.prototype.forEach.call(hotspots_elements, function (el2) {
      if (el2.classList[2] !== el.id) {
        document
          .getElementsByClassName(el2.classList[2])
          .item(0)
          .classList.add("hoverReduceBrightness");
      }
    });
  });

  //Mouse Out Event
  document.getElementById(el.id).addEventListener("mouseout", function () {
    //Remove Highlight from Current Hotspot
    if (document.getElementsByClassName(el.id).item(0) != null)
      document
        .getElementsByClassName(el.id)
        .item(0)
        .classList.remove("hoverEffect");

    //Remove Dim from Other hotspots
    let hotspots_elements =
      document.getElementsByClassName("pnlm-hotspot-base");
    Array.prototype.forEach.call(hotspots_elements, function (el2) {
      if (el2.classList[2] !== el.id) {
        document
          .getElementsByClassName(el2.classList[2])
          .item(0)
          .classList.remove("hoverReduceBrightness");
      }
    });
  });
});

//Search Bar Control
document.getElementById("searchBar").addEventListener("change", function () {
  let e = document.getElementById("searchBar");
  let value = e.options[e.selectedIndex].value;
  /*let text = e.options[e.selectedIndex].text;*/

  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    if (hs_el.classList[2] === value) {
      hs_el.classList.add("hoverEffect");
      hs_el.classList.remove("hoverReduceBrightness");
    } else {
      hs_el.classList.add("hoverReduceBrightness");
      hs_el.classList.remove("hoverEffect");
    }
  });
});

//Create Default Option for the Select Element
function createDefaultOption(text) {
  let optionFilterDefault = document.createElement("option");
  optionFilterDefault.value = "";
  optionFilterDefault.text = text;
  optionFilterDefault.hidden = true;
  optionFilterDefault.selected = true;
  optionFilterDefault.disabled = true;

  return optionFilterDefault;
}

viewer.on("load", function () {
  document.getElementById("floating_text").style.display = "none";

  //Clear filter box
  let i,
    L = document.getElementById("searchBar").options.length - 1;
  for (i = L; i >= 0; i--) {
    document.getElementById("searchBar").remove(i);
  }

  document.getElementById("searchBar").add(createDefaultOption(" Filter"));

  //Hover Hotspots event listener
  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    //Check Settings and Show/Hide Hot Spots
    if (document.getElementById("cbHotSpot").checked) {
      hs_el.classList.add("visible");
      hs_el.classList.remove("hidden");
    } else {
      hs_el.classList.add("hidden");
      hs_el.classList.remove("visible");
    }
    viewer.renderHotSpots();

    //Mouse Over Event
    hs_el.addEventListener("mouseover", function () {
      Array.prototype.forEach.call(els, function (el2) {
        if (hs_el.classList[2] === el2.id) el2.classList.add("hoverEffect");
        else el2.classList.add("hoverReduceBrightness");
      });
    });

    //Mouse Out Event
    hs_el.addEventListener("mouseout", function () {
      Array.prototype.forEach.call(els, function (el2) {
        if (hs_el.classList[2] === el2.id) el2.classList.remove("hoverEffect");
        else el2.classList.remove("hoverReduceBrightness");
      });
    });

    if (hs_el.getElementsByTagName("span")[0] !== undefined) {
      let option = document.createElement("option");
      option.value = hs_el.classList[2];
      option.text =
        hs_el.getElementsByTagName("span")[0] === undefined
          ? ""
          : hs_el.getElementsByTagName("span")[0].innerHTML;
      document.getElementById("searchBar").add(option);
    }
  });

  //Scene history
  if (addToHistory) {
    while (currentScene < sceneHistory.length - 1) {
      sceneHistory.pop();
    }
    sceneHistory.push(viewer.getScene());
    currentScene = sceneHistory.length - 1;
  }
  //Scene previous control
  if (currentScene > 0) {
    document.getElementById("previousPage").classList.remove("hidden");
    document.getElementById("previousPage").onclick = function () {
      addToHistory = false;
      currentScene = currentScene - 1;
      loadScene(sceneHistory[currentScene]);
    };
  } else {
    document.getElementById("previousPage").classList.add("hidden");
  }
  //Scene next control
  if (currentScene < sceneHistory.length - 1) {
    document.getElementById("nextPage").classList.remove("hidden");
    document.getElementById("nextPage").onclick = function () {
      addToHistory = false;
      currentScene = currentScene + 1;
      loadScene(sceneHistory[currentScene]);
    };
  } else {
    document.getElementById("nextPage").classList.add("hidden");
  }
  addToHistory = true;

  //Remove Hover Effect from Views Menu
  let els = document.getElementsByClassName("ctrl");
  Array.prototype.forEach.call(els, function (el) {
    el.classList.remove("hoverEffect");
    el.classList.remove("hoverReduceBrightness");
  });
});

//Side Bar - Audio Player
function showAudioPlayer() {
  document.getElementById("audio_elm").style.visibility =
    document.getElementById("audio_elm").style.visibility === "visible"
      ? "hidden"
      : "visible";
}

//Side bar - Info - show control
function openSideBarSettings() {
  document.getElementById("sideBarSettings").style.display = "block";
  document.getElementById("sideBarSearch").style.display = "none";

  if (document.getElementById("mySidebar").style.right < "0px") {
    document.getElementById("mySidebar").style.right = "1%";
    document.getElementById("settingsButton").innerHTML =
      '<span class="tooltiptext">Close Settings</span><i class="material-icons">close</i>';
    document.getElementById("searchButton").innerHTML =
      '<span class="tooltiptext">Filter</span><i class="material-icons">search</i>';
  } else {
    document.getElementById("mySidebar").style.right = "-500px";
    document.getElementById("settingsButton").innerHTML =
      '<span class="tooltiptext">Menu</span><i class="material-icons">menu</i>';
  }
}

function openSideBarSearch() {
  document.getElementById("sideBarSearch").style.display = "block";
  document.getElementById("sideBarSettings").style.display = "none";

  if (document.getElementById("mySidebar").style.right < "0px") {
    document.getElementById("mySidebar").style.right = "1%";
    document.getElementById("settingsButton").innerHTML =
      '<span class="tooltiptext">Close Settings</span><i class="material-icons">close</i>';
    document.getElementById("searchButton").innerHTML =
      '<span class="tooltiptext">Filter</span><i class="material-icons">search</i>';
  }
}

//Show Hot Spots CheckBox Function
document.getElementById("cbHotSpot").addEventListener("change", function () {
  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    if (document.getElementById("cbHotSpot").checked) {
      hs_el.classList.add("visible");
      hs_el.classList.remove("hidden");
    } else {
      hs_el.classList.add("hidden");
      hs_el.classList.remove("visible");
    }
    viewer.renderHotSpots();
  });
});

//Side bar - Search - Clear Filter
function clearFilter() {
  let hotspots_els = document.getElementsByClassName("pnlm-hotspot-base");
  Array.prototype.forEach.call(hotspots_els, function (hs_el) {
    hs_el.classList.remove("hoverEffect");
    hs_el.classList.remove("hoverReduceBrightness");
  });

  document.getElementById("searchBar").add(createDefaultOption(" Filter"));
}

//Share Functions
function showEmailLink() {
  document.getElementById("emailDiv").style.display = "flex";
}

function sendEmail() {
  let email = document.getElementById("emailShareInput").value;
  let mailTo = document.createElement("a");
  mailTo.href =
    "mailto:" +
    email +
    "?subject=Northwood%20Tour&body=Northwood%20Tour:%20https://renderdevelopments.com/northwood-tour/";
  mailTo.target = "_blank";
  mailTo.click();
  document.getElementById("emailDiv").style.display = "none";
}

let captchaConfirmed = false;

function confirmCaptcha() {
  captchaConfirmed = true;
}

function sendContactEmail() {
  let name = document.getElementById("contactName").value;
  let number = document.getElementById("contactPhone").value || "N/A";
  let email = document.getElementById("contactEmail").value || "N/A";
  let message = document.getElementById("contactMessage").value;

  if (name !== "" && number !== "" && email !== "" && message !== "" && captchaConfirmed) {
    let mailTo = document.createElement("a");

    mailTo.href = `mailto: ${"aporay@oshawa.ca"}?cc=${"joel.davies@renderdevelopments.com"}&subject=${"Northwood Tour"}&body=${
      "By: " +
      name +
      "%0D%0A %0D%0A" +
      message +
      "%0D%0A %0D%0A" +
      "Email: " +
      email +
      "%0D%0A %0D%0A" +
      "Phone: " +
      number
    }`;
    mailTo.target = "_blank";
    mailTo.click();
    closeInfo();
  } else {
    alert("Please enter a name, phone number or email, and a message.");
  }
}

function copyToClipBoard() {
  let copyButton = document.getElementById("copyButton");
  navigator.clipboard.writeText("http://renderdevelopments.com/northwood-tour/");
  copyButton.innerHTML = "Copied Link!";
  //Show copied for 2 seconds
  setTimeout(function() {copyButton.innerHTML = "Copy Tour Link";}, 2000);
}

function outCopyButton() {
  let copyButton = document.getElementById("copyButton");
  copyButton.title = "Copy to clipboard";
}

function selectLanguage(lang) {
  switch (lang) {
    case "EN":
      $('[lang="EN"]').show();
      $('[lang="FR"]').hide();
      $('[lang="ES"]').hide();
      break;
    case "FR":
      $('[lang="EN"]').hide();
      $('[lang="FR"]').show();
      $('[lang="ES"]').hide();
      break;
    case "ES":
      $('[lang="EN"]').hide();
      $('[lang="FR"]').hide();
      $('[lang="ES"]').show();
      break;
    default:
      $('[lang="EN"]').show();
      $('[lang="FR"]').hide();
      $('[lang="ES"]').hide();
  }
}

document.addEventListener("mousemove", function (e) {
  mousePosX = e.pageX;
  mousePosY = e.pageY;
});
