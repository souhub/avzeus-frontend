<template>
    <div>
         <div id="fukidashi-wrapper">
            <div id="fukidashi">
                <div>
                    <p>お主の好みのおなごの写真をアップロードしてくれい！</p>
                    <p>この写真を元にお主好みのAV女優を教えるぞい！</p>
                </div>
            </div>
            <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus">
        </div>
        <form action="" method="post" enctype="multipart/form-data">
            <ImagePreviewComponent></ImagePreviewComponent>
        </form>
        <button class="btn btn-back" onclick="history.back()">もう一度説明を聞く</button>
    </div>
</template>

<script>

import ImagePreviewComponent from './ImagePreviewComponent'

export default {
    data(){
    },
    methods:{
    },
    components:{
        ImagePreviewComponent
  }
}
</script>
