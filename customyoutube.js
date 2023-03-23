// ==UserScript==
// THIS SCRIPT IS BASED ON OLD SKRIPTS / Credits to the Developers /Owner:MrMaroi /Matoi Studio
// @name          Custom Youtube by MrMatoi
// @description	  Thanks to all the developers which made this simple addons! FEATURES VERSION 1.0 - Custom Backround, Transparent objects, Video and Audio Downloader, Custom Screenshot Plugin , Faster/Slower Buttons, Age Rescriction Bypass, Custom Youtube Play Logo
// @author        MrMatoi / Telegram @mrmatoi
// @run-at        document-start
// @version       0.2
//@icon  https://static.wikia.nocookie.net/spongefan/images/f/f2/Mlfw8303-1350579353411114.gif/revision/latest?cb=20140618143106
// @match              *://*.youtube.com/*
// @match           https://m.youtube.com/*
// @match           https://www.youtube-nocookie.com/*
// @match           https://music.youtube.com/*
// ==/UserScript==
(function() {var css = "";
if (false || (document.domain == "youtube" || document.domain.substring(document.domain.indexOf(".youtube") + 1) == "youtube"))
	css += [

	].join("\n");
if (false || (new RegExp("^https?://www.youtube.com?/(?!my_videos|ad_companion|subscribe_embed|account|yt|red).*$")).test(document.location.href))
	css += [
		"html:not(#⁠),body>div,body>table,[role=\"navigation\"],[role=\"dialog\"],#body-container>div,[aria-expanded=\"true\"]:not(.ytp-button),[class*=\"tooltip\"]:not(.ytp-tooltip-duration):not(.ytp-tooltip-bg):not(.ytp-tooltip-text-wrapper):not([class*=\"arrow\"]):not(button),[role=\"menu\"],.ytp-popup,.videoAdUiPreSkipButton,.videoAdUiAdInfoPopup",
		"  {",
		"    background: url(https://64.media.tumblr.com/f7e0bd92822ced12e4077447beb544ed/96904bf57824fe53-02/s500x750/48cde1af47529cde01692c387763b54d570a3b4a.gifv)fixed #000!important;",
		"    background-size: cover!important;",
		"  }",
		"/*search bar*/  #masthead-search-terms,form.channels-search:not(#​)",
		"  {",
		"    border: 1px solid #FFF!important;",
		"  }",
		"",
		"  #masthead-search-terms.gsfe_a",
		"  {",
		"    border: 1px solid #A0A0A0!important;",
		"  }",
		"",
		"  #masthead-search-terms.gsfe_b",
		"  {",
		"    border: 1px solid #4D90FE!important;",
		"  }",
		"",
		"  :not(textarea):not(input):not([contenteditable])",
		"  {",
		"    text-shadow: 0 0.05em rgba(0,0,0,.5),0 -0.05em rgba(0,0,0,.5),0.05em 0 rgba(0,0,0,.5),-0.05em 0 rgba(0,0,0,.5)!important;",
		"  }",
		"",
		"  :not([class*=\"video-extras-sparkbar\"]):not([class^=\"ytp-\"]):not(.sidebar):not(.video-time):not([class^=\"html5-\"]):not(.yt-uix-button-primary):not(label):not(.toggle):not(.branding-context-container-inner):not(.iv-drawer)",
		"  {",
		"    background-color: transparent!important;",
		"    color: #FFFFFF!important;",
		"  }",
		"",
		"  .load-more-button",
		"  {",
		"    background: transparent!important;",
		"  }",
		"",
		"  [role=\"alert\"],.content-region,.yt-uix-checkbox-on-off .checked:before",
		"  {",
		"    display: none!important;",
		"  }",
		"",
		"  :not(#​) :link",
		"  {",
		"    color: #99CCFF!important;",
		"  }",
		"",
		"  :not(#​) :visited",
		"  {",
		"    color: #CC99FF!important;",
		"  }",
		"",
		"  :not(#​) select",
		"  {",
		"    background: black!important;",
		"  }",
		"",
		"  [href=\"/\"][id*=\"logo\"],:not(.ytp-volume-slider-handle):not(.yt-uix-playlistlike):before,.yt-uix-button-icon-material-upload,.yt-uix-button-icon-bell,.yt-uix-button-icon-wrapper>.yt-sprite,.autoplay-info-icon,.search-button>.yt-uix-button-content,#appbar-guide-button .yt-uix-button-icon-wrapper,.yt-uix-button-shelf-slider-pager",
		"  {",
		"    -webkit-filter: invert(1)hue-rotate(180deg);",
		"    filter: invert(1)hue-rotate(180deg);",
		"  }",
		"",
		"  .yt-uix-form-input-select,[class$=\"container\"],#yt-comments-paginator",
		"  {",
		"    background-image: none!important;",
		"  }",
		"",
		"  :not(h2):not(button):not(.comment-simplebox-renderer-collapsed-content),#footer-container button,.yt-uix-button-shelf-slider-pager",
		"  {",
		"    border: none!important;",
		"  }",
		"",
		"  textarea,[contenteditable=\"true\"],[type=\"text\"]:not(#masthead-search-term),[role=\"menu\"]:not(.guide-user-links):not(.ytp-panel-menu),#footer-container .yt-uix-button-default,.yt-uix-clickcard-card-visible,#watch-appbar-playlist,.comment-simplebox-frame,body>table",
		"  {",
		"    box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,.5)!important;",
		"  }",
		"",
		"  #masthead-search-terms",
		"  {",
		"    box-shadow: none!important;",
		"  }"
	].join("\n");
if (false || (new RegExp("^https://c.tenor.com/YdROcIDBlWAAAAAd/gif-wallpaper.gif$")).test(document.location.href))
	css += [
		"*",
		"  {",
		"    background-color: #000!important;",
		"    color: #fff!important;",
		"    border-color: #000!important;",
		"  }"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();


//VIDEO  DOWNLOADER  PLUG IN  FIXING ATM

// ==/UserScript==

(function (){
    "use strict";

    let currURL = window.location.href,
        prevURL = '';

    // Always check the URL for changes.
    setInterval( checkURL, 250 );

    /*
        Keep an eye on the URL for any changes, if it changes, run the main function.
    */
    function checkURL(){
        // Current URL.
        currURL = window.location.href;
        // Has it changed?
        if ( prevURL !== currURL ){
            // Match the previous and current URLs so we don't loop forever and ever!
            prevURL = window.location.href;
            // Lets begin.
            main();
        }
    }

    /*
        The main function, everything is done through this function.
        First we check if we're on the correct page,
        Add some custom CSS styles,
        Create the container for our links,
        Grab the video ID from the URL,
        Fetch the videos details and await its arrival,
        Turn that data into something usable,
        Create the actual links and visile data.
    */
    async function main(){
        try{
            // Check we're on the correct page.
            if ( window.location.href.includes( 'watch?v=' ) ){

                // Add some styling.
                addCss();

                // Create our container/button.
                createContainer();

                // Get the current video ID from the URL.
                const videoID  = /(?:\?v=)(.*?)(?:&|$)/i.exec(window.location.search)[1],
                      response = await fetch( `https://www.youtube.com/get_video_info?video_id=${videoID}&el=detailpage&pl=default`, { method: 'GET' } ),
                      data     = await response.text(),
                      // Parse the data so we can use it.
                      json     = parseData( data );

                // Create the links.
                createLinks( json );
            } else {
                // Must be a page with no video.
            }
        }
        catch( e ){
            /*
                Errors, errors everywhere!
                Not really, but something went wrong...
            */
            console.log( e );
        }
    }

    /*
        Grabs the required sections of data from the fetch response.
        We only require the "player_response" section, once found, turn it into JSON for easy use.
    */
    function parseData( data ){
        const captured = /(?:player_response=)(.*?)(?:&|$)/i.exec( data )[ 1 ],
              adaptive = /(?:adaptive_fmts=)(.*?)(?:&|$)/i.exec( data )[ 1 ],
              fmts     = /(?:rvs=)(.*?)(?:&|$)/i.exec( data )[ 1 ];

        let arr = decodeURIComponent( adaptive ).split(','),
            mainObj = [];
        let i = 0;
        arr.forEach( el => {
          let arr2 = el.split('&');
          let arr3 = {};
          arr2.forEach( el2 => {
            let arr4 = el2.split('=');
            arr3[ arr4[ 0 ] ] = arr4[ 1 ];
          } );
          mainObj[ i ] = arr3;
          i++;
        } );

        i = 0;
        let brr = decodeURIComponent( fmts ).split( ',' ),
            fmtArray = [];
        brr.forEach( el => {
          let brr2 = el.split('&');
          let brr3 = {};
          brr2.forEach( el2 => {
            let brr4 = el2.split('=');
            brr3[ brr4[ 0 ] ] = brr4[ 1 ];
          } );
          fmtArray[ i ] = brr3;
          i++;
        } );

        let mainArray = [];

        mainArray[ 'formats' ] = fmtArray;
        mainArray[ 'adaptiveFormats' ] = mainObj;
        mainArray[ 'videoDetails' ] = JSON.parse( decodeURIComponent( captured ) ).videoDetails;

        const json = mainArray;

        return json;
    }

    /*
        This creates a container for basically everything regarding this script.
        First ensure it doesn't already exist, (if it does we simply reset it),
        Create the container element, set some basic attributes,
        Add an event listener on the button to show/hide the links,
        Add the container to the page.
    */
    async function createContainer(){
        // Check it's not already been created.
        if ( document.getElementById( 'yt-container' ) === null ){
            const target  = await findTheTarget( '#primary #player' ),
                  div     = document.createElement( 'div' );

            // Set the div's attributes.
            div.id        = 'yt-container';
            div.className = 'style-scope ytd-watch-flexy';
            div.innerHTML = '<button id="linksButton">Custom Youtube by MrMatoi | Matoi Studio</button><div id="yt-links"><div><div><h3>Video & Audio Combined</h3><div id="combined"></div></div></div><div class="flex"><div><h3>Video Only - No Audio</h3><div id="seperate-video"></div></div><div><h3>Audio Only - No Video</h3><div id="seperate-audio"></div></div></div><div class="center footer flex"><div><s>Left Click = Potentially Quicker Download</s></div><div>Right Click -> Save As = Normal Download</div></div>';

            div.getElementsByTagName( 'button' )[ 0 ].addEventListener( 'click', () => {
                // Do some magic to allow for a variable number of links. (overall container height)
                if ( div.classList.contains( 'open' ) === false ){
                    let currentHeight = div.clientHeight;
                    // Work out required height.
                    // Temporarily disable transitions.
                    div.style.transitionDuration = '0s';
                    // Set height to auto, and store it's height.
                    div.style.height = 'auto';
                    let setHeight = div.clientHeight;
                    // Set height back to it's original height.
                    div.style.height = currentHeight +'px';
                    // Force a redraw otherwise it simply wont work.
                    div.offsetHeight;
                    // Re-enable transitions.
                    div.style.transitionDuration = '';
                    // Tell it the new height we worked out. (the transition takes care of the rest)
                    div.style.height = setHeight +'px';
                } else {
                    // Use CSS styling.
                    div.removeAttribute( 'style' );
                }
                div.classList.toggle( 'open' );
            });

            target.parentNode.insertBefore(div, target.nextSibling);
        } else {
            // It already exists, just reset it.
            // Remove inline styles.
            document.querySelector( '#yt-container' ).removeAttribute( 'style' );
            // Remove all class.
            document.querySelector( '#yt-container' ).removeAttribute( 'class' );
            // Empty the #combined div.
            document.querySelector( '#yt-container #combined' ).innerText = '';
            // Empty the #seperate div.
            document.querySelector( '#yt-container #seperate-audio' ).innerText = '';
            // Empty the #seperate div.
            document.querySelector( '#yt-container #seperate-video' ).innerText = '';
        }
    }

    /*
        This simply finds the requested target, used as a promise to allow async waiting.
        Probably overkill but it just felt right making it this way.
        Will simply wait... forever, until the target is found.
        This hasn't been tested for forced errors / never finding it's target, so oould potentially break, working so far...
    */
    function findTheTarget( target ){
        return new Promise( resolve => {
            // Look for our target.
            const findingInt = setInterval( () => {
                if (document.querySelector( target ) !== null){
                    clearInterval( findingInt );
                    resolve( document.querySelector( target ) );
                } else {
                    // Can't find the target.
                }
            }, 500 );
        });
    }

    /*
        Creates all the information and download links for the parsed JSON data.
        Stores the 2 types of videos, "formats" and "adaptive" into arrays,
        will then sort those into ascending order of "contentLength" (Filesize),
        then simply loops through the arrays, sedns each entry to the "displayInfo" function,
        then adds the returned element to the page.
    */
    async function createLinks( json ){
        // Store video details.
        const details       = json.videoDetails,
              // Store the combined video formats.
              formats       = json.formats,
              // Store the seperate video & audio formats.
              adaptive      = json.adaptiveFormats,
              // Store Video only.
              adaptiveVideo = [],
              // Store Audio only.
              adaptiveAudio = [];

        let row, target, i = 0;
        // Loops through the adaptive array and stores the audio and video links seperately.
        for( ; i < adaptive.length; i++ ){
            if ( adaptive[ i ].audio_channels !== undefined ){
                // Send to Audio only array.
                adaptiveAudio.push( adaptive[ i ] );
            } else {
                // Send to video only array.
                adaptiveVideo.push( adaptive[ i ] );
            }
        }

        // Sorts the "adaptiveAudio" array by content length (filesize)
        adaptiveAudio.sort(( a, b ) => {
            return parseInt( b.clen ) - parseInt( a.clen );
        });
        // Sorts the "adaptiveVideo" array by content length (filesize)
        adaptiveVideo.sort(( a, b ) => {
            return parseInt( b.clen ) - parseInt( a.clen );
        });
        // Sorts the "formats" array by content length (filesize)
        formats.sort(( a, b ) => {
            return parseInt( b.clen ) - parseInt( a.clen );
        });

        /*
            Loop through the previously made, now sorted arrays and display the required infomation.
        */
        i = 0;
        target = await findTheTarget( '#yt-container #combined' );
        for( ; i < formats.length; i++ ){
            if ( row = displayInfo( formats[ i ], details ) ){
                target.appendChild( row );
            }
        }
        openCloseTrick();

        i = 0;
        target = await findTheTarget( '#yt-container #seperate-audio' );
        for( ; i < adaptiveAudio.length; i++ ){
            if ( row = displayInfo( adaptiveAudio[ i ], details ) ){
                target.appendChild( row );
            }
        }
        openCloseTrick();

        i = 0;
        target = await findTheTarget( '#yt-container #seperate-video' );
        for( ; i < adaptiveVideo.length; i++ ){
            if ( row = displayInfo( adaptiveVideo[ i ], details ) ){
                target.appendChild( row );
            }
        }
        openCloseTrick();
    }

    /*
        If the list is opened before being populated, this will trick it into re-opening to show the now added links.
        If the list is closed, it will look like nothing happene.
        Simply uses the click event which fires its open/close action, it works out its required height on open, hence why we do this.
    */
    function openCloseTrick(){
        const target = document.getElementById( 'linksButton' );
        target.click();
        target.click();
    }

    /*
        Turns the individual JSON entry into a div row for displaying on page.
        Get all the vars, quality, mimetype & size.
        Work out "3gp" and "m4a" seperately, all the others can be extracted from the mimetype entry itself,
        Create the div row element with the extracted data.
        return the div.
    */
    function displayInfo( data, details ){
        const row  = document.createElement( 'div' ),
              size = Number(data[ 'clen' ] / 1024 / 1024).toFixed(2);

        let qual = data[ 'quality_label' ];

        /*
            Check if the size is a number!
            If there is no contentLength within the original data from Youtube, the video doesn't seem to work / even exist, even though Youtube seems to think it does.
            For now, just don't display the links, may need to re-check this in the future incase this is just a temporary bug.
        */
        if ( isNaN( size ) ){
            return false;
        }

        // Convert to Kbs for easier reading. (audio only)
        if ( qual === undefined ){
            qual = String( Number(data[ 'bitrate' ] / 1024 ).toFixed( 0 ) ) +' Kbs';
        }

        row.className = 'row';
        row.innerHTML = `<div class="right">${size} MB</div>
                         <div class="center">${qual}</div>
                         <div class="left"><a class="falseLink" href="${ decodeURIComponent(data[ 'url' ]) }">Download</a></div>`;

        // Create "link" for downloading.
        let a = document.createElement( 'a' );
        a.innerText = 'Download';
        a.className = 'falseLink';

        // Listen to clicks, once clicked start the download process.
        /*row.getElementsByTagName( 'a' )[ 0 ].addEventListener( 'click', ( e ) => {
            e.preventDefault();
            // Show an indication that the download has started in the background.
            e.target.className = 'inProgress';
            e.target.innerText = 'Downloading 0%';

            asyncDownload( data, details, e.target );
        });*/

        return row;
    }

    /*
        Downloads the requested video in chunks to bypass Youtubes bandwidth limitations and speed up downloads.
        This works by first creating multiple promises requesting a "chunk" of data. (this is how Youtube actually "streams" it's videos, it's why videos never fully load and only load as you're watching it)
        Once the promises are made, run them all at the same time and await a response.
        Once the promises have all returned data, create an <a> link with that data and force a download.
    */
    async function asyncDownload( data, details, calledFrom ){
        // Set request size.
        const requestSize = 1048576 * 2, // 2 MB
              blobArray   = [],
              maxRequests = 16;

        // Get number of chunks required and size of each chunk.
        let numChunks = Math.ceil( data[ 'clen' ] / requestSize ),
            chunkSize  = Math.ceil( data[ 'clen' ] / numChunks ),
            i = 0,
            start, end;

        // Limit the maximum number of requests, we don't want to inadvertently DDOS Youtube.
        if ( numChunks > maxRequests ){
            numChunks = maxRequests;
            // Work out chunkSize again.
            chunkSize = Math.ceil( data[ 'clen' ] / numChunks );
        }

        // Loop through the number of chunks required.
        for( ; i < numChunks; i++ ){
            // Work out the start and end range in bytes for our chunk request.
            start = ( chunkSize + 1 ) * i;
            end   = start + chunkSize;
            // Create an array of promise requests for our Promise.all request.
            blobArray.push( new Promise( async ( resolv ) => {
                // Make our request and return a blob.
                const response       = await fetch( `${data[ 'url' ]}&range=${start}-${end}`, { method: 'GET' } ),
                      aBlob          = await response.blob(),
                      // Progress updates.
                      currentPercent = Number( /[0-9]+(\.[0-9]+)?/.exec( calledFrom.innerText )[ 0 ] ),
                      newPercent     = Number( currentPercent + ( ( 100 / numChunks ) ) ).toFixed( 2 );

                // Display some basic percentage progress.
                calledFrom.innerText = 'Downloading '+ String( newPercent ) +'%';
                resolv( aBlob );
            }));
        }

        try{
        // Run all of our promise requests and await their return.
        Promise.all( blobArray ).then( values => {
            // Makes a blob from all of the other blobs, this is our requested video, also store it's type as a stream.
            const entireBlob = new Blob( values, { type: 'application/octet-stream' } ),
                  // Create a URL object with our returned blob data.
                  urlObject = window.URL.createObjectURL( entireBlob ),
                  // Create a link element and set it's URL to our URL object.
                  a = document.createElement( 'a' );

            // Add our link to the page.
            document.body.appendChild( a );
            a.href = urlObject;
            // Set the filename.
            console.log( data );
            a.download = `${details[ 'title' ].replace(/\+/g,' ')}.${data.type.split( ';' )[ 0 ].split( '/' )[ 1 ]}`;
            // Click the link! Should cause it to download if all has worked well.
            a.click();
            // This element is no longer required.
            a.remove();
            // Our URL object is no longer required.
            window.URL.revokeObjectURL( urlObject );
            // Reset the style of the link that was clicked.
            calledFrom.className = '';
            calledFrom.innerText = 'Download';
        });
        }
        catch(e){
            console.log(e);
        }
    }

    /*
        Some custom CSS for the container, button and links.
        Uses some of Youtubes own CSS vars, ensures it works with youtubes Dark Theme mode.
    */
    function addCss(){
        // Check it's not already been added.
        if (document.getElementById( 'yt-downloader-styles' ) === null ){
            const css = `
                  #yt-container *{box-sizing:border-box}
                  #yt-container{color:var(--ytd-video-primary-info-renderer-title-color,var(--yt-spec-text-primary));font-size:1.3em;height:20px;line-height:1.22em;margin:.3em 0 1px 0;min-height:20px;overflow:hidden;position:relative;transition:height .4s}
                  #yt-container > button{background-color:transparent;border:none;color:var(--yt-spec-text-secondary);cursor:pointer;height:18px;margin:0;padding:0;position:relative;transition:box-shadow .2s;user-select:none;width:100%;z-index:1}
                  #yt-container > button::before{content:'<';left:5px;position:absolute;transform:rotate(-90deg);transition:transform .4s}
                  #yt-container > button::after{content:'>';position:absolute;right:5px;transform:rotate(90deg);transition:transform .4s}
                  #yt-container.open > button::before{transform:rotate(90deg)}
                  #yt-container.open > button::after{transform:rotate(-90deg)}
                  #yt-container > button:active{margin:0;padding:0}
                  #yt-container > button:hover,#yt-container.open > button{box-shadow:0 2px 0 0 var(--yt-spec-10-percent-layer)}
                  #yt-container > #yt-links .flex{display:flex;flex-direction:row;justify-content:space-evenly}
                  #yt-container > #yt-links{display:flex;flex-direction:column;justify-content:space-evenly;position:relative;width:100%}
                  #yt-container > #yt-links div{width:100%}
                  #yt-container > #yt-links > div{border-color:var(--yt-spec-10-percent-layer);border-width:0 0 1px 0;border-style:solid;margin:0;padding:.2em}
                  #yt-container > #yt-links > div > div{padding:.4em}
                  #yt-container > #yt-links a{color:var(--yt-endpoint-color,var(--yt-spec-icon-active-button-link))}
                  #yt-container > #yt-links h3{font-weight:300;margin:0;padding:.1em 0 .2em 0;text-align:center}
                  #yt-container > #yt-links .row{display:flex;justify-content:space-evenly}
                  #yt-container > #yt-links .right{text-align:right}
                  #yt-container > #yt-links .left{text-align:left}
                  #yt-container > #yt-links .center{text-align:center}
                  #yt-container > #yt-links .falseLink{cursor:pointer;text-decoration:underline}
                  #yt-container > #yt-links .inProgress{color:var(--yt-expand-color);font-size:.9em;pointer-events:none;text-decoration:none}
                  #yt-container > #yt-links .footer{background-color:var(--yt-playlist-background-item);font-size:.86em;padding:0}
                  ytd-video-primary-info-renderer{padding-top:10px}
                  `,
                  style = document.createElement( 'style' );

            style.id = 'yt-downloader-styles';
            style.innerText = css;
            document.head.appendChild( style );
        }
    }
}());

// CUSTOM SCREENSHOT BUTTOn - DIREKT IN YOUTUBE

// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function screenshotYoutube() {
        var elements = document.getElementsByTagName('VIDEO');
        if (elements.length === 0) {
            alert('Failed to find the video element');
            return;
        }

        if (!saveAs) {
            console.log('loading saveas');
            ytp_screenshot_init();
        }

        var video = elements[0];
        var width = video.videoWidth;
        var height = video.videoHeight;
        var videoid = getVideoId();
        var time = document.getElementsByClassName('ytp-time-current')[0].innerHTML.split(':').join('.');

        var canvas = ytp_screenshot_getCanvas();
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        canvas.toBlob(function(blob) {
            saveAs(blob, `ytp_${videoid}_snapshot_${time}.png`);
        });
    }

    function getVideoId() {
        var videoid = '';

        for (var text of window.location.search.split('&')) {
            if (text.indexOf('?v=') !== -1) {
                videoid = text.replace('?v=', '');
                break;
            }

            if (text.indexOf('v=') !== -1) {
                videoid = text.replace('v=', '');
                break;
            }
        }

        return videoid;
    }

    function ytp_screenshot_getCanvas() {
        var canvas = document.getElementById('ytp-screenshot-canvas');

        if (!canvas) {
            var c = document.createElement('CANVAS');
            c.style.display = 'none';
            c.id = 'ytp-screenshot-canvas';
            canvas = document.body.appendChild(c);
        }

        return canvas;
    }


    function ytp_screenshot_init() {
        if (typeof saveAs === 'undefined') {
            var s = document.createElement('SCRIPT');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js';
            s.id = 'ytp-screenshot-saveas';
            s.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(s);
        }

        var mybutton = document.getElementById('ytp-screenshot-button');
        if (mybutton)
            return;

        var button = document.createElement('BUTTON');
        button.innerText = '�SCREENSHOT';
        button.onclick = () => {
            screenshotYoutube();
        };
        button.style.background = 'transparent';
        button.style.border = 'none';
        button.style.color = 'white';
        button.style.verticalAlign = 'top';
        button.style.fontSize = '150%';
        button.style.textAlign = 'center';
        button.className = 'ytp-button';
        button.id = 'ytp-screenshot-button';

        var controls = document.getElementsByClassName('ytp-right-controls');
        controls[0].insertBefore(button, controls[0].firstChild);
    }

    ytp_screenshot_init();
})();

//FASTER SLOWER BUTTONS _ NEED TO BE FIXED
// ==/UserScript==

function createCallback(speed){
  return function(){
    document.getElementsByTagName("video")[0].playbackRate = speed;
  }
}

function run(){
    /* Create button */
    var buttonDiv = document.createElement("div");
    buttonDiv.style.width = "100%";
    buttonDiv.style.marginTop = "5px";
    buttonDiv.id = "fastButton";

    var slowButton = document.createElement("button");
    slowButton.style.backgroundColor = "hsl(0, 0%, 93.3%)";
    slowButton.style.borderRadius = "2px";
    slowButton.style.color = "hsla(0, 0%, 6.7%, .6)";
    slowButton.style.outlineWidth = "0";
    slowButton.style.marginRight = "2px";
    slowButton.appendChild(document.createTextNode("<<"));
    slowButton.style.height = "18px";
    slowButton.style.width = "30px";
    slowButton.onclick = function () {
      document.getElementsByTagName("video")[0].playbackRate *= 0.9;
    };
    buttonDiv.appendChild(slowButton);

    var fastButton = document.createElement("button");
    fastButton.style.backgroundColor = "hsl(0, 0%, 93.3%)";
    fastButton.style.borderRadius = "2px";
    fastButton.style.color = "hsla(0, 0%, 6.7%, .6)";
    fastButton.style.outlineWidth = "0";
    fastButton.style.marginRight = "2px";
    fastButton.appendChild(document.createTextNode(">>"));
    fastButton.style.height = "18px";
    fastButton.style.width = "30px";
    fastButton.onclick = function () {
        document.getElementsByTagName("video")[0].playbackRate *= 1.1;
    };
    buttonDiv.appendChild(fastButton);

    for (var speed = 1.5; speed <= 3; speed += 0.5) {
      var button = document.createElement("button");
      button.style.backgroundColor = "hsl(0, 0%, 93.3%)";
      button.style.borderRadius = "2px";
      button.style.color = "hsla(0, 0%, 6.7%, .6)";
      button.style.outlineWidth = "0";
      button.style.marginRight = "2px";
      button.appendChild(document.createTextNode(speed));
      button.style.height = "18px";
      button.style.width = "30px";
      button.onclick = createCallback(speed);
      buttonDiv.appendChild(button);
    }


    /* Inject button */
    var targetElement = document.querySelectorAll("[id='subscribe-button']");
    for(var i = 0; i < targetElement.length; i++){
      if(targetElement[i].className.indexOf("ytd-video-secondary-info-renderer") > -1){
        targetElement[i].appendChild(buttonDiv);
      }
    }
}

if (document.getElementById("polymer-app") ||
    document.getElementById("masthead") ||
    window.Polymer)
{
  setInterval(function(){
    if (window.location.href.indexOf("watch?v=") < 0) {
      return false;
    }

    if (document.getElementById("count") &&
      document.getElementById("fastButton") === null)
    {
      run();
    }
  }, 100);
}

// AGE BYPASS ( LONG )

// ==/UserScript==

/*
    This is a transpiled version to achieve a clean code base and better browser compatibility.
    You can find the nicely readable source code at https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass
*/

(function iife(ranOnce) {
    // Trick to get around the sandbox restrictions in Greasemonkey (Firefox)
    // Inject code into the main window if criteria match
    if (this !== window && !ranOnce) {
        window.eval('(' + iife.toString() + ')(true);');
        return;
    }

    // Script configuration variables
    const UNLOCKABLE_PLAYABILITY_STATUSES = ['AGE_VERIFICATION_REQUIRED', 'AGE_CHECK_REQUIRED', 'CONTENT_CHECK_REQUIRED', 'LOGIN_REQUIRED'];
    const VALID_PLAYABILITY_STATUSES = ['OK', 'LIVE_STREAM_OFFLINE'];

    // These are the proxy servers that are sometimes required to unlock videos with age restrictions.
    // You can host your own account proxy instance. See https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/tree/main/account-proxy
    // To learn what information is transferred, please read: https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass#privacy
    const ACCOUNT_PROXY_SERVER_HOST = 'https://youtube-proxy.zerody.one';
    const VIDEO_PROXY_SERVER_HOST = 'https://phx.4everproxy.com';

    // User needs to confirm the unlock process on embedded player?
    let ENABLE_UNLOCK_CONFIRMATION_EMBED = true;

    // Show notification?
    let ENABLE_UNLOCK_NOTIFICATION = true;

    // Disable content warnings?
    let SKIP_CONTENT_WARNINGS = true;

    // Some Innertube bypass methods require the following authentication headers of the currently logged in user.
    const GOOGLE_AUTH_HEADER_NAMES = ['Authorization', 'X-Goog-AuthUser', 'X-Origin'];

    /**
     * The SQP parameter length is different for blurred thumbnails.
     * They contain much less information, than normal thumbnails.
     * The thumbnail SQPs tend to have a long and a short version.
     */
    const BLURRED_THUMBNAIL_SQP_LENGTHS = [
        32, // Mobile (SHORT)
        48, // Desktop Playlist (SHORT)
        56, // Desktop (SHORT)
        68, // Mobile (LONG)
        72, // Mobile Shorts
        84, // Desktop Playlist (LONG)
        88, // Desktop (LONG)
    ];

    // small hack to prevent tree shaking on these exports
    var Config = window[Symbol()] = {
        UNLOCKABLE_PLAYABILITY_STATUSES,
        VALID_PLAYABILITY_STATUSES,
        ACCOUNT_PROXY_SERVER_HOST,
        VIDEO_PROXY_SERVER_HOST,
        ENABLE_UNLOCK_CONFIRMATION_EMBED,
        ENABLE_UNLOCK_NOTIFICATION,
        SKIP_CONTENT_WARNINGS,
        GOOGLE_AUTH_HEADER_NAMES,
        BLURRED_THUMBNAIL_SQP_LENGTHS,
    };

    function isGoogleVideoUrl(url) {
        return url.host.includes('.googlevideo.com');
    }

    function isGoogleVideoUnlockRequired(googleVideoUrl, lastProxiedGoogleVideoId) {
        const urlParams = new URLSearchParams(googleVideoUrl.search);
        const hasGcrFlag = urlParams.get('gcr');
        const wasUnlockedByAccountProxy = urlParams.get('id') === lastProxiedGoogleVideoId;

        return hasGcrFlag && wasUnlockedByAccountProxy;
    }

    const nativeJSONParse = window.JSON.parse;
    const nativeXMLHttpRequestOpen = window.XMLHttpRequest.prototype.open;

    const isDesktop = window.location.host !== 'm.youtube.com';
    const isMusic = window.location.host === 'music.youtube.com';
    const isEmbed = window.location.pathname.indexOf('/embed/') === 0;
    const isConfirmed = window.location.search.includes('unlock_confirmed');

    class Deferred {
        constructor() {
            return Object.assign(
                new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                }),
                this,
            );
        }
    }

    function createElement(tagName, options) {
        const node = document.createElement(tagName);
        options && Object.assign(node, options);
        return node;
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    function findNestedObjectsByAttributeNames(object, attributeNames) {
        var results = [];

        // Does the current object match the attribute conditions?
        if (attributeNames.every((key) => typeof object[key] !== 'undefined')) {
            results.push(object);
        }

        // Diggin' deeper for each nested object (recursive)
        Object.keys(object).forEach((key) => {
            if (object[key] && typeof object[key] === 'object') {
                results.push(...findNestedObjectsByAttributeNames(object[key], attributeNames));
            }
        });

        return results;
    }

    function pageLoaded() {
        if (document.readyState === 'complete') return Promise.resolve();

        const deferred = new Deferred();

        window.addEventListener('load', deferred.resolve, { once: true });

        return deferred;
    }

    function createDeepCopy(obj) {
        return nativeJSONParse(JSON.stringify(obj));
    }

    function getYtcfgValue(name) {
        var _window$ytcfg;
        return (_window$ytcfg = window.ytcfg) === null || _window$ytcfg === void 0 ? void 0 : _window$ytcfg.get(name);
    }

    function getSignatureTimestamp() {
        return (
            getYtcfgValue('STS')
            || (() => {
                var _document$querySelect;
                // STS is missing on embedded player. Retrieve from player base script as fallback...
                const playerBaseJsPath = (_document$querySelect = document.querySelector('script[src*="/base.js"]')) === null || _document$querySelect === void 0
                    ? void 0
                    : _document$querySelect.src;

                if (!playerBaseJsPath) return;

                const xmlhttp = new XMLHttpRequest();
                xmlhttp.open('GET', playerBaseJsPath, false);
                xmlhttp.send(null);

                return parseInt(xmlhttp.responseText.match(/signatureTimestamp:([0-9]*)/)[1]);
            })()
        );
    }

    function isUserLoggedIn() {
        // LOGGED_IN doesn't exist on embedded page, use DELEGATED_SESSION_ID or SESSION_INDEX as fallback
        if (typeof getYtcfgValue('LOGGED_IN') === 'boolean') return getYtcfgValue('LOGGED_IN');
        if (typeof getYtcfgValue('DELEGATED_SESSION_ID') === 'string') return true;
        if (parseInt(getYtcfgValue('SESSION_INDEX')) >= 0) return true;

        return false;
    }

    function getCurrentVideoStartTime(currentVideoId) {
        // Check if the URL corresponds to the requested video
        // This is not the case when the player gets preloaded for the next video in a playlist.
        if (window.location.href.includes(currentVideoId)) {
            var _ref;
            // "t"-param on youtu.be urls
            // "start"-param on embed player
            // "time_continue" when clicking "watch on youtube" on embedded player
            const urlParams = new URLSearchParams(window.location.search);
            const startTimeString = (_ref = urlParams.get('t') || urlParams.get('start') || urlParams.get('time_continue')) === null || _ref === void 0
                ? void 0
                : _ref.replace('s', '');

            if (startTimeString && !isNaN(startTimeString)) {
                return parseInt(startTimeString);
            }
        }

        return 0;
    }

    function setUrlParams(params) {
        const urlParams = new URLSearchParams(window.location.search);
        for (const paramName in params) {
            urlParams.set(paramName, params[paramName]);
        }
        window.location.search = urlParams;
    }

    function waitForElement(elementSelector, timeout) {
        const deferred = new Deferred();

        const checkDomInterval = setInterval(() => {
            const elem = document.querySelector(elementSelector);
            if (elem) {
                clearInterval(checkDomInterval);
                deferred.resolve(elem);
            }
        }, 100);

        if (timeout) {
            setTimeout(() => {
                clearInterval(checkDomInterval);
                deferred.reject();
            }, timeout);
        }

        return deferred;
    }

    function parseRelativeUrl(url) {
        if (typeof url !== 'string') {
            return null;
        }

        if (url.indexOf('/') === 0) {
            url = window.location.origin + url;
        }

        try {
            return url.indexOf('https://') === 0 ? new window.URL(url) : null;
        } catch {
            return null;
        }
    }

    function isWatchNextObject(parsedData) {
        var _parsedData$currentVi, _parsedData$currentVi2;
        if (
            !(parsedData !== null && parsedData !== void 0 && parsedData.contents)
            || !(parsedData !== null && parsedData !== void 0 && (_parsedData$currentVi = parsedData.currentVideoEndpoint) !== null && _parsedData$currentVi !== void 0
                && (_parsedData$currentVi2 = _parsedData$currentVi.watchEndpoint) !== null && _parsedData$currentVi2 !== void 0 && _parsedData$currentVi2.videoId)
        ) return false;
        return !!parsedData.contents.twoColumnWatchNextResults || !!parsedData.contents.singleColumnWatchNextResults;
    }

    function isWatchNextSidebarEmpty(parsedData) {
        var _parsedData$contents2, _parsedData$contents3, _parsedData$contents4, _parsedData$contents5, _content$find;
        if (isDesktop) {
            var _parsedData$contents, _parsedData$contents$, _parsedData$contents$2, _parsedData$contents$3;
            // WEB response layout
            const result = (_parsedData$contents = parsedData.contents) === null || _parsedData$contents === void 0
                ? void 0
                : (_parsedData$contents$ = _parsedData$contents.twoColumnWatchNextResults) === null || _parsedData$contents$ === void 0
                ? void 0
                : (_parsedData$contents$2 = _parsedData$contents$.secondaryResults) === null || _parsedData$contents$2 === void 0
                ? void 0
                : (_parsedData$contents$3 = _parsedData$contents$2.secondaryResults) === null || _parsedData$contents$3 === void 0
                ? void 0
                : _parsedData$contents$3.results;
            return !result;
        }

        // MWEB response layout
        const content = (_parsedData$contents2 = parsedData.contents) === null || _parsedData$contents2 === void 0
            ? void 0
            : (_parsedData$contents3 = _parsedData$contents2.singleColumnWatchNextResults) === null || _parsedData$contents3 === void 0
            ? void 0
            : (_parsedData$contents4 = _parsedData$contents3.results) === null || _parsedData$contents4 === void 0
            ? void 0
            : (_parsedData$contents5 = _parsedData$contents4.results) === null || _parsedData$contents5 === void 0
            ? void 0
            : _parsedData$contents5.contents;
        const result = content === null || content === void 0 ? void 0 : (_content$find = content.find((e) => {
                        var _e$itemSectionRendere;
                        return ((_e$itemSectionRendere = e.itemSectionRenderer) === null || _e$itemSectionRendere === void 0 ? void 0 : _e$itemSectionRendere.targetId)
                            === 'watch-next-feed';
                    })) === null || _content$find === void 0
            ? void 0
            : _content$find.itemSectionRenderer;
        return typeof result !== 'object';
    }

    function isPlayerObject(parsedData) {
        return (parsedData === null || parsedData === void 0 ? void 0 : parsedData.videoDetails)
            && (parsedData === null || parsedData === void 0 ? void 0 : parsedData.playabilityStatus);
    }

    function isEmbeddedPlayerObject(parsedData) {
        return typeof (parsedData === null || parsedData === void 0 ? void 0 : parsedData.previewPlayabilityStatus) === 'object';
    }

    function isAgeRestricted(playabilityStatus) {
        var _playabilityStatus$er,
            _playabilityStatus$er2,
            _playabilityStatus$er3,
            _playabilityStatus$er4,
            _playabilityStatus$er5,
            _playabilityStatus$er6,
            _playabilityStatus$er7,
            _playabilityStatus$er8;
        if (!(playabilityStatus !== null && playabilityStatus !== void 0 && playabilityStatus.status)) return false;
        if (playabilityStatus.desktopLegacyAgeGateReason) return true;
        if (Config.UNLOCKABLE_PLAYABILITY_STATUSES.includes(playabilityStatus.status)) return true;

        // Fix to detect age restrictions on embed player
        // see https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/issues/85#issuecomment-946853553
        return (
            isEmbed
            && ((_playabilityStatus$er = playabilityStatus.errorScreen) === null || _playabilityStatus$er === void 0
                ? void 0
                : (_playabilityStatus$er2 = _playabilityStatus$er.playerErrorMessageRenderer) === null || _playabilityStatus$er2 === void 0
                ? void 0
                : (_playabilityStatus$er3 = _playabilityStatus$er2.reason) === null || _playabilityStatus$er3 === void 0
                ? void 0
                : (_playabilityStatus$er4 = _playabilityStatus$er3.runs) === null || _playabilityStatus$er4 === void 0
                ? void 0
                : (_playabilityStatus$er5 = _playabilityStatus$er4.find((x) => x.navigationEndpoint)) === null || _playabilityStatus$er5 === void 0
                ? void 0
                : (_playabilityStatus$er6 = _playabilityStatus$er5.navigationEndpoint) === null || _playabilityStatus$er6 === void 0
                ? void 0
                : (_playabilityStatus$er7 = _playabilityStatus$er6.urlEndpoint) === null || _playabilityStatus$er7 === void 0
                ? void 0
                : (_playabilityStatus$er8 = _playabilityStatus$er7.url) === null || _playabilityStatus$er8 === void 0
                ? void 0
                : _playabilityStatus$er8.includes('/2802167'))
        );
    }

    function isSearchResult(parsedData) {
        var _parsedData$contents6, _parsedData$contents7, _parsedData$contents8, _parsedData$onRespons, _parsedData$onRespons2, _parsedData$onRespons3;
        return (
            typeof (parsedData === null || parsedData === void 0
                    ? void 0
                    : (_parsedData$contents6 = parsedData.contents) === null || _parsedData$contents6 === void 0
                    ? void 0
                    : _parsedData$contents6.twoColumnSearchResultsRenderer) === 'object' // Desktop initial results
            || (parsedData === null || parsedData === void 0
                    ? void 0
                    : (_parsedData$contents7 = parsedData.contents) === null || _parsedData$contents7 === void 0
                    ? void 0
                    : (_parsedData$contents8 = _parsedData$contents7.sectionListRenderer) === null || _parsedData$contents8 === void 0
                    ? void 0
                    : _parsedData$contents8.targetId) === 'search-feed' // Mobile initial results
            || (parsedData === null || parsedData === void 0
                    ? void 0
                    : (_parsedData$onRespons = parsedData.onResponseReceivedCommands) === null || _parsedData$onRespons === void 0
                    ? void 0
                    : (_parsedData$onRespons2 = _parsedData$onRespons.find((x) => x.appendContinuationItemsAction)) === null || _parsedData$onRespons2 === void 0
                    ? void 0
                    : (_parsedData$onRespons3 = _parsedData$onRespons2.appendContinuationItemsAction) === null || _parsedData$onRespons3 === void 0
                    ? void 0
                    : _parsedData$onRespons3.targetId) === 'search-feed' // Desktop & Mobile scroll continuation
        );
    }

    function attach$4(obj, prop, onCall) {
        if (!obj || typeof obj[prop] !== 'function') {
            return;
        }

        let original = obj[prop];

        obj[prop] = function() {
            try {
                onCall(arguments);
            } catch {}
            original.apply(this, arguments);
        };
    }

    const logPrefix = '%cSimple-YouTube-Age-Restriction-Bypass:';
    const logPrefixStyle = 'background-color: #1e5c85; color: #fff; font-size: 1.2em;';
    const logSuffix = '\uD83D\uDC1E You can report bugs at: https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/issues';

    function error(err, msg) {
        console.error(logPrefix, logPrefixStyle, msg, err, getYtcfgDebugString(), '\n\n', logSuffix);
        if (window.SYARB_CONFIG) {
            window.dispatchEvent(
                new CustomEvent('SYARB_LOG_ERROR', {
                    detail: {
                        message: (msg ? msg + '; ' : '') + (err && err.message ? err.message : ''),
                        stack: err && err.stack ? err.stack : null,
                    },
                }),
            );
        }
    }

    function info(msg) {
        console.info(logPrefix, logPrefixStyle, msg);
        if (window.SYARB_CONFIG) {
            window.dispatchEvent(
                new CustomEvent('SYARB_LOG_INFO', {
                    detail: {
                        message: msg,
                    },
                }),
            );
        }
    }

    function getYtcfgDebugString() {
        try {
            return (
                `InnertubeConfig: `
                + `innertubeApiKey: ${getYtcfgValue('INNERTUBE_API_KEY')} `
                + `innertubeClientName: ${getYtcfgValue('INNERTUBE_CLIENT_NAME')} `
                + `innertubeClientVersion: ${getYtcfgValue('INNERTUBE_CLIENT_VERSION')} `
                + `loggedIn: ${getYtcfgValue('LOGGED_IN')} `
            );
        } catch (err) {
            return `Failed to access config: ${err}`;
        }
    }

    /**
     * And here we deal with YouTube's crappy initial data (present in page source) and the problems that occur when intercepting that data.
     * YouTube has some protections in place that make it difficult to intercept and modify the global ytInitialPlayerResponse variable.
     * The easiest way would be to set a descriptor on that variable to change the value directly on declaration.
     * But some adblockers define their own descriptors on the ytInitialPlayerResponse variable, which makes it hard to register another descriptor on it.
     * As a workaround only the relevant playerResponse property of the ytInitialPlayerResponse variable will be intercepted.
     * This is achieved by defining a descriptor on the object prototype for that property, which affects any object with a `playerResponse` property.
     */
    function attach$3(onInitialData) {
        interceptObjectProperty('playerResponse', (obj, playerResponse) => {
            info(`playerResponse property set, contains sidebar: ${!!obj.response}`);

            // The same object also contains the sidebar data and video description
            if (isObject(obj.response)) onInitialData(obj.response);

            // If the script is executed too late and the bootstrap data has already been processed,
            // a reload of the player can be forced by creating a deep copy of the object.
            // This is especially relevant if the userscript manager does not handle the `@run-at document-start` correctly.
            playerResponse.unlocked = false;
            onInitialData(playerResponse);
            return playerResponse.unlocked ? createDeepCopy(playerResponse) : playerResponse;
        });

        // The global `ytInitialData` variable can be modified on the fly.
        // It contains search results, sidebar data and meta information
        // Not really important but fixes https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/issues/127
        window.addEventListener('DOMContentLoaded', () => {
            if (isObject(window.ytInitialData)) {
                onInitialData(window.ytInitialData);
            }
        });
    }

    function interceptObjectProperty(prop, onSet) {
        var _Object$getOwnPropert;
        // Allow other userscripts to decorate this descriptor, if they do something similar
        const dataKey = '__SYARB_' + prop;
        const { get: getter, set: setter } = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(Object.prototype, prop)) !== null && _Object$getOwnPropert !== void 0
            ? _Object$getOwnPropert
            : {
                set(value) {
                    this[dataKey] = value;
                },
                get() {
                    return this[dataKey];
                },
            };

        // Intercept the given property on any object
        // The assigned attribute value and the context (enclosing object) are passed to the onSet function.
        Object.defineProperty(Object.prototype, prop, {
            set(value) {
                setter.call(this, isObject(value) ? onSet(this, value) : value);
            },
            get() {
                return getter.call(this);
            },
            configurable: true,
        });
    }

    // Intercept, inspect and modify JSON-based communication to unlock player responses by hijacking the JSON.parse function
    function attach$2(onJsonDataReceived) {
        window.JSON.parse = function() {
            const data = nativeJSONParse.apply(this, arguments);
            return isObject(data) ? onJsonDataReceived(data) : data;
        };
    }

    function attach$1(onRequestCreate) {
        if (typeof window.Request !== 'function') {
            return;
        }

        window.Request = new Proxy(window.Request, {
            construct(target, args) {
                const [url, options] = args;
                try {
                    const parsedUrl = parseRelativeUrl(url);
                    const modifiedUrl = onRequestCreate(parsedUrl, options);

                    if (modifiedUrl) {
                        args[0] = modifiedUrl.toString();
                    }
                } catch (err) {
                    error(err, `Failed to intercept Request()`);
                }

                return Reflect.construct(...arguments);
            },
        });
    }

    function attach(onXhrOpenCalled) {
        XMLHttpRequest.prototype.open = function(method, url) {
            try {
                let parsedUrl = parseRelativeUrl(url);

                if (parsedUrl) {
                    const modifiedUrl = onXhrOpenCalled(method, parsedUrl, this);

                    if (modifiedUrl) {
                        arguments[1] = modifiedUrl.toString();
                    }
                }
            } catch (err) {
                error(err, `Failed to intercept XMLHttpRequest.open()`);
            }

            nativeXMLHttpRequestOpen.apply(this, arguments);
        };
    }

    const localStoragePrefix = 'SYARB_';

    function set(key, value) {
        localStorage.setItem(localStoragePrefix + key, JSON.stringify(value));
    }

    function get(key) {
        try {
            return JSON.parse(localStorage.getItem(localStoragePrefix + key));
        } catch {
            return null;
        }
    }

    function getPlayer$1(payload, useAuth) {
        return sendInnertubeRequest('v1/player', payload, useAuth);
    }

    function getNext$1(payload, useAuth) {
        return sendInnertubeRequest('v1/next', payload, useAuth);
    }

    function sendInnertubeRequest(endpoint, payload, useAuth) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', `/youtubei/${endpoint}?key=${getYtcfgValue('INNERTUBE_API_KEY')}&prettyPrint=false`, false);

        if (useAuth && isUserLoggedIn()) {
            xmlhttp.withCredentials = true;
            Config.GOOGLE_AUTH_HEADER_NAMES.forEach((headerName) => {
                xmlhttp.setRequestHeader(headerName, get(headerName));
            });
        }

        xmlhttp.send(JSON.stringify(payload));
        return nativeJSONParse(xmlhttp.responseText);
    }

    var innertube = {
        getPlayer: getPlayer$1,
        getNext: getNext$1,
    };

    let nextResponseCache = {};

    function getGoogleVideoUrl(originalUrl) {
        return Config.VIDEO_PROXY_SERVER_HOST + '/direct/' + btoa(originalUrl.toString());
    }

    function getPlayer(payload) {
        // Also request the /next response if a later /next request is likely.
        if (!nextResponseCache[payload.videoId] && !isMusic && !isEmbed) {
            payload.includeNext = 1;
        }

        return sendRequest('getPlayer', payload);
    }

    function getNext(payload) {
        // Next response already cached? => Return cached content
        if (nextResponseCache[payload.videoId]) {
            return nextResponseCache[payload.videoId];
        }

        return sendRequest('getNext', payload);
    }

    function sendRequest(endpoint, payload) {
        const queryParams = new URLSearchParams(payload);
        const proxyUrl = `${Config.ACCOUNT_PROXY_SERVER_HOST}/${endpoint}?${queryParams}&client=js`;

        try {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', proxyUrl, false);
            xmlhttp.send(null);

            const proxyResponse = nativeJSONParse(xmlhttp.responseText);

            // Mark request as 'proxied'
            proxyResponse.proxied = true;

            // Put included /next response in the cache
            if (proxyResponse.nextResponse) {
                nextResponseCache[payload.videoId] = proxyResponse.nextResponse;
                delete proxyResponse.nextResponse;
            }

            return proxyResponse;
        } catch (err) {
            error(err, 'Proxy API Error');
            return { errorMessage: 'Proxy Connection failed' };
        }
    }

    var proxy = {
        getPlayer,
        getNext,
        getGoogleVideoUrl,
    };

    function getUnlockStrategies$1(videoId, lastPlayerUnlockReason) {
        const clientName = getYtcfgValue('INNERTUBE_CLIENT_NAME') || 'WEB';
        const clientVersion = getYtcfgValue('INNERTUBE_CLIENT_VERSION') || '2.20220203.04.00';
        const hl = getYtcfgValue('HL');

        return [
            /**
             * Retrieve the sidebar and video description by just adding `racyCheckOk` and `contentCheckOk` params
             * This strategy can be used to bypass content warnings
             */
            {
                name: 'Content Warning Bypass',
                skip: !lastPlayerUnlockReason || !lastPlayerUnlockReason.includes('CHECK_REQUIRED'),
                optionalAuth: true,
                payload: {
                    context: {
                        client: {
                            clientName: clientName,
                            clientVersion: clientVersion,
                            hl,
                        },
                    },
                    videoId,
                    racyCheckOk: true,
                    contentCheckOk: true,
                },
                endpoint: innertube,
            },
            /**
             * Retrieve the sidebar and video description from an account proxy server.
             * Session cookies of an age-verified Google account are stored on server side.
             * See https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/tree/main/account-proxy
             */
            {
                name: 'Account Proxy',
                payload: {
                    videoId,
                    clientName,
                    clientVersion,
                    hl,
                    isEmbed: +isEmbed,
                    isConfirmed: +isConfirmed,
                },
                endpoint: proxy,
            },
        ];
    }

    function getUnlockStrategies(videoId, reason) {
        const clientName = getYtcfgValue('INNERTUBE_CLIENT_NAME') || 'WEB';
        const clientVersion = getYtcfgValue('INNERTUBE_CLIENT_VERSION') || '2.20220203.04.00';
        const signatureTimestamp = getSignatureTimestamp();
        const startTimeSecs = getCurrentVideoStartTime(videoId);
        const hl = getYtcfgValue('HL');

        return [
            /**
             * Retrieve the video info by just adding `racyCheckOk` and `contentCheckOk` params
             * This strategy can be used to bypass content warnings
             */
            {
                name: 'Content Warning Bypass',
                skip: !reason || !reason.includes('CHECK_REQUIRED'),
                optionalAuth: true,
                payload: {
                    context: {
                        client: {
                            clientName: clientName,
                            clientVersion: clientVersion,
                            hl,
                        },
                    },
                    playbackContext: {
                        contentPlaybackContext: {
                            signatureTimestamp,
                        },
                    },
                    videoId,
                    startTimeSecs,
                    racyCheckOk: true,
                    contentCheckOk: true,
                },
                endpoint: innertube,
            },
            /**
             * Retrieve the video info by using the TVHTML5 Embedded client
             * This client has no age restrictions in place (2022-03-28)
             * See https://github.com/zerodytrash/YouTube-Internal-Clients
             */
            {
                name: 'TV Embedded Player',
                requiresAuth: false,
                payload: {
                    context: {
                        client: {
                            clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
                            clientVersion: '2.0',
                            clientScreen: 'WATCH',
                            hl,
                        },
                        thirdParty: {
                            embedUrl: 'https://www.youtube.com/',
                        },
                    },
                    playbackContext: {
                        contentPlaybackContext: {
                            signatureTimestamp,
                        },
                    },
                    videoId,
                    startTimeSecs,
                    racyCheckOk: true,
                    contentCheckOk: true,
                },
                endpoint: innertube,
            },
            /**
             * Retrieve the video info by using the WEB_CREATOR client in combination with user authentication
             * Requires that the user is logged in. Can bypass the tightened age verification in the EU.
             * See https://github.com/yt-dlp/yt-dlp/pull/600
             */
            {
                name: 'Creator + Auth',
                requiresAuth: true,
                payload: {
                    context: {
                        client: {
                            clientName: 'WEB_CREATOR',
                            clientVersion: '1.20210909.07.00',
                            hl,
                        },
                    },
                    playbackContext: {
                        contentPlaybackContext: {
                            signatureTimestamp,
                        },
                    },
                    videoId,
                    startTimeSecs,
                    racyCheckOk: true,
                    contentCheckOk: true,
                },
                endpoint: innertube,
            },
            /**
             * Retrieve the video info from an account proxy server.
             * Session cookies of an age-verified Google account are stored on server side.
             * See https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/tree/main/account-proxy
             */
            {
                name: 'Account Proxy',
                payload: {
                    videoId,
                    reason,
                    clientName,
                    clientVersion,
                    signatureTimestamp,
                    startTimeSecs,
                    hl,
                    isEmbed: +isEmbed,
                    isConfirmed: +isConfirmed,
                },
                endpoint: proxy,
            },
        ];
    }

    var buttonTemplate =
        '<div style="margin-top: 15px !important; padding: 3px 10px 3px 10px; margin: 0px auto; background-color: #4d4d4d; width: fit-content; font-size: 1.2em; text-transform: uppercase; border-radius: 3px; cursor: pointer;">\r\n    <div class="button-text"></div>\r\n</div>';

    let buttons = {};

    async function addButton(id, text, backgroundColor, onClick) {
        const errorScreenElement = await waitForElement('.ytp-error', 2000);
        const buttonElement = createElement('div', { class: 'button-container', innerHTML: buttonTemplate });
        buttonElement.getElementsByClassName('button-text')[0].innerText = text;

        if (backgroundColor) {
            buttonElement.querySelector(':scope > div').style['background-color'] = backgroundColor;
        }

        if (typeof onClick === 'function') {
            buttonElement.addEventListener('click', onClick);
        }

        // Button already attached?
        if (buttons[id] && buttons[id].isConnected) {
            return;
        }

        buttons[id] = buttonElement;
        errorScreenElement.append(buttonElement);
    }

    function removeButton(id) {
        if (buttons[id] && buttons[id].isConnected) {
            buttons[id].remove();
        }
    }

    const confirmationButtonId = 'confirmButton';
    const confirmationButtonText = 'Click to unlock';

    function isConfirmationRequired() {
        return !isConfirmed && isEmbed && Config.ENABLE_UNLOCK_CONFIRMATION_EMBED;
    }

    function requestConfirmation() {
        addButton(confirmationButtonId, confirmationButtonText, null, () => {
            removeButton(confirmationButtonId);
            confirm();
        });
    }

    function confirm() {
        setUrlParams({
            unlock_confirmed: 1,
            autoplay: 1,
        });
    }

    var tDesktop = '<tp-yt-paper-toast></tp-yt-paper-toast>\n';

    var tMobile =
        '<c3-toast>\n    <ytm-notification-action-renderer>\n        <div class="notification-action-response-text"></div>\n    </ytm-notification-action-renderer>\n</c3-toast>\n';

    const template = isDesktop ? tDesktop : tMobile;

    const nToastContainer = createElement('div', { id: 'toast-container', innerHTML: template });
    const nToast = nToastContainer.querySelector(':scope > *');

    // On YT Music show the toast above the player controls
    if (isMusic) {
        nToast.style['margin-bottom'] = '85px';
    }

    if (!isDesktop) {
        nToast.nMessage = nToast.querySelector('.notification-action-response-text');
        nToast.show = (message) => {
            nToast.nMessage.innerText = message;
            nToast.setAttribute('dir', 'in');
            setTimeout(() => {
                nToast.setAttribute('dir', 'out');
            }, nToast.duration + 225);
        };
    }

    async function show(message) {
        let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
        if (!Config.ENABLE_UNLOCK_NOTIFICATION) return;
        if (isEmbed) return;

        await pageLoaded();

        // Do not show notification when tab is in background
        if (document.visibilityState === 'hidden') return;

        // Append toast container to DOM, if not already done
        if (!nToastContainer.isConnected) document.documentElement.append(nToastContainer);

        nToast.duration = duration * 1000;
        nToast.show(message);
    }

    var Toast = { show };

    const messagesMap = {
        success: 'Age-restricted video successfully unlocked!',
        fail: 'Unable to unlock this video 🙁 - More information in the developer console',
    };

    let lastPlayerUnlockVideoId = null;
    let lastPlayerUnlockReason = null;

    let lastProxiedGoogleVideoUrlParams;
    let cachedPlayerResponse = {};

    function getLastProxiedGoogleVideoId() {
        var _lastProxiedGoogleVid;
        return (_lastProxiedGoogleVid = lastProxiedGoogleVideoUrlParams) === null || _lastProxiedGoogleVid === void 0 ? void 0 : _lastProxiedGoogleVid.get('id');
    }

    function unlockResponse$1(playerResponse) {
        var _playerResponse$video, _playerResponse$playa, _playerResponse$previ, _unlockedPlayerRespon, _unlockedPlayerRespon3;
        // Check if the user has to confirm the unlock first
        if (isConfirmationRequired()) {
            info('Unlock confirmation required.');
            requestConfirmation();
            return;
        }

        const videoId = ((_playerResponse$video = playerResponse.videoDetails) === null || _playerResponse$video === void 0 ? void 0 : _playerResponse$video.videoId)
            || getYtcfgValue('PLAYER_VARS').video_id;
        const reason = ((_playerResponse$playa = playerResponse.playabilityStatus) === null || _playerResponse$playa === void 0 ? void 0 : _playerResponse$playa.status)
            || ((_playerResponse$previ = playerResponse.previewPlayabilityStatus) === null || _playerResponse$previ === void 0 ? void 0 : _playerResponse$previ.status);

        if (!Config.SKIP_CONTENT_WARNINGS && reason.includes('CHECK_REQUIRED')) {
            info(`SKIP_CONTENT_WARNINGS disabled and ${reason} status detected.`);
            return;
        }

        lastPlayerUnlockVideoId = videoId;
        lastPlayerUnlockReason = reason;

        const unlockedPlayerResponse = getUnlockedPlayerResponse(videoId, reason);

        // account proxy error?
        if (unlockedPlayerResponse.errorMessage) {
            Toast.show(`${messagesMap.fail} (ProxyError)`, 10);
            throw new Error(`Player Unlock Failed, Proxy Error Message: ${unlockedPlayerResponse.errorMessage}`);
        }

        // check if the unlocked response isn't playable
        if (
            !Config.VALID_PLAYABILITY_STATUSES.includes(
                (_unlockedPlayerRespon = unlockedPlayerResponse.playabilityStatus) === null || _unlockedPlayerRespon === void 0 ? void 0 : _unlockedPlayerRespon.status,
            )
        ) {
            var _unlockedPlayerRespon2;
            Toast.show(`${messagesMap.fail} (PlayabilityError)`, 10);
            throw new Error(
                `Player Unlock Failed, playabilityStatus: ${
                    (_unlockedPlayerRespon2 = unlockedPlayerResponse.playabilityStatus) === null || _unlockedPlayerRespon2 === void 0 ? void 0 : _unlockedPlayerRespon2.status
                }`,
            );
        }

        // if the video info was retrieved via proxy, store the URL params from the url-attribute to detect later if the requested video file (googlevideo.com) need a proxy.
        if (
            unlockedPlayerResponse.proxied && (_unlockedPlayerRespon3 = unlockedPlayerResponse.streamingData) !== null && _unlockedPlayerRespon3 !== void 0
            && _unlockedPlayerRespon3.adaptiveFormats
        ) {
            var _unlockedPlayerRespon4, _unlockedPlayerRespon5;
            const cipherText = (_unlockedPlayerRespon4 = unlockedPlayerResponse.streamingData.adaptiveFormats.find((x) =>
                            x.signatureCipher
                        )) === null || _unlockedPlayerRespon4 === void 0
                ? void 0
                : _unlockedPlayerRespon4.signatureCipher;
            const videoUrl = cipherText
                ? new URLSearchParams(cipherText).get('url')
                : (_unlockedPlayerRespon5 = unlockedPlayerResponse.streamingData.adaptiveFormats.find((x) => x.url)) === null || _unlockedPlayerRespon5 === void 0
                ? void 0
                : _unlockedPlayerRespon5.url;

            lastProxiedGoogleVideoUrlParams = videoUrl ? new URLSearchParams(new window.URL(videoUrl).search) : null;
        }

        // Overwrite the embedded (preview) playabilityStatus with the unlocked one
        if (playerResponse.previewPlayabilityStatus) {
            playerResponse.previewPlayabilityStatus = unlockedPlayerResponse.playabilityStatus;
        }

        // Transfer all unlocked properties to the original player response
        Object.assign(playerResponse, unlockedPlayerResponse);

        playerResponse.unlocked = true;

        Toast.show(messagesMap.success);
    }

    function getUnlockedPlayerResponse(videoId, reason) {
        // Check if response is cached
        if (cachedPlayerResponse.videoId === videoId) return createDeepCopy(cachedPlayerResponse);

        const unlockStrategies = getUnlockStrategies(videoId, reason);

        let unlockedPlayerResponse = {};

        // Try every strategy until one of them works
        unlockStrategies.every((strategy, index) => {
            var _unlockedPlayerRespon6, _unlockedPlayerRespon7;
            // Skip strategy if authentication is required and the user is not logged in
            if (strategy.skip || strategy.requiresAuth && !isUserLoggedIn()) return true;

            info(`Trying Player Unlock Method #${index + 1} (${strategy.name})`);

            try {
                unlockedPlayerResponse = strategy.endpoint.getPlayer(strategy.payload, strategy.requiresAuth || strategy.optionalAuth);
            } catch (err) {
                error(err, `Player Unlock Method ${index + 1} failed with exception`);
            }

            return !Config.VALID_PLAYABILITY_STATUSES.includes(
                (_unlockedPlayerRespon6 = unlockedPlayerResponse) === null || _unlockedPlayerRespon6 === void 0
                    ? void 0
                    : (_unlockedPlayerRespon7 = _unlockedPlayerRespon6.playabilityStatus) === null || _unlockedPlayerRespon7 === void 0
                    ? void 0
                    : _unlockedPlayerRespon7.status,
            );
        });

        // Cache response to prevent a flood of requests in case youtube processes a blocked response mutiple times.
        cachedPlayerResponse = { videoId, ...createDeepCopy(unlockedPlayerResponse) };

        return unlockedPlayerResponse;
    }

    let cachedNextResponse = {};

    function unlockResponse(originalNextResponse) {
        const videoId = originalNextResponse.currentVideoEndpoint.watchEndpoint.videoId;

        if (!videoId) {
            throw new Error(`Missing videoId in nextResponse`);
        }

        // Only unlock the /next response when the player has been unlocked as well
        if (videoId !== lastPlayerUnlockVideoId) {
            return;
        }

        const unlockedNextResponse = getUnlockedNextResponse(videoId);

        // check if the sidebar of the unlocked response is still empty
        if (isWatchNextSidebarEmpty(unlockedNextResponse)) {
            throw new Error(`Sidebar Unlock Failed`);
        }

        // Transfer some parts of the unlocked response to the original response
        mergeNextResponse(originalNextResponse, unlockedNextResponse);
    }

    function getUnlockedNextResponse(videoId) {
        // Check if response is cached
        if (cachedNextResponse.videoId === videoId) return createDeepCopy(cachedNextResponse);

        const unlockStrategies = getUnlockStrategies$1(videoId, lastPlayerUnlockReason);

        let unlockedNextResponse = {};

        // Try every strategy until one of them works
        unlockStrategies.every((strategy, index) => {
            if (strategy.skip) return true;

            info(`Trying Next Unlock Method #${index + 1} (${strategy.name})`);

            try {
                unlockedNextResponse = strategy.endpoint.getNext(strategy.payload, strategy.optionalAuth);
            } catch (err) {
                error(err, `Next Unlock Method ${index + 1} failed with exception`);
            }

            return isWatchNextSidebarEmpty(unlockedNextResponse);
        });

        // Cache response to prevent a flood of requests in case youtube processes a blocked response mutiple times.
        cachedNextResponse = { videoId, ...createDeepCopy(unlockedNextResponse) };

        return unlockedNextResponse;
    }

    function mergeNextResponse(originalNextResponse, unlockedNextResponse) {
        var _unlockedNextResponse, _unlockedNextResponse2, _unlockedNextResponse3, _unlockedNextResponse4, _unlockedNextResponse5;
        if (isDesktop) {
            // Transfer WatchNextResults to original response
            originalNextResponse.contents.twoColumnWatchNextResults.secondaryResults = unlockedNextResponse.contents.twoColumnWatchNextResults.secondaryResults;

            // Transfer video description to original response
            const originalVideoSecondaryInfoRenderer = originalNextResponse.contents.twoColumnWatchNextResults.results.results.contents.find(
                (x) => x.videoSecondaryInfoRenderer,
            )
                .videoSecondaryInfoRenderer;
            const unlockedVideoSecondaryInfoRenderer = unlockedNextResponse.contents.twoColumnWatchNextResults.results.results.contents.find(
                (x) => x.videoSecondaryInfoRenderer,
            )
                .videoSecondaryInfoRenderer;

            // TODO: Throw if description not found?
            if (unlockedVideoSecondaryInfoRenderer.description) {
                originalVideoSecondaryInfoRenderer.description = unlockedVideoSecondaryInfoRenderer.description;
            } else if (unlockedVideoSecondaryInfoRenderer.attributedDescription) {
                originalVideoSecondaryInfoRenderer.attributedDescription = unlockedVideoSecondaryInfoRenderer.attributedDescription;
            }

            return;
        }

        // Transfer WatchNextResults to original response
        const unlockedWatchNextFeed = (_unlockedNextResponse = unlockedNextResponse.contents) === null || _unlockedNextResponse === void 0
            ? void 0
            : (_unlockedNextResponse2 = _unlockedNextResponse.singleColumnWatchNextResults) === null || _unlockedNextResponse2 === void 0
            ? void 0
            : (_unlockedNextResponse3 = _unlockedNextResponse2.results) === null || _unlockedNextResponse3 === void 0
            ? void 0
            : (_unlockedNextResponse4 = _unlockedNextResponse3.results) === null || _unlockedNextResponse4 === void 0
            ? void 0
            : (_unlockedNextResponse5 = _unlockedNextResponse4.contents) === null || _unlockedNextResponse5 === void 0
            ? void 0
            : _unlockedNextResponse5.find(
                (x) => {
                    var _x$itemSectionRendere;
                    return ((_x$itemSectionRendere = x.itemSectionRenderer) === null || _x$itemSectionRendere === void 0 ? void 0 : _x$itemSectionRendere.targetId)
                        === 'watch-next-feed';
                },
            );

        if (unlockedWatchNextFeed) originalNextResponse.contents.singleColumnWatchNextResults.results.results.contents.push(unlockedWatchNextFeed);

        // Transfer video description to original response
        const originalStructuredDescriptionContentRenderer = originalNextResponse.engagementPanels
            .find((x) => x.engagementPanelSectionListRenderer)
            .engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items.find((x) => x.expandableVideoDescriptionBodyRenderer);
        const unlockedStructuredDescriptionContentRenderer = unlockedNextResponse.engagementPanels
            .find((x) => x.engagementPanelSectionListRenderer)
            .engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer.items.find((x) => x.expandableVideoDescriptionBodyRenderer);

        if (unlockedStructuredDescriptionContentRenderer.expandableVideoDescriptionBodyRenderer) {
            originalStructuredDescriptionContentRenderer.expandableVideoDescriptionBodyRenderer =
                unlockedStructuredDescriptionContentRenderer.expandableVideoDescriptionBodyRenderer;
        }
    }

    /**
     *  Handles XMLHttpRequests and
     * - Rewrite Googlevideo URLs to Proxy URLs (if necessary)
     * - Store auth headers for the authentication of further unlock requests.
     * - Add "content check ok" flags to request bodys
     */
    function handleXhrOpen(method, url, xhr) {
        let proxyUrl = unlockGoogleVideo(url);
        if (proxyUrl) {
            // Exclude credentials from XMLHttpRequest
            Object.defineProperty(xhr, 'withCredentials', {
                set: () => {},
                get: () => false,
            });
            return proxyUrl;
        }

        if (url.pathname.indexOf('/youtubei/') === 0) {
            // Store auth headers in storage for further usage.
            attach$4(xhr, 'setRequestHeader', (_ref2) => {
                let [headerName, headerValue] = _ref2;
                if (Config.GOOGLE_AUTH_HEADER_NAMES.includes(headerName)) {
                    set(headerName, headerValue);
                }
            });
        }

        if (Config.SKIP_CONTENT_WARNINGS && method === 'POST' && ['/youtubei/v1/player', '/youtubei/v1/next'].includes(url.pathname)) {
            // Add content check flags to player and next request (this will skip content warnings)
            attach$4(xhr, 'send', (args) => {
                if (typeof args[0] === 'string') {
                    args[0] = setContentCheckOk(args[0]);
                }
            });
        }
    }

    /**
     *  Handles Fetch requests and
     * - Rewrite Googlevideo URLs to Proxy URLs (if necessary)
     * - Store auth headers for the authentication of further unlock requests.
     * - Add "content check ok" flags to request bodys
     */
    function handleFetchRequest(url, requestOptions) {
        let newGoogleVideoUrl = unlockGoogleVideo(url);
        if (newGoogleVideoUrl) {
            // Exclude credentials from Fetch Request
            if (requestOptions.credentials) {
                requestOptions.credentials = 'omit';
            }
            return newGoogleVideoUrl;
        }

        if (url.pathname.indexOf('/youtubei/') === 0 && isObject(requestOptions.headers)) {
            // Store auth headers in authStorage for further usage.
            for (let headerName in requestOptions.headers) {
                if (Config.GOOGLE_AUTH_HEADER_NAMES.includes(headerName)) {
                    set(headerName, requestOptions.headers[headerName]);
                }
            }
        }

        if (Config.SKIP_CONTENT_WARNINGS && ['/youtubei/v1/player', '/youtubei/v1/next'].includes(url.pathname)) {
            // Add content check flags to player and next request (this will skip content warnings)
            requestOptions.body = setContentCheckOk(requestOptions.body);
        }
    }

    /**
     * If the account proxy was used to retrieve the video info, the following applies:
     * some video files (mostly music videos) can only be accessed from IPs in the same country as the innertube api request (/youtubei/v1/player) was made.
     * to get around this, the googlevideo URL will be replaced with a web-proxy URL in the same country (US).
     * this is only required if the "gcr=[countrycode]" flag is set in the googlevideo-url...
     * @returns The rewitten url (if a proxy is required)
     */
    function unlockGoogleVideo(url) {
        if (Config.VIDEO_PROXY_SERVER_HOST && isGoogleVideoUrl(url)) {
            if (isGoogleVideoUnlockRequired(url, getLastProxiedGoogleVideoId())) {
                return proxy.getGoogleVideoUrl(url);
            }
        }
    }

    /**
     * Adds `contentCheckOk` and `racyCheckOk` to the given json data (if the data contains a video id)
     * @returns {string} The modified json
     */
    function setContentCheckOk(bodyJson) {
        try {
            let parsedBody = JSON.parse(bodyJson);
            if (parsedBody.videoId) {
                parsedBody.contentCheckOk = true;
                parsedBody.racyCheckOk = true;
                return JSON.stringify(parsedBody);
            }
        } catch {}
        return bodyJson;
    }

    function processThumbnails(responseObject) {
        const thumbnails = findNestedObjectsByAttributeNames(responseObject, ['url', 'height']);

        let blurredThumbnailCount = 0;

        for (const thumbnail of thumbnails) {
            if (isThumbnailBlurred(thumbnail)) {
                blurredThumbnailCount++;
                thumbnail.url = thumbnail.url.split('?')[0];
            }
        }

        info(blurredThumbnailCount + '/' + thumbnails.length + ' thumbnails detected as blurred.');
    }

    function isThumbnailBlurred(thumbnail) {
        const hasSQPParam = thumbnail.url.indexOf('?sqp=') !== -1;

        if (!hasSQPParam) {
            return false;
        }

        const SQPLength = new URL(thumbnail.url).searchParams.get('sqp').length;
        const isBlurred = Config.BLURRED_THUMBNAIL_SQP_LENGTHS.includes(SQPLength);

        return isBlurred;
    }

    try {
        attach$3(processYtData);
        attach$2(processYtData);
        attach(handleXhrOpen);
        attach$1(handleFetchRequest);
    } catch (err) {
        error(err, 'Error while attaching data interceptors');
    }

    function processYtData(ytData) {
        try {
            // Player Unlock #1: Initial page data structure and response from `/youtubei/v1/player` XHR request
            if (isPlayerObject(ytData) && isAgeRestricted(ytData.playabilityStatus)) {
                unlockResponse$1(ytData);
            } // Player Unlock #2: Embedded Player inital data structure
            else if (isEmbeddedPlayerObject(ytData) && isAgeRestricted(ytData.previewPlayabilityStatus)) {
                unlockResponse$1(ytData);
            }
        } catch (err) {
            error(err, 'Video unlock failed');
        }

        try {
            // Unlock sidebar watch next feed (sidebar) and video description
            if (isWatchNextObject(ytData) && isWatchNextSidebarEmpty(ytData)) {
                unlockResponse(ytData);
            }

            // Mobile version
            if (isWatchNextObject(ytData.response) && isWatchNextSidebarEmpty(ytData.response)) {
                unlockResponse(ytData.response);
            }
        } catch (err) {
            error(err, 'Sidebar unlock failed');
        }

        try {
            // Unlock blurry video thumbnails in search results
            if (isSearchResult(ytData)) {
                processThumbnails(ytData);
            }
        } catch (err) {
            error(err, 'Thumbnail unlock failed');
        }

        return ytData;
    }
})();

// Custom Youtube Play Logo

// * Favicon URL *
var favicurl = "data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAIDZEJCA2RoggNkcwIDZHMCA2R/wgNkf8IDZH/CA2R/wgNkf8IDZH/CA2R/wgNkdgIDZHMCA2RzAgNkYQIDZEGCA6VhwgOlf//////CA6V/wgOlf///////////wgOlf///////////wgOlf8IDpX/CA6V////////////CA6VhwkOmcwJDpn//////wkOmf//////CQ6Z//////8JDpn//////wkOmf//////CQ6Z//////8JDpn/CQ6Z/wkOmcwJDp7qCQ6e//////8JDp7//////xMXnf//////Exed//////8JDpv//////wkOnv////////////////8JDp7qCQ+q/wkPqv//////CQ+q//////8WG6n//////xYbqf//////Fhup//////8JD6r//////wkPqv//////CQ+q/woRu+oKEbv//////woRu///////GB++//////8YH77///////////8KEbv/ChG7/woRu///////ChG7/woRu+oKEcDMChHA//////8KEcD/ChHA/xAXwf8QF8H/EBfB//////8QF8H/ChHA/woRwP8KEcD/ChHA/woRwP8KEcDMCxHEh////////////////wsRxP8LEcT/CxHE/wsRxP//////CxHE/woRwP8KEcD/CxHE/wsRxP8LEcT/CxHEh////5cLEsilCxLIzAsSyPkLEsj/CxLI/wsSyP8LEsj/CxLI/wsSyP8LEsj/CxLI/wsSyNILEsjMCxLIov///5f///+X////l////5cAAAD/////l////5f///+XAAAA/wAAAP////+X////l////5cAAAD/AAAA/wAAAP////+X////l////5f///+XAAAA/////5f///+XAAAA/////5f///+XAAAA/////5cAAAD/////l////5cAAAD/////l////5f///+X////lwAAAP////+X////lwAAAP////+X////lwAAAP////+XAAAA/////5f///+XAAAA/////5f///+X////l////5cAAAD/////l////5cAAAD/////l////5cAAAD/////lwAAAP////+X////lwAAAP////+X////l////5cAAAD/////lwAAAP////+X////lwAAAP8AAAD/////l////5cAAAD/////l////5cAAAD/////l////5cAAAD/////l////5f///+XAAAA/////5f///+X////l////5f///+X////l////5f///+X////l////5f///+XAAAA/////5f///+X////lwAAAP////+X////l////5f///+X////l////5f///+X////l////5f///+XgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
// * Favicon-Dateityp / Favicon file type *
var favictyp = "image/x-icon";
// * Favicon ueberschreiben, falls vorhanden / Overwrite favicon, if one is set *
var overwrite = true;
// *** Ende der Einstellungen / End of settings ***

var iconset = false;
for (var i = 0; i < window.document.getElementsByTagName('link').length; i++) {
    if (window.document.getElementsByTagName('link')[i].rel == "icon" || window.document.getElementsByTagName('link')[i].rel == "shortcut icon") {
        iconset = true;
        if (overwrite) {
            window.document.getElementsByTagName('link')[i].parentNode.removeChild(window.document.getElementsByTagName('link')[i]);
            iconset = false;
        }
    }
}
if (!iconset) {
    var favicon = window.document.createElement('link');
    favicon.rel = "shortcut icon";
    favicon.type = favictyp;
    favicon.href = favicurl;
    window.document.getElementsByTagName('head')[0].appendChild(favicon);
}

//NICHT GETESTETER PROGRESS BAR //TEST 1.0

@-moz-document domain("youtube.com")
{
  .html5-play-progress, .ytp-play-progress
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAMCAIAAAAs6UAAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUNCQzIyREQ0QjdEMTFFMzlEMDM4Qzc3MEY0NzdGMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUNCQzIyREU0QjdEMTFFMzlEMDM4Qzc3MEY0NzdGMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0JDMjJEQjRCN0QxMUUzOUQwMzhDNzcwRjQ3N0YwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0JDMjJEQzRCN0QxMUUzOUQwMzhDNzcwRjQ3N0YwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PovDFgYAAAAmSURBVHjaYvjPwMAAxjMZmBhA9H8INv4P4TPM/A+m04zBNECAAQBCWQv9SUQpVgAAAABJRU5ErkJggg==") repeat-x !important;
    background: linear-gradient(to bottom, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;
    background: -webkit-linear-gradient(top, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;
    background: -moz-linear-gradient(top, #FF0000 0%, #FF0000 16.5%, #FF9900 16.5%, #FF9900 33%, #FFFF00 33%, #FFFF00 50%, #33FF00 50%, #33FF00 66%, #0099FF 66%, #0099FF 83.5%, #6633ff 83.5%, #6633ff 100%) !important;
  }

  .html5-load-progress, .ytp-load-progress
  {
    background: url("/*[[stars]]*/") !important;
  }

  .html5-scrubber-button, .ytp-scrubber-button
  {
    background: url("data:image/gif;base64,R0lGODlhIgAVAKIHAL3/9/+Zmf8zmf/MmZmZmf+Z/wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkJBNjY5RTU1NEJFMzExOUM4QUM2MDAwNDQzRERBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREIzOEIzMzRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREIzOEIzMjRCN0IxMUUzODhEQjgwOTYzMTgyNTE0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1QkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQkE2NjlFNTU0QkUzMTE5QzhBQzYwMDA0NDNEREFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQcABwAsAAAAACIAFQAAA6J4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93bqCA7f7TFaYoIFAMMwczB5EkTzJllEUttmIGoG5bfPBjDawD7CsJC67uWcv2CRov929C/q2ZpcBbYBmLGk6W1BRY4MUDnMvJEsBAXdlknk2fCeRk2iJliAijpBlEmigjR0plKSgpKWvEUheF4tUZqZID1RHjEe8PsDBBwkAIfkECQcABwAsAAAAACIAFQAAA6B4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93TqS40XiKSYgTLBgIBAMqE/zmQSaZEzns+jQ9pC/5dQJ0VIv5KMVWxqb36opxHrNvu9ptPfGbmsBbgSAeRdydCdjXWRPchQPh1hNAQF4TpM9NnwukpRyi5chGjqJEoSOIh0plaYsZBKvsCuNjY5ptElgDyFIuj6+vwcJACH5BAkHAAcALAAAAAAiABUAAAOfeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GKifWaddvNQAtszXYCxgR/Zy5jYTFeXmSDiIZGdQEBd06QSBQ5e4cEkE9nnZQaG2J4F4MSLx8rkqUSZBeurhlTUqsLsi60DpZxSWBJugcJACH5BAkHAAcALAAAAAAiABUAAAOgeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GuifWaddvNwMkZtmY7AWMEgGcKY2ExXl5khFMVc0Z1AQF3TpJShDl8iASST2efloV5JTyJFpgOch8dgW9KZxexshGNLqgLtbW0SXFwvaJfCQAh+QQJBwAHACwAAAAAIgAVAAADoXi63P7wmUmrnVGOzbvfRsYYXGGe6MmF4kEOaSGYMwq2LizHfDGwIlLPNKGZfi6gZmggEAy2iVPZEKZqzakq+1xUFFYe90lxTsHmim6HGpvf3eR7skYJ3PC5tyystc0AboFnVXQ9XFJTZIQOYUYFTQEBeWaSVF4bbCeRk1meBJYSL3WbaReMIxQfHXh6jaYXsbEQni6oaF21ERR7l0ksvA0JACH5BAkHAAcALAAAAAAiABUAAAOeeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMfFlA4hTITEMxkIBMOuADwmhzqeM6mashTCXKw2TVKQyKuTRSx2wegnNkyJ1ozpOFiMLqcEU8BZHx6NYW8nVlZefQ1tZgQBAXJIi1eHUTRwi0lhl48QL0sogxaGDhMlUo2gh14fHhcVmnOrrxNqrU9joX21Q0IUElm7DQkAIfkECQcABwAsAAAAACIAFQAAA6J4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93bqCA7f7TFaYoIFAMMwczB5EkTzJllEUttmIGoG5bfPBjDawD7CsJC67uWcv2CRov929C/q2ZpcBbYBmLGk6W1BRY4MUDnMvJEsBAXdlknk2fCeRk2iJliAijpBlEmigjR0plKSgpKWvEUheF4tUZqZID1RHjEe8PsDBBwkAIfkECQcABwAsAAAAACIAFQAAA6B4umv+MDpG6zEj682zsRaWFWRpltoHMuJZCCRseis7xG5eDGp93TqS40XiKSYgTLBgIBAMqE/zmQSaZEzns+jQ9pC/5dQJ0VIv5KMVWxqb36opxHrNvu9ptPfGbmsBbgSAeRdydCdjXWRPchQPh1hNAQF4TpM9NnwukpRyi5chGjqJEoSOIh0plaYsZBKvsCuNjY5ptElgDyFIuj6+vwcJACH5BAkHAAcALAAAAAAiABUAAAOfeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GKifWaddvNQAtszXYCxgR/Zy5jYTFeXmSDiIZGdQEBd06QSBQ5e4cEkE9nnZQaG2J4F4MSLx8rkqUSZBeurhlTUqsLsi60DpZxSWBJugcJACH5BAkHAAcALAAAAAAiABUAAAOgeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMd8MbAiUu802flYGIhwaCAQDKpQ86nUoWqF6dP00wIby572SXE6vyMrlmhuu9GuifWaddvNwMkZtmY7AWMEgGcKY2ExXl5khFMVc0Z1AQF3TpJShDl8iASST2efloV5JTyJFpgOch8dgW9KZxexshGNLqgLtbW0SXFwvaJfCQAh+QQJBwAHACwAAAAAIgAVAAADoXi63P7wmUmrnVGOzbvfRsYYXGGe6MmF4kEOaSGYMwq2LizHfDGwIlLPNKGZfi6gZmggEAy2iVPZEKZqzakq+1xUFFYe90lxTsHmim6HGpvf3eR7skYJ3PC5tyystc0AboFnVXQ9XFJTZIQOYUYFTQEBeWaSVF4bbCeRk1meBJYSL3WbaReMIxQfHXh6jaYXsbEQni6oaF21ERR7l0ksvA0JACH5BAkHAAcALAAAAAAiABUAAAOeeLrc/vCZSaudUY7Nu99GxhhcYZ7oyYXiQQ5pIZgzCrYuLMfFlA4hTITEMxkIBMOuADwmhzqeM6mashTCXKw2TVKQyKuTRSx2wegnNkyJ1ozpOFiMLqcEU8BZHx6NYW8nVlZefQ1tZgQBAXJIi1eHUTRwi0lhl48QL0sogxaGDhMlUo2gh14fHhcVmnOrrxNqrU9joX21Q0IUElm7DQkAOw==") !important;
    width: 34px !important;
    height: 21px !important;
    border: none !important;
    margin-left: -18px !important;
    margin-top: 0px !important;
   /*[[show_nyan]]*/;
  }

  .ytp-progress-bar-container:hover .ytp-scrubber-button,
.ytp-progress-bar-container:hover .ytp-load-progress
  {
    image-rendering: pixelated;
  }

  .html5-progress-bar-container, .ytp-progress-bar-container
  {
    height: 12px !important;
  }

  .html5-progress-bar, .ytp-progress-bar
  {
    margin-top: 12px !important;
  }

  .html5-progress-list, .ytp-progress-list, .video-ads .html5-progress-list.html5-ad-progress-list, .video-ads .ytp-progress-list.ytp-ad-progress-list
  {
    height: 12px !important;
  }

  .ytp-volume-slider-track
  {
    background: #0C4177 !important;
  }
}

// replace the backround link with the png / gif you want as backround :) - MrMatoi
// FEATURES VERSION 1.0 - Custom Backround, Transparent objects, Custom Screenshot Plugin , Faster/Slower Buttons, Age Rescriction Bypass, Custom Youtube Play Logo,Custom Progress Bar
// Problems ? Write in "Issues" Much Fun!
