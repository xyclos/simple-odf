import { ListStyle } from "../../src/style/ListStyle";
import { ListType } from "../../src/style/ListType";

describe(ListStyle.name, () => {
  let listStyle: ListStyle;

  beforeEach(() => {
    listStyle = new ListStyle(ListType.Bullet);
  });

  describe("#getType", () => {
    it("return the current list type", () => {
      expect(listStyle.getType()).toBe(ListType.Bullet);
    });
  });
});
