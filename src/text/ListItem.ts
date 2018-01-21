import { OdfElement } from "../OdfElement";
import { OdfElementName } from "../OdfElementName";
import { List } from "./List";
import { Paragraph } from "./Paragraph";

/**
 * This class represents an item in a list.
 *
 * @since 0.2.0
 */
export class ListItem extends OdfElement {
  /**
   * Creates a list item
   *
   * @param {string} [text] The optional text content
   * @since 0.2.0
   */
  public constructor(text?: string) {
    super();

    const paragraph = new Paragraph(text);
    this.appendElement(paragraph);
  }

  /**
   * Returns the paragrah containing the text content of this list item
   *
   * @returns {Paragraph} The paragraph of this list item
   * @since 0.3.0
   */
  public getParagraph(): Paragraph {
    return this.getElement(0) as Paragraph;
  }

  /**
   * Adds a sub list to this list item
   *
   * @returns {List} The newly added sub list
   * @since 0.3.0
   */
  public addList(): List {
    if (this.getElements().length > 1) {
      throw new Error("Only one sub list can be added to a list item");
    }

    const list = new List();
    this.appendElement(list);

    return list;
  }

  /**
   * Returns the sub list of this list item, if any
   *
   * @returns {List|undefined} The sub list of this list item or undefined if this item has no sub list
   * @since 0.3.0
   */
  public getList(): List|undefined {
    return this.getElement(1) as List;
  }

  /**
   * Removes the existing sub list from this list item
   *
   * @returns {List|undefined} The sub list that was removed or undefined if this item had no sub list
   * @since 0.3.0
   */
  public removeList(): List|undefined {
    return this.removeElement(1) as List;
  }

  /** @inheritDoc */
  protected toXML(document: Document, parent: Element): void {
    const listItemElement = document.createElement(OdfElementName.TextListItem);

    parent.appendChild(listItemElement);

    super.toXML(document, listItemElement);
  }
}
