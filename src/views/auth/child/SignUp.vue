<template>
  <div>
    <v-sign-form>
      <template v-slot:header-title>
        <span> Pockets </span>
      </template>
      <template v-slot:header-subtitle>
        <h4>Adventure starts here</h4>
        <p>Make your app management easy and fun!</p>
      </template>

      <template v-slot:content>
        <div v-for="(field, index) in formData" :key="index">
          <v-sign-form-field
            v-if="field.type !== 'checkbox'"
            v-model="field.value"
            :name="field.name"
            :type="field.type"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            :errors="field.errors"
          />
          <v-sign-form-check-box
            v-else
            v-model="field.value"
            :required="field.required"
            :errors="field.errors"
          >
            Я со всем согласен отпустите
          </v-sign-form-check-box>
        </div>
      </template>
      <template v-slot:footer-button>
        <v-button @click.prevent="clickSignUp">Login</v-button>
      </template>
      <template v-slot:item-flex>
        <p>Already have an account?</p>
        <router-link :to="{ name: $options.routes.ROUTE_SIGN_IN }"
          >Sign in instead</router-link
        >
      </template>
    </v-sign-form>
  </div>
</template>

<script>
import VSignForm from "@/components/VSignForm";
import VButton from "@/components/VButton";
import VSignFormField from "@/components/VSignFormField";
import VSignFormCheckBox from "@/components/VSignFormCheckBox";

import { ROUTE_SIGN_IN } from "@/router/constants/routesNames";

import { AuthService } from "@/services/index";

import { formValidator } from "@/utils/index";

export default {
  name: "SignUp",
  components: { VSignForm, VSignFormCheckBox, VButton, VSignFormField },
  data() {
    return {
      formData: [
        {
          name: "username",
          type: "text",
          label: "Username",
          placeholder: "johndoe",
          required: true,
          errors: [],
          value: "",
        },
        {
          name: "email",
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
          required: true,
          errors: [],
          value: "",
        },
        {
          name: "password",
          type: "password",
          label: "Password",
          placeholder: "••••••••",
          required: true,
          errors: [],
          value: "",
        },
        {
          name: "agree",
          type: "checkbox",
          label: "Password",
          required: true,
          errors: [],
          value: false,
        },
      ],
    };
  },
  routes: {
    ROUTE_SIGN_IN,
  },
  methods: {
    async clickSignUp() {
      let validation = formValidator(this.formData);
      if (!validation) return;
      try {
        let data = Object.assign(
          {},
          ...this.formData.map((field) => ({ [field.name]: field.value }))
        );
        await AuthService.signUp(data);
        await this.$router.push({
          name: ROUTE_SIGN_IN,
        });
      } catch (error) {
        let { username = "", email = "" } = error.response.data;
        this.$toast.show(username + " " + email, "warning");
      }
      return true;
    },
  },
};
</script>
