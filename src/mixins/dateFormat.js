export const dateFormat = {
  data(){
    return{
      mixinData:"저는 믹스인입니다!"
    }
  },
  methods:{
    getDateAndTime(date){
        if(date != null){
          let hour = date.getHours()
          let minutes = date.getMinutes()
          let fullDate = `${date.getFullYear()}/${date.getMonth() +1}/${date.getDate()}`
          return `${fullDate} ${hour}:${minutes}`
        }else{
          return null
        }
      }
    }
}
