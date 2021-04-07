<template>
  <div id="selection">
    <div id="fukidashi-wrapper">
      <div id="fukidashi">
        <p>
          下の9人のおなごの中から好きなおなごを<span class="attention"
            >かわいいと思う順に5人</span
          >選ぶのじゃ。<br />
          これを元におぬし好みのAVを授けるぞい！
        </p>
        <p
          v-if="selectedWemen.length > 5"
          style="font-weight: bold; color: red"
        >
          5人以上選んでいるぞい！かわいい順に5人選び直すのじゃ！
        </p>
        <p v-else-if="selectedWemen.length === 5">
          <span style="font-weight:bold; font-size:20px; color:#5ae099">
            5人ピッタリじゃ！結果を見るボタンで結果を確認するんじゃ！
          </span>
        </p>
        <p v-else>
          <span style="font-weight:bold; font-size:20px">{{
            selectedWemen.length
          }}</span
          >人選択中じゃ。<br />あと<span
            style="font-weight:bold; font-size:20px"
            >{{ 5 - selectedWemen.length }}</span
          >人選択するのじゃ。
        </p>
      </div>
      <img id="zeus" src="https://storage.googleapis.com/avzeus/zeus.png" alt="zeus" />
    </div>

    <!-- checkbox だと配列の順番がランダムで変わるので隠しフォームで送信する -->

    <!-- ダミーフォーム -->
    <div class="box">
      <div
        class="child"
        v-for="(woman, index) in this.$root.wemen"
        :key="index"
      >
        <input
          type="checkbox"
          :id="index"
          name="selected_wemen"
          :value="index"
          v-model="selectedWemen"
        />
        <p class="index">{{ woman.name }}</p>
        <label class="check-box" :for="index">
          <img class="child-img" :src="woman.image_path" alt="女性の画像" />
        </label>
      </div>
    </div>


    <!-- 本物のフォーム（隠しフォーム） -->
    <form action="/recommendation" method="GET">
      <div class="btns">
        <button v-if="selectedWemen.length == 5" class="btn" type="submit" style="width:100%">
          <span v-if="selectedWemen.length == 5">結果を見る</span>
        </button>
        <a
          v-if="selectedWemen.length != 5"
          class="btn"
          style="background-color:#34b871"
        >
          <span v-if="selectedWemen.length < 5">
            あと{{ 5 - selectedWemen.length }}人選ぶのじゃ！
          </span>
          <span v-else-if="selectedWemen.length > 5">
            選び過ぎじゃ！5人選ぶのじゃ
          </span>
        </a>
        <input
          class="btn"
          type="button"
          @click="reset"
          value="選びなおす"
          style="background-color:#FFCC00; width:100%"
        />
        <a
          class="btn"
          href="/explanation"
          style="background-color:gray"
        >
          戻る
        </a>
      </div>
      <input type="hidden" name="selected_wemen_ids" :value="selectedWemen" />
    </form>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      selectedWemen: [],
    };
  },
  methods: {
    reset: function() {
      this.selectedWemen = [];
    },
  },
};
</script>

<style scoped>
#like {
  color: palevioletred;
}

#dislike {
  color: black;
}

#std {
  text-align: center;
}

.attention {
  font-weight: 900;
  color: red;
}

.box {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: center;
}

.child {
  width: 33%;
}

.child-img {
  width: 100%;
  max-width: 200px;
}

.index {
  line-height: 0;
  font-size: 15px;
}

input[type="checkbox"] {
  display: none;
}
/* checkされたときのCSS */
input:checked + .index {
  color: #5ae099;
}

input:checked ~ * .child-img {
  opacity: 0.7;
}
</style>
