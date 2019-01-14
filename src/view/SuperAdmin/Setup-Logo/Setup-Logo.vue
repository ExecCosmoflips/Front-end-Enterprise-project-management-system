<template>
  <div>
    <Row>
      <Form :model="formItem" :label-width="85">
        <FormItem label="设置企业名称" aria-setsize="10">
          <Col span="18">
            <Input v-model="formItem.name" placeholder="请设置企业名称" aria-setsize="10"></Input>
          </Col>&nbsp;&nbsp;
            <Button type="primary" @click="submit(formItem)">确认</Button>
        </FormItem>
      </Form>
      <Col span="14" offset="3">
        <Card>
          <div class="cropper-example cropper-first">
            <cropper
              :insideSrc="exampleImageSrc"
              :src="exampleImageSrc"
              crop-button-text="确认提交"
              @on-crop="handleCroped"></cropper>
          </div>
        </Card>
      </Col>
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
      img: '',
      submit: true,
      formItem: {
        name: ''
      },
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
  height: 350px;
}
</style>
