// components/OrderModal.vue
<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row" v-if="tempOrder.user">
                <div>
                  <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="phone" class="form-label">訂購人</label>
                    <input
                      id="name"
                      v-model="tempOrder.user.name"
                      type="text"
                      class="form-control"
                      placeholder="請輸入姓名"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">電話</label>
                    <input
                      id="phone"
                      v-model="tempOrder.user.tel"
                      type="number"
                      class="form-control"
                      placeholder="請輸入電話"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="address" class="form-label">地址</label>
                    <input
                      id="address"
                      v-model="tempOrder.user.address"
                      type="text"
                      class="form-control"
                      placeholder="請輸入寄件地址"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">信箱</label>
                    <input
                      id="email"
                      v-model="tempOrder.user.email"
                      type="text"
                      class="form-control"
                      placeholder="請輸入信箱"
                    />
                  </div>
                </div>
                <hr />
                <label for="content" class="form-label">訂購內容</label>
                <div class="row" v-for="item in tempOrder.products" :key="item.id">
                  <ul class="mx-4">
                    <li>
                      {{ item.product.title }}*{{ item.product.num }} =
                      {{ item.product.price * item.product.num }}元
                    </li>
                  </ul>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">訂單備註</label>
                  <textarea
                    id="message"
                    v-model="tempOrder.message"
                    type="text"
                    class="form-control"
                  >
                  </textarea>
                </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary"
            @click="$emit('update-paid', tempOrder)">
              修改付款狀態
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: '',
      tempOrder: {},
      isPaid: false,
    };
  },
  mixins: [modalMixin],
  watch: {
    order() {
      this.tempOrder = this.order;
    },
  },
};
</script>
