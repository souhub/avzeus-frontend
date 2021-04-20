<template>
    <div>
         <div id="fukidashi-wrapper">
            <div id="fukidashi">
                <div v-if="!loading">
                    <div v-if="!imagePath">
                    <div v-if="!previewURL">
                        <p>お主の好みのおなごの写真をアップロードしてくれい！</p>
                        <p>この写真を元にお主好みのAV女優を教えるぞい！</p>
                    </div>
                    <div v-if="previewURL">
                        <p>この写真でいいかの？</p>
                        <p>よければワシがこの写真からおなごの顔だけを切り抜くぞい！</p>
                    </div>
                </div>
                <div v-if="imagePath">
                    <p>切り抜いたぞい！アップロードした写真はこの娘でいいかの？</p>
                    <p>この娘でよければ結果を見るボタンを押してくれい！</p>
                </div>
                </div>

                <div v-if="loading">
                        <p>切り抜き中じゃ！もう少しそのまま待ってくれい</p>
                </div>
            </div>
            <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus">
        </div>

        <div v-if="imagePath" style="text-align: center;">
            <img :src="imagePath" style="margin-top:50px" />
            <form action="/recommendation" method="GET">
                <input name="selected_wemen_ids" type="hidden" :value="this.ids">
                <input @click="s3DeleteFile" class="btn submit-button" type="submit" value="結果を見る"/>
            </form>
        </div>

        <vue-loading v-if="loading" type="spiningDubbles" color="white" :size="{ width: '150px', height: '150px' }"></vue-loading>

        <div v-if="!imagePath" v-show="!loading">
            <form action="/api/image-clipping" method="POST" enctype="multipart/form-data">
                <div class="preview-wrapper">
                    <div class="preview-box" v-if="previewURL">
                        <img class="image-preview" :src="previewURL" v-if="!loading">
                    </div>
                    <div style="height: 250px" v-else>
                        <label id="label" for="image">
                            <i id="icon" class="fas fa-image fa-4x"></i>
                        </label>
                    </div>
                    <input
                        v-on:change="show"
                        id="image"
                        type="file"
                        ref="preview"
                        name="image"
                        accept="image/*"
                        required
                    />
                    <input
                        v-if="previewURL"
                        @click="isLoading"
                        class="btn submit-button"
                        type="submit"
                        value="切り抜いてもらう"
                    />
                    <input
                        id="reset-button"
                        v-if="previewURL"
                        @click="reset"
                        class="btn"
                        type="button"
                        value="選びなおす"
                    />
                </div>
            </form>
            <button class="btn btn-back" onclick="history.back()">もう一度説明を聞く</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { VueLoading } from 'vue-loading-template'

export default {
    data(){
        return{
            previewURL: '',
            ids: this.$route.query.ids,
            imagePath: this.$route.query.image_path,
            s3ObjectKey: this.$route.query.s3_object_key,
            loading: false,
            redirectURL: String
        }
    },
    methods:{
        show() {
            const file = this.$refs.preview.files[0]
            this.previewURL = URL.createObjectURL(file)
        },
        reset(){
            return this.previewURL=''
        },
        isLoading(){
            this.loading=true
        },
        s3DeleteFile(){
            console.log('s3DeleteFile is working')
            axios
                .delete('/api/s3-delete-file',{data:{"s3_object_key":this.s3ObjectKey}})
                .then((response)=>{
                    console.log(response.data.message)
                })
                .catch((err)=>{console.log(err)})
        }
    },
    components:{
        VueLoading
    }
}
</script>

<style scoped>
    #label{
        width: 400px;
        height: 250px;
        object-fit: cover;
        position:relative;
        z-index:100;
    }
    #icon{
        width: 400px;
        height: 250px;
        background-color: white;
        opacity: 0.4;
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        color: black;
    }
    #image{
        display: none;
    }
    #reset-button{
        background-color:#FFCC00;
        width:100%
    }
    .submit-button{
        width:100%;
    }
    .image-preview{
        max-width:340px;
        max-height:250px;
    }
    .preview-wrapper{
        text-align: center;
    }
</style>
