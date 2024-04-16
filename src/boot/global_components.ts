import { App } from 'vue';
import { Field, Form } from 'vee-validate';
import BaseAlert from '@/components/common/BaseAlert.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseDivider from '@/components/common/BaseDivider.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseModal from '@/components/common/BaseModal.vue';
import BaseMultipleSelect from '@/components/common/BaseMultipleSelect.vue';
import BaseSearchAutosuggestion from '@/components/common/BaseSearchAutosuggestion.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';

const registerGlobalComponents = (app: App<Element>) => {
  app.component('VeeForm', Form);
  app.component('VeeField', Field);

  app.component('BaseAlert', BaseAlert);
  app.component('BaseButton', BaseButton);
  app.component('BaseDivider', BaseDivider);
  app.component('BaseInput', BaseInput);
  app.component('BaseModal', BaseModal);
  app.component('BaseMultipleSelect', BaseMultipleSelect);
  app.component('BaseSearchAutosuggestion', BaseSearchAutosuggestion);
  app.component('BaseSelect', BaseSelect);
};

export default registerGlobalComponents;
