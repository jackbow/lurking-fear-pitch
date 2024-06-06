import '~/app.postcss';
import { mount } from 'svelte'
import App from "./App.svelte"

// @ts-expect-error
export default mount(App, { target: document.getElementById("app") })