<template>
    <div class="preview-wrapper">
        <div class="preview-box" v-if="url">
            <img class="image-preview" v-bind:src="url">
        </div>
        <div style="height: 250px" v-else>
            <label
            for="image"
            style="width: 400px; height: 250px; object-fit: cover; position:relative; z-index:100"
            >
            <i
                class="fas fa-image fa-4x"
                style="
                width: 400px;
                height: 250px;
                background-color: white;
                opacity: 0.4;
                text-align: center;
                vertical-align: middle;
                display: table-cell;
                color: black;
                "
            ></i>
            </label>
            <input
                style="display:none"
                id="image"
                type="file"
                ref="preview"
                name="image"
                v-on:change="show"
                accept="image/*"
            />
        </div>
        <button v-if="url" class="btn" type="submit" style="width:100%">
          <span>結果を見る</span>
        </button>
        <input v-if="url"
          class="btn"
          type="button"
          @click="reset"
          value="選びなおす"
          style="background-color:#FFCC00; width:100%"
        />
    </div>
</template>

<script>
export default {
    name: "ImagePreviewComponent",

    data() {
        return {
            url: ''
        }
    },
    methods: {
        show() {
            const file = this.$refs.preview.files[0];
            this.url = URL.createObjectURL(file);
        },
        reset(){
            return this.url=''
        }
    }
}
</script>

<style scoped>
    .image-preview{
        max-width:340px;
        max-height:250px;
    }
    .preview-wrapper{
        text-align: center;
        margin: 50px 0px;
    }
</style>
