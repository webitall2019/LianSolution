<?php
require 'header.php';
?>
<div class="contacts-page">
    <div class="in-touch">
        <div class="container">
            <h2 class="banner_title">
                Get in Touch
            </h2>
            <p>Contact us Today</p>
        </div>
    </div>
    <div class="contacts-field container">
        <div class="adress">
            <h2>
                Office Info
            </h2>
            <p class="item">
                People Behind the Success of our Company
            </p>
            <p class="item">
                <span>Office Hours:</span>  Mon-Friday 8am - 10pm
            </p>
            <p class="item">
                <span>Address:</span> Igbalangao, Bugasong, Antique
            </p>
            <p class="item">
                <span>Tel:</span>123-456-7890
            </p>
            <p class="item">
                <span>Fax:</span>  123-456-7890
            </p>

        </div>
        <form action="http://localhost/lian/contacts.php" class="form" id="contact-form">
            <div class="input-wrap">
                <input type="text" name="name" id="name" size="" placeholder="Name">
                <input type="email" name="email" id="email" placeholder="Email">
            </div>
            <textarea rows="5" cols="45" id="textarea" placeholder="Message" name="message"></textarea>
            <button type="submit" class="contact-btn">
                Send Message
            </button>
        </form>
    </div>
    <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
        <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
        <script>(function () {
                var setting = {"height":360,"width":3000,"zoom":11,"queryString":"Richmond Hill, Онтарио, Канада","place_id":"ChIJMxcpNkkqK4gR7UKx1gp2AVI","satellite":false,"centerCoord":[43.90361521117722,-79.42830144999999],"cid":"0x5201760ad6b142ed","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"41653"};
                var d = document;
                var s = d.createElement('script');
                s.src = 'https://1map.com/js/script-for-user.js?embed_id=41653';
                s.async = true;
                s.onload = function (e) {
                    window.OneMap.initMap(setting)
                };
                var to = d.getElementsByTagName('script')[0];
                to.parentNode.insertBefore(s, to);
            })();</script>
        <a href="https://1map.com/map-embed?embed_id=41653">1map.com</a>
    </div>
    <div class="our-values">
        <div class="container">
            <h1>
                Our Values
            </h1>
            <p class="our-values_text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
            </p>
            <div class="our-values_info">
                <div class="our-values_info_item">
                    <img src="./img/about1.png" alt="img">
                    <h2>
                        Who We Are
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
                    </p>
                </div>
                <div class="our-values_info_item">
                    <img src="./img/about2.png" alt="img">
                    <h2>
                        Our Vision
                    </h2>
                    <p>
                        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.
                    </p>
                </div>
                <div class="our-values_info_item">
                    <img src="./img/about3.png" alt="img">
                    <h2>
                        Our Mission
                    </h2>
                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
require 'footer.php';
?>
























</body>
</html>