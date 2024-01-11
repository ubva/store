<template>
    <div class="ads">
        <div class="ads__left">
            <img class="ads__left-img" src="../../assets/images/phone1.jpg" alt="">
            <!-- <button class="ads__left-btn">
                <router-link to="/about">
                    <div class="ads__left-icon"></div>
                    <img class="ads__left-link1" src="../../assets/images/arrowRight.svg" alt="">
                </router-link>
            </button> -->
        </div>
        <div class="ads__right">
            <img class="ads__right-img" src="../../assets/images/phone2.jpg" alt="">
            <button>
                <!-- <router-link class="" to="/about">
                    <img class="ads__right-link2" src="../../assets/images/arrowRight.svg" alt="">
                </router-link> -->
            </button>

            <img class="ads__right-img" src="../../assets/images/phone3.webp" alt="">
            <button>
                <!-- <router-link to="/about">
                    <img class="ads__right-link3" src="../../assets/images/arrowRight.svg" alt="">
                </router-link> -->
            </button>

        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
    .ads{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 40px 0;
        &__left{
            width: 50%;
            position: relative;
            &-img{
                width: 100%;
                max-width: 660px;
                height: 605px;
                object-fit: cover;
                border-radius: 10px;
                position: relative;
            }
            &-btn{
                width: 200px;
                height: 200px ;
                position: absolute;
                bottom: 30px;
                right: 30px;
            }
            &-link1{
                width: 100%;
                max-width: 70px;
                height: 52px;
                position: absolute;
                bottom: 28px;
                right: 28px;
            }
        }
        &__right{
            width: 50%;
            position: relative;
            &-img{
                width: 100%;
                max-width: 660px;
                height: 300px;
                object-fit: cover;
                border-radius: 15px;
                &:nth-child(1){
                    margin-bottom: 5px;
                }
            }
            &-link2{
                width: 70px;
                height: 52px;
                position: absolute;
                bottom: 330px;
                right: 28px;
            }
            &-link3{
                width: 70px;
                height: 52px;
                position: absolute;
                bottom: 28px;
                right: 28px;
            }
        }
    }
</style>