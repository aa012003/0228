<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="..." />
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-muted">11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">Hello, world! This is a toast message.</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useToastMessageStore } from '@/stores/toastMessage';

export default {
  computed: {
    ...mapState(useToastMessageStore, ['messages']),
  },
  methods: {
    ...mapActions(useToastMessageStore, ['clearToast']),
  },
};
</script>
