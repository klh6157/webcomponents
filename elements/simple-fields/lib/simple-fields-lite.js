/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import "./simple-fields-container.js";
import "./simple-fields-fieldset.js";
import "./simple-fields-array.js";
/**
 * `simple-fields-lite`
 * Uses JSON Schema of fields to display a series of fields
 * 
### Styling
`<simple-fields-lite>` provides following custom properties
for styling:

Custom property | Description | Default
----------------|-------------|--------
`--simple-fields-margin` | vertical margin around container | 16px
`--simple-fields-margin-small` | smaller vertical margin above field itself | 8px
`--simple-fields-border-radius` | default border-radius | 2px
`--simple-fields-color` | text color | black
`--simple-fields-background-color` | background color | white
`--simple-fields-error-color` | error text color | #dd2c00
`--simple-fields-accent-color` | accent text/underline color | #3f51b5
`--simple-fields-border-color` | border-/underline color | #999

#### Field text
Custom property | Description | Default
----------------|-------------|--------
`--simple-fields-font-size` | font-size of field | 16px
`--simple-fields-font-family` | font-size of field | sans-serif
`--simple-fields-line-height` | line-height of field | 22px

#### Detail text
Custom property | Description | Default
----------------|-------------|--------
`--simple-fields-detail-font-size` | font-size of field details | 12px
`--simple-fields-detail-font-family` | font-size of field details | sans-serif
`--simple-fields-detail-line-height` | line-height of field details | 22px

#### Disabled Fields
Custom property | Description | Default
----------------|-------------|--------
`--simple-fields-disabled-color` | disabled text color | #999
`--simple-fields-disabled-opacity` | opacity for disabled field | 0.7

### JSON Schema Format
This element accepts JSON schema with additional features noted in the example below:
```
{
  $schema: "http://json-schema.org/schema#",
  title: "Store",
  type: "object",
  format: "tabs",                                 //default object behavior can be overridden by format
  required: [ "name", "email" ],
    properties: {
      settings: {
        title: "Settings",
        description: "Configure the following.",
        type: "object",
        format: "tabs",
        properties: {
          "basic-input": {
            title: "Basic input page",
            description: "Basic contact settings",
            type: "object",
            properties: {
              branch: {
                title: "Branch",
                type: "string"
              },
                name: {
                  title: "Name",
                  type: "string"
                },
                address: {
                  title: "Address",
                  type: "string",
                  minLength: 3
                },
                city: {
                  title: "City",
                  type: "string",
                  minLength: 3
                },
                province: {
                  title: "Province",
                  type: "string",
                  minLength: 2
                },
                country: {
                  title: "Country",
                  type: "string",
                  minLength: 2
                },
                postalCode: {
                  title: "Postal/Zip Code",
                  type: "string",
                  pattern:
                    "[a-zA-Z][0-9][a-zA-Z]\\s*[0-9][a-zA-Z][0-9]|[0-9]{5}(-[0-9]{4})?"
                },
                email: {
                  title: "Email",
                  type: "string",
                  pattern:
                    "(?:^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$)|(?:^$)"
                },
                website: {
                  title: "Website",
                  type: "string",
                  format: "uri"
                },
                establishedDate: {
                  title: "Established Date",
                  type: "string",
                  format: "date"
                },
                closedDate: {
                  title: "Closed Date",
                  type: ["string", "null"],
                  format: "date"
                }
              }
            },
            arrays: {
            title: "Basic arrays page",
            description: "Demonstrates arrays",
            type: "object",
            properties: {
              phoneNumbers: {
                title: "Phone numbers",
                description: "List phone numbers and type of number.",
                type: "array",
                items: {
                  type: "object",
                  previewBy: ["phoneNumber"],                               //simple-fields-array allows a preview field 
                                                                            //for progressive disclosure of array items
                  properties: {
                    type: {
                      title: "Type",
                      type: "string"
                    },
                    phoneNumber: {
                      title: "Phone Number",
                      type: "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
```

### Configuring schemaConverstion Property
You can customise elements from JSON schema conversion by setting `schemaConverstion` property.
```
type: {                                       //For properties in "this.schema", define elements based on a property's "type"
  object: {                                   //Defines element used when property's "type" is an "object"
    format: {                                 //Optional: define elements for "object" properties by "format"
      "tabs": {                               //Defines element used for object properties when "format" is "tabs"
        element: "a11y-tabs"                  //Element to create, eg. "paper-input", "select", "simple-fields-array", etc.
        descriptionProperty: "description"    //Optional: element's property that sets its description, e.g. "description"
        descriptionSlot: "description"        //Optional: element's slot that contains its description, e.g. "description"
        errorProperty: "error"                //Optional: element's property that sets its error status, e.g. "error"
        errorChangedProperty: "error"         //Optional: event element fires when error status changes, e.g. "error-changed"
        errorMessageProperty: "errorMessage"  //Optional: element's property that sets its error message, e.g. "errorMessage"
        errorMessageSlot: "errorMessage"      //Optional: element's slot that contains its error message, e.g. "errorMessage"
        labelProperty: "label"                //Optional: element's property that sets its label, e.g. "label"
        labelSlot: "label"                    //Optional: element's slot that contains its label, e.g. "label"
        valueProperty: "value"                //Optional: element's property that gets its value, e.g. "value" or "checked"
        setValueProperty: "value"             //Optional: element's property that sets its value, e.g. "value" or "checked" (default is same as valueProperty)
        valueChangedProperty: "value-changed" //Optional: event element fires when value property changes, e.g. "value-changed" or "click"
        valueSlot: ""                         //Optional: element's slot that's used to set its value, e.g. ""
        description: ""                       //Optional: element that contains description, e.g. "p", "span", "paper-tooltip", etc.
        child: {                              //Optional: child elements to be appended
          element: "a11y-tab"                 //Optional: type of child element, eg. "paper-input", "select", "simple-fields-array", etc.
          attributes: {                       //Optional: sets child element's attributes based on this.schemaConversion
            disabled: true                    //Example: sets disabled to true  
          } 
          properties: {                       //Optional: sets child element's attributes based on this.schema properties
            icon: "iconName"                  //Example: sets child element's icon property to this.schema property's iconName 
          }, 
          slots: {                            //Optional: inserts schema properties in child element's slots
            label: "label",                   //Example: places schema property's label into child element's label slot
            "": "description"                 //Example: places schema property's description into child element's unnamed slot
          } 
        },
        attributes: {},
        properties: {},
        slots: {}
      }
    },
    defaultSettings: {                        //Default element used for object properties
      element: ""
      label: ""
      description: ""     
      attributes: {}       
      properties: {}       
      slots: {}           
    }
  }
}
``` 

 * @customElement simple-fields-lite
 * @demo ./demo/lite.html Demo
 */
class SimpleFieldsLite extends LitElement {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-family: var(--simple-fields-font-family, sans-serif);
          font-family: var(--simple-fields-detail-font-family, sans-serif);
          font-size: var(--simple-fields-font-size, 16px);
          font-size: var(--simple-fields-detail-font-size, 12px);
          background: var(--simple-fields-background-color, white);
        }
        :host([hidden]) {
          display: none;
        }
      `
    ];
  }
  // render function
  render() {
    return html`
      <div id="schema-fields" aria-live="polite">
        <slot></slot>
      </div>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,
      /*
       * Disables autofocus on fields.
       */
      disableAutofocus: {
        type: Boolean
      },
      /*
       * Error messages by field name,
       * eg. `{ contactinfo.email: "A valid email is required." }`
       */
      error: {
        type: Object
      },
      /*
       * Language of the fields.
       */
      language: {
        type: String,
        attribute: "lang",
        reflect: true
      },
      /*
       * resource link
       */
      resources: {
        type: Object
      },
      /*
       * Fields schema.
       * _See [Fields Schema Format](fields-schema-format) above._
       */
      schema: {
        type: Object
      },
      /**
       * Conversion from JSON Schema to HTML form elements.
       * _See [Configuring schemaConverstion Property](configuring-the-schemaconverstion-property) above._
       */
      schemaConverstion: {
        type: Object
      },
      /*
       * value of fields
       */
      value: {
        type: Object
      },
      /*
       * array of fields and config data in schema
       */
      __fields: {
        type: Object
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "simple-fields-lite";
  }
  constructor() {
    super();
    this.disableAutofocus = false;
    this.language = "en";
    this.resources = {};
    this.schemaConversion = {
      defaultSettings: {
        element: "input",
        attributes: {
          type: "text"
        },
        properties: {
          minLength: "minlength",
          maxLength: "maxlength"
        }
      },
      type: {
        array: {
          defaultSettings: {
            element: "simple-fields-array",
            invalidProperty: "invalid",
            noWrap: true,
            descriptionProperty: "description",
            child: {
              element: "simple-fields-array-item",
              noWrap: true,
              descriptionProperty: "description",
              properties: {
                previewBy: "previewBy"
              }
            }
          }
        },
        boolean: {
          defaultSettings: {
            element: "input",
            valueProperty: "checked",
            valueChangedProperty: "click",
            attributes: {
              type: "checkbox",
              value: false
            }
          }
        },
        file: {
          defaultSettings: {
            element: "input",
            attributes: {
              type: "url"
            }
          }
        },
        integer: {
          defaultSettings: {
            element: "input",
            attributes: {
              autofocus: true,
              step: 1,
              type: "number"
            },
            properties: {
              minimum: "min",
              maximum: "max",
              multipleOf: "step"
            }
          }
        },
        markup: {
          defaultSettings: {
            element: "textarea"
          }
        },
        number: {
          defaultSettings: {
            element: "input",
            attributes: {
              autofocus: true,
              type: "number"
            },
            properties: {
              minimum: "min",
              maximum: "max",
              multipleOf: "step"
            }
          }
        },
        object: {
          defaultSettings: {
            element: "simple-fields-fieldset",
            noWrap: true,
            descriptionProperty: "description"
          }
        },
        string: {
          format: {
            "date-time": {
              defaultSettings: {
                element: "input",
                attributes: {
                  autofocus: true,
                  type: "datetime-local"
                }
              }
            },
            time: {
              defaultSettings: {
                element: "input",
                attributes: {
                  autofocus: true,
                  type: "time"
                }
              }
            },
            date: {
              defaultSettings: {
                element: "input",
                attributes: {
                  autofocus: true,
                  type: "date"
                }
              }
            },
            email: {
              defaultSettings: {
                element: "input",
                attributes: {
                  autofocus: true,
                  type: "email"
                }
              }
            },
            uri: {
              defaultSettings: {
                element: "input",
                attributes: {
                  autofocus: true,
                  type: "url"
                }
              }
            }
          }
        }
      }
    };
    this.__fields = [];
    this.schema = {};
    this.value = {};
    setTimeout(() => {
      import("@polymer/iron-icons/iron-icons.js");
      import("@polymer/iron-icons/editor-icons.js");
      import("@polymer/paper-icon-button/paper-icon-button.js");
    }, 0);
  }
  disconnectedCallback() {
    this._clearForm();
    super.disconnectedCallback();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "error" && this.error !== oldValue) this._errorChanged();
      if (propName === "schema") this._schemaChanged(this.schema, oldValue);
      if (propName === "value") this._valueChanged(this.value, oldValue);
    });
  }
  /**
   * field data
   *
   * @readonly
   * @memberof SimpleFieldsLite
   */
  get fields() {
    return this.__fields;
  }
  /**
   * whether there are no errors
   *
   * @readonly
   * @memberof SimpleFieldsLite
   */
  get valid() {
    return !this.error || Object.keys(this.error === {}).length === 0;
  }
  /**
   * updates the schema
   */
  updateSchema() {
    this._formFieldsChanged();
  }

  /**
   * clears and rebuilds form
   */
  rebuildForm() {
    this._clearForm();
    this._addToForm();
    let firstField =
      this.__fields && this.__fields[0] && this.__fields[0].field
        ? this.__fields[0].field
        : false;
    if (firstField) firstField.autofocus = !this.disableAutofocus;
  }

  /**
   * converts schema properties to HTML elements and appends them
   *
   * @param {*} [schema=this.schema] schema or subschema containing properties
   * @param {*} [target=this] parent where HTML elements will be appended
   * @param {string} [prefix=""] prefix for nest fields
   * @param {*} config schemaConversion configuration for property
   */
  _addToForm(schema = this.schema, target = this, prefix = "", config) {
    let schemaProps = schema.properties,
      required = schema.required,
      schemaKeys = Object.keys(schemaProps || {});
    schemaKeys.forEach(key => {
      let schemaProp = schemaProps[key],
        data = config || this._convertSchema(schemaProp, this.schemaConversion);
      if (data && data.element) {
        console.log(key, data.element);
        let id = `${prefix}${key}`,
          element = document.createElement(data.element),
          wrapper =
            schemaProp.properties ||
            schemaProp.items ||
            schemaProp.noWrap ||
            data.noWrap
              ? element
              : document.createElement("simple-fields-container"),
          value = this._getValue(`${prefix}${key}`),
          label =
            schemaProp.label ||
            schemaProp.title ||
            schemaProp.description ||
            key,
          desc =
            schemaProp.description && (schemaProp.label || schemaProp.title)
              ? schemaProp.description
              : undefined;
        data.labelSlot = schema.labelSlot || data.labelSlot;
        data.descriptionSlot = schema.descriptionSlot || data.descriptionSlot;
        data.errorMessageSlot =
          schema.errorMessageSlot || data.errorMessageSlot;
        data.valueSlot = schema.valueSlot || data.valueSlot;
        data.labelProperty =
          schema.labelProperty || data.labelProperty || "label";
        data.descriptionProperty =
          schema.descriptionProperty ||
          data.descriptionProperty ||
          "description";
        data.valueProperty =
          schema.valueProperty || data.valueProperty || "value";
        data.setValueProperty =
          schema.setValueProperty ||
          data.setValueProperty ||
          data.valueProperty;
        data.valueChangedProperty =
          schema.valueChangedProperty ||
          data.valueChangedProperty ||
          `${data.valueProperty}-changed`;
        data.errorProperty =
          schema.errorProperty || data.errorProperty || "error";
        data.errorChangedProperty =
          schema.errorChangedProperty ||
          data.errorChangedProperty ||
          `${data.errorProperty}-changed`;
        data.errorMessageProperty =
          schema.errorMessageProperty ||
          data.errorMessageProperty ||
          "errorMessage";

        element.resources = this.resources;
        element.id = id;
        element.setAttribute("name", id);
        element.setAttribute("language", this.language);
        if (required && required.includes(key))
          element.setAttribute("required", true);
        if (schemaProp.disabled) {
          element.disabled = true;
          wrapper.disabled = true;
        }
        if (schemaProp.hidden) {
          element.hidden = true;
          wrapper.hidden = true;
        }
        if (schemaProp.readonly) {
          element.hidden = true;
          wrapper.hidden = true;
        }

        this._configElement(wrapper, label, data.labelProperty, data.labelSlot);
        this._configElement(
          wrapper,
          desc,
          data.descriptionProperty,
          data.descriptionSlot
        );
        //handle data type attributes
        Object.keys(data.attributes || {}).forEach(attr => {
          if (
            typeof data.attributes[attr] !== undefined &&
            data.attributes[attr] !== null
          ) {
            element.setAttribute(attr, data.attributes[attr]);
            //console.log('element',element);
          }
        });

        //handle schema properties
        Object.keys(data.properties || {}).forEach(prop => {
          //console.log('prop',prop,schemaProp[prop],data.properties[prop]);
          if (data.properties[prop] && schemaProp[prop]) {
            element[data.properties[prop]] = schemaProp[prop];
          }
        });

        //handle data type slots
        //console.log('slot',data.slots,schemaProp);
        Object.keys(data.slots || {}).forEach(slot => {
          //console.log('slot',slot,data.slots,schemaProp);
          if (data.slots[slot] && schemaProp[data.slots[slot]]) {
            data.slots[slot].split(/[\s,]/).forEach(field => {
              let span = document.createElement("span");
              span.slot = slot;
              span.innerHTML = schemaProp[field];
              element.appendChild(span);
            });
          }
        });

        if (target.slots && target.slots[key]) wrapper.slot = target.slots[key];

        target.appendChild(wrapper);

        //handles arrays
        if (schemaProp.type === "array") {
          this._addArrayItems(value, data.child, schemaProp, element);
        }
        //handles objects
        else if (schemaProp.properties) {
          this._addToForm(schemaProp, element, `${element.id}.`, data.child);
        } else {
          if (element !== wrapper) {
            element.slot = "field";
            wrapper.appendChild(element);
          }
          if (
            typeof value !== typeof undefined ||
            schemaProp.type === "boolean"
          )
            this._configElement(
              element,
              value,
              data.setValueProperty,
              data.valueSlot
            );
          element.addEventListener(data.valueChangedProperty, e =>
            this._handleChange(element, data.valueProperty)
          );
          wrapper.addEventListener(data.errorChangedProperty, e => {
            let error = this._deepClone(this.error || {});
            if (wrapper[data.errorProperty]) {
              error[id] = wrapper[data.errorMessageProperty] || "";
            } else if (error && error[id]) {
              delete error[id];
            }
            this.error = error;
          });
        }
        //console.log({ id: id, field: wrapper, data: data });
        this.__fields.push({ id: id, field: wrapper, data: data });
      }
    });
  }
  /**
   * sets field or field wrapper element's slot ot property to a value
   *
   * @param {string} propName property name
   * @param {string} slotName slot name if any
   * @param {object} target element to set
   * @param {*} value
   * @memberof SimpleFieldsLite
   */
  _configElement(target, value, propName, slotName = false) {
    //console.log('_configElement',target, value, propName, slotName);
    if (slotName) {
      let span = document.createElement("span");
      span.slot = slotName;
      if (value) span.innerHTML = value;
      if (target)
        target
          .querySelectorAll(`[slot=${slotName}]`)
          .forEach(el => el.remove());
      target.appendChild(span);
    } else {
      target[propName] = value;
    }
  }
  /**
   *
   *
   * @param {*} schema
   * @param {*} previewBy
   * @param {*} element
   * @param {*} parent
   * @param {*} [value={}]
   * @memberof SimpleFieldsLite
   */
  _insertArrayItem(schema, previewBy, element, parent, value, index) {
    let items = this._getValue(parent.name),
      length = items ? items.length : 0;
    if (!items) this._setValue(parent.name, []);
    index = index || index === 0 ? index : length;
    let subschema = { properties: {} };
    subschema.properties[index] = this._addArrayItem(index, schema, previewBy);
    this._setValue(`${parent.name}.${index}`, value);
    this._addToForm(subschema, parent, `${parent.id}.`, element);
  }
  /**
   *
   *
   * @param {*} value
   * @param {*} element
   * @param {*} schema
   * @param {*} parent
   */
  _addArrayItems(value, element, schema, parent) {
    let propNames = Object.keys(schema.items.properties || {}),
      previewBy =
        schema.previewBy || (propNames.length > 0 ? [propNames[0]] : undefined);

    value = value || [];
    value.forEach((item, i) => {
      this._insertArrayItem(schema, previewBy, element, parent, item, i);
    });

    parent.addEventListener("add", e => {
      this._insertArrayItem(schema, previewBy, element, parent, {});
    });

    parent.addEventListener("remove", e => {
      let id = e.detail.id,
        //temp = [],
        vals = this._getValue(parent.name) || [],
        index = id.replace(`${parent.name}.`, "");
      vals.splice(parseInt(index), 1);
      this.__fields = this.__fields.filter(
        field => field.id.indexOf(parent.name) === 0
      );
      parent.innerHTML = "";
      vals.forEach((item, i) =>
        this._insertArrayItem(schema, previewBy, element, parent, item, i)
      );
      this._setValue(`${parent.name}`, vals);
      parent.focus(parseInt(index) - 1);
    });
  }

  /**
   * adds an array item given an array item value and array item schema
   * @param {integer} i index of array item
   * @param {object} schema array item's schema
   * @param {object} parent array element
   * @param {object} item array item element
   */
  _addArrayItem(counter, schema, previewBy) {
    //console.log('_addArrayItem',i, schema, parent, item);
    let item = this._deepClone(schema.items);
    item.label = `${parseInt(counter) + 1}`;
    item.previewBy = previewBy;
    return item;
  }
  /**
   * clears form
   */
  _clearForm() {
    this.querySelectorAll("*").forEach(child => child.remove());
    this.__fields = [];
  }

  /**
   * matches schema property to schemaConversion settings
   * @param {object} property schema property
   * @param {object} conversion section of schemaConversion to search
   * @param {object} settings closest current match's defaultSettings object
   * @returns {object}
   */
  _convertSchema(property, conversion, settings) {
    let propKeys = Object.keys(property || {}),
      convKeys = Object.keys(conversion || {}).filter(key =>
        propKeys.includes(key)
      );
    if (conversion.defaultSettings) settings = conversion.defaultSettings;
    convKeys.forEach(key => {
      let val = property[key],
        convData = conversion ? conversion[key] : undefined,
        convVal = !convData
          ? undefined
          : Array.isArray(val)
          ? convData[val[0]]
          : convData[val];
      if (convVal) settings = this._convertSchema(property, convVal, settings);
    });
    return settings;
  }

  /**
   * clones an object and all its subproperties
   * @param {object} o object to clone
   * @returns {object} cloned object
   */
  _deepClone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  /**
   * handles errors
   */
  _errorChanged() {
    //console.log("error-changed", this.error);
    this.fields.forEach(field => {
      let data = field.data || {},
        el = field.field,
        id = field.id;
      if (id && el && this.error) {
        let message = this.error[field.id] || false,
          error = this.error[field.id] ? true : false;
        if (!error)
          Object.keys(this.error || {}).forEach(key => {
            if (key.match(field.id)) {
              error = true;
              return;
            }
          });
        this._configElement(
          field.field,
          message,
          data.errorMessageProperty,
          data.errorMessageSlot
        );
        field.field[data.errorProperty] = error;
        field.field.setAttribute("aria-invalid", error);
      }
    });
  }

  /**
   * fires when value changes
   * @event value-changed
   */
  _fireValueChanged() {
    console.log(
      "value-changed",
      this.value,
      new CustomEvent("value-changed", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: this
      })
    );
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: this
      })
    );
  }

  /**
   * Fires when form changes to set focus on the first field if this has auto-focus
   * @event fields-changed
   */
  _formFieldsChanged(e) {
    //console.log("fields-changed",newValue, oldValue);
    this.dispatchEvent(
      new CustomEvent("fields-changed", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: this
      })
    );
  }

  /**
   * gets value of a property
   * @param {string} propName property to set
   * @returns {*}
   */
  _getValue(propName) {
    let path = propName.split("."),
      pointer = this.value;
    path.forEach(prop => {
      if (pointer && pointer[prop]) {
        pointer = pointer[prop];
      } else {
        pointer = undefined;
        return;
      }
    });
    return pointer;
  }

  /**
   * handles changes to fields
   * @param {object} element element that changed
   * @param {object} valueProperty
   */
  _handleChange(element, valueProperty) {
    //console.log('_handleChange',element.id || element.getAttribute('id'),valueProperty);
    this._setValue(
      element.id || element.getAttribute("id"),
      element[valueProperty]
    );
    this._fireValueChanged();
  }

  /**
   * updates form and fires event when schema changes
   * @param {object} newValue new value for schema
   * @param {object} oldValue old value for schema
   * @event schema-changed
   */
  _schemaChanged(newValue, oldValue) {
    //console.log('_schemaChanged',newValue, oldValue);
    if (newValue && newValue !== oldValue) {
      this.rebuildForm();

      this.dispatchEvent(
        new CustomEvent("schema-changed", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this
        })
      );
    }
  }

  /**
   * sets value of a property
   * @param {string} propName property to set
   * @param {*} propVal value of property
   */
  _setValue(propName, propVal) {
    let oldValue = this._deepClone(this.value),
      newValue = this.value,
      props = propName ? propName.split(".") : [],
      l = props.length;
    for (var i = 0; i < l - 1; i++) {
      let pointer = props[i];
      if (!newValue[pointer]) newValue[pointer] = {};
      newValue = newValue[pointer];
    }
    newValue[props[l - 1]] = propVal;
    this._valueChanged(this.value, oldValue);
  }

  /**
   * updates form  and fires event when value changes
   * @param {object} newValue new value for schema
   * @param {object} oldValue old value for schema
   */
  _valueChanged(newValue, oldValue) {
    //console.log('_valueChanged',newValue, oldValue)
    if (newValue && newValue !== oldValue) this._fireValueChanged();
  }
}
window.customElements.define(SimpleFieldsLite.tag, SimpleFieldsLite);
export { SimpleFieldsLite };