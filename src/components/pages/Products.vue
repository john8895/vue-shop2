<template>
  <div>
    <div class="text-right">
      <button class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#productModal">
        建立新的產品
      </button>
    </div>
    <table class="table mt-2">
      <thead>
      <th>分類</th>
      <th>名稱</th>
      <th>原價</th>
      <th>售價</th>
      <th>是否啟用</th>
      <th>管理</th>
      </thead>
      <tbody>
      <tr v-for="(item, index) in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td v-show="item.is_enabled" class="text-success">啟用</td>
        <td v-show="!item.is_enabled">未啟用</td>
        <td>
          <button class="btn btn-outline-primary">編輯</button>
          <button class="btn btn-outline-danger">刪除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
      const vm = this;
      this.$http.get(api)
          .then((response) => {
            console.log(response.data)
            vm.products = response.data.products;
          })
    }
  },
  created() {
    this.getProduct();
  }
}
</script>