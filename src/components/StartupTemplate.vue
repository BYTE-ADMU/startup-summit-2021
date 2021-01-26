<template>
    <div class="page-container">
        <center><div class="cover-wrapper"><img :src="cover"></div></center>
        <div class="header-container">
            <div class="icon-wrapper"><img :src="icon"></div>
            <div class="header-content">
                <div class="header">
                    <p>{{name}}</p>
                </div>
                <div class="header-links">
                    <div class="padded-wrapper link-wrapper"><a :href="website">
<p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.41 6.64C19.41 6.64 19.41 6.64 19.41 6.59C18.7054 4.66623 17.4269 3.00529 15.7475 1.83187C14.0681 0.658447 12.0688 0.0291748 10.02 0.0291748C7.97126 0.0291748 5.97195 0.658447 4.29252 1.83187C2.6131 3.00529 1.33461 4.66623 0.630012 6.59C0.630012 6.59 0.630012 6.59 0.630012 6.64C-0.156863 8.8109 -0.156863 11.1891 0.630012 13.36C0.630012 13.36 0.630012 13.36 0.630012 13.41C1.33461 15.3338 2.6131 16.9947 4.29252 18.1681C5.97195 19.3416 7.97126 19.9708 10.02 19.9708C12.0688 19.9708 14.0681 19.3416 15.7475 18.1681C17.4269 16.9947 18.7054 15.3338 19.41 13.41C19.41 13.41 19.41 13.41 19.41 13.36C20.1969 11.1891 20.1969 8.8109 19.41 6.64ZM2.26001 12C1.91324 10.6892 1.91324 9.31079 2.26001 8H4.12001C3.96004 9.32854 3.96004 10.6715 4.12001 12H2.26001ZM3.08001 14H4.48001C4.71473 14.8918 5.05022 15.7541 5.48001 16.57C4.49931 15.9019 3.67951 15.0241 3.08001 14ZM4.48001 6H3.08001C3.67088 4.97909 4.4802 4.10147 5.45001 3.43C5.03057 4.24725 4.70515 5.10942 4.48001 6ZM9.00001 17.7C7.77178 16.7987 6.90916 15.4852 6.57001 14H9.00001V17.7ZM9.00001 12H6.14001C5.9534 10.6732 5.9534 9.32681 6.14001 8H9.00001V12ZM9.00001 6H6.57001C6.90916 4.51477 7.77178 3.20132 9.00001 2.3V6ZM16.92 6H15.52C15.2853 5.10816 14.9498 4.24594 14.52 3.43C15.5007 4.09807 16.3205 4.97594 16.92 6ZM11 2.3C12.2282 3.20132 13.0909 4.51477 13.43 6H11V2.3ZM11 17.7V14H13.43C13.0909 15.4852 12.2282 16.7987 11 17.7ZM13.86 12H11V8H13.86C14.0466 9.32681 14.0466 10.6732 13.86 12ZM14.55 16.57C14.9798 15.7541 15.3153 14.8918 15.55 14H16.95C16.3505 15.0241 15.5307 15.9019 14.55 16.57ZM17.74 12H15.88C15.9613 11.3365 16.0014 10.6685 16 10C16.0011 9.33151 15.961 8.66357 15.88 8H17.74C18.0868 9.31079 18.0868 10.6892 17.74 12Z" fill="#757575"/>
</svg><span class="text">{{website}}</span></p></a>
                    </div>
                    <div class="padded-wrapper link-wrapper"><a :href="linkedinlink">
<p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.47 1.77605e-05H1.53C1.33958 -0.00262686 1.1505 0.0322653 0.973563 0.102702C0.796628 0.173138 0.635301 0.277738 0.498795 0.41053C0.362289 0.543321 0.253279 0.701702 0.177989 0.876627C0.1027 1.05155 0.062606 1.2396 0.0599976 1.43002V18.57C0.062606 18.7604 0.1027 18.9485 0.177989 19.1234C0.253279 19.2983 0.362289 19.4567 0.498795 19.5895C0.635301 19.7223 0.796628 19.8269 0.973563 19.8973C1.1505 19.9678 1.33958 20.0027 1.53 20H18.47C18.6604 20.0027 18.8495 19.9678 19.0264 19.8973C19.2034 19.8269 19.3647 19.7223 19.5012 19.5895C19.6377 19.4567 19.7467 19.2983 19.822 19.1234C19.8973 18.9485 19.9374 18.7604 19.94 18.57V1.43002C19.9374 1.2396 19.8973 1.05155 19.822 0.876627C19.7467 0.701702 19.6377 0.543321 19.5012 0.41053C19.3647 0.277738 19.2034 0.173138 19.0264 0.102702C18.8495 0.0322653 18.6604 -0.00262686 18.47 1.77605e-05ZM6.09 16.74H3.09V7.74002H6.09V16.74ZM4.59 6.48002C4.17626 6.48002 3.77947 6.31566 3.48691 6.0231C3.19435 5.73055 3.03 5.33376 3.03 4.92002C3.03 4.50628 3.19435 4.10949 3.48691 3.81693C3.77947 3.52437 4.17626 3.36002 4.59 3.36002C4.80969 3.3351 5.03217 3.35687 5.24287 3.4239C5.45357 3.49093 5.64774 3.60171 5.81265 3.74898C5.97757 3.89625 6.10952 4.0767 6.19987 4.2785C6.29021 4.4803 6.33692 4.69891 6.33692 4.92002C6.33692 5.14112 6.29021 5.35973 6.19987 5.56154C6.10952 5.76334 5.97757 5.94378 5.81265 6.09106C5.64774 6.23833 5.45357 6.34911 5.24287 6.41613C5.03217 6.48316 4.80969 6.50493 4.59 6.48002ZM16.91 16.74H13.91V11.91C13.91 10.7 13.48 9.91002 12.39 9.91002C12.0527 9.91249 11.7242 10.0183 11.4488 10.2132C11.1735 10.4081 10.9645 10.6827 10.85 11C10.7717 11.2351 10.7378 11.4826 10.75 11.73V16.73H7.75C7.75 16.73 7.75 8.55002 7.75 7.73002H10.75V9.00002C11.0225 8.52712 11.4189 8.13754 11.8964 7.87322C12.374 7.6089 12.9146 7.47987 13.46 7.50002C15.46 7.50002 16.91 8.79002 16.91 11.56V16.74Z" fill="#757575"/>
</svg><span class="text">/{{linkedin}}</span></p></a>
                    </div>
                    <div class="padded-wrapper link-wrapper"><a :href="facebooklink">
<p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9 0H1.1C0.808262 0 0.528473 0.115893 0.322183 0.322183C0.115893 0.528473 0 0.808262 0 1.1V18.9C0 19.0445 0.0284524 19.1875 0.0837326 19.321C0.139013 19.4544 0.220038 19.5757 0.322183 19.6778C0.424327 19.78 0.54559 19.861 0.679048 19.9163C0.812506 19.9715 0.955546 20 1.1 20H10.68V12.25H8.08V9.25H10.68V7C10.6261 6.47176 10.6885 5.93813 10.8627 5.43654C11.0369 4.93495 11.3188 4.47755 11.6885 4.09641C12.0582 3.71528 12.5068 3.41964 13.0028 3.23024C13.4989 3.04083 14.0304 2.96225 14.56 3C15.3383 2.99521 16.1163 3.03528 16.89 3.12V5.82H15.3C14.04 5.82 13.8 6.42 13.8 7.29V9.22H16.8L16.41 12.22H13.8V20H18.9C19.0445 20 19.1875 19.9715 19.321 19.9163C19.4544 19.861 19.5757 19.78 19.6778 19.6778C19.78 19.5757 19.861 19.4544 19.9163 19.321C19.9715 19.1875 20 19.0445 20 18.9V1.1C20 0.955546 19.9715 0.812506 19.9163 0.679048C19.861 0.54559 19.78 0.424327 19.6778 0.322183C19.5757 0.220038 19.4544 0.139013 19.321 0.0837326C19.1875 0.0284524 19.0445 0 18.9 0Z" fill="#757575"/>
</svg><span class="text">/{{facebook}}</span></p></a>
                    </div>
                    <div v-if="ig != ''" class="padded-wrapper link-wrapper" id="ig-link"><a :href="iglink">
<p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7.52C9.5095 7.52 9.03002 7.66545 8.62219 7.93795C8.21435 8.21046 7.89648 8.59778 7.70878 9.05095C7.52107 9.50411 7.47196 10.0028 7.56765 10.4838C7.66334 10.9649 7.89954 11.4068 8.24638 11.7536C8.59321 12.1005 9.0351 12.3367 9.51618 12.4323C9.99725 12.528 10.4959 12.4789 10.9491 12.2912C11.4022 12.1035 11.7895 11.7856 12.062 11.3778C12.3346 10.97 12.48 10.4905 12.48 10C12.48 9.67432 12.4159 9.35183 12.2912 9.05095C12.1666 8.75006 11.9839 8.47666 11.7536 8.24638C11.5233 8.01609 11.2499 7.83341 10.9491 7.70878C10.6482 7.58415 10.3257 7.52 10 7.52ZM19.93 5.07C19.9247 4.29776 19.7825 3.53257 19.51 2.81C19.3093 2.28126 18.9987 1.80109 18.5988 1.40119C18.1989 1.00128 17.7187 0.690718 17.19 0.49C16.4674 0.217464 15.7022 0.0752609 14.93 0.0699999C13.64 -6.70552e-08 13.26 0 10 0C6.74 0 6.36 -6.70552e-08 5.07 0.0699999C4.29776 0.0752609 3.53257 0.217464 2.81 0.49C2.28126 0.690718 1.80109 1.00128 1.40119 1.40119C1.00128 1.80109 0.690718 2.28126 0.49 2.81C0.217464 3.53257 0.0752609 4.29776 0.0699999 5.07C-6.70552e-08 6.36 0 6.74 0 10C0 13.26 -6.70552e-08 13.64 0.0699999 14.93C0.0807639 15.705 0.222774 16.4725 0.49 17.2C0.689828 17.7263 1.00013 18.2037 1.4 18.6C1.79819 19.0023 2.27939 19.3129 2.81 19.51C3.53257 19.7825 4.29776 19.9247 5.07 19.93C6.36 20 6.74 20 10 20C13.26 20 13.64 20 14.93 19.93C15.7022 19.9247 16.4674 19.7825 17.19 19.51C17.7206 19.3129 18.2018 19.0023 18.6 18.6C18.9999 18.2037 19.3102 17.7263 19.51 17.2C19.7823 16.4739 19.9244 15.7055 19.93 14.93C20 13.64 20 13.26 20 10C20 6.74 20 6.36 19.93 5.07ZM17.39 13.07C17.3579 13.6871 17.2262 14.295 17 14.87C16.8059 15.3497 16.5173 15.7854 16.1514 16.1514C15.7854 16.5173 15.3497 16.8059 14.87 17C14.2895 17.2136 13.6783 17.3318 13.06 17.35C12.27 17.35 12.06 17.35 10 17.35C7.94 17.35 7.73 17.35 6.94 17.35C6.32173 17.3318 5.71049 17.2136 5.13 17C4.6341 16.8157 4.18628 16.5217 3.82 16.14C3.45767 15.7813 3.17784 15.3479 3 14.87C2.78556 14.2901 2.67061 13.6782 2.66 13.06C2.66 12.27 2.66 12.06 2.66 10C2.66 7.94 2.66 7.73 2.66 6.94C2.67061 6.32183 2.78556 5.70988 3 5.13C3.18428 4.6341 3.47827 4.18628 3.86 3.82C4.22033 3.45962 4.65326 3.18009 5.13 3C5.71049 2.78641 6.32173 2.66821 6.94 2.65C7.73 2.65 7.94 2.65 10 2.65C12.06 2.65 12.27 2.65 13.06 2.65C13.6783 2.66821 14.2895 2.78641 14.87 3C15.3659 3.18428 15.8137 3.47827 16.18 3.86C16.5423 4.21875 16.8222 4.65213 17 5.13C17.2136 5.71049 17.3318 6.32173 17.35 6.94C17.35 7.73 17.35 7.94 17.35 10C17.35 12.06 17.42 12.27 17.39 13.06V13.07ZM15.79 5.63C15.6709 5.30698 15.4832 5.01364 15.2398 4.77021C14.9964 4.52678 14.703 4.33906 14.38 4.22C13.9365 4.06626 13.4693 3.99179 13 4C12.22 4 12 4 10 4C8 4 7.78 4 7 4C6.52827 4.00461 6.06107 4.09263 5.62 4.26C5.30193 4.37366 5.01169 4.55371 4.76858 4.7882C4.52547 5.02269 4.33506 5.30624 4.21 5.62C4.06478 6.06537 3.99383 6.5316 4 7C4 7.78 4 8 4 10C4 12 4 12.22 4 13C4.00991 13.4712 4.09777 13.9375 4.26 14.38C4.37906 14.703 4.56678 14.9964 4.81021 15.2398C5.05364 15.4832 5.34698 15.6709 5.67 15.79C6.09667 15.9469 6.54565 16.0347 7 16.05C7.78 16.05 8 16.05 10 16.05C12 16.05 12.22 16.05 13 16.05C13.4717 16.0454 13.9389 15.9574 14.38 15.79C14.703 15.6709 14.9964 15.4832 15.2398 15.2398C15.4832 14.9964 15.6709 14.703 15.79 14.38C15.9574 13.9389 16.0454 13.4717 16.05 13C16.05 12.22 16.05 12 16.05 10C16.05 8 16.05 7.78 16.05 7C16.0503 6.5278 15.9621 6.05972 15.79 5.62V5.63ZM10 13.82C9.49882 13.82 9.00257 13.7211 8.53966 13.529C8.07676 13.3369 7.6563 13.0554 7.30238 12.7005C6.94846 12.3457 6.66803 11.9245 6.47714 11.4611C6.28626 10.9977 6.18868 10.5012 6.19 10C6.19 9.24405 6.4143 8.5051 6.83449 7.87669C7.25468 7.24828 7.85187 6.75866 8.55047 6.46983C9.24907 6.181 10.0177 6.10594 10.7589 6.25415C11.5002 6.40236 12.1808 6.76717 12.7147 7.30241C13.2485 7.83764 13.6116 8.51924 13.7578 9.2609C13.9041 10.0026 13.827 10.771 13.5363 11.4688C13.2457 12.1666 12.7545 12.7625 12.125 13.1811C11.4955 13.5996 10.7559 13.822 10 13.82ZM14 6.93C13.7789 6.9066 13.5744 6.80222 13.4257 6.63697C13.277 6.47172 13.1947 6.25729 13.1947 6.035C13.1947 5.81271 13.277 5.59828 13.4257 5.43303C13.5744 5.26778 13.7789 5.1634 14 5.14C14.2211 5.1634 14.4256 5.26778 14.5743 5.43303C14.723 5.59828 14.8053 5.81271 14.8053 6.035C14.8053 6.25729 14.723 6.47172 14.5743 6.63697C14.4256 6.80222 14.2211 6.9066 14 6.93Z" fill="#757575"/>
</svg><span class="text">@{{ig}}</span></p></a>
                    </div>
                    <div v-if="twitter != ''" class="link-wrapper"><a :href="twitterlink">
<p><svg id="twt-svg" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2.79997C19.2483 3.12606 18.4534 3.34163 17.64 3.43997C18.4982 2.92729 19.1413 2.12075 19.45 1.16997C18.6436 1.65003 17.7608 1.98826 16.84 2.16997C16.2245 1.50254 15.405 1.05826 14.5098 0.906817C13.6147 0.755372 12.6945 0.905324 11.8938 1.33315C11.093 1.76099 10.4569 2.4425 10.0852 3.2708C9.71355 4.09911 9.62729 5.02736 9.84 5.90997C8.20943 5.82749 6.61444 5.40292 5.15865 4.66383C3.70287 3.92474 2.41885 2.88766 1.39 1.61997C1.02914 2.25013 0.839519 2.96379 0.84 3.68997C0.83872 4.36435 1.00422 5.02858 1.32176 5.62353C1.63929 6.21848 2.09902 6.72568 2.66 7.09997C2.00798 7.08222 1.36989 6.90726 0.8 6.58997V6.63997C0.804887 7.58486 1.13599 8.49906 1.73731 9.22793C2.33864 9.9568 3.17326 10.4556 4.1 10.64C3.74326 10.7485 3.37287 10.8058 3 10.81C2.74189 10.807 2.48442 10.7835 2.23 10.74C2.49391 11.5528 3.00462 12.2631 3.69107 12.7721C4.37753 13.2811 5.20558 13.5635 6.06 13.58C4.6172 14.7152 2.83588 15.3348 1 15.34C0.665735 15.3411 0.331736 15.321 0 15.28C1.87443 16.4902 4.05881 17.1327 6.29 17.13C7.82969 17.146 9.35714 16.855 10.7831 16.274C12.2091 15.6931 13.505 14.8338 14.5952 13.7465C15.6854 12.6591 16.548 11.3654 17.1326 9.94087C17.7172 8.51639 18.012 6.98969 18 5.44997C18 5.27996 18 5.09997 18 4.91997C18.7847 4.33478 19.4615 3.61739 20 2.79997Z" fill="#757575"/>
</svg><span class="text">@{{twitter}}</span></p></a>
                    </div>
                </div>
            </div>
    </div>
    <div class="container">
        <div class="pic-wrapper">
        <img :src="firstpic">
        </div>
        <div class="content">
            <p>About Us</p>
            <p id="content-header">{{aboutus}}</p>
        </div>
    </div>
    <div class="container" id="second-container">
        <div class="pic-wrapper">
        <img :src="secondpic">
        </div>
        <div class="content">
            <p>Our Product</p>
            <p id="content-header" v-html="ourproduct"></p>
        </div>
    </div>
    <center><div class="third-container">
        <p>Opportunities</p>
        <div class="job-class" v-for="job in job" :key="job">
            <p>{{job.jobClass}}</p>
            <div class="jobs-container">
                <div class="job-card" v-for="jobPosition in job.jobPosition" :key="jobPosition">
                    <p id="job-position">{{jobPosition.jobName}}</p>
                    <div v-if="jobPosition.jobType == 'internship'" class="job-type" id="internship"><p>INTERNSHIP</p></div>
                    <div v-if="jobPosition.jobType == 'part-time'" class="job-type" id="part-time"><p>PART-TIME</p></div>
                    <div v-if="jobPosition.jobType == 'full-time'" class="job-type" id="full-time"><p>FULL-TIME</p></div>
                </div>
            </div>
        </div>
    </div>
    <div class="fourth-container">
        <p>Gallery</p>
        <div class="gallery-wrapper">
            <div class="gallery-img-wrapper">
                <img :src="gallery1">
            </div>
            <div class="gallery-img-wrapper">
                <img :src="gallery2">
            </div>
            <div class="gallery-img-wrapper second-row">
                <img :src="gallery3">
            </div>
            <div class="gallery-img-wrapper second-row">
                <img :src="gallery4">
            </div>
        </div>
    </div>
    </center>
</div>
</template>

<script>
export default {
    name: 'Startup-Template',
    props: {
        cover:{
            required: true,
            type: String
        },
        icon:{
            required: true,
            type: String
        },
        name:{
            required: true,
            type: String
        },
        website:{
            required: true,
            type: String
        },
        linkedin:{
            required: true,
            type: String
        },
        linkedinlink:{
            required: true,
            type: String
        },
        facebook:{
            required: true,
            type: String
        },
        facebooklink:{
            required: true,
            type: String
        },
        ig:{
            required: false,
            type: String,
            default: ''
        },
        iglink:{
            required: false,
            type: String
        },
        twitter:{
            required: false,
            type: String,
            default: ''
        },
        twitterlink:{
            required: false,
            type: String
        },
        firstpic:{
            required: true,
            type: String
        },
        secondpic:{
            required: true,
            type: String
        },
        aboutus:{
            required: true,
            type: String
        },
        ourproduct:{
            required: true,
            type: String
        },
        job:{
            required: true,
            default: []
        },
        gallery1:{
            required: true,
            type: String
        },
        gallery2:{
            required: true,
            type: String
        },
        gallery3:{
            required: true,
            type: String
        },
        gallery4:{
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: "Objectivity-ExtraBold";
  src: url('./../fonts/Objectivity-ExtraBold.otf') format("opentype");
}
@font-face {
  font-family: "Inter-Bold";
  src: url('./../fonts/Inter-Bold.ttf') format("truetype");
}
@font-face {
  font-family: "Inter-SemiBold";
  src: url('./../fonts/Inter-SemiBold.ttf') format("truetype");
}
@font-face {
  font-family: "Inter-Regular";
  src: url('./../fonts/Inter-Regular.ttf') format("truetype");
}
@font-face {
  font-family: "Inter-Light";
  src: url('./../fonts/Inter-Light.ttf') format("truetype");
}
*{
    background-color: #fcfcfc;
    margin: 0px!important;
}
.page-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0px!important;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
.cover-wrapper{
min-width: 100vw!important;
height: 120px;
}
.cover-wrapper img{
width: 100%;
height: 100%;
}
.header-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transform: translate(0px,13px);
    width: 1152px;
    margin-left: auto!important;
    margin-right: auto!important;
}
.icon-wrapper{
width: 160px;
height: 160px;
}
.icon-wrapper img{
    width: 100%;
    height: 100%;
    transform: translate(0px,-69px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border-radius: 5px;
}
.header-content{
    padding-left: 32px;
    display: flex;
    flex-direction: column;
}
.header{
    font-size: 28px;
    line-height: 40px;
    color: #000;
    font-family: 'Objectivity-ExtraBold';
    font-weight: 800;
    text-align: left;
}
.header-links{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 19px;
    transform: translate(0px, -1px);
    flex-wrap: wrap;
}
.link-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 5px;
    height: fit-content;
    padding: 5px 8px;
}
.link-wrapper svg{
    padding-right: 8px;
    padding-top: -2.67px;
    transform: translate(0px, 1px);
}
#twt-svg{
    transform: translate(0px, 2px);
}
.link-wrapper p{
    color: #757575;
    font-size: 14px;
    line-height: 22px;
    font-family: "Inter-Regular";
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.link-wrapper a{
    text-decoration: none;
}
.padded-wrapper{
    padding-right: 32px;
}
.container{
    display: flex;
    flex-direction: row-reverse;
    z-index: 0;
    padding-top: 11px;
    background-color: #fcfcfc
}
.pic-wrapper{
    width: 608px;
    height: 280px;
}
.pic-wrapper img{
    width: 100%;
    height: 100%;
}
.content{
    display: flex;
    flex-direction: column;
    margin-top: auto!important;
    margin-bottom: auto!important;
    width: 664px;
    padding-right: 24px;
}
.content p{
    font-family: 'Objectivity-ExtraBold';
    font-size: 28px;
    line-height: 40px;
    color: #000;
    text-align: left;
}
#content-header{
    font-size: 16px;
    font-family: 'Inter-Regular';
    line-height: 26px;
    color: #333;
    text-align: left;
    padding-top: 16px;
}
#second-container{
    padding-top: 160px;
}
.third-container{
    display: flex;
    flex-direction: column;
    padding-top: 205px;
    max-width: 1152px;
}
.third-container p{
    font-family: 'Objectivity-ExtraBold';
    font-size: 28px;
    line-height: 40px;
    color: #000;
    text-align: left;
}
.jobs-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1152px;
    justify-content: space-between;
}
.job-card{
    padding-left: 16px;
    padding-right: 16px;
    border: 2px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 560px;
    height: 72px;
    margin-top: 16px!important;
}
.job-card #job-position{
    color: #2C2C2C;
    font-size: 16px;
    line-height: 26px;
    font-family: 'Inter-Bold';
    margin-top: auto!important;
    margin-bottom: auto!important;
}
.job-class{
    padding-top: 40px;
}
.job-class p{
    font-size: 20px;
    line-height: 28px;
    color: #000;
    font-family: 'Inter-SemiBold';
}
.job-type{
    margin-top: auto!important;
    margin-bottom: auto!important;
    border-radius: 4px;
    background-color: pink;
    width: 90px;
}
.job-type p{
    letter-spacing: 1.5px;
    margin-top: 8px!important;
    margin-bottom: 8px!important;
    color: #F8F8F8;
    font-size: 10px;
    line-height: 16px;
    font-family: 'Inter-SemiBold';
    background: transparent;
    text-align: center;
}
.jobs-container{
    padding-top: 8px;
}
#internship{
    background: linear-gradient(93.62deg, #F46E26 0%, #F2B430 99.35%);
}
#part-time{
    background: linear-gradient(93.62deg, #F2B430 0%, #1EACB5 99.35%);
}
#full-time{
    background: linear-gradient(93.62deg, #F46E26 0%, #1EACB5 99.35%);
}
.fourth-container{
    max-width: 1152px;
    padding-top: 132px;
}
.fourth-container p{
    font-family: 'Objectivity-ExtraBold';
    font-size: 28px;
    line-height: 40px;
    color: #000;
    text-align: left;
}
.gallery-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1152px;
    justify-content: space-between;
}
.second-row{
    padding-top: 32px;
}
.gallery-img-wrapper{
    width: 560px;
    height: 320px;
}
.gallery-img-wrapper img{
    width: 100%;
    height: 100%;
}
.gallery-wrapper{
    padding-top: 43px;
}
@media screen and (min-width: 1314px){
    .header-container{
        width: 1296px;
        margin-left: auto!important;
        margin-right: 0px!important;
    }
}
@media screen and (min-width: 1441px){
    .container{
        margin-left: auto!important;
        margin-right: auto!important;
    }
    .header-container{
        width: 1295px;
        transform: translate(0px,13px);
        margin-left: auto!important;
        margin-right: auto!important;
    }
}
@media screen and (min-width: 1750px){
    .content{
        padding-right: 92px;
    }
    .header-container{
        width: 1363px;
    }
}
@media screen and (max-width: 1313px){
    .header-container{
        width: 970px;
    }
    .container{
        display: flex;
        flex-direction: column-reverse;
        padding-top: 0px;
        margin-top: -7px!important;
    }
    #about-us{
        padding-top: 8px;
    }
    .content{
        margin-left: auto!important;
        margin-right: auto!important;
        width: 970px;
        padding-right: 0px;
    }
    .container{
        width: 100%;
    }
    .pic-wrapper{
        height: 354px;
        width: 768px;
        margin-left: auto!important;
        margin-right: auto!important;
        padding-top: 58px;
    }
}
@media screen and (max-width: 1194px){
    .third-container{
    padding-top: 78px;
    max-width: 689px;
    width: 100%;
    }
    .jobs-container{
    flex-direction: column;
    max-width: 689px;
    justify-content: center;
    padding-top: 0px;
}
.job-card{
width: 689px;
height: 72px;
}
.fourth-container{
    max-width: 689px;
    padding-top: 78px;
}
.gallery-img-wrapper{
width: 335.04px;
height: 191.71px;
}
.gallery-wrapper{
    padding-top: 40px;
}
.second-row{
    padding-top: 18.81px;
}
}
@media screen and (max-width: 990px){
    .cover-wrapper{
        height: 176px;
        min-width: 100%!important;
    }
    .header-container{
        transform: translate(0px,0px);
        padding-top: 36px;
        width: fit-content;
        margin-left: 40px!important;
        margin-right: 0px!important;
    }
    .icon-wrapper img{
        transform: translate(0px,0px);
    }
    .header-content{
        padding-top: 24px;
        padding-left: 13px;
        width: 499px;
    }
    .container{
        margin-top: 0px!important;
        padding-top: 49px;
        margin-left: 0px!important;
        margin-right: 0px!important;
        flex-wrap: wrap;
    }
    .icon-wrapper{
        width: 155px;
        height: 155px;
    }
    .header{
        padding-left: 11px;
    }
    .header-links{
        transform: translate(0px, 0px);
    }
    .content{
    margin-left: 40px!important;
    margin-right: 0px!important;
    width: 90%;
    padding-right: 0px;
    }
    .pic-wrapper{
    margin-left: auto!important;
    margin-right: auto!important;
    padding-top: 58px;
    }
    #ig-link{
    padding-right: 73px;
    }
    #second-container{
    padding-top: 33px;
    }
}
@media screen and (max-width: 767px){
    .pic-wrapper{
        height: 100%;
        width: 100%;
        margin-left: 0px!important;
        margin-right: 0px!important;
    }
    .content[data-v-eb25e6d2] {
    margin-left: 0px!important;
    margin-right: 0px!important;
    width: 94%;
    padding-right: 3%;
    padding-left: 3%;
    }
}
@media screen and (max-width: 700px){
    .cover-wrapper{
        width: 320px;
    height: 112px;
    }
    .icon-wrapper{
        width: 96px;
        height: 96px;
        margin-left: auto!important;
    margin-right: auto!important;
    }
    .header-container{
        flex-direction: column;
    justify-content: center;
    margin-left: auto!important;
    margin-right: auto!important;
    padding-top: 0px;
    }
    .link-wrapper span{
        display: none;
    }
    .header-content{
    padding-top: 24px;
    padding-left: 0px;
    width: 288px;
    }
    .header{
        padding-left: 0px;
        margin-left: auto!important;
    margin-right: auto!important;
    }
    .header-links{
        padding-top: 8px;
    }
    .padded-wrapper{
    padding-right: 24px;
    }
    #ig-link{
        padding-right: 24px;
    }
}
@media screen and (max-width: 320px){
    .pic-wrapper{
        height: 174px;
    }
}
</style>