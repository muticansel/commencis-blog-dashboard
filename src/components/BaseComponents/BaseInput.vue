<script  lang="ts">
export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    type:{
      type:String,
      default:'text'
    },
    initialFocused:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
      default:''
    },
    isSmall:{
      type:Boolean,
      default:false
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const inputRef = ref<HTMLInputElement | null>(null)

    const updateValue = (event: Event) => {
        const target = <HTMLInputElement> event.target
        context.emit('update:modelValue', target.value)
    }

    return { updateValue, inputRef   }
  },
})
</script>

<template>
  <div class="relative w-full text-left mt-1" :class="{'small-input':isSmall}">
    <label class="label " >{{ label }}</label>
    <input v-bind="$attrs"  class="w-full  " :class="{ 'input-error': error }" ref="inputRef" :value="modelValue" :placeholder="placeholder" :type="type"  @input="updateValue">
    <span class="error-form-field">{{error}}</span>
  </div>
</template>

<style lang="scss" scoped>

.small-input {
  .label {
    font-size: 14px;
    line-height: 16px;
  }
  input {
    padding: 10px 16px;
    font-size: 14px;
    height: 45px;
  }
  input::placeholder {
    font-weight: 400;
    font-size: 14px;
  }
}
.label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #262626;
}
input.input-error{
  border: 1px solid #dc3545 !important;
}
input{
    border: 1px solid #9E9E9E;
    box-sizing: border-box;
    border-radius: 8px;
    transition: 0.2s ease all;
    padding: 10px 16px;
}
input::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170.1%;
    display: flex;
    align-items: center;
    color: #9E9E9E;
}
input:focus {
    outline: none;
    border: 1px solid #7a7a7a;
}
.error-form-field{
  color:#dc3545;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}


input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
}
input.input-error:focus{
  border-color: #dc3545;
  outline: 0;
  box-shadow: 0 0 0 .25rem rgba(230, 37, 37, 0.25);
}
</style>
