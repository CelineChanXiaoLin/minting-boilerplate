<template>
  <div class="about">
    <h1>Artwork</h1>

    <div>
    <b-table class="b-table" primary-key="i" :items="items" :fields="fields" fixed>
    
    <template #cell(lists)>
     <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
     </label>
      
    </template>
    
    <template #cell(action)="data">
       <b-button size="sm" @click="showModal(data.index)">Open Modal</b-button>


    <b-modal :ref="data.index" hide-footer >
      
        <img :src="data.item.photo" alt="Error">
     

    </b-modal>
      <b-button size="sm" class="delete-button" variant="danger" @click="removeRowHandler(data.index)" v-if="data.item.status=='unsold'">Remove</b-button>

    </template>

    </b-table>
  </div>

  </div>
</template>

<script>


export default {
    name: 'About',

    
    data() {
        return {
        selectedId:0,  
  
        fields: [
          
          {
            key: 'name',
            sortable: false
          },
          {
            key: 'collection',
            sortable: true
          },
          {
            key: 'price',
            label: 'Price (rETH)',
            sortable: true,
            
          },
          {
            key: 'lists',
            label: 'List'
            
          },
          'status',
          'action'

        ],
        items: [
          { i:0, name: 'blue-hse-1', collection: '2d-pixel-network', price: 0.01, status:'sold', photo:'https://dictionary.cambridge.org/images/thumb/apple_noun_001_00650.jpg?version=5.0.225'},
          { i:1, name: 'fav-place', collection: '2d-pixel-network', price: 0.02, status:'unsold', photo: 'https://cdn.shopify.com/s/files/1/0268/3768/0208/products/oren_5022c9e8-4e99-411e-b714-5263504c81c0_11zon_360x.jpg?v=1634527131'}
        ]
      }
    },
    methods:{
    removeRowHandler(index) {
        this.items = this.items.filter((item) => item.i !== index);
        console.log(index);
      },
      showModal(id) {
        this.$refs[id].show();
    }

    },
    computed: {
       
    }
  }
</script>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>