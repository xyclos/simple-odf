import { List } from "../../src/text/List";
import { ListItem } from "../../src/text/ListItem";
import { TextDocument } from "../../src/TextDocument";

describe(ListItem.name, () => {
  let document: TextDocument;
  let list: List;

  beforeEach(() => {
    document = new TextDocument();
    list = document.addList();
  });

  it("return the paragraph", () => {
    const listItem = list.addItem("some text");

    const itemParagraph = listItem.getParagraph();

    expect(itemParagraph.getText()).toEqual("some text");
  });

  describe("#addList", () => {
    let listItem: ListItem;
    let subList: List;

    beforeEach(() => {
      listItem = list.addItem("first level");
      subList = listItem.addList();
    });

    it("NOT insert an empty sub list", () => {
      const documentAsString = document.toString();
      expect(documentAsString).not.toMatch(/<text:list-item><text:p>first level<\/text:p><text:list/);
    });

    it("insert a list with a list item", () => {
      subList.addItem("sub item");

      const documentAsString = document.toString();
      /* tslint:disable-next-line:max-line-length */
      expect(documentAsString).toMatch(/<text:list><text:list-item><text:p>first level<\/text:p><text:list><text:list-item><text:p>sub item<\/text:p><\/text:list-item><\/text:list><\/text:list-item><\/text:list>/);
    });

    it("throw if a second sub list is being added", () => {
      expect(listItem.addList).toThrow();
    });
  });

  describe("#getList", () => {
    let listItem: ListItem;

    beforeEach(() => {
      listItem = list.addItem();
    });

    it("return undefined if the item has no sub list", () => {
      expect(listItem.getList()).toBeUndefined();
    });

    it("return the sub list", () => {
      const subList = listItem.addList();

      expect(listItem.getList()).toBe(subList);
    });
  });

  describe("#removeList", () => {
    let listItem: ListItem;

    beforeEach(() => {
      listItem = list.addItem();
    });

    it("return undefined if the item has no sub list", () => {
      expect(listItem.removeList()).toBeUndefined();
    });

    it("return the sub list", () => {
      const subList = listItem.addList();

      expect(listItem.removeList()).toBe(subList);
      expect(listItem.getList()).toBeUndefined();
    });
  });
});
