<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card class="w-[80%] lg:w-[30%]">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="@/assets/images/login/profile.svg?url" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">{{ t('login.title') }}</div>
            </div>
          </q-card-section>
          <q-card-section>
            <VeeForm
              v-slot="{ meta, isSubmitting }"
              :validation-schema="validationSchema"
              class="q-gutter-md"
              @submit="handleSubmit">
              <BaseInput name="email" filled :label="t('login.email')" />
              <BaseInput name="password" filled type="password" :label="t('login.password')" />
              <div class="flex justify-start">
                <BaseButton
                  :disabled="!meta.valid || isSubmitting"
                  :loading="isSubmitting"
                  :label="t('login.btnLogin')"
                  type="submit"
                  color="dark"
                  size="md" />
              </div>
            </VeeForm>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { Loading, Notify } from 'quasar';
import { useAuthStore } from '@/store/auth';
import { regExpNonUTF8Email, regExpStrongEmail } from '@/utils/regex';

const { t } = useI18n({ useScope: 'global' });
const authStore = useAuthStore();
const router = useRouter();

const validationSchema = yup.object({
  email: yup
    .string()
    .required(t('validation.required'))
    .matches(regExpStrongEmail(), t('validation.email'))
    .matches(regExpNonUTF8Email(), t('validation.email')),
  password: yup
    .string()
    .required(t('validation.required'))
    .min(6, t('validation.min', { length: 6 }))
    .max(20, t('validation.max', { length: 20 })),
});

const handleSubmit = (values: any) => {
  Loading.show();
  const formData = {
    email: values.email,
    password: values.password,
  };

  authStore
    .login(formData)
    .then(() => {
      router.push({ name: 'Home' });
    })
    .catch(() => {
      Notify.create(t('validation.general'));
    })
    .finally(() => {
      Loading.hide();
    });
};
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
