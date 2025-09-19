// @prepros-append vendor/jquery-3.3.1.min.js
// @prepros-append vendor/popper.min.js
// @prepros-append vendor/bootstrap.min.js
// @prepros-append vendor/owl.carousel.min.js
// @prepros-append vendor/aos.js
// @prepros-append vendor/isotope.pkgd.min.js
// @prepros-append vendor/jquery.animateNumber.min.js
// @prepros-append vendor/jquery.waypoints.min.js
// @prepros-append vendor/TweenMax.min.js
// @prepros-append vendor/jquery.easing.1.3.js
// @prepros-append vendor/jarallax.min.js
// @prepros-append vendor/jarallax-video.min.js
// @prepros-append vendor/jquery.validate.min.js
// @prepros-append vendor/jquery.fancybox.min.js
// @prepros-append vendor/stickyfill.min.js
// @prepros-append vendor/imagesloaded.pkgd.min.js
// @prepros-append vendor/ScrollMagic.min.js
// @prepros-append vendor/scrollmagic.animation.gsap.min.js

  <script>
      console.log("working");
      emailjs.init("P53JFFmdEw4keEtVO"); // Initialize EmailJS with your User ID

      $(document).ready(function () {
        $("#contactForm").on("submit", function (event) {
          event.preventDefault(); // Prevent the default form submission
          console.log("Form submitted");

          var email = $("#email").val();
          var name = $("#name").val();
          var message = $("#message").val();
          var subject = $("#subject").val();
          var statusElm = $("#status");

          // Clear previous status messages
          statusElm.append("");

          // Email validation
          if (email.length > 5 && email.includes("@") && email.includes(".")) {
            statusElm.append("Email is valid. Sending...");

            // Send the email using EmailJS
            emailjs
              .send("service_17v4l2q", "template_7yeer9y", {
                name: name,
                email: email,
                subject: subject,
                message: message,
              })
              .then(
                function (response) {
                  statusElm.append(
                    '<div style="color:green">Message sent successfully!</div>'
                  );
                  $("#contactForm")[0].reset(); // Clear the form
                },
                function (error) {
                  statusElm.append(
                    '<div style="color:red">Oops! Something went wrong. Please try again.</div>'
                  );
                  console.error("EmailJS Error:", error);
                }
              );
          } else {
            statusElm.html(
              '<div style="color:red">Please enter a valid email address.</div>'
            );
          }
        });
      });
    </script>