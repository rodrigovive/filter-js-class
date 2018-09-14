import $ from 'jquery';

export class RulesFilter {
  constructor(name) {
    this.name = name;
    this.rules = [];
  }

  addRule(value, select) {
    this.rules.push({
      value, select,
    });
  }

  checkRule(value) {
    this.rules.map((rule) => {
      if (rule.value == value) {
        if ($(`#${rule.select.id}`).length == 0) {
          rule.select.appentToElement($('section').last());
        }
      }
    });
  }

}