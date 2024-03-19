<template>
    <div class="container">
        <div class="row">
            <h2 class="display-44">Reach Us</h2>
        </div>
        <div class="row" style="border:solid 1px; padding-top:10px; padding-bottom:10px; border-radius: 20px;">
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="https://formspree.io/f/xvoebrqo" method="POST">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control" required>
                                <label for="name" class="">Your name:</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="email" id="emails" name="email" class="form-control" required>
                                <label for="email" class="">Your email:</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="emails" name="subject" class="form-control" required>
                                <label for="subject" class="">Subject</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"
                                    required></textarea>
                                <label for="message">Your message</label>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </form>
            </div>
            <div class="col-md-3 text-center"
                style="margin-top: 20px; border:solid 1px; padding-top:10px; border-radius: 50px;">
                <ul class="list-unstyled mb-0">
                    <li>
                        <p> CAMPUS ADDRESS</p>
                        <div>
                            <iframe style="float: bottom; border-radius: 15%; border:0;"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2934215261566!2d18.490473614807716!3d-33.9849962806242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Imam%20Haron%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1633096149800!5m2!1sen!2sza"
                                width="200" height="120" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <p>314 Imam Haron Road, Cape Town, South Africa, 7780 SA</p>
                    </li>
                    <li>
                        <p>+ 27671454980</p>
                    </li>
                    <li>
                        <i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>vuyiseka.njovane@BookSpot.org</p>
                        <a style="color: rgb(7, 117, 125);" href="https://github.com/Maza455" target="_blank"><i
                                class="bi bi-instagram" style="font-size: 3em;padding-bottom: 400px;"></i></a>
                        <a style="color: rgb(9, 71, 203);" href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/"
                            target="_blank"><i class="bi bi-linkedin" style="font-size: 3em;padding-bottom: 400px;"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactPage',
};
</script>
<style scoped>
.display-4 {
    margin: 10px;
    font-size: 8rem;;
}
@keyframes form-submit {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
.btn-primary {
    animation: form-submit 0.3s ease-in-out;
}

</style>