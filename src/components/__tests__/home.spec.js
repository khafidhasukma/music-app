import Home from "@/views/Home.vue";
import { shallowMount } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";

describe("Home.vue", () => {
  test("renders list of song", () => {
    const songs = [{}, {}, {}];

    const component = shallowMount(Home, {
      data() {
        return { songs };
      },
      global: {
        mocks: {
          $t: (message) => message,
        },
      },
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i]);
    });
  });
});
