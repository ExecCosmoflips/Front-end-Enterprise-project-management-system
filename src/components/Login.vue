<template>
  <Form ref="form" :model="form" :rules="form" inline>
        <FormItem prop="user">
          <Input type="text" v-model="form.username" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="form.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit(form)">Signin</Button>
        </FormItem>
  </Form>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),
    handleSubmit ({username,password}) {
      this.handleLogin({username,password}).then(result => {
        alert(result['result'])
        })
      }
  }
}
</script>
<style scoped>
</style>
