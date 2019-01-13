<template>
  <div>
    <Row>
      <i-col span="14">
        <Card>
          <div class="cropper-example cropper-first">
            <cropper
              :insideSrc="exampleImageSrc"
              :src="exampleImageSrc"
              crop-button-text="确认提交"
              @on-crop="handleCroped"></cropper>
          </div>
          <Row type="flex" justify="center" class="code-row-bg" id="right">
            <Button to="./Company-name">设置企业名称</Button>
          </Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Cropper from '@/components/cropper'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Setup-Logo',
  components: {
    Cropper
  },
  data () {
    return {
      exampleImageSrc: '',
      img: ''
    }
  },
  computed: {
    ...mapState({
      logo: state => state.app.logo
    })
  },
  methods: {
    ...mapActions([
      'handleSetLogo',
      'handleGetLogo'
    ]),
    handleCroped (blob) {
      const formData = new FormData()
      formData.append('logo', blob)
      this.handleSetLogo(formData)
    }
  },
  mounted () {
    this.handleGetLogo().then(res => {
      this.exampleImageSrc = this.logo
    }
    )
  }
}
</script>
<style lang="less">
.cropper-example{
  height: 400px;
}
</style>
