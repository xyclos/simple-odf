import { readFile, unlink } from "fs";
import { promisify } from "util";
import { HorizontalAlignment } from "../src/style/HorizontalAlignment";
import { TextDocument, XML_DECLARATION } from "../src/TextDocument";

const FILEPATH = "./integration.fodt";

describe(TextDocument.name, () => {
  afterAll(async (done) => {
    const unlinkAsync = promisify(unlink);

    await unlinkAsync(FILEPATH);

    done();
  });

  it("create a full blown document", async (done) => {
    const document = new TextDocument();

    // heading
    document.addHeading("First heading");
    document.addHeading("Second heading", 2);

    // paragraph + styling
    const para1 = document.addParagraph("The quick, brown fox jumps over a lazy dog.");
    para1.appendText("\nSome more text");
    para1.setHorizontalAlignment(HorizontalAlignment.Center);

    // list
    const heading20 = document.addHeading("Lists");
    heading20.setPageBreak();

    const list = document.addList();
    list.addItem("first item");
    const listItem = list.addItem("second item");

    const subList = listItem.addList();
    subList.addItem("first sub item");
    subList.addItem("first sub item");

    list.addItem("third item");

    // misc
    const heading30 = document.addHeading("Another chapter");
    heading30.setPageBreak();

    await document.saveFlat(FILEPATH);
    done();
  });
});
