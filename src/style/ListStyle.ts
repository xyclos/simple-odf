import { ListType } from "./ListType";

/**
 * The list stayle defines the appearance of a list.
 *
 * @since 0.3.0
 */
export class ListStyle {
  /**
   * Creates a list style.
   *
   * @param {ListType} type The list type
   * @since 0.3.0
   */
  public constructor(private type: ListType) {
  }

  /**
   * Returns the type of this list.
   *
   * @returns {ListType} The list type
   * @since 0.3.0
   */
  public getType(): ListType {
    return this.type;
  }
}
