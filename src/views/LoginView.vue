<script setup lang="ts">
import { useRouter } from "vue-router";
import { View, Hide } from "@element-plus/icons-vue";
import { FormInstance, FormRules } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const user = useUserStore();

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const ruleFormRef = ref<FormInstance>();

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "Insira o nome de usuário",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Insira a senha",
      trigger: "blur",
    },
  ],
});

const formLogin = reactive({
  username: "",
  password: "",
});

const formProcess = reactive({
  hasErro: false,
  message: "Usuário ou senha incorretos",
  showPassword: false,
  isRequesting: false,
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      formProcess.isRequesting = true;
      try {
        const res = await user.signIn(formLogin);

        formProcess.hasErro = false;

        router.push({ path: "/home" });
      } catch (e) {
        formProcess.hasErro = true;
        if (e.response?.data.statusCode == 401) {
          formProcess.message = "Usuário ou senha incorretos";
        } else {
          formProcess.message = "Ocorreu algum erro";
        }
      } finally {
        formProcess.isRequesting = false;
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

onMounted(() => {
  emit("changeShowMenu", false);
});
</script>
<template>
  <div class="d-flex flex-column flex-sm-row w-100 h-100 gap-4 gap-sm-0">
    <div class="flex-fill logo-area p-0">
      <div class="d-flex flex-column justify-content-center h-100">
        <div class="text-center">
          <img src="@/assets/logo-8.png" width="233" alt="70" />
        </div>

        <div class="text-center mb-5">
          <h2 style="font-family: Verdana, Geneva, Tahoma, sans-serif">
            MARMITEC
          </h2>
        </div>
      </div>
    </div>

    <div class="flex-fill p-0 bg-white">
      <div
        class="d-flex flex-column justify-content-center align-items-center h-100"
      >
        <div style="min-width: 50%">
          <div class="text-center">
            <h3>Entrar</h3>
          </div>

          <el-form
            ref="ruleFormRef"
            :rules="rules"
            :model="formLogin"
            status-icon
            label-position="top"
            :hide-required-asterisk="true"
            class="w-100"
            label-width="100px"
          >
            <el-form-item label="Nome de usuário" prop="username">
              <el-input
                placeholder="Nome do usuário"
                v-model="formLogin.username"
              />
            </el-form-item>
            <el-form-item label="Senha" prop="password">
              <el-input
                v-model="formLogin.password"
                :type="formProcess.showPassword ? 'text' : 'password'"
                placeholder="Senha"
                class="input-with-select"
              >
                <template #append>
                  <el-button
                    @click="
                      formProcess.showPassword = !formProcess.showPassword
                    "
                    :icon="formProcess.showPassword ? Hide : View"
                  />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="w-100"
                @click="submitForm(ruleFormRef)"
              >
                <span
                  v-if="formProcess.isRequesting"
                  class="spinner-grow spinner-grow-sm text-light"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span class="text-light"> Entrar </span>
              </el-button>
            </el-form-item>
          </el-form>

          <el-alert
            v-if="formProcess.hasErro"
            :title="formProcess.message"
            effect="dark"
            type="error"
            :closable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-area {
  /* background-image: url("@/assets/logo-6.jpg"); */
  /* background-repeat: no-repeat;
  background-position: left; */
  background-color: rgb(192, 192, 192);
}

#element {
  /* flex: 1 1 0; */
}
</style>
