import HeaderComp from "./HeaderComp.vue";
import { mount } from "@vue/test-utils"

describe("header", () => {
    it("renders properly", () => {
        const wrapper = mount(HeaderComp, { props: { title: "Hello Jest" } })

        expect(wrapper.text()).toContain("Hello Jest")
    })
})