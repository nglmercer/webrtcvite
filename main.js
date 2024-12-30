import 'webrtc-adapter';
import RTCMultiConnection from 'rtcmulticonnection';    
var connection = new RTCMultiConnection();
connection.socketURL = 'https://adhesive-deadpan-braid.glitch.me/';//'http://localhost:9001/';
connection.socketMessageEvent = 'video-broadcast-demo';

connection.session = {
    audio: true,
    video: true,
    oneway: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};
console.log('rtcMultiConnection', connection);
connection.iceServers = [{
'urls': [
    "stun:stun.relay.metered.ca:80",
    "turn:global.relay.metered.ca:80",
    "turn:global.relay.metered.ca:80?transport=tcp",
    "turn:global.relay.metered.ca:443",
    "turns:global.relay.metered.ca:443?transport=tcp",
    "23.21.150.121:3478",
"iphone-stun.strato-iphone.de:3478",
"numb.viagenie.ca:3478",
"s1.taraba.net:3478",
"s2.taraba.net:3478",
"stun.12connect.com:3478",
"stun.12voip.com:3478",
"stun.1und1.de:3478",
"stun.2talk.co.nz:3478",
"stun.2talk.com:3478",
"stun.3clogic.com:3478",
"stun.3cx.com:3478",
"stun.a-mm.tv:3478",
"stun.aa.net.uk:3478",
"stun.acrobits.cz:3478",
"stun.actionvoip.com:3478",
"stun.advfn.com:3478",
"stun.aeta-audio.com:3478",
"stun.aeta.com:3478",
"stun.alltel.com.au:3478",
"stun.altar.com.pl:3478",
"stun.annatel.net:3478",
"stun.antisip.com:3478",
"stun.arbuz.ru:3478",
"stun.avigora.com:3478",
"stun.avigora.fr:3478",
"stun.awa-shima.com:3478",
"stun.awt.be:3478",
"stun.b2b2c.ca:3478",
"stun.bahnhof.net:3478",
"stun.barracuda.com:3478",
"stun.bluesip.net:3478",
"stun.bmwgs.cz:3478",
"stun.botonakis.com:3478",
"stun.budgetphone.nl:3478",
"stun.budgetsip.com:3478",
"stun.cablenet-as.net:3478",
"stun.callromania.ro:3478",
"stun.callwithus.com:3478",
"stun.cbsys.net:3478",
"stun.chathelp.ru:3478",
"stun.cheapvoip.com:3478",
"stun.ciktel.com:3478",
"stun.cloopen.com:3478",
"stun.colouredlines.com.au:3478",
"stun.comfi.com:3478",
"stun.commpeak.com:3478",
"stun.comtube.com:3478",
"stun.comtube.ru:3478",
"stun.cope.es:3478",
"stun.counterpath.com:3478",
"stun.counterpath.net:3478",
"stun.cryptonit.net:3478",
"stun.darioflaccovio.it:3478",
"stun.datamanagement.it:3478",
"stun.dcalling.de:3478",
"stun.decanet.fr:3478",
"stun.demos.ru:3478",
"stun.develz.org:3478",
"stun.dingaling.ca:3478",
"stun.doublerobotics.com:3478",
"stun.drogon.net:3478",
"stun.duocom.es:3478",
"stun.dus.net:3478",
"stun.e-fon.ch:3478",
"stun.easybell.de:3478",
"stun.easycall.pl:3478",
"stun.easyvoip.com:3478",
"stun.efficace-factory.com:3478",
"stun.einsundeins.com:3478",
"stun.einsundeins.de:3478",
"stun.ekiga.net:3478",
"stun.epygi.com:3478",
"stun.etoilediese.fr:3478",
"stun.eyeball.com:3478",
"stun.faktortel.com.au:3478",
"stun.freecall.com:3478",
"stun.freeswitch.org:3478",
"stun.freevoipdeal.com:3478",
"stun.fuzemeeting.com:3478",
"stun.gmx.de:3478",
"stun.gmx.net:3478",
"stun.gradwell.com:3478",
"stun.halonet.pl:3478",
"stun.hellonanu.com:3478",
"stun.hoiio.com:3478",
"stun.hosteurope.de:3478",
"stun.ideasip.com:3478",
"stun.imesh.com:3478",
"stun.infra.net:3478",
"stun.internetcalls.com:3478",
"stun.intervoip.com:3478",
"stun.ipcomms.net:3478",
"stun.ipfire.org:3478",
"stun.ippi.fr:3478",
"stun.ipshka.com:3478",
"stun.iptel.org:3478",
"stun.irian.at:3478",
"stun.it1.hr:3478",
"stun.ivao.aero:3478",
"stun.jappix.com:3478",
"stun.jumblo.com:3478",
"stun.justvoip.com:3478",
"stun.kanet.ru:3478",
"stun.kiwilink.co.nz:3478",
"stun.kundenserver.de:3478",
"stun.l.google.com:19302",
"stun.linea7.net:3478",
"stun.linphone.org:3478",
"stun.liveo.fr:3478",
"stun.lowratevoip.com:3478",
"stun.lugosoft.com:3478",
"stun.lundimatin.fr:3478",
"stun.magnet.ie:3478",
"stun.manle.com:3478",
"stun.mgn.ru:3478",
"stun.mit.de:3478",
"stun.mitake.com.tw:3478",
"stun.miwifi.com:3478",
"stun.modulus.gr:3478",
"stun.mozcom.com:3478",
"stun.myvoiptraffic.com:3478",
"stun.mywatson.it:3478",
"stun.nas.net:3478",
"stun.neotel.co.za:3478",
"stun.netappel.com:3478",
"stun.netappel.fr:3478",
"stun.netgsm.com.tr:3478",
"stun.nfon.net:3478",
"stun.noblogs.org:3478",
"stun.noc.ams-ix.net:3478",
"stun.node4.co.uk:3478",
"stun.nonoh.net:3478",
"stun.nottingham.ac.uk:3478",
"stun.nova.is:3478",
"stun.nventure.com:3478",
"stun.on.net.mk:3478",
"stun.ooma.com:3478",
"stun.ooonet.ru:3478",
"stun.oriontelekom.rs:3478",
"stun.outland-net.de:3478",
"stun.ozekiphone.com:3478",
"stun.patlive.com:3478",
"stun.personal-voip.de:3478",
"stun.petcube.com:3478",
"stun.phone.com:3478",
"stun.phoneserve.com:3478",
"stun.pjsip.org:3478",
"stun.poivy.com:3478",
"stun.powerpbx.org:3478",
"stun.powervoip.com:3478",
"stun.ppdi.com:3478",
"stun.prizee.com:3478",
"stun.qq.com:3478",
"stun.qvod.com:3478",
"stun.rackco.com:3478",
"stun.rapidnet.de:3478",
"stun.rb-net.com:3478",
"stun.refint.net:3478",
"stun.remote-learner.net:3478",
"stun.rixtelecom.se:3478",
"stun.rockenstein.de:3478",
"stun.rolmail.net:3478",
"stun.rounds.com:3478",
"stun.rynga.com:3478",
"stun.samsungsmartcam.com:3478",
"stun.schlund.de:3478",
"stun.services.mozilla.com:3478",
"stun.sigmavoip.com:3478",
"stun.sip.us:3478",
"stun.sipdiscount.com:3478",
"stun.siplogin.de:3478",
"stun.sipnet.net:3478",
"stun.sipnet.ru:3478",
"stun.siportal.it:3478",
"stun.sippeer.dk:3478",
"stun.siptraffic.com:3478",
"stun.skylink.ru:3478",
"stun.sma.de:3478",
"stun.smartvoip.com:3478",
"stun.smsdiscount.com:3478",
"stun.snafu.de:3478",
"stun.softjoys.com:3478",
"stun.solcon.nl:3478",
"stun.solnet.ch:3478",
"stun.sonetel.com:3478",
"stun.sonetel.net:3478",
"stun.sovtest.ru:3478",
"stun.speedy.com.ar:3478",
"stun.spokn.com:3478",
"stun.srce.hr:3478",
"stun.ssl7.net:3478",
"stun.stunprotocol.org:3478",
"stun.symform.com:3478",
"stun.symplicity.com:3478",
"stun.sysadminman.net:3478",
"stun.t-online.de:3478",
"stun.tagan.ru:3478",
"stun.tatneft.ru:3478",
"stun.teachercreated.com:3478",
"stun.tel.lu:3478",
"stun.telbo.com:3478",
"stun.telefacil.com:3478",
"stun.tis-dialog.ru:3478",
"stun.tng.de:3478",
"stun.twt.it:3478",
"stun.u-blox.com:3478",
"stun.ucallweconn.net:3478",
"stun.ucsb.edu:3478",
"stun.ucw.cz:3478",
"stun.uls.co.za:3478",
"stun.unseen.is:3478",
"stun.usfamily.net:3478",
"stun.veoh.com:3478",
"stun.vidyo.com:3478",
"stun.vipgroup.net:3478",
"stun.virtual-call.com:3478",
"stun.viva.gr:3478",
"stun.vivox.com:3478",
"stun.vline.com:3478",
"stun.vo.lu:3478",
"stun.vodafone.ro:3478",
"stun.voicetrading.com:3478",
"stun.voip.aebc.com:3478",
"stun.voip.blackberry.com:3478",
"stun.voip.eutelia.it:3478",
"stun.voiparound.com:3478",
"stun.voipblast.com:3478",
"stun.voipbuster.com:3478",
"stun.voipbusterpro.com:3478",
"stun.voipcheap.co.uk:3478",
"stun.voipcheap.com:3478",
"stun.voipfibre.com:3478",
"stun.voipgain.com:3478",
"stun.voipgate.com:3478",
"stun.voipinfocenter.com:3478",
"stun.voipplanet.nl:3478",
"stun.voippro.com:3478",
"stun.voipraider.com:3478",
"stun.voipstunt.com:3478",
"stun.voipwise.com:3478",
"stun.voipzoom.com:3478",
"stun.vopium.com:3478",
"stun.voxgratia.org:3478",
"stun.voxox.com:3478",
"stun.voys.nl:3478",
"stun.voztele.com:3478",
"stun.vyke.com:3478",
"stun.webcalldirect.com:3478",
"stun.whoi.edu:3478",
"stun.wifirst.net:3478",
"stun.wwdl.net:3478",
"stun.xs4all.nl:3478",
"stun.xtratelecom.es:3478",
"stun.yesss.at:3478",
"stun.zadarma.com:3478",
"stun.zadv.com:3478",
"stun.zoiper.com:3478",
"stun1.faktortel.com.au:3478",
"stun1.l.google.com:19302",
"stun1.voiceeclipse.net:3478",
"stun2.l.google.com:19302",
"stun3.l.google.com:19302",
"stun4.l.google.com:19302",
"stunserver.org:3478",
"stun.sipnet.net:3478",
"stun.sipnet.ru:3478",
"stun.stunprotocol.org:3478",
"124.64.206.224:8800",
"stun.nextcloud.com:443",
"relay.webwormhole.io",
"stun.flashdance.cx:3478"
]
}];
connection.videosContainer = document.getElementById('videos-container');
connection.onstream = function(event) {
var existing = document.getElementById(event.streamid);
if(existing && existing.parentNode) {
existing.parentNode.removeChild(existing);
}

event.mediaElement.removeAttribute('src');
event.mediaElement.removeAttribute('srcObject');
event.mediaElement.muted = true;
event.mediaElement.volume = 0;

var video = document.createElement('video');

try {
video.setAttributeNode(document.createAttribute('autoplay'));
video.setAttributeNode(document.createAttribute('playsinline'));
} catch (e) {
video.setAttribute('autoplay', true);
video.setAttribute('playsinline', true);
}

if(event.type === 'local') {
video.volume = 0;
try {
  video.setAttributeNode(document.createAttribute('muted'));
} catch (e) {
  video.setAttribute('muted', true);
}
}
video.srcObject = event.stream;

var width = parseInt(connection.videosContainer.clientWidth / 3) - 20;
var mediaElement = getHTMLMediaElement(video, {
title: event.userid,
buttons: ['full-screen'],
width: width,
showOnMouseEnter: false
});

connection.videosContainer.appendChild(mediaElement);

setTimeout(function() {
mediaElement.media.play();
}, 5000);

mediaElement.id = event.streamid;
};

connection.onstreamended = function(event) {
var mediaElement = document.getElementById(event.streamid);
if (mediaElement) {
mediaElement.parentNode.removeChild(mediaElement);

if(event.userid === connection.sessionid && !connection.isInitiator) {
  alert('Broadcast is ended. We will reload this page to clear the cache.');
  location.reload();
}
}
};

connection.onMediaError = function(e) {
if (e.message === 'Concurrent mic process limit.') {
if (DetectRTC.audioInputDevices.length <= 1) {
    alert('Please select external microphone. Check github issue number 483.');
    return;
}

var secondaryMic = DetectRTC.audioInputDevices[1].deviceId;
connection.mediaConstraints.audio = {
    deviceId: secondaryMic
};

connection.join(connection.sessionid);
}
};
(function() {
var params = {},
r = /([^&=]+)=?([^&]*)/g;

function d(s) {
return decodeURIComponent(s.replace(/\+/g, ' '));
}
var match, search = window.location.search;
while (match = r.exec(search.substring(1)))
params[d(match[1])] = d(match[2]);
window.params = params;
})();

var roomid = '';
if (localStorage.getItem(connection.socketMessageEvent)) {
roomid = localStorage.getItem(connection.socketMessageEvent);
} else {
roomid = connection.token();
}
var hashString = location.hash.replace('#', '');
if (hashString.length && hashString.indexOf('comment-') == 0) {
hashString = '';
}
var roomid = params.roomid;
if (!roomid && hashString.length) {
roomid = hashString;
}
if (roomid && roomid.length) {
document.getElementById('room-id').value = roomid;
localStorage.setItem(connection.socketMessageEvent, roomid);

// auto-join-room
(function reCheckRoomPresence() {
connection.checkPresence(roomid, function(isRoomExist) {
    if (isRoomExist) {
        connection.join(roomid);
        return;
    }

    setTimeout(reCheckRoomPresence, 5000);
});
})();

disableInputButtons();
}
if(navigator.connection &&
navigator.connection.type === 'cellular' &&
navigator.connection.downlinkMax <= 0.115) {
alert('2G is not supported. Please use a better internet service.');
}
document.getElementById('open-room').onclick = function() {
disableInputButtons();
connection.open(document.getElementById('room-id').value, function() {
showRoomURL(connection.sessionid);
});
};

document.getElementById('join-room').onclick = function() {
disableInputButtons();

connection.sdpConstraints.mandatory = {
OfferToReceiveAudio: true,
OfferToReceiveVideo: true
};
connection.join(document.getElementById('room-id').value);
};

document.getElementById('open-or-join-room').onclick = function() {
disableInputButtons();
connection.openOrJoin(document.getElementById('room-id').value, function(isRoomExist, roomid) {
if (isRoomExist === false && connection.isInitiator === true) {
    // if room doesn't exist, it means that current user will create the room
    showRoomURL(roomid);
}

if(isRoomExist) {
  connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
  };
}
});
};
function disableInputButtons() {
document.getElementById('open-or-join-room').disabled = true;
document.getElementById('open-room').disabled = true;
document.getElementById('join-room').disabled = true;
document.getElementById('room-id').disabled = true;
}
function showRoomURL(roomid) {
var roomHashURL = '#' + roomid;
var roomQueryStringURL = '?roomid=' + roomid;

var html = '<h2>Unique URL for your room:</h2><br>';

html += 'Hash URL: <a href="' + roomHashURL + '" target="_blank">' + roomHashURL + '</a>';
html += '<br>';
html += 'QueryString URL: <a href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';

var roomURLsDiv = document.getElementById('room-urls');
roomURLsDiv.innerHTML = html;

roomURLsDiv.style.display = 'block';
}
function getHTMLMediaElement(mediaElement, config) {
    config = config || {};

    if (!mediaElement.nodeName || (mediaElement.nodeName.toLowerCase() != 'audio' && mediaElement.nodeName.toLowerCase() != 'video')) {
        if (!mediaElement.getVideoTracks().length) {
            return getAudioElement(mediaElement, config);
        }

        var mediaStream = mediaElement;
        mediaElement = document.createElement(mediaStream.getVideoTracks().length ? 'video' : 'audio');

        try {
            mediaElement.setAttributeNode(document.createAttribute('autoplay'));
            mediaElement.setAttributeNode(document.createAttribute('playsinline'));
        } catch (e) {
            mediaElement.setAttribute('autoplay', true);
            mediaElement.setAttribute('playsinline', true);
        }

        if ('srcObject' in mediaElement) {
            mediaElement.srcObject = mediaStream;
        } else {
            mediaElement[!!navigator.mozGetUserMedia ? 'mozSrcObject' : 'src'] = !!navigator.mozGetUserMedia ? mediaStream : (window.URL || window.webkitURL).createObjectURL(mediaStream);
        }
    }

    if (mediaElement.nodeName && mediaElement.nodeName.toLowerCase() == 'audio') {
        return getAudioElement(mediaElement, config);
    }

    var buttons = config.buttons || ['mute-audio', 'mute-video', 'full-screen', 'volume-slider', 'stop'];
    buttons.has = function(element) {
        return buttons.indexOf(element) !== -1;
    };

    config.toggle = config.toggle || [];
    config.toggle.has = function(element) {
        return config.toggle.indexOf(element) !== -1;
    };

    var mediaElementContainer = document.createElement('div');
    mediaElementContainer.className = 'media-container';

    var mediaControls = document.createElement('div');
    mediaControls.className = 'media-controls';
    mediaElementContainer.appendChild(mediaControls);

    if (buttons.has('mute-audio')) {
        var muteAudio = document.createElement('div');
        muteAudio.className = 'control ' + (config.toggle.has('mute-audio') ? 'unmute-audio selected' : 'mute-audio');
        mediaControls.appendChild(muteAudio);

        muteAudio.onclick = function() {
            if (muteAudio.className.indexOf('unmute-audio') != -1) {
                muteAudio.className = muteAudio.className.replace('unmute-audio selected', 'mute-audio');
                mediaElement.muted = false;
                mediaElement.volume = 1;
                if (config.onUnMuted) config.onUnMuted('audio');
            } else {
                muteAudio.className = muteAudio.className.replace('mute-audio', 'unmute-audio selected');
                mediaElement.muted = true;
                mediaElement.volume = 0;
                if (config.onMuted) config.onMuted('audio');
            }
        };
    }

    if (buttons.has('mute-video')) {
        var muteVideo = document.createElement('div');
        muteVideo.className = 'control ' + (config.toggle.has('mute-video') ? 'unmute-video selected' : 'mute-video');
        mediaControls.appendChild(muteVideo);

        muteVideo.onclick = function() {
            if (muteVideo.className.indexOf('unmute-video') != -1) {
                muteVideo.className = muteVideo.className.replace('unmute-video selected', 'mute-video');
                mediaElement.muted = false;
                mediaElement.volume = 1;
                mediaElement.play();
                if (config.onUnMuted) config.onUnMuted('video');
            } else {
                muteVideo.className = muteVideo.className.replace('mute-video', 'unmute-video selected');
                mediaElement.muted = true;
                mediaElement.volume = 0;
                mediaElement.pause();
                if (config.onMuted) config.onMuted('video');
            }
        };
    }

    if (buttons.has('take-snapshot')) {
        var takeSnapshot = document.createElement('div');
        takeSnapshot.className = 'control take-snapshot';
        mediaControls.appendChild(takeSnapshot);

        takeSnapshot.onclick = function() {
            if (config.onTakeSnapshot) config.onTakeSnapshot();
        };
    }

    if (buttons.has('stop')) {
        var stop = document.createElement('div');
        stop.className = 'control stop';
        mediaControls.appendChild(stop);

        stop.onclick = function() {
            mediaElementContainer.style.opacity = 0;
            setTimeout(function() {
                if (mediaElementContainer.parentNode) {
                    mediaElementContainer.parentNode.removeChild(mediaElementContainer);
                }
            }, 800);
            if (config.onStopped) config.onStopped();
        };
    }

    var volumeControl = document.createElement('div');
    volumeControl.className = 'volume-control';

    if (buttons.has('record-audio')) {
        var recordAudio = document.createElement('div');
        recordAudio.className = 'control ' + (config.toggle.has('record-audio') ? 'stop-recording-audio selected' : 'record-audio');
        volumeControl.appendChild(recordAudio);

        recordAudio.onclick = function() {
            if (recordAudio.className.indexOf('stop-recording-audio') != -1) {
                recordAudio.className = recordAudio.className.replace('stop-recording-audio selected', 'record-audio');
                if (config.onRecordingStopped) config.onRecordingStopped('audio');
            } else {
                recordAudio.className = recordAudio.className.replace('record-audio', 'stop-recording-audio selected');
                if (config.onRecordingStarted) config.onRecordingStarted('audio');
            }
        };
    }

    if (buttons.has('record-video')) {
        var recordVideo = document.createElement('div');
        recordVideo.className = 'control ' + (config.toggle.has('record-video') ? 'stop-recording-video selected' : 'record-video');
        volumeControl.appendChild(recordVideo);

        recordVideo.onclick = function() {
            if (recordVideo.className.indexOf('stop-recording-video') != -1) {
                recordVideo.className = recordVideo.className.replace('stop-recording-video selected', 'record-video');
                if (config.onRecordingStopped) config.onRecordingStopped('video');
            } else {
                recordVideo.className = recordVideo.className.replace('record-video', 'stop-recording-video selected');
                if (config.onRecordingStarted) config.onRecordingStarted('video');
            }
        };
    }

    if (buttons.has('volume-slider')) {
        var volumeSlider = document.createElement('div');
        volumeSlider.className = 'control volume-slider';
        volumeControl.appendChild(volumeSlider);

        var slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = 100;
        slider.value = 100;
        slider.onchange = function() {
            mediaElement.volume = '.' + slider.value.toString().substr(0, 1);
        };
        volumeSlider.appendChild(slider);
    }

    if (buttons.has('full-screen')) {
        var zoom = document.createElement('div');
        zoom.className = 'control ' + (config.toggle.has('zoom-in') ? 'zoom-out selected' : 'zoom-in');

        if (!slider && !recordAudio && !recordVideo && zoom) {
            mediaControls.insertBefore(zoom, mediaControls.firstChild);
        } else volumeControl.appendChild(zoom);

        zoom.onclick = function() {
            if (zoom.className.indexOf('zoom-out') != -1) {
                zoom.className = zoom.className.replace('zoom-out selected', 'zoom-in');
                exitFullScreen();
            } else {
                zoom.className = zoom.className.replace('zoom-in', 'zoom-out selected');
                launchFullscreen(mediaElementContainer);
            }
        };

        function launchFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }

        function exitFullScreen() {
            if (document.fullscreen) {
                document.exitFullscreen();
            }

            if (document.mozFullScreen) {
                document.mozCancelFullScreen();
            }

            if (document.webkitIsFullScreen) {
                document.webkitExitFullscreen();
            }
        }

        function screenStateChange(e) {
            if (e.srcElement != mediaElementContainer) return;

            var isFullScreeMode = document.webkitIsFullScreen || document.mozFullScreen || document.fullscreen;

            mediaElementContainer.style.width = (isFullScreeMode ? (window.innerWidth - 20) : config.width) + 'px';
            mediaElementContainer.style.display = isFullScreeMode ? 'block' : 'inline-block';

            if (config.height) {
                mediaBox.style.height = (isFullScreeMode ? (window.innerHeight - 20) : config.height) + 'px';
            }

            if (!isFullScreeMode && config.onZoomout) config.onZoomout();
            if (isFullScreeMode && config.onZoomin) config.onZoomin();

            if (!isFullScreeMode && zoom.className.indexOf('zoom-out') != -1) {
                zoom.className = zoom.className.replace('zoom-out selected', 'zoom-in');
                if (config.onZoomout) config.onZoomout();
            }
            setTimeout(adjustControls, 1000);
        }

        document.addEventListener('fullscreenchange', screenStateChange, false);
        document.addEventListener('mozfullscreenchange', screenStateChange, false);
        document.addEventListener('webkitfullscreenchange', screenStateChange, false);
    }

    if (buttons.has('volume-slider') || buttons.has('full-screen') || buttons.has('record-audio') || buttons.has('record-video')) {
        mediaElementContainer.appendChild(volumeControl);
    }

    var mediaBox = document.createElement('div');
    mediaBox.className = 'media-box';
    mediaElementContainer.appendChild(mediaBox);

    if (config.title) {
        var h2 = document.createElement('h2');
        h2.innerHTML = config.title;
        h2.className = 'media-title-id';
        h2.setAttribute('style', 'position: absolute;color:#ffffff22;font-size:17px;text-shadow: 1px 1px black;padding:0;margin:0;text-align: left; display: block; border: 0;line-height:1.5;z-index:1;');
        mediaBox.appendChild(h2);
    }

    mediaBox.appendChild(mediaElement);

    if (!config.width) config.width = (innerWidth / 2) - 50;

    mediaElementContainer.style.minWidth = config.width + 'px';
    console.log(config.width);
    if (config.height) {
        mediaBox.style.height = config.height + 'px';
    }

    mediaBox.querySelector('video').style.maxHeight = innerHeight + 'px';

    var times = 0;

    function adjustControls() {
        mediaControls.style.marginLeft = (mediaElementContainer.clientWidth - mediaControls.clientWidth - 2) + 'px';

        if (slider) {
            slider.style.width = (mediaElementContainer.clientWidth / 3) + 'px';
            volumeControl.style.marginLeft = (mediaElementContainer.clientWidth / 3 - 30) + 'px';

            if (zoom) zoom.style['border-top-right-radius'] = '5px';
        } else {
            volumeControl.style.marginLeft = (mediaElementContainer.clientWidth - volumeControl.clientWidth - 2) + 'px';
        }

        volumeControl.style.marginTop = (mediaElementContainer.clientHeight - volumeControl.clientHeight - 2) + 'px';

        if (times < 10) {
            times++;
            setTimeout(adjustControls, 1000);
        } else times = 0;
    }

    if (config.showOnMouseEnter || typeof config.showOnMouseEnter === 'undefined') {
        mediaElementContainer.onmouseenter = mediaElementContainer.onmousedown = function() {
            adjustControls();
            mediaControls.style.opacity = 1;
            volumeControl.style.opacity = 1;
        };

        mediaElementContainer.onmouseleave = function() {
            mediaControls.style.opacity = 0;
            volumeControl.style.opacity = 0;
        };
    } else {
        setTimeout(function() {
            adjustControls();
            setTimeout(function() {
                mediaControls.style.opacity = 1;
                volumeControl.style.opacity = 1;
            }, 300);
        }, 700);
    }

    adjustControls();

    mediaElementContainer.toggle = function(clasName) {
        if (typeof clasName != 'string') {
            for (var i = 0; i < clasName.length; i++) {
                mediaElementContainer.toggle(clasName[i]);
            }
            return;
        }

        if (clasName == 'mute-audio' && muteAudio) muteAudio.onclick();
        if (clasName == 'mute-video' && muteVideo) muteVideo.onclick();

        if (clasName == 'record-audio' && recordAudio) recordAudio.onclick();
        if (clasName == 'record-video' && recordVideo) recordVideo.onclick();

        if (clasName == 'stop' && stop) stop.onclick();

        return this;
    };

    mediaElementContainer.media = mediaElement;

    return mediaElementContainer;
}

// __________________
// getAudioElement.js

function getAudioElement(mediaElement, config) {
    config = config || {};

    if (!mediaElement.nodeName || (mediaElement.nodeName.toLowerCase() != 'audio' && mediaElement.nodeName.toLowerCase() != 'video')) {
        var mediaStream = mediaElement;
        mediaElement = document.createElement('audio');

        try {
            mediaElement.setAttributeNode(document.createAttribute('autoplay'));
            mediaElement.setAttributeNode(document.createAttribute('controls'));
        } catch (e) {
            mediaElement.setAttribute('autoplay', true);
            mediaElement.setAttribute('controls', true);
        }

        if ('srcObject' in mediaElement) {
            mediaElement.mediaElement = mediaStream;
        } else {
            mediaElement[!!navigator.mozGetUserMedia ? 'mozSrcObject' : 'src'] = !!navigator.mozGetUserMedia ? mediaStream : (window.URL || window.webkitURL).createObjectURL(mediaStream);
        }
    }

    config.toggle = config.toggle || [];
    config.toggle.has = function(element) {
        return config.toggle.indexOf(element) !== -1;
    };

    var mediaElementContainer = document.createElement('div');
    mediaElementContainer.className = 'media-container';

    var mediaControls = document.createElement('div');
    mediaControls.className = 'media-controls';
    mediaElementContainer.appendChild(mediaControls);

    var muteAudio = document.createElement('div');
    muteAudio.className = 'control ' + (config.toggle.has('mute-audio') ? 'unmute-audio selected' : 'mute-audio');
    mediaControls.appendChild(muteAudio);

    muteAudio.style['border-top-left-radius'] = '5px';

    muteAudio.onclick = function() {
        if (muteAudio.className.indexOf('unmute-audio') != -1) {
            muteAudio.className = muteAudio.className.replace('unmute-audio selected', 'mute-audio');
            mediaElement.muted = false;
            if (config.onUnMuted) config.onUnMuted('audio');
        } else {
            muteAudio.className = muteAudio.className.replace('mute-audio', 'unmute-audio selected');
            mediaElement.muted = true;
            if (config.onMuted) config.onMuted('audio');
        }
    };

    if (!config.buttons || (config.buttons && config.buttons.indexOf('record-audio') != -1)) {
        var recordAudio = document.createElement('div');
        recordAudio.className = 'control ' + (config.toggle.has('record-audio') ? 'stop-recording-audio selected' : 'record-audio');
        mediaControls.appendChild(recordAudio);

        recordAudio.onclick = function() {
            if (recordAudio.className.indexOf('stop-recording-audio') != -1) {
                recordAudio.className = recordAudio.className.replace('stop-recording-audio selected', 'record-audio');
                if (config.onRecordingStopped) config.onRecordingStopped('audio');
            } else {
                recordAudio.className = recordAudio.className.replace('record-audio', 'stop-recording-audio selected');
                if (config.onRecordingStarted) config.onRecordingStarted('audio');
            }
        };
    }

    var volumeSlider = document.createElement('div');
    volumeSlider.className = 'control volume-slider';
    volumeSlider.style.width = 'auto';
    mediaControls.appendChild(volumeSlider);

    var slider = document.createElement('input');
    slider.style.marginTop = '11px';
    slider.style.width = ' 200px';

    if (config.buttons && config.buttons.indexOf('record-audio') == -1) {
        slider.style.width = ' 241px';
    }

    slider.type = 'range';
    slider.min = 0;
    slider.max = 100;
    slider.value = 100;
    slider.onchange = function() {
        mediaElement.volume = '.' + slider.value.toString().substr(0, 1);
    };
    volumeSlider.appendChild(slider);

    var stop = document.createElement('div');
    stop.className = 'control stop';
    mediaControls.appendChild(stop);

    stop.onclick = function() {
        mediaElementContainer.style.opacity = 0;
        setTimeout(function() {
            if (mediaElementContainer.parentNode) {
                mediaElementContainer.parentNode.removeChild(mediaElementContainer);
            }
        }, 800);
        if (config.onStopped) config.onStopped();
    };

    stop.style['border-top-right-radius'] = '5px';
    stop.style['border-bottom-right-radius'] = '5px';

    var mediaBox = document.createElement('div');
    mediaBox.className = 'media-box';
    mediaElementContainer.appendChild(mediaBox);

    var h2 = document.createElement('h2');
    h2.innerHTML = config.title || 'Audio Element';
    h2.setAttribute('style', 'position: absolute;color: rgb(160, 160, 160);font-size: 20px;text-shadow: 1px 1px rgb(255, 255, 255);padding:0;margin:0;');
    mediaBox.appendChild(h2);

    mediaBox.appendChild(mediaElement);

    mediaElementContainer.style.width = '329px';
    mediaBox.style.height = '90px';

    h2.style.width = mediaElementContainer.style.width;
    h2.style.height = '50px';
    h2.style.overflow = 'hidden';

    var times = 0;

    function adjustControls() {
        mediaControls.style.marginLeft = (mediaElementContainer.clientWidth - mediaControls.clientWidth - 7) + 'px';
        mediaControls.style.marginTop = (mediaElementContainer.clientHeight - mediaControls.clientHeight - 6) + 'px';
        if (times < 10) {
            times++;
            setTimeout(adjustControls, 1000);
        } else times = 0;
    }

    if (config.showOnMouseEnter || typeof config.showOnMouseEnter === 'undefined') {
        mediaElementContainer.onmouseenter = mediaElementContainer.onmousedown = function() {
            adjustControls();
            mediaControls.style.opacity = 1;
        };

        mediaElementContainer.onmouseleave = function() {
            mediaControls.style.opacity = 0;
        };
    } else {
        setTimeout(function() {
            adjustControls();
            setTimeout(function() {
                mediaControls.style.opacity = 1;
            }, 300);
        }, 700);
    }

    adjustControls();

    mediaElementContainer.toggle = function(clasName) {
        if (typeof clasName != 'string') {
            for (var i = 0; i < clasName.length; i++) {
                mediaElementContainer.toggle(clasName[i]);
            }
            return;
        }

        if (clasName == 'mute-audio' && muteAudio) muteAudio.onclick();
        if (clasName == 'record-audio' && recordAudio) recordAudio.onclick();
        if (clasName == 'stop' && stop) stop.onclick();

        return this;
    };

    mediaElementContainer.media = mediaElement;

    return mediaElementContainer;
}
